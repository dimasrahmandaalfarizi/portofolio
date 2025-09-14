# Portfolio Website - Dimas Rahmanda

Portfolio website modern dan responsif untuk Junior Web Developer dengan desain yang clean dan performa yang optimal.

## ✨ Fitur Utama

### 🎨 Design & UI/UX

- **Responsive Design** - Tampil sempurna di semua device
- **Dark/Light Mode** - Toggle tema dengan smooth transition
- **Modern Animations** - Subtle animations yang tidak mengganggu performa
- **Clean Layout** - Desain minimalis dan professional
- **Accessibility** - Support keyboard navigation dan screen readers

### 🚀 Performance

- **Optimized Loading** - Fast loading dengan lazy loading images
- **Smooth Scrolling** - Navigation yang smooth dengan offset
- **Efficient Animations** - Menggunakan requestAnimationFrame
- **Minimal JavaScript** - Hanya fitur yang diperlukan
- **CSS Variables** - Consistent theming system

### 📱 Responsive Features

- **Mobile-First Approach** - Didesain untuk mobile terlebih dahulu
- **Hamburger Menu** - Mobile navigation yang user-friendly
- **Touch-Friendly** - Button dan link yang mudah di-tap
- **Flexible Grid** - Layout yang adaptif di semua screen size

### 🛠 Technical Features

- **Semantic HTML5** - Structure yang SEO-friendly
- **Modern CSS** - Flexbox, Grid, dan CSS Variables
- **Vanilla JavaScript** - No dependencies, pure JS
- **Progressive Enhancement** - Berfungsi tanpa JavaScript
- **Cross-Browser Compatible** - Support browser modern

## 📁 Struktur File

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # JavaScript functionality
├── Assets/
│   └── profil.jpeg     # Profile photo
└── README.md           # Documentation
```

## 🎯 Sections

1. **Hero Section** - Introduction dengan CTA buttons
2. **About Section** - Personal info dan achievements
3. **Portfolio Section** - Project showcase dengan filtering
4. **Skills Section** - Technical dan soft skills
5. **Experience Section** - Work, education, dan certificates
6. **Contact Section** - Contact form dan information

## 🔧 Customization

### Mengubah Warna Tema

Edit CSS variables di `style.css`:

```css
:root {
  --accent-color: #3b82f6; /* Primary color */
  --accent-secondary: #8b5cf6; /* Secondary color */
  --success-color: #10b981; /* Success color */
  /* ... */
}
```

### Menambah Project Portfolio

Tambahkan card baru di section portfolio:

```html
<div class="portfolio-card" data-category="web">
  <div class="portfolio-image">
    <img src="project-image.jpg" alt="Project Name" />
    <!-- ... -->
  </div>
  <div class="portfolio-info">
    <!-- Project details -->
  </div>
</div>
```

### Mengubah Konten

- **Personal Info**: Edit section `#about`
- **Skills**: Update skill bars dan badges di `#skills`
- **Experience**: Modify timeline di `#experience`
- **Contact**: Update contact methods di `#contact`

## 📊 Performance Optimizations

### CSS Optimizations

- CSS Variables untuk consistent theming
- Efficient selectors dan minimal nesting
- Optimized animations dengan `will-change`
- Reduced motion support untuk accessibility

### JavaScript Optimizations

- Throttled scroll events
- RequestAnimationFrame untuk smooth animations
- Intersection Observer untuk reveal animations
- Minimal DOM manipulations

### Loading Optimizations

- Preconnect untuk Google Fonts
- Optimized image loading
- Minimal external dependencies
- Efficient CSS dan JS structure

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Local Development

1. Clone atau download files
2. Buka `index.html` di browser
3. Atau gunakan local server (recommended)

### Production Deployment

1. Upload semua files ke web server
2. Pastikan `Assets/` folder ter-upload
3. Update contact information
4. Test di berbagai device

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags untuk social sharing
- Optimized images dengan alt text
- Clean URL structure
- Fast loading time

## 📞 Contact & Support

Jika ada pertanyaan atau butuh customization:

- **Email**: dimas.rahmanda@email.com
- **LinkedIn**: linkedin.com/in/dimas-rahmanda
- **Location**: Jakarta, Indonesia

## 📄 License

This project is open source dan dapat digunakan sebagai template untuk portfolio pribadi.

---

**Made with ❤️ by Dimas Rahmanda**
