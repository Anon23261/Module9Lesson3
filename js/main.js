// Form submission handler
function handleSignup(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('#email').value;
    const name = form.querySelector('#name').value;
    const company = form.querySelector('#company').value;

    // In a real application, this would send data to a server
    console.log('Sign up submitted:', { email, name, company });
    
    // Show success message
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success mt-3';
    alertDiv.role = 'alert';
    alertDiv.textContent = `Thank you ${name}! We'll contact you soon at ${email}`;
    form.appendChild(alertDiv);
    
    // Reset form
    form.reset();
    
    // Remove alert after 5 seconds
    setTimeout(() => alertDiv.remove(), 5000);
}

// Documentation download handler
function downloadDocs() {
    // In a real application, this would trigger a file download
    alert('Documentation download started! (Demo purposes only)');
}

// Deploy demo handler
function deployDemo() {
    // In a real application, this would start a deployment process
    const deployBtn = document.querySelector('#deployBtn');
    deployBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Deploying...';
    
    setTimeout(() => {
        deployBtn.innerHTML = 'Deploy Now';
        alert('Demo deployment completed! (Demo purposes only)');
    }, 2000);
}

// Learn more modal handler
function showLearnMore() {
    const myModal = new bootstrap.Modal(document.getElementById('learnMoreModal'));
    myModal.show();
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
