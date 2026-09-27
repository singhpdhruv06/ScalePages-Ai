// Interactive ROI Calculator Logic
const entityRange = document.getElementById('entityRange');
const locRange = document.getElementById('locRange');
const entityVal = document.getElementById('entityVal');
const locVal = document.getElementById('locVal');
const resultPages = document.getElementById('resultPages');
const resultImp = document.getElementById('resultImp');

function updateCalculator() {
    const entities = parseInt(entityRange.value);
    const locations = parseInt(locRange.value);
    
    entityVal.textContent = entities;
    locVal.textContent = locations;
    
    const totalPages = entities * locations;
    const estimatedImpressions = totalPages * 50;
    
    resultPages.textContent = totalPages.toLocaleString();
    resultImp.textContent = estimatedImpressions.toLocaleString() + '+';
}

if (entityRange && locRange) {
    entityRange.addEventListener('input', updateCalculator);
    locRange.addEventListener('input', updateCalculator);
    updateCalculator();
}

// WhatsApp Form Submission Logic (Fixed with correct number 917017423292 and dynamic user data)
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const website = document.getElementById('userWebsite').value.trim();
        const goal = document.getElementById('userGoal').value.trim();
        
        const phoneNumber = "917017423292"; 
        
        const message = `Hello ScalePages AI Team,\n\nI want a free SEO & GEO growth audit.\n\n*Name:* ${name}\n*Email:* ${email}\n*Website:* ${website}\n*Goal:* ${goal || 'Not specified'}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    });
}

// Modal Control Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}