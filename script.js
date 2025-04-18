document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', function() {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
      
      const spans = menuButton.querySelectorAll('span');
      spans.forEach(span => {
        span.classList.toggle('active');
      });
    });
    
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
        
        const spans = menuButton.querySelectorAll('span');
        spans.forEach(span => {
          span.classList.remove('active');
        });
      });
    });
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });