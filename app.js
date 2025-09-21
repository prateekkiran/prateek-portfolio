// Modern Portfolio JavaScript - Fixed Version

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website initializing...');

    // ===== NAVIGATION FUNCTIONALITY =====
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Mobile navigation toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isActive = hamburger.classList.contains('active');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', !isActive);
            
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = isActive ? '' : 'hidden';
        });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (hamburger && navMenu && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });

    // ===== SCROLL EFFECTS =====
    
    // Navbar scroll effects
    let lastScrollY = window.scrollY;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    }

    // Fixed smooth scrolling for navigation links
    function smoothScrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Use native smooth scrolling with fallback
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Fallback for older browsers
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let startTime = null;

                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }

                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                requestAnimationFrame(animation);
            }
        }
    }

    // Apply smooth scrolling to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollToSection(targetId);
        });
    });

    // Also handle hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(button => {
        if (button.getAttribute('href') && button.getAttribute('href').startsWith('#')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                smoothScrollToSection(targetId);
            });
        }
    });

    // Active navigation highlighting
    function updateActiveNavigation() {
        const scrollY = window.pageYOffset + 100; // Add offset for better detection
        
        let activeSection = null;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                activeSection = section.getAttribute('id');
            }
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            const linkTarget = link.getAttribute('href').substring(1);
            if (linkTarget === activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // ===== SCROLL ANIMATIONS =====
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger skill bar animations
                if (entry.target.classList.contains('skill-category-card')) {
                    setTimeout(() => animateSkillBars(entry.target), 300);
                }
            }
        });
    }, observerOptions);

    // Initialize scroll animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(`
            .achievement-item,
            .competency-badge,
            .timeline-item,
            .skill-category-card,
            .project-card,
            .education-item,
            .certification-item
        `);
        
        animatedElements.forEach((element, index) => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    // Skill bar animations
    function animateSkillBars(skillCard) {
        const skillBars = skillCard.querySelectorAll('.skill-bar');
        skillBars.forEach((bar, index) => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
                bar.style.width = `${level}%`;
            }, index * 150);
        });
    }

    // ===== CONTACT FORM HANDLING =====
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Fix form inputs - ensure they work properly
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            // Remove any conflicting event listeners and ensure inputs work
            input.addEventListener('input', function() {
                // This ensures the input value updates properly
                this.setAttribute('value', this.value);
            });

            input.addEventListener('focus', function() {
                this.parentElement?.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement?.classList.remove('focused');
                if (this.value.trim() !== '') {
                    this.parentElement?.classList.add('has-value');
                } else {
                    this.parentElement?.classList.remove('has-value');
                }
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data directly from elements
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';
            
            console.log('Form data:', { name, email, subject, message }); // Debug log
            
            // Validate form
            const errors = validateContactForm(name, email, subject, message);
            
            if (errors.length > 0) {
                showFormFeedback(errors, 'error');
                return;
            }
            
            // Clear previous feedback
            clearFormFeedback();
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitButton.innerHTML;
            submitButton.classList.add('loading');
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Sending...</span>';
            
            // Simulate form submission delay
            setTimeout(() => {
                try {
                    // Create mailto link with form data
                    const mailtoSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
                    const mailtoBody = encodeURIComponent(`Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from portfolio website`);
                    
                    const mailtoLink = `mailto:prateekkiran@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
                    
                    // Open mailto link
                    window.location.href = mailtoLink;
                    
                    // Show success message
                    showFormFeedback(['Thank you for your message! Your email client will open to send the message.'], 'success');
                    
                    // Reset form after delay
                    setTimeout(() => {
                        contactForm.reset();
                        clearFormFeedback();
                    }, 5000);
                    
                } catch (error) {
                    console.error('Error sending message:', error);
                    showFormFeedback(['There was an error processing your message. Please try again or contact directly.'], 'error');
                } finally {
                    // Reset button
                    submitButton.classList.remove('loading');
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalContent;
                }
            }, 1000);
        });
    }

    // Form validation
    function validateContactForm(name, email, subject, message) {
        const errors = [];
        
        if (!name || name.length < 2) {
            errors.push('Please enter a valid name (at least 2 characters)');
        }
        
        if (!email || !isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!subject || subject.length < 3) {
            errors.push('Please enter a subject (at least 3 characters)');
        }
        
        if (!message || message.length < 10) {
            errors.push('Please enter a message (at least 10 characters)');
        }
        
        return errors;
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form feedback display
    function showFormFeedback(messages, type) {
        clearFormFeedback();
        
        const feedbackContainer = document.createElement('div');
        feedbackContainer.className = `form-feedback form-feedback--${type}`;
        
        const feedbackStyles = {
            'error': {
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#dc2626'
            },
            'success': {
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                color: '#059669'
            }
        };
        
        const styles = feedbackStyles[type] || feedbackStyles['error'];
        
        Object.assign(feedbackContainer.style, {
            ...styles,
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
        });
        
        if (messages.length === 1) {
            feedbackContainer.textContent = messages[0];
        } else {
            const list = document.createElement('ul');
            list.style.margin = '0';
            list.style.paddingLeft = '1.25rem';
            
            messages.forEach(message => {
                const listItem = document.createElement('li');
                listItem.textContent = message;
                list.appendChild(listItem);
            });
            
            feedbackContainer.appendChild(list);
        }
        
        contactForm.insertBefore(feedbackContainer, contactForm.firstChild);
    }

    // Clear form feedback
    function clearFormFeedback() {
        const existingFeedback = contactForm?.querySelector('.form-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
    }

    // ===== INTERACTIVE ENHANCEMENTS =====
    
    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Interactive competency badges
    const competencyBadges = document.querySelectorAll('.competency-badge');
    competencyBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ===== UTILITY FUNCTIONS =====
    
    // Copy email to clipboard functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.href.replace('mailto:', '');
            
            if (navigator.clipboard && window.isSecureContext) {
                e.preventDefault();
                navigator.clipboard.writeText(email).then(() => {
                    showTemporaryToast('Email copied to clipboard!');
                }).catch(() => {
                    // Fallback to normal mailto behavior
                    window.location.href = this.href;
                });
            }
        });
    });

    // Temporary toast notifications
    function showTemporaryToast(message, duration = 3000) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'var(--color-primary)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: '500',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '1000',
            transform: 'translateY(100px)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
        });
        
        document.body.appendChild(toast);
        
        // Animate in
        requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
        });
        
        // Remove after duration
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, duration);
    }

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Enter key activates interactive elements
        if (e.key === 'Enter' && e.target.matches('.competency-badge')) {
            e.target.click();
        }
    });

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Throttled scroll handler
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Debounced resize handler
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimized scroll handler
    const optimizedScrollHandler = throttle(() => {
        updateNavbar();
        updateActiveNavigation();
    }, 16); // ~60fps

    // Optimized resize handler
    const optimizedResizeHandler = debounce(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);

    // ===== EVENT LISTENERS =====
    
    window.addEventListener('scroll', optimizedScrollHandler);
    window.addEventListener('resize', optimizedResizeHandler);

    // ===== INITIALIZATION =====
    
    // Initialize all functionality
    function init() {
        console.log('Initializing portfolio features...');
        
        // Initialize scroll animations
        initScrollAnimations();
        
        // Set initial navbar state
        updateNavbar();
        updateActiveNavigation();
        
        // Add loading complete class to body
        document.body.classList.add('loaded');
        
        console.log('Portfolio website fully initialized!');
    }

    // Run initialization
    init();

    // ===== SPECIAL EFFECTS =====
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const parallaxHandler = throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        }, 16);
        
        window.addEventListener('scroll', parallaxHandler);
    }

    // Export functions for potential testing
    window.portfolioApp = {
        smoothScrollToSection,
        showTemporaryToast
    };
});