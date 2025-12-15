document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('is-open');
        });
    }
    
    // Sliding nav indicator
    const navElement = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const activeLink = document.querySelector('.nav-link[aria-current="page"]');
    
    if (navElement && navLinks.length > 0) {
   
        const indicator = document.createElement('span');
        indicator.classList.add('nav-indicator');
        navElement.appendChild(indicator);
        
      
        function positionIndicator(link) {
            if (!link) return;
            const linkRect = link.getBoundingClientRect();
            const navRect = navElement.getBoundingClientRect();
            
            indicator.style.left = (linkRect.left - navRect.left) + 'px';
        indicator.style.width = (linkRect.width * 0.6) + 'px';
indicator.style.left = (linkRect.left - navRect.left + linkRect.width * 0.2) + 'px';
        }
        
    
        if (activeLink) {
            positionIndicator(activeLink);
        }
        
  
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                positionIndicator(this);
            });
            
            link.addEventListener('mouseleave', function() {
                positionIndicator(activeLink);
            });
        });
        
        
        window.addEventListener('resize', function() {
            positionIndicator(activeLink);
        });
    }
});