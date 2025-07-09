function sendEmail() {
    const email = 'thhuy1101@gmail.com';
    const subject = 'Hello from you website';
    const body = "Hi Gia Huy Thai, \n\nI came across your website and I'd like to connect with you. \n\nBest regards, \n[Your Name]";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
}

function downloadResume() {
    const resumePath = './resume_software_engineer.pdf';
    const link = document.createElement('a');
    
    link.href = resumePath;
    link.download = 'Gia Huy Thai - Resume.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

