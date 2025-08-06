# WordPress & Elementor Setup Guide

## Quick Setup Instructions

### Step 1: Add Font Awesome Icons
First, add Font Awesome to your WordPress site. In your theme's `functions.php` or using a plugin like "Insert Headers and Footers":

```php
// Add this to your functions.php or use a plugin
function add_font_awesome() {
    echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">';
}
add_action('wp_head', 'add_font_awesome');
```

### Step 2: Create a New Page
1. Go to WordPress Admin → Pages → Add New
2. Give it a title like "Pricing Calculator"
3. Click "Edit with Elementor"

### Step 3: Add the Calculator
1. In Elementor, drag an **HTML Widget** to your page
2. Copy the entire content from `elementor-widget.html`
3. Paste it into the HTML widget
4. **IMPORTANT**: Update the email address in the JavaScript (line 189 in the script section)

### Step 4: Update Email Address
In the HTML widget, find this line in the JavaScript section:
```javascript
const mailtoLink = `mailto:contact@ericharnisch.com?subject=${subject}&body=${body}`;
```
Change `contact@ericharnisch.com` to your actual email address.

### Step 5: Publish and Test
1. Click "Publish" in Elementor
2. Visit the page to test the calculator
3. Make sure all services are working correctly

## Customization Options

### Change Colors
To match your brand colors, find these CSS values in the `<style>` section:
```css
.pricing-calculator {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```
Replace the hex colors with your brand colors.

### Add/Remove Services
To add a new service, find a service category in the HTML and add:
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

### Change Prices
Simply update the `data-price` attribute and the displayed price text:
```html
<input type="checkbox" data-service="photography" data-price="125" data-hourly="true">
<span class="service-price">$125/hr</span>
```

## Troubleshooting

### Calculator Not Working
1. Check that Font Awesome is loaded (icons should appear)
2. Open browser console (F12) to check for JavaScript errors
3. Make sure the HTML widget is properly saved

### Styling Issues
1. Your theme might have conflicting CSS
2. Try adding `!important` to CSS rules if needed
3. Check if your theme has custom CSS that might interfere

### Email Not Working
1. Verify the email address is correct in the JavaScript
2. Test with different browsers
3. Make sure the user has a default email client

## Advanced Customization

### Change Font
Replace the font-family in the CSS:
```css
.pricing-calculator {
    font-family: 'Your Font', sans-serif;
}
```

### Adjust Layout
The calculator uses CSS Grid. To change the layout:
```css
.pricing-calculator .calculator-container {
    grid-template-columns: 1fr 1fr; /* Equal columns */
    /* or */
    grid-template-columns: 3fr 2fr; /* Different proportions */
}
```

### Add Custom CSS
If you need additional styling, add it to your theme's custom CSS or use a CSS plugin.

## Performance Tips

1. **Minimize Plugins**: The calculator is self-contained and doesn't need additional plugins
2. **Caching**: Works well with caching plugins
3. **CDN**: Consider using a CDN for Font Awesome if you have performance concerns

## Support

If you encounter issues:
1. Check browser console for errors
2. Test in different browsers
3. Disable other plugins temporarily to check for conflicts
4. Contact your hosting provider if the issue persists

The calculator is designed to be lightweight and should work smoothly in most WordPress environments. 