/* ==========================================================================
   100 ENSALADAS EN FRASCO - SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleBtn = item.querySelector('.faq-toggle');
        toggleBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scroll to #price
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
