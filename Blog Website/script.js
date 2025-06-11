document.addEventListener('DOMContentLoaded', function() {
    // Sample blog data
    const blogData = [
        {
            id: 1,
            title: "The Future of Artificial Intelligence",
            excerpt: "Exploring how AI will transform industries in the next decade and what it means for professionals.",
            category: "technology",
            image: "assets/images/blog1.jpg",
            author: "Jane Smith",
            date: "May 15, 2023",
            likes: 124,
            comments: 28
        },
        {
            id: 2,
            title: "Hidden Gems in Southeast Asia",
            excerpt: "Discover these less-traveled destinations that offer authentic cultural experiences away from tourist crowds.",
            category: "travel",
            image: "assets/images/blog2.jpg",
            author: "Mike Johnson",
            date: "April 22, 2023",
            likes: 89,
            comments: 14
        },
        {
            id: 3,
            title: "Minimalist Living: Less is More",
            excerpt: "How adopting a minimalist lifestyle can reduce stress and increase happiness in our modern world.",
            category: "lifestyle",
            image: "assets/images/blog3.jpg",
            author: "Sarah Williams",
            date: "June 5, 2023",
            likes: 156,
            comments: 42
        },
        {
            id: 4,
            title: "The Art of Sourdough Bread Making",
            excerpt: "A beginner's guide to creating perfect sourdough bread at home with just flour, water, and patience.",
            category: "food",
            image: "assets/images/blog1.jpg",
            author: "Carlos Mendez",
            date: "March 30, 2023",
            likes: 210,
            comments: 37
        },
        {
            id: 5,
            title: "Blockchain Beyond Cryptocurrency",
            excerpt: "Real-world applications of blockchain technology that are revolutionizing various industries.",
            category: "technology",
            image: "assets/images/blog2.jpg",
            author: "Lisa Chen",
            date: "May 28, 2023",
            likes: 178,
            comments: 31
        },
        {
            id: 6,
            title: "Sustainable Travel: How to Reduce Your Footprint",
            excerpt: "Practical tips for eco-conscious travelers who want to explore the world responsibly.",
            category: "travel",
            image: "assets/images/blog3.jpg",
            author: "David Wilson",
            date: "April 10, 2023",
            likes: 95,
            comments: 19
        }
    ];

    // DOM Elements
    const blogsContainer = document.getElementById('blogs-container');
    const loadMoreBtn = document.getElementById('load-more');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogForm = document.getElementById('blog-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    const navButtons = document.querySelectorAll('.nav-btn');
    const hamburger = document.getElementById('hamburger');
    const navButtonsContainer = document.querySelector('.nav-buttons');
    const closeButtons = document.querySelectorAll('.close-btn');
    const modals = document.querySelectorAll('.modal');
    const authSwitchLinks = document.querySelectorAll('.auth-switch a');

    // Current state
    let currentFilter = 'all';
    let visibleBlogs = 3;
    const blogsPerLoad = 3;

    // Initialize the page
    function init() {
        renderBlogs();
        setupEventListeners();
        function init() {
    renderBlogs();
    setupEventListeners();
    createParticles();
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.querySelector('.home-section').appendChild(particlesContainer);
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * -20;
        particle.style.animation = `float ${duration}s infinite linear ${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}
    }

    // Render blogs based on current filter and visible count
    function renderBlogs() {
        blogsContainer.innerHTML = '';
        
        const filteredBlogs = currentFilter === 'all' 
            ? blogData 
            : blogData.filter(blog => blog.category === currentFilter);
        
        const blogsToShow = filteredBlogs.slice(0, visibleBlogs);
        
        if (blogsToShow.length === 0) {
            blogsContainer.innerHTML = '<p class="no-blogs">No blogs found in this category.</p>';
            return;
        }
        
        blogsToShow.forEach(blog => {
            const blogElement = createBlogElement(blog);
            blogsContainer.appendChild(blogElement);
        });
        
        // Show/hide load more button
        loadMoreBtn.style.display = visibleBlogs < filteredBlogs.length ? 'block' : 'none';
    }

    // Create blog HTML element
    function createBlogElement(blog) {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog-card';
        blogElement.dataset.category = blog.category;
        
        blogElement.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="blog-meta">
                    <div class="blog-author">
                        <img src="https://i.pravatar.cc/50?img=${blog.id}" alt="${blog.author}" class="author-avatar">
                        <span>${blog.author}</span>
                    </div>
                    <div class="blog-stats">
                        <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
                    </div>
                </div>
            </div>
        `;
        
        return blogElement;
    }

    // Setup all event listeners
    function setupEventListeners() {
        // Navigation scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Navigation buttons
navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        
        // Close mobile menu if open
        navButtonsContainer.classList.remove('active');
        
        if (targetId === 'login' || targetId === 'register') {
            // Handle modal opening
            document.getElementById(targetId).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            // Handle section scrolling
            const targetSection = document.getElementById(targetId);
            const headerOffset = 80; // Account for fixed header height
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

        // Mobile menu toggle
        hamburger.addEventListener('click', function() {
            navButtonsContainer.classList.toggle('active');
        });

        // Filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active filter
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Update current filter and reset visible count
                currentFilter = this.dataset.category;
                visibleBlogs = blogsPerLoad;
                
                // Re-render blogs
                renderBlogs();
            });
        });

        // Load more button
        loadMoreBtn.addEventListener('click', function() {
            visibleBlogs += blogsPerLoad;
            renderBlogs();
        });

        // Close modals
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });

        // Close modal when clicking outside
        modals.forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Auth switch links
        authSwitchLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                
                // Close current modal
                this.closest('.modal').style.display = 'none';
                
                // Open target modal
                document.getElementById(targetId).style.display = 'flex';
            });
        });

        // Form submissions
        if (blogForm) {
            blogForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const title = document.getElementById('blog-title').value;
                const category = document.getElementById('blog-category').value;
                const content = document.getElementById('blog-content').value;
                const imageFile = document.getElementById('blog-image').files[0];
                
                // In a real app, you would upload the image and save the blog to a database
                alert('Blog published successfully! (This is a demo)');
                
                // Reset form
                this.reset();
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Login functionality would be implemented here!');
                this.reset();
                document.getElementById('login').style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const password = document.getElementById('register-password').value;
                const confirm = document.getElementById('register-confirm').value;
                
                if (password !== confirm) {
                    alert('Passwords do not match!');
                    return;
                }
                
                alert('Registration successful! (This is a demo)');
                this.reset();
                document.getElementById('register').style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }

        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            });
        }

        // Parallax effect for sections
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const parallaxSections = document.querySelectorAll('.parallax');
            
            parallaxSections.forEach(section => {
                const speed = 0.5;
                const offset = scrollPosition * speed;
                section.style.backgroundPositionY = offset + 'px';
            });
        });
    }

    // Initialize the application
    init();
});
// Smooth scroll to section with offset for fixed header
function scrollToSection(targetId) {
    const headerHeight = document.getElementById('main-nav').offsetHeight;
    const targetSection = document.getElementById(targetId);
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Update the event listeners for navigation
function setupEventListeners() {
    // ... other existing code ...
    
    // Handle Explore button click in hero section
    const exploreBtn = document.querySelector('.cta-btn[data-target="explore"]');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('explore');
        });
    }
    
    // Handle nav button clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            
            // Close mobile menu if open
            navButtonsContainer.classList.remove('active');
            
            if (targetId === 'login' || targetId === 'register') {
                // Handle modal opening
                document.getElementById(targetId).style.display = 'flex';
                document.body.style.overflow = 'hidden';
            } else {
                // Handle section scrolling
                scrollToSection(targetId);
            }
        });
    });
    
    // ... rest of your existing code ...
}
 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without page reload
                    history.pushState(null, null, targetId);
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });