# Eric Harnisch - Service Pricing Calculator

A modern, interactive pricing calculator for freelance services that allows potential clients to select services and see real-time cost estimates. Features a step-by-step interface designed to feel like a modern SaaS tool.

## Features

- **Step-by-Step Interface**: Intuitive category-based selection without internal scrolling
- **Interactive Service Selection**: Visual service cards with selection feedback
- **Real-time Calculations**: Instant price updates as services are selected/deselected
- **Smart Editing Calculations**: Automatic editing hour estimates based on shooting/recording time
- **Mutual Exclusivity**: Prevents conflicting service selections
- **Conditional Options**: Shows relevant editing and deliverable options based on selections
- **Hourly Service Support**: Dynamic input fields for hourly services with customizable hours
- **Per-Minute Pricing**: Support for services priced per minute (e.g., transcript services)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional UI**: Modern design matching your website's color scheme
- **Quote Summary**: Detailed breakdown with First Payment and Monthly Total
- **Email Integration**: One-click email generation with service summary
- **Calendly Integration**: Direct links to consultation scheduling

## Services Included

### Website Services
- **Full Custom Website** (up to 25 pages) - $5,000
- **Single Landing Page** - $1,500
- **Custom Solution** - Direct Calendly link

**Bells & Whistles (Monthly Services):**
- Security Monitoring & Backups - $200/mo
- Unlimited Updates - $200/mo
- SEO Monitoring - $100/mo
- Reputation Monitoring - $100/mo

### Photo, Video, Media
- **Photography** - $100/hr
- **Videography** - $100/hr
- **Photo & Video Combo** - $175/hr

**Smart Editing Options:**
- Photo Editing - $50/hr (estimated hours based on shooting time)
- Video Editing - $50/hr (estimated hours based on shooting time)

**Deliverable Options:**
- RAW/JPEG files (photo services only)
- Video files (video services only)

### Podcast Services
- **Video and/or Audio Recording** - $100/hr
- **Video Podcast Editing** - $75/hr
- **Audio Only Podcast Editing** - $50/hr
- **Text Transcript & Subtitles** - $1.50/minute of final audio
- **Podcast Strategy & Consultation** - $500

### Consultation Services
- **Free Initial Consultation** - Direct Calendly link
- **Monthly Planning Session** - $150 (media, marketing, creativity consulting)
- **Quarterly Strategy Planning** - $500 (media, marketing, creativity consulting)

## Smart Editing Calculations

The calculator automatically estimates editing hours based on shooting/recording time:

### Photo Editing Scale:
- 1hr shooting = 1hr editing
- 2hr shooting = 2hr editing
- 3hr shooting = 2.5hr editing
- 4hr shooting = 3hr editing
- 5hr shooting = 3.5hr editing
- 6+hr shooting = 3.5hr + (shooting - 5) × 0.5

### Video Editing Scale:
- 1hr shooting = 2hr editing
- 2hr shooting = 3hr editing
- 3hr shooting = 4hr editing
- 4hr shooting = 6hr editing
- 5+hr shooting = 6hr + (shooting - 4) × 1.5

### Audio Editing Scale:
- Same as photo editing scale

## Quote Breakdown Structure

### For Website Services with Monthly Charges:
- **First Payment**: Initial build + 1 month of service
- **Monthly Total**: Ongoing monthly amount
- **Note**: "* All estimates are for 1 year of service"

### For Other Services:
- **One-time Services**: Single payment services
- **Hourly Services**: Services with custom hour inputs
- **Monthly Services**: Recurring monthly services
- **Estimated Total**: Combined total

## Setup Instructions

### WordPress/Elementor Integration

1. **Use the WordPress Version**: 
   - Copy the entire content from `elementor-widget-v3.html`
   - Paste into an Elementor HTML widget
   - No additional files needed

2. **Customize Email**: 
   - Find the `contactMe()` function in the JavaScript
   - Update the email address in the `mailtoLink` variable

### Standalone Website Integration

1. **Download Files**: All necessary files are included:
   - `index.html` - Main calculator page
   - `styles.css` - Styling and responsive design
   - `script.js` - Calculator functionality
   - `README.md` - This documentation

2. **Upload to Your Website**: 
   - Upload all files to your web server
   - Ensure they're in the same directory
   - Access via `yourdomain.com/path-to-calculator/`

## Customization Guide

### Adding New Services

To add a new service, edit the HTML and add a new service option:

```html
<div class="service-item" data-service="new-service" data-price="500" data-type="one-time">
    <div class="service-header">
        <div class="service-name">New Service Name</div>
        <div class="service-price">$500</div>
    </div>
    <p class="service-description">Service description here</p>
</div>
```

**Data Attributes:**
- `data-service`: Unique identifier for the service
- `data-price`: Price in dollars (no commas)
- `data-type`: "one-time", "hourly", "monthly", "smart-editing", "deliverable", "consultation", "per-minute"
- `data-hourly="true"`: For hourly services
- `data-monthly="true"`: For monthly services
- `data-editing-type`: "photo", "video", "audio" for smart editing
- `data-unit`: "hrs" or "minutes" for input units

### Modifying Prices

Simply update the `data-price` attribute and the displayed price text:

```html
<div class="service-item" data-service="photography" data-price="125" data-hourly="true">
    <div class="service-price">$125/hr</div>
</div>
```

### Changing Colors

Edit the CSS variables in the styles section:

```css
:root {
    --primary: #5d4fff;
    --secondary: #5636d1;
    --gray-50: #f9fafb;
    --gray-200: #e5e7eb;
    --gray-600: #4b5563;
    --gray-800: #1f2937;
}
```

### Updating Contact Information

In the JavaScript, find the `contactMe()` function and update:

```javascript
const mailtoLink = `mailto:your-email@domain.com?subject=${subject}&body=${body}`;
```

## Integration with Your Website

### Option 1: WordPress/Elementor (Recommended)
1. Copy the entire content from `elementor-widget-v3.html`
2. Paste into an Elementor HTML widget
3. Update the email address in the JavaScript
4. No additional files needed

### Option 2: Direct Integration
1. Copy the calculator files to your website directory
2. Link to it from your services page
3. Update the email address in the JavaScript

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

- Lightweight (no external dependencies except Font Awesome)
- Fast loading with optimized CSS
- Smooth animations and transitions
- Efficient JavaScript calculations
- Conditional display logic for better UX

## Security Considerations

- No data is stored on the server
- All calculations happen client-side
- Email generation uses standard mailto links
- No external API calls or data transmission

## Troubleshooting

### Calculator Not Working
1. Check that all files are in the same directory (for standalone version)
2. Verify JavaScript is enabled in the browser
3. Check browser console for errors

### Styling Issues
1. Ensure CSS is properly included (embedded in HTML for WordPress version)
2. Check for conflicting CSS from your main site
3. Verify Font Awesome is loading correctly

### Email Not Working
1. Check the email address in the JavaScript
2. Ensure user has a default email client
3. Test with different browsers

### WordPress/Elementor Issues
1. Make sure you're using the `elementor-widget-v3.html` version
2. Copy the entire content, not just parts
3. Check that the HTML widget is properly configured

## Support

For customization help or technical support, contact Eric Harnisch at the email address configured in the calculator.

## License

This calculator is created for Eric Harnisch's freelance services. Please respect the original design and functionality when customizing for other purposes. 