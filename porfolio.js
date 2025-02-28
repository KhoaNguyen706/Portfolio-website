document.addEventListener('DOMContentLoaded', function() {
    const resume = document.getElementById('resume');
    if (resume) {
        resume.addEventListener("click", function() {
            const link = document.createElement('a');
            link.href = './KhoaOfficialResume.pdf'; // Make sure path is correct
            link.download = 'KhoaOfficialResume.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    
    const change = document.getElementById('change_color');
    const body = document.getElementById('body');
    const welcome = document.getElementById('welcome');
    const socialLinks = document.querySelectorAll('.socialcontact a');
    const img = document.querySelector('.private_image img');
    const contentTexts = document.querySelectorAll(".content-text");
    let isDark = false;

    change.addEventListener("click", function() {
        isDark = !isDark;
        const mainColor = isDark ? 'white' : '#333';
        const bgColor = isDark ? '#333' : 'white';
        
        welcome.style.color = mainColor;
        body.style.backgroundColor = bgColor;
        img.style.borderColor = mainColor;
        
        socialLinks.forEach(link => {
            if (!link.matches(':hover')) {
                link.style.color = mainColor;
                link.style.border = `2px solid ${mainColor}`;
                link.style.backgroundColor = 'transparent';
            }
        });

        contentTexts.forEach(content => {
            content.style.color = mainColor;
        });

        // Resume button styles
        resume.style.backgroundColor = mainColor;
        resume.style.color = bgColor;
        resume.style.borderColor = mainColor;
    });
});

