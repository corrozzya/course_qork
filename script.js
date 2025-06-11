
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('fade-in');
            }
        });
    };

    animateOnScroll();


document.addEventListener('DOMContentLoaded', function() {
    const ticketModal = document.getElementById('ticketModal');
    
        const buyTicketButtons = document.querySelectorAll('.buy-ticket');
        
        document.getElementById('submitTicket').addEventListener('click', function() {
            const form = document.getElementById('ticketForm');
            if (form.checkValidity()) {
                alert('Билет куплен');
                const modal = bootstrap.Modal.getInstance(ticketModal);
                modal.hide();
                form.reset();
            } else {
                form.reportValidity();
            }
        });
    
});

// куки
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieDecline = document.getElementById('cookieDecline');
  
  // Проверяем, есть ли уже куки
  if (!document.cookie.includes('cookieConsent=')) {
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1000);
  }

  // Обработчики кнопок
  cookieAccept.addEventListener('click', function() {
    document.cookie = "cookieConsent=accepted; max-age=2592000; path=/";
    hideBanner();
  });

  cookieDecline.addEventListener('click', function() {
    document.cookie = "cookieConsent=declined; max-age=86400; path=/";
    hideBanner();
  });

  function hideBanner() {
    cookieBanner.classList.remove('show');
    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, 300); // Ждем завершения анимации
  }
});