# EMS Suits Spacing System

## 📏 Design Guidelines

Baseret på industry best practices og 8px grid system.

### Spacing Standards
- **Mobile**: 64px mellem sektioner, 48px internal padding
- **Desktop**: 96px mellem sektioner, 80px internal padding
- **Grid**: Alle spacing i multipler af 8px

## 🛠️ Utility Classes

### `.section-spacing`
Standard afstand mellem sektioner
- Mobile: 64px (4rem) top/bottom margin
- Desktop: 96px (6rem) top/bottom margin

```jsx
<section className="section-spacing">
  <!-- Standard sektion med korrekt afstand -->
</section>
```

### `.section-padding`
Internal padding inden i sektioner
- Mobile: 48px (3rem) top/bottom padding
- Desktop: 80px (5rem) top/bottom padding

```jsx
<section className="section-padding">
  <!-- Sektion med internal padding -->
</section>
```

### `.hero-spacing`
Speciel spacing til hero sektioner (større afstand)
- Mobile: 80px (5rem) bottom margin
- Desktop: 112px (7rem) bottom margin

```jsx
<section className="hero-spacing">
  <!-- Hero sektion med extra spacing -->
</section>
```

### `.content-spacing`
Mindre spacing til content blokke
- Mobile: 32px (2rem) top/bottom margin
- Desktop: 48px (3rem) top/bottom margin

```jsx
<div className="content-spacing">
  <!-- Content blok med mindre spacing -->
</div>
```

## 📱 Responsive Design

Alle spacing klasser bruger mobile-first approach:
- Base styles er for mobile
- `@media (min-width: 768px)` for tablet og op

## 🎯 Kombinationer

### Standard Section
```jsx
<section className="section-padding section-spacing bg-white">
  <!-- Perfect standard sektion -->
</section>
```

### Hero Section
```jsx
<section className="hero-bg hero-spacing">
  <!-- Hero med korrekt spacing -->
</section>
```

### Content Block
```jsx
<div className="content-spacing">
  <!-- Mindre content blok -->
</div>
```

## ✅ Best Practices

1. **Konsistens**: Brug altid samme spacing klasser
2. **Mobile-first**: Design starter med mobile spacing
3. **Grid system**: Hold dig til 8px multipler
4. **Semantik**: Brug rigtige klasser til rigtige formål

## 🚫 Undgå

- Custom margin/padding i komponenter
- Inconsistente spacing værdier
- For meget spacing på mobile
- For lidt spacing på desktop