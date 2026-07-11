document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // MOBILE NAVIGATION & DROPDOWNS
  // ==========================================================================
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-dropdown > a)');
  const dropdownToggle = document.querySelector('.nav-dropdown > a');
  const dropdownParent = document.querySelector('.nav-dropdown');

  function toggleMobileMenu() {
    const isOpen = nav.classList.toggle('open');
    overlay.classList.toggle('open', isOpen);
    
    // Burger animation
    const spans = burger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }

  if (burger) {
    burger.addEventListener('click', toggleMobileMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', toggleMobileMenu);
  }

  // Close menu on navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Handle dropdown toggle on mobile devices
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownParent.classList.toggle('open');
      }
    });
  }

  // ==========================================================================
  // STICKY HEADER SCROLL EFFECT
  // ==========================================================================
  const header = document.querySelector('.header');
  
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check on load

  // ==========================================================================
  // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================================================
  const fadeElements = document.querySelectorAll('.animate-fade-in');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    fadeElements.forEach(el => el.classList.add('appear'));
  }

  // ==========================================================================
  // FAQ ACCORDION LOGIC
  // ==========================================================================
  const faqHeaders = document.querySelectorAll('.faq-header');

  faqHeaders.forEach(faqHeader => {
    faqHeader.addEventListener('click', () => {
      const item = faqHeader.closest('.faq-item');
      const body = item.querySelector('.faq-body');
      const isOpen = item.classList.contains('open');

      // Close all other items first (optional, but looks cleaner)
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-body').style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // ==========================================================================
  // CONTACT FORM PHOTO UPLOAD PREVIEW
  // ==========================================================================
  const fileInput = document.querySelector('.file-upload-input');
  const previewGallery = document.querySelector('.file-preview-gallery');

  if (fileInput && previewGallery) {
    fileInput.addEventListener('change', () => {
      previewGallery.innerHTML = ''; // Clear previous previews
      const files = fileInput.files;

      if (files.length > 0) {
        Array.from(files).forEach(file => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
              const previewItem = document.createElement('div');
              previewItem.classList.add('file-preview-item');
              
              const img = document.createElement('img');
              img.src = e.target.result;
              img.alt = file.name;
              
              previewItem.appendChild(img);
              previewGallery.appendChild(previewItem);
            };
            
            reader.readAsDataURL(file);
          }
        });
      }
    });
  }

  // ==========================================================================
  // CONTACT & QUOTE FORM SUBMISSION MOCK
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const quoteForm = document.getElementById('quoteForm');

  function handleFormSubmit(e, formType) {
    e.preventDefault();
    const form = e.target;
    
    // Quick validation
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = 'var(--color-danger-500)';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!isValid) return;

    // Show submission feedback
    const originalContent = form.innerHTML;
    const clientName = form.querySelector('[name="name"]').value;
    
    form.style.height = form.offsetHeight + 'px'; // Maintain height to prevent layout jump
    
    form.innerHTML = `
      <div style="text-align: center; padding: var(--spacing-xl) 0; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: var(--spacing-md);">
        <div style="background-color: var(--color-success-50); color: var(--color-success-600); width: 64px; height: 64px; border-radius: var(--border-radius-full); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(34, 197, 94, 0.15);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <h3 style="color: var(--color-text-dark); margin-bottom: 2px;">Bedankt voor uw aanvraag, ${clientName}!</h3>
        <p style="color: var(--color-text-medium); font-size: 0.95rem; max-width: 450px; margin: 0 auto;">We hebben uw ${formType} ontvangen. J. Kamps neemt zo snel mogelijk contact met u op via de door u gekozen methode.</p>
        <button class="btn btn-outline" style="margin-top: var(--spacing-md);" onclick="location.reload()">Nieuw bericht sturen</button>
      </div>
    `;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'bericht'));
  }
  
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => handleFormSubmit(e, 'offerte-aanvraag'));
  }
});
