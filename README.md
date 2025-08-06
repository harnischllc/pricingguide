# Eric Harnisch - Service Pricing Calculator

A modern, interactive pricing calculator for freelance services that allows potential clients to select services and see real-time cost estimates.

## Features

- **Interactive Service Selection**: Checkbox-based service selection with visual feedback
- **Real-time Calculations**: Instant price updates as services are selected/deselected
- **Hourly Service Support**: Dynamic input fields for hourly services with customizable hours
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional UI**: Modern gradient design with smooth animations
- **Quote Summary**: Detailed breakdown of selected services and totals
- **Email Integration**: One-click email generation with service summary

## Services Included

Based on your website at https://ericharnisch.com/services/, the calculator includes:

### Website Services
- Full Custom Website (up to 25 pages) - $5,000
- Single Landing Page - $1,500

### Photography & Videography
- Photography - $100/hr
- Videography - $100/hr
- Photo & Video Combo - $175/hr
- Editing - $50/hr

### Podcast Production
- Video & Audio Recording - $100/hr
- Video & Audio Editing - $75/hr
- Audio Recording - $75/hr
- Audio Editing - $50/hr

### Social Media Strategy
- Monthly Planning Session - $150
- Quarterly Strategy Planning - $500

### Monthly Services
- Security Monitoring & Backups - $200/mo
- Unlimited Updates - $200/mo
- SEO Monitoring - $100/mo
- Reputation Monitoring - $100/mo

## Setup Instructions

1. **Download Files**: All necessary files are included:
   - `index.html` - Main calculator page
   - `styles.css` - Styling and responsive design
   - `script.js` - Calculator functionality
   - `README.md` - This documentation

2. **Upload to Your Website**: 
   - Upload all files to your web server
   - Ensure they're in the same directory
   - Access via `yourdomain.com/path-to-calculator/`

3. **Customize Email**: 
   - Open `script.js`
   - Find the `contactMe()` function
   - Update the email address in the `mailtoLink` variable

## Customization Guide

### Adding New Services

To add a new service, edit the `index.html` file and add a new service option:

```html
<label class="service-option">
    <input type="checkbox" data-service="new-service" data-price="500">
    <span class="checkmark"></span>
    <div class="service-info">
        <span class="service-name">New Service Name</span>
        <span class="service-price">$500</span>
    </div>
</label>
```

**Data Attributes:**
- `data-service`: Unique identifier for the service
- `data-price`: Price in dollars (no commas)
- `data-hourly="true"`: For hourly services (optional)
- `data-monthly="true"`: For monthly services (optional)

### Modifying Prices

Simply update the `data-price` attribute in the HTML and the displayed price text:

```html
<input type="checkbox" data-service="photography" data-price="125" data-hourly="true">
<span class="service-price">$125/hr</span>
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
    --background-color: #f8fafc;
}
```

### Updating Contact Information

In `script.js`, find the `contactMe()` function and update:

```javascript
const mailtoLink = `mailto:your-email@domain.com?subject=${subject}&body=${body}`;
```

## Integration with Your Website

### Option 1: Direct Integration
1. Copy the calculator files to your website directory
2. Link to it from your services page
3. Update the email address in the JavaScript

### Option 2: Embed in Existing Page
1. Copy the calculator container HTML
2. Include the CSS and JavaScript files
3. Customize the styling to match your site

### Option 3: iFrame Integration
```html
<iframe src="path-to-calculator/" width="100%" height="800px" frameborder="0"></iframe>
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Mobile Responsiveness

The calculator is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Performance Features

- Lightweight (no external dependencies except fonts)
- Fast loading with optimized CSS
- Smooth animations and transitions
- Efficient JavaScript calculations

## Security Considerations

- No data is stored on the server
- All calculations happen client-side
- Email generation uses standard mailto links
- No external API calls or data transmission

## Troubleshooting

### Calculator Not Working
1. Check that all files are in the same directory
2. Verify JavaScript is enabled in the browser
3. Check browser console for errors

### Styling Issues
1. Ensure CSS file is properly linked
2. Check for conflicting CSS from your main site
3. Verify font files are loading correctly

### Email Not Working
1. Check the email address in `script.js`
2. Ensure user has a default email client
3. Test with different browsers

## Support

For customization help or technical support, contact Eric Harnisch at the email address configured in the calculator.

## License

This calculator is created for Eric Harnisch's freelance services. Please respect the original design and functionality when customizing for other purposes. 