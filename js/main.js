document.addEventListener("DOMContentLoaded", function() {
    // Efek scroll navbar
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('shadow');
        } else {
            document.querySelector('.navbar').classList.remove('shadow');
        }
    });

    // Simple interaction untuk menu dokter (hanya visual demo)
    const doctorLinks = document.querySelectorAll('.doctor-menu a');
    doctorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            doctorLinks.forEach(l => l.classList.remove('active', 'bg-light'));
            this.classList.add('active');
        });
    });
});