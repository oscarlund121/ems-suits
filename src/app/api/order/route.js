import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_ADDRESS = process.env.RESEND_FROM || 'EMS Suits <onboarding@resend.dev>';
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'delivered@resend.dev';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Handle both contact form and order form data
    const isOrderForm = body.items && Array.isArray(body.items);
    
    if (isOrderForm) {
      // Order form validation
      const { name, email, items, totalPrice, orderId } = body;
      
      if (!name || !email || !items || items.length === 0) {
        return NextResponse.json(
          { error: 'Navn, email og produkter er påkrævet' }, 
          { status: 400 }
        );
      }

      // Format items for email
      const itemsHtml = items.map(item => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">${item.price} kr</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">${(item.price * item.quantity).toLocaleString('da-DK')} kr</td>
        </tr>
      `).join('');

      // Email til virksomheden (ny bestilling)
      {
        const { error } = await resend.emails.send({
          from: FROM_ADDRESS,
          to: COMPANY_EMAIL,
          reply_to: email,
          subject: `Ny bestilling modtaget - ${orderId}`,
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #272727; border-bottom: 2px solid #272727; padding-bottom: 10px;">
              Ny bestilling fra hjemmesiden
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Bestillingsdetaljer:</h3>
              <p><strong>Ordre ID:</strong> ${orderId}</p>
              <p><strong>Dato:</strong> ${new Date(body.orderDate).toLocaleString('da-DK')}</p>
              <p><strong>Total pris:</strong> ${totalPrice.toLocaleString('da-DK')} kr</p>
            </div>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Kundeoplysninger:</h3>
              <p><strong>Navn:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${body.phone ? `<p><strong>Telefon:</strong> ${body.phone}</p>` : ''}
              ${body.company ? `<p><strong>Virksomhed:</strong> ${body.company}</p>` : ''}
              ${body.cvr ? `<p><strong>CVR:</strong> ${body.cvr}</p>` : ''}
            </div>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Faktureringsadresse:</h3>
              <p>${body.invoiceAddress}</p>
              <p>${body.invoiceZip} ${body.invoiceCity}</p>
            </div>

            ${body.deliveryAddress ? `
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Leveringsadresse:</h3>
              <p>${body.deliveryAddress}</p>
              <p>${body.deliveryZip} ${body.deliveryCity}</p>
            </div>
            ` : ''}

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Bestilte produkter:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #272727; color: white;">
                    <th style="padding: 10px; text-align: left;">Produkt</th>
                    <th style="padding: 10px; text-align: center;">Antal</th>
                    <th style="padding: 10px; text-align: right;">Pris pr. stk.</th>
                    <th style="padding: 10px; text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                  <tr style="font-weight: bold; background-color: #f0f0f0;">
                    <td colspan="3" style="padding: 15px; text-align: right;">Total:</td>
                    <td style="padding: 15px; text-align: right;">${totalPrice.toLocaleString('da-DK')} kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            ${body.message ? `
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Kundens besked:</h3>
              <p style="background: white; padding: 15px; border-radius: 4px;">${body.message}</p>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                Denne besked blev sendt automatisk fra jeres hjemmeside.<br>
                Svar til kunden via: ${email}
              </p>
            </div>
          </div>
        `,
        });
        if (error) {
          return NextResponse.json({ error: error.message || 'Kunne ikke sende interne ordre-email' }, { status: 500 });
        }
      }

      // Email til kunden (bekræftelse)
      {
        const { error } = await resend.emails.send({
          from: FROM_ADDRESS,
          to: email,
          subject: `Bekræftelse af din bestilling - ${orderId}`,
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #272727; border-bottom: 2px solid #272727; padding-bottom: 10px;">
              Tak for din bestilling!
            </h2>
            
            <p>Kære ${name},</p>
            <p>Vi har modtaget din bestilling og behandler den snarest muligt.</p>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Dine bestillingsdetaljer:</h3>
              <p><strong>Ordre ID:</strong> ${orderId}</p>
              <p><strong>Dato:</strong> ${new Date(body.orderDate).toLocaleString('da-DK')}</p>
            </div>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Bestilte produkter:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #272727; color: white;">
                    <th style="padding: 10px; text-align: left;">Produkt</th>
                    <th style="padding: 10px; text-align: center;">Antal</th>
                    <th style="padding: 10px; text-align: right;">Pris pr. stk.</th>
                    <th style="padding: 10px; text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                  <tr style="font-weight: bold; background-color: #f0f0f0;">
                    <td colspan="3" style="padding: 15px; text-align: right;">Total:</td>
                    <td style="padding: 15px; text-align: right;">${totalPrice.toLocaleString('da-DK')} kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Hvad sker der nu?</h3>
              <p>• Vi kontakter dig inden for 1-2 arbejdsdage</p>
              <p>• Vi koordinerer levering og installation</p>
              <p>• Du får en endelig faktura når arbejdet er færdigt</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; border-top: 1px solid #ddd;">
              <p>Har du spørgsmål til din bestilling?</p>
              <p>
                <strong>Email:</strong> ${process.env.COMPANY_EMAIL || 'albertlund121@gmail.com'}<br>
                <strong>Telefon:</strong> +45 XX XX XX XX
              </p>
            </div>

            <div style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Med venlig hilsen,<br>EMS Suits Team</p>
            </div>
          </div>
        `,
        });
        if (error) {
          return NextResponse.json({ error: error.message || 'Kunne ikke sende bekræftelse til kunden' }, { status: 500 });
        }
      }

    } else {
      // Contact form handling (existing code)
      const { 
        name, 
        email, 
        phone, 
        company, 
        product, 
        message, 
        orderType = 'contact' 
      } = body;

      // Validate required fields
      if (!name || !email || !product) {
        return NextResponse.json(
          { error: 'Navn, email og produkt er påkrævet' }, 
          { status: 400 }
        );
      }

      // Email til virksomheden (intern besked)
      {
        const { error } = await resend.emails.send({
          from: FROM_ADDRESS,
          to: COMPANY_EMAIL,
          reply_to: email,
          subject: `Ny ${orderType === 'contact' ? 'henvendelse' : 'bestilling'} modtaget - ${product}`,
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #272727; border-bottom: 2px solid #272727; padding-bottom: 10px;">
              Ny ${orderType === 'contact' ? 'henvendelse' : 'bestilling'} fra hjemmesiden
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Kundeoplysninger:</h3>
              <p><strong>Navn:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
              ${company ? `<p><strong>Virksomhed:</strong> ${company}</p>` : ''}
            </div>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Produktinformation:</h3>
              <p><strong>Produkt:</strong> ${product}</p>
              ${message ? `<p><strong>Besked:</strong></p><p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>` : ''}
            </div>

            <div style="margin-top: 30px; padding: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                Denne besked blev sendt automatisk fra jeres hjemmeside.<br>
                Svar til kunden via: ${email}
              </p>
            </div>
          </div>
        `,
        });
        if (error) {
          return NextResponse.json({ error: error.message || 'Kunne ikke sende interne henvendelses-email' }, { status: 500 });
        }
      }

      // Email til kunden (bekræftelse)
      {
        const { error } = await resend.emails.send({
          from: FROM_ADDRESS,
          to: email,
          subject: `Tak for din ${orderType === 'contact' ? 'henvendelse' : 'bestilling'} - EMS Suits`,
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #272727; margin-bottom: 10px;">EMS Suits</h1>
              <p style="color: #666; font-size: 18px;">Tak for din ${orderType === 'contact' ? 'henvendelse' : 'bestilling'}!</p>
            </div>
            
            <p>Kære ${name},</p>
            <p>Vi har modtaget din ${orderType === 'contact' ? 'henvendelse' : 'bestilling'} og vil kontakte dig snarest muligt.</p>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Dine oplysninger:</h3>
              <p><strong>Produkt interesseret i:</strong> ${product}</p>
              ${message ? `<p><strong>Din besked:</strong></p><p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>` : ''}
            </div>

            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #272727; margin-top: 0;">Hvad sker der nu?</h3>
              <p>• Vi gennemgår din henvendelse</p>
              <p>• Vi kontakter dig inden for 1-2 arbejdsdage</p>
              <p>• Vi laver en uforpligtende aftale</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; border-top: 1px solid #ddd;">
              <p>Har du spørgsmål i mellemtiden?</p>
              <p>
                <strong>Email:</strong> kontakt@emsdragt.dk<br>
                <strong>Telefon:</strong> +45 XX XX XX XX
              </p>
            </div>

            <div style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Med venlig hilsen,<br>EMS Suits Team</p>
            </div>
          </div>
        `,
        });
        if (error) {
          return NextResponse.json({ error: error.message || 'Kunne ikke sende bekræftelses-email' }, { status: 500 });
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `${isOrderForm ? 'Bestilling' : 'Henvendelse'} sendt successfully`
    });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Der opstod en fejl ved afsendelse af email' }, 
      { status: 500 }
    );
  }
}