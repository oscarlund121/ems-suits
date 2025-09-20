export default function FullScreenImageSection() {
  return (
    <section className="relative">
      <img
        src="/images/mobile-main.webp"
        alt="EMS træning på mobil"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-45"></div>
    </section>
  );
}