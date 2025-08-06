// Global variables to track selected services and their details
let selectedServices = new Map();
let hourlyServices = new Map();

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
});

function initializeCalculator() {
    // Add event listeners to all service checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleServiceSelection);
    });
}

function handleServiceSelection(event) {
    const checkbox = event.target;
    const serviceId = checkbox.dataset.service;
    const serviceName = checkbox.closest('.service-option').querySelector('.service-name').textContent;
    const price = parseFloat(checkbox.dataset.price);
    const isHourly = checkbox.dataset.hourly === 'true';
    const isMonthly = checkbox.dataset.monthly === 'true';

    if (checkbox.checked) {
        if (isHourly) {
            // Add to hourly services and show hourly input
            hourlyServices.set(serviceId, {
                name: serviceName,
                price: price,
                hours: 1
            });
            showHourlyInput(serviceId, serviceName, price);
        } else {
            // Add to one-time services
            selectedServices.set(serviceId, {
                name: serviceName,
                price: price,
                type: isMonthly ? 'monthly' : 'one-time'
            });
        }
    } else {
        if (isHourly) {
            // Remove from hourly services
            hourlyServices.delete(serviceId);
            removeHourlyInput(serviceId);
        } else {
            // Remove from selected services
            selectedServices.delete(serviceId);
        }
    }

    updateQuoteDisplay();
    updateHourlyServicesSection();
}

function showHourlyInput(serviceId, serviceName, price) {
    const hourlyInputsContainer = document.getElementById('hourlyInputs');
    
    // Check if input already exists
    if (document.getElementById(`hourly-${serviceId}`)) {
        return;
    }

    const inputGroup = document.createElement('div');
    inputGroup.className = 'hourly-input-group';
    inputGroup.id = `hourly-${serviceId}`;
    
    inputGroup.innerHTML = `
        <label>${serviceName}:</label>
        <input type="number" min="1" value="1" data-service="${serviceId}" data-price="${price}">
        <span class="total">$${price}</span>
    `;

    // Add event listener to the hours input
    const hoursInput = inputGroup.querySelector('input');
    hoursInput.addEventListener('input', updateHourlyServiceTotal);
    
    hourlyInputsContainer.appendChild(inputGroup);
}

function removeHourlyInput(serviceId) {
    const inputElement = document.getElementById(`hourly-${serviceId}`);
    if (inputElement) {
        inputElement.remove();
    }
}

function updateHourlyServiceTotal(event) {
    const input = event.target;
    const serviceId = input.dataset.service;
    const price = parseFloat(input.dataset.price);
    const hours = parseFloat(input.value) || 0;
    const total = price * hours;
    
    // Update the total display
    const totalElement = input.parentElement.querySelector('.total');
    totalElement.textContent = `$${total.toFixed(0)}`;
    
    // Update the hourly services map
    if (hourlyServices.has(serviceId)) {
        hourlyServices.get(serviceId).hours = hours;
    }
    
    updateQuoteDisplay();
}

function updateHourlyServicesSection() {
    const hourlyServicesSection = document.getElementById('hourlyServices');
    const hourlyInputsContainer = document.getElementById('hourlyInputs');
    
    if (hourlyServices.size > 0) {
        hourlyServicesSection.style.display = 'block';
    } else {
        hourlyServicesSection.style.display = 'none';
    }
}

function updateQuoteDisplay() {
    const quoteBreakdown = document.getElementById('quoteBreakdown');
    const oneTimeTotalElement = document.getElementById('oneTimeTotal');
    const hourlyTotalElement = document.getElementById('hourlyTotal');
    const monthlyTotalElement = document.getElementById('monthlyTotal');
    const finalTotalElement = document.getElementById('finalTotal');
    
    let oneTimeTotal = 0;
    let hourlyTotal = 0;
    let monthlyTotal = 0;
    
    // Clear the breakdown
    quoteBreakdown.innerHTML = '';
    
    // Process one-time and monthly services
    selectedServices.forEach((service, serviceId) => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        
        if (service.type === 'monthly') {
            monthlyTotal += service.price;
            serviceItem.innerHTML = `
                <span class="service-item-name">${service.name}</span>
                <span class="service-item-price">$${service.price}/mo</span>
            `;
        } else {
            oneTimeTotal += service.price;
            serviceItem.innerHTML = `
                <span class="service-item-name">${service.name}</span>
                <span class="service-item-price">$${service.price}</span>
            `;
        }
        
        quoteBreakdown.appendChild(serviceItem);
    });
    
    // Process hourly services
    hourlyServices.forEach((service, serviceId) => {
        const total = service.price * service.hours;
        hourlyTotal += total;
        
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <span class="service-item-name">${service.name} (${service.hours} hr${service.hours > 1 ? 's' : ''})</span>
            <span class="service-item-price">$${total}</span>
        `;
        
        quoteBreakdown.appendChild(serviceItem);
    });
    
    // Update totals
    const finalTotal = oneTimeTotal + hourlyTotal + monthlyTotal;
    
    oneTimeTotalElement.textContent = `$${oneTimeTotal.toFixed(0)}`;
    hourlyTotalElement.textContent = `$${hourlyTotal.toFixed(0)}`;
    monthlyTotalElement.textContent = `$${monthlyTotal.toFixed(0)}`;
    finalTotalElement.textContent = `$${finalTotal.toFixed(0)}`;
    
    // Show/hide "no services" message
    if (selectedServices.size === 0 && hourlyServices.size === 0) {
        quoteBreakdown.innerHTML = '<p class="no-services">Select services to see your quote</p>';
        oneTimeTotalElement.textContent = '$0';
        hourlyTotalElement.textContent = '$0';
        monthlyTotalElement.textContent = '$0';
        finalTotalElement.textContent = '$0';
    }
}

function contactMe() {
    // Generate a summary of selected services
    let summary = 'Selected Services:\n\n';
    
    // One-time services
    let oneTimeServices = [];
    let monthlyServices = [];
    
    selectedServices.forEach((service, serviceId) => {
        if (service.type === 'monthly') {
            monthlyServices.push(`${service.name} - $${service.price}/mo`);
        } else {
            oneTimeServices.push(`${service.name} - $${service.price}`);
        }
    });
    
    if (oneTimeServices.length > 0) {
        summary += 'One-time Services:\n';
        summary += oneTimeServices.join('\n') + '\n\n';
    }
    
    if (hourlyServices.size > 0) {
        summary += 'Hourly Services:\n';
        hourlyServices.forEach((service, serviceId) => {
            const total = service.price * service.hours;
            summary += `${service.name} - ${service.hours} hour(s) - $${total}\n`;
        });
        summary += '\n';
    }
    
    if (monthlyServices.length > 0) {
        summary += 'Monthly Services:\n';
        summary += monthlyServices.join('\n') + '\n\n';
    }
    
    // Calculate totals
    let oneTimeTotal = 0;
    let hourlyTotal = 0;
    let monthlyTotal = 0;
    
    selectedServices.forEach((service, serviceId) => {
        if (service.type === 'monthly') {
            monthlyTotal += service.price;
        } else {
            oneTimeTotal += service.price;
        }
    });
    
    hourlyServices.forEach((service, serviceId) => {
        hourlyTotal += service.price * service.hours;
    });
    
    const finalTotal = oneTimeTotal + hourlyTotal + monthlyTotal;
    
    summary += `\nEstimated Total: $${finalTotal.toFixed(0)}`;
    
    // Create mailto link
    const subject = encodeURIComponent('Custom Quote Request - Eric Harnisch Services');
    const body = encodeURIComponent(summary);
    const mailtoLink = `mailto:contact@ericharnisch.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.open(mailtoLink);
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to quote summary when services are selected
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked && (selectedServices.size > 0 || hourlyServices.size > 0)) {
                setTimeout(() => {
                    document.querySelector('.quote-summary').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });
}); 