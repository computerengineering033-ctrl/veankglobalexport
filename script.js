/* ==================== CORNODS WEBSITE JAVASCRIPT ==================== */
/* Complete JavaScript functionality for Cornods agricultural website */

console.log("🌽 Cornods Website Loading...");

// ==================== GLOBAL VARIABLES ====================
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// ==================== PRODUCT DATA ====================
const productData = {
    'jagghary': {
        name: 'jagghary',
        image: 'jaggary.jpg',
        benefits: [
            'Naturally rich in iron, magnesium, potassium and trace minerals',
      'Less processed than refined sugar; retains some molasses-based antioxidants',
      'Helps add energy quickly; traditional post-meal sweet in small amounts',
      'Versatile for chai, laddoo, chikki, kheer and savoury balance'
        ],
        specifications: {
            'Variety': 'Cane jaggery, Palm/Date jaggery',
      'Season': 'Year-round (peak crushing Nov–Mar)',
      'Origin': 'Maharashtra, India',
      'Packaging': '500  blocks, 1  blocks, powder pouches ,supply ability 30000 tonnes .',
      'Shelf Life': '6–12 months sealed; 3–6 months after opening',
      'Storage': 'Cool, dry place; airtight container to avoid moisture clumping'
        }
    },
    'jagghar-powder': {
        name: 'jagghar-powder',
        image: 'powder.jpg',
        benefits: [
             'Less processed sweetener retaining molasses notes and trace minerals (iron, potassium, magnesium)',
      'Quick energy source; traditional recipes me natural sweetness add karta hai',
      'Granulated form dissolves easily in chai, kheer, laddoo mix and everyday cooking',
      'Use in moderation; similar calories and sugar load as refined sugar'
        ],
        specifications: {
              'Variety': 'Cane jaggery powder; also available: Palm/Date jaggery powder',
      'Season': 'Year-round (peak crushing Nov–Mar)',
      'Origin': 'Maharashtra, India',
      'Packaging': '500  pouch, 1 pouch, 5  bulk , supply ability 30000 tonnes.',
      'Shelf Life': '6–12 months sealed; 3–6 months after opening',
      'Storage': 'Cool, dry place; airtight container to prevent moisture clumping'
        }
    },









    'Jagghar Cubes': {
        name: 'Jagghar Cubes',
        image: 'cubess.jpg',
        benefits: [
         
        ],
        specifications: {
            'Variety': 'Cane jaggery cubes; also available: Palm/Date jaggery cubes',
      'Season': 'Year-round (peak crushing Nov–Mar)',
      'Origin': 'Maharashtra, India',
      'Packaging': '250  box/pouch, 500 , 1 ; nitrogen-flushed options ,supply ability 25000 tonnes',
      'Shelf Life': '6–12 months sealed; ~3–6 months after opening (dry storage)',
      'Storage': 'Cool, dry place; airtight container. Add food-grade desiccant to prevent moisture caking'
        }
    },


    
    'grapes': {
        name: 'Grapes (द्राक्षे)',
        image: 'https://scx2.b-cdn.net/gfx/news/hires/2022/grapes.jpg',
        benefits: [
            'Rich in antioxidants and vitamins',
            'Supports brain health',
            'Good for heart health',
            'Natural source of energy',
            'Contains resveratrol'
        ],
        specifications: {
            'Variety': 'Thompson Seedless, Flame',
            'Season': 'December - March',
            'Origin': 'Maharashtra, Karnataka',
            'Packaging': '4kg, 8kg boxes , supply ability 25000 tonnes',
            'Shelf Life': '10-15 days',
            'Storage': 'Cold storage 0-2°C'
        }
    },
    'pineapple': {
        name: 'Pineapple (अननस)',
        image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg',
        benefits: [
            'High in vitamin C and manganese',
            'Contains digestive enzymes',
            'Anti-inflammatory properties',
            'Supports immune system',
            'Good for bone health'
        ],
        specifications: {
            'Variety': 'MD2, Queen',
            'Season': 'March - June',
            'Origin': 'West Bengal, Assam',
            'Packaging': '10kg, 15kg crates , supply ability 30000 tonnes',
            'Shelf Life': '5-7 days',
            'Storage': 'Cool, ventilated area'
        }
    },
    // Grains
    'Onion': {
        name: 'Onion',
        image: 'https://sa.kapamilya.com/absnews/abscbnnews/media/2023/life/01/26/20230125-onions-market-md-14.jpg',
        benefits: [
             'Low-calorie, water-rich vegetable with fiber and vitamin C',
      'Contains prebiotic fructans that support gut microbes (FODMAP-sensitive logon ko portion control)',
      'Rich in antioxidants like quercetin and sulfur compounds linked to heart and metabolic support',
      'Versatile: raw, sautéed, roasted; adds flavour while keeping calories low'
        ],
        specifications: {
             'Variety': 'Red, Yellow, White; also Spring/Green onions',
      'Season': 'Year-round; main harvests depend on region',
      'Origin': 'Maharashtra, India',
      'Packaging': '500 g, 1 kg, 5 kg mesh bags; fresh-cut packs as applicable ,supply ability 30000 tonnes',
      'Shelf Life': 'Whole: ~3–4 weeks cool, dry; Sweet onions ~1–2 weeks; Cut onions 2–3 days refrigerated',
      'Storage': 'Cool, dark, well-ventilated place; refrigerate cut onions in airtight container'
        }
    },
    'maize': {
        name: 'Maize/Corn (मक्का)',
        image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
        benefits: [
            'Rich in fiber and antioxidants',
            'Good source of energy',
            'Contains zeaxanthin for eye health',
            'Gluten-free grain option',
            'Supports digestive health'
        ],
        specifications: {
            'Variety': 'Yellow Corn, White Corn',
            'Grade': 'Premium, Standard',
            'Origin': 'Karnataka, Maharashtra',
            'Packaging': '25, 50 bags,supply ability 30000 tonnes',
            'Shelf Life': '12-18 months',
            'Storage': 'Dry, ventilated storage'
        }
    },
    'bajra': {
        name: 'Bajra (बाजरा)',
        image: 'https://cdn.pixabay.com/photo/2013/11/01/18/21/pearl-millet-204098_960_720.jpg',
        benefits: [
            'High in protein and iron',
            'Rich in magnesium',
            'Good for diabetics',
            'Gluten-free millet',
            'Supports heart health'
        ],
        specifications: {
            'Variety': 'Traditional, Hybrid',
            'Grade': 'Premium Quality',
            'Origin': 'Rajasthan, Gujarat',
            'Packaging': '25kg, 50kg bags,supply ability 30000 tonnes',
            'Shelf Life': '12-24 months',
            'Storage': 'Cool, dry place'
        }
    },
    'jowar': {
        name: 'Corn',
        image: 'corn.jpg',
        benefits: [
            'High in protein and fiber',
            'Rich in antioxidants',
            'Gluten-free grain',
            'Good for weight management',
            'Helps control blood sugar'
        ],
        specifications: {
            'Variety': 'White Sorghum, Red Sorghum',
            'Grade': 'Export Quality',
            'Origin': 'Maharashtra, Karnataka',
            'Packaging': '25, 50 bags,supply ability 25000 tonnes',
            'Shelf Life': '18-24 months',
            'Storage': 'Moisture-free storage'
        }
    },
    // Powders
    'onion-powder': {
        name: 'Onion Powder (कांदा पावडर)',
        image: 'https://rimaindustries.co.in/wp-content/uploads/2024/09/Red-Onion-Powder.jpg',
        benefits: [
            'Pure dehydrated onion flavor',
            'Rich in antioxidants',
            'No artificial additives',
            'Long shelf life',
            'Convenient cooking ingredient'
        ],
        specifications: {
            'Type': 'Dehydrated Onion Powder',
            'Purity': '99% Pure',
            'Mesh Size': '60-80 mesh',
            'Packaging': '500g, 1kg, 25kg bags,supply ability 25000 tonnes',
            'Shelf Life': '18-24 months',
            'Storage': 'Cool, dry place'
        }
    },
    'garlic-powder': {
        name: 'Garlic Powder (लसूण पावडर)',
        image: 'https://foodpowderindia.com/wp-content/uploads/2024/03/Alimento-products-1.png',
        benefits: [
            'Natural garlic flavor',
            'Rich in allicin compound',
            'Antibacterial properties',
            'Boosts immune system',
            'Heart-healthy benefits'
        ],
        specifications: {
            'Type': 'Dehydrated Garlic Powder',
            'Purity': '98% Pure',
            'Mesh Size': '80-100 mesh',
            'Packaging': '500g, 1kg, 25kg bags , supply ability 25000 tonnes',
            'Shelf Life': '18-24 months',
            'Storage': 'Moisture-free environment'
        }
    },
    'chilli-powder': {
        name: 'Chilli Powder (मरची पावडर)',
        image: 'https://goodness-farm.com/wp-content/uploads/2021/04/image-Red_Chilli_Karam_Podi-1590824175448.jpg',
        benefits: [
            'Rich in capsaicin',
            'High in vitamin C',
            'Natural metabolism booster',
            'Contains antioxidants',
            'Adds heat and flavor'
        ],
        specifications: {
            'Type': 'Red Chilli Powder',
            'Heat Level': 'Medium to Hot',
            'Color Value': 'ASTA 100+',
            'Packaging': '500g, 1kg, 25kg bags ,supply ability 25000 tonnes',
            'Shelf Life': '18-24 months',
            'Storage': 'Cool, dry, dark place'
        }
    },
    'moringa-powder': {
        name: 'moringa powder (शेवायाची पानं पावडर)',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDo1OVAsjA9rFHNHMifuumlGgEH2WbDAQEDxPNtVOE-UFEd0pXY4QhnRRfvb8nqdATHD9nxADEEOqoTnFap46PlKkMvOZLPCI6lR7u4K--ecD5HzX2Ejn0XxtMIMJqU-AZY047MXtbPEYI-y0xsCM4LttQLt5pf8-GmG26HO7BvyqZatNPRAs8JRFP/s2937/Slide1.JPG1.JPG" alt="Moringa Powder"',
        benefits: [
            'Superfood with 90+ nutrients',
            'High in protein and iron',
            'Rich in vitamins A, C, E',
            'Natural energy booster',
            'Supports immune system'
        ],
        specifications: {
            'Type': 'Organic Moringa Leaf Powder',
            'Grade': 'Premium Food Grade',
            'Color': 'Natural Green',
            'Packaging': '250g, 500g, 1kg packs ,supply ability 25000 tonnes',
            'Shelf Life': '24 months',
            'Storage': 'Cool, dry place'
        }
    },
     'jagghar-powder': {
        name: 'jagghar-powder (गूळ पावडर)',
        image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/NO/WR/MJ/100881657/can-jaggery-powder-1000x1000.jpg',
        benefits: [
            'Superfood with 90+ nutrients',
            'High in protein and iron',
            'Rich in vitamins A, C, E',
            'Natural energy booster',
            'Supports immune system'
        ],
        specifications: {
            'Type': 'Organic Moringa Leaf Powder',
            'Grade': 'Premium Food Grade',
            'Color': 'Natural Green',
            'Packaging': '250g, 500g, 1kg packs,supply ability 30000 tonnes',
            'Shelf Life': '24 months',
            'Storage': 'Cool, dry place'
        }
    },
    'tomato-powder': {
        name: 'Tomato Powder (टोमेटो पावडर)',
        image: 'https://kobe-spice.com/cdn/shop/files/tomatopowder_grande.png?v=1693468711',
        benefits: [
            'Rich in lycopene',
            'High in vitamin C',
            'Natural umami flavor',
            'Concentrated tomato nutrition',
            'Versatile cooking ingredient'
        ],
        specifications: {
            'Type': 'Spray Dried Tomato Powder',
            'Purity': '95% Pure',
            'Color': 'Natural Red',
            'Packaging': '500g, 1kg, 25kg bags,supply ability 30000 tonnes',
            'Shelf Life': '18-24 months',
            'Storage': 'Cool, moisture-free'
        }
    },
    // Eco Products
    'areca-plates': {
        name: 'Areca Leaf Plates (सुपारीया पानांया प्लेट्स)',
        image: 'https://i.etsystatic.com/24552157/r/il/4a545d/2741184853/il_1140xN.2741184853_3z6r.jpg',
        benefits: [
            '100% biodegradable and natural',
            'Chemical-free manufacturing',
            'Microwave and freezer safe',
            'Leak-proof and sturdy',
            'Eco-friendly alternative'
        ],
        specifications: {
            'Material': 'Natural Areca Palm Leaves',
            'Sizes': '6", 8", 10", 12" plates',
            'Thickness': '0.5-1.0 mm',
            'Packaging': '25, 50, 100 piece packs',
            'Shelf Life': '12-24 months',
            'Storage': 'Dry, ventilated area'
        }
    },
    'bagasse-plates': {
        name: 'Sugarcane Bagasse Plates (ऊसाया गरापासून प्लेट्स)',
        image: 'https://customizepacking.com/wp-content/uploads/2022/12/3-6.png',
        benefits: [
            'Made from sugarcane fiber waste',
            'Completely compostable',
            'Heat resistant up to 120°C',
            'Oil and water resistant',
            'Sustainable packaging solution'
        ],
        specifications: {
            'Material': 'Sugarcane Bagasse Pulp',
            'Sizes': '6", 8", 9", 10" plates/bowls',
            'Color': 'Natural White/Beige',
            'Packaging': '50, 100 piece packs',
            'Shelf Life': '24 months',
            'Storage': 'Moisture-free storage'
        }
    },
    'bamboo-toothbrush': {
        name: 'Bamboo Toothbrush (बाम्बू टूथब्रश)',
        image: 'https://www.ippinka.com/wp-content/uploads/2018/10/bamboo-bottle-03.jpg',
        benefits: [
            'Biodegradable bamboo handle',
            'Soft charcoal-infused bristles',
            'Antibacterial properties',
            'Eco-friendly oral care',
            'Plastic-free packaging'
        ],
        specifications: {
            'Handle Material': 'Organic Bamboo',
            'Bristle Type': 'Soft/Medium',
            'Handle Length': '19 cm',
            'Packaging': 'Individual cardboard boxes',
            'Shelf Life': '36 months',
            'Storage': 'Dry place'
        }
    },
    'bamboo-bottles': {
        name: 'Bamboo Bottles (बाम्बू बाटल्या)',
        image: 'https://www.ippinka.com/wp-content/uploads/2018/10/bamboo-bottle-03.jpg',
        benefits: [
            'Natural bamboo construction',
            'Insulated temperature control',
            'BPA-free and safe',
            'Lightweight and durable',
            'Sustainable lifestyle choice'
        ],
        specifications: {
            'Material': 'Natural Bamboo + Steel',
            'Capacity': '350ml, 500ml, 750ml',
            'Temperature': 'Hot/Cold retention',
            'Packaging': 'Eco-friendly gift boxes',
            'Shelf Life': '5+ years',
            'Storage': 'Room temperature'
        }
    }
};

// ==================== DOM CONTENT LOADED EVENT ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM loaded - Initializing website functionality");
    
    // Initialize all functionality
    initializeSlideshow();
    initializeNavigation();
    initializeAnimations();
    initializeProductFilters();
    initializeContactForm();
    initializeChatbot();
    initializeEnhancedAnimations();
    initializeFeaturedProducts();
    initializeAIChat();
    initializeSmoothScrolling();
    
    // Update slide counter
    updateSlideCounter();
    
    console.log("🎉 All website functionality initialized!");
});

// ==================== SLIDESHOW FUNCTIONALITY ====================
function initializeSlideshow() {
    if (slides.length === 0) return;
    
    // Set total slides counter
    const totalSlidesEl = document.querySelector('.total-slides');
    if (totalSlidesEl) {
        totalSlidesEl.textContent = totalSlides;
    }
    
    // Show first slide
    showSlide(0);
    
    // Start automatic slideshow
    startSlideshow();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleSlideKeyPress);
    
    // Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        slideshowContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                nextSlide();
            } else if (endX - startX > 50) {
                prevSlide();
            }
        }, { passive: true });
    }
    
    console.log(`📸 Slideshow initialized with ${totalSlides} slides`);
}

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Update counter
    const currentSlideEl = document.querySelector('.current-slide');
    if (currentSlideEl) {
        currentSlideEl.textContent = index + 1;
    }
    
    // Animate slide content
    setTimeout(() => animateSlideContent(index), 500);
}

function animateSlideContent(slideIndex) {
    const activeSlide = slides[slideIndex];
    if (!activeSlide) return;
    
    const animatedElements = activeSlide.querySelectorAll('.animate-fade-up');
    
    animatedElements.forEach((element, index) => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = `fadeUp 1s ease forwards`;
            element.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

function updateSlideCounter() {
    const currentSlideElement = document.querySelector('.current-slide');
    const totalSlidesElement = document.querySelector('.total-slides');
    
    if (currentSlideElement && totalSlidesElement) {
        currentSlideElement.textContent = currentSlide + 1;
        totalSlidesElement.textContent = totalSlides;
    }
}

function handleSlideKeyPress(event) {
    const homeSection = document.querySelector('#home');
    if (homeSection && homeSection.classList.contains('active')) {
        if (event.key === 'ArrowRight') {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        } else if (event.key === 'ArrowLeft') {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        }
    }
}

// ==================== NAVIGATION FUNCTIONALITY ====================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section') || this.getAttribute('href').substring(1);
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            console.log(`🔗 Navigated to: ${targetSection}`);
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Stop slideshow if leaving home
        if (sectionId !== 'home') {
            stopSlideshow();
        } else {
            startSlideshow();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Trigger animations for new section
        setTimeout(() => {
            triggerSectionAnimations(targetSection);
        }, 100);
    }
}

function showContact() {
    showSection('contact');
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));
    const contactNav = document.querySelector('[data-section="contact"]');
    if (contactNav) contactNav.classList.add('active');
}

// ==================== SCROLL ANIMATIONS ====================
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

function triggerSectionAnimations(section) {
    const animatedElements = section.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 100);
    });
}

// ==================== ENHANCED ANIMATIONS ====================
function initializeEnhancedAnimations() {
    // Story section animations
    const storyElements = document.querySelectorAll('.our-story-section .animate-on-scroll');
    const featuredElements = document.querySelectorAll('.featured-products-section .animate-on-scroll');
    const aiElements = document.querySelectorAll('.ai-chat-section .animate-on-scroll');
    const exportElements = document.querySelectorAll('.export-partner-section .animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add staggered animation for featured cards
                if (entry.target.classList.contains('featured-card')) {
                    const cards = document.querySelectorAll('.featured-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.transform = 'translateY(0)';
                            card.style.opacity = '1';
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    [...storyElements, ...featuredElements, ...aiElements, ...exportElements].forEach(el => {
        observer.observe(el);
    });
}

// ==================== FEATURED PRODUCTS INTERACTIONS ====================
function initializeFeaturedProducts() {
    const featuredCards = document.querySelectorAll('.featured-card');
    
    featuredCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ==================== AI CHAT ENHANCEMENTS ====================
function initializeAIChat() {
    const aiIcon = document.querySelector('.ai-icon i');
    const aiFeatures = document.querySelectorAll('.ai-feature');
    
    // Add floating animation to AI icon
    if (aiIcon) {
        setInterval(() => {
            aiIcon.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                aiIcon.style.transform = 'translateY(0)';
            }, 500);
        }, 3000);
    }
    
    // Add hover effects to AI features
    aiFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.03)';
            this.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

// ==================== PRODUCT FUNCTIONALITY ====================
function initializeProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProducts(filter);
            
            console.log(`🔍 Filtering products by: ${filter}`);
        });
    });
}

function filterProducts(filter) {
    const productCards = document.querySelectorAll('.product-card');
    const categoryHeaders = document.querySelectorAll('.category-section-title');
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filter === 'all' || cardCategory === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Show/hide category headers
    categoryHeaders.forEach(header => {
        const parentSection = header.closest('.product-category');
        if (parentSection) {
            const categoryId = parentSection.id;
            if (filter === 'all' || categoryId.includes(filter)) {
                parentSection.style.display = 'block';
            } else {
                parentSection.style.display = 'none';
            }
        }
    });
}

function showCategoryProducts(category) {
    showSection('products');
    
    setTimeout(() => {
        const filterBtn = document.querySelector(`[data-filter="${category}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    }, 500);
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));
    const productsNav = document.querySelector('[data-section="products"]');
    if (productsNav) productsNav.classList.add('active');
}

// ==================== PRODUCT DETAILS MODAL ====================
function showProductDetails(productId) {
    const product = productData[productId];
    if (!product) return;
    
    // Populate modal with product data
    const modalImage = document.getElementById('modalProductImage');
    const modalName = document.getElementById('modalProductName');
    
    if (modalImage) modalImage.src = product.image;
    if (modalName) modalName.textContent = product.name;
    
    // Benefits
    const benefitsList = document.getElementById('modalProductBenefits');
    if (benefitsList) {
        benefitsList.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
    }
    
    // Specifications
    const specBody = document.getElementById('modalSpecificationBody');
    if (specBody) {
        specBody.innerHTML = '';
        Object.entries(product.specifications).forEach(([key, value]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="font-weight: 600; color: var(--text-dark);">${key}</td>
                <td style="color: var(--text-light);">${value}</td>
            `;
            specBody.appendChild(row);
        });
    }
    
    // Show modal
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    console.log(`📋 Showing product details for: ${product.name}`);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function requestQuote() {
    closeProductModal();
    showSection('contact');
    
    // Focus on contact form
    setTimeout(() => {
        const nameField = document.getElementById('name');
        if (nameField) nameField.focus();
    }, 500);
}

// ==================== CONTACT FORM ====================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!data.name || !data.email || !data.phone || !data['product-category']) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            console.log('📧 Contact form submitted:', data);
        }, 2000);
    });
}

// ==================== CHATBOT FUNCTIONALITY ====================
function initializeChatbot() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', handleChatKeyPress);
    }
}

function toggleChatbot() {
    const chatWindow = document.getElementById('chatbotWindow');
    if (chatWindow) {
        chatWindow.classList.toggle('show');
        
        if (chatWindow.classList.contains('show')) {
            const chatInput = document.getElementById('chatInput');
            if (chatInput) chatInput.focus();
        }
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Generate bot response
    setTimeout(() => {
        const response = generateBotResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = message;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Enhanced AI responses
    if (msg.includes('ai') || msg.includes('chatbot') || msg.includes('bot')) {
        return `🤖 <strong>AI Assistant Here!</strong><br><br>
                I'm powered by advanced AI technology to provide you with:<br>
                • <strong>Instant product information</strong><br>
                • <strong>Real-time pricing updates</strong><br>
                • <strong>Export documentation guidance</strong><br>
                • <strong>24/7 customer support</strong><br><br>
                How can I assist you with your agricultural needs today?`;
    }
    
    if (msg.includes('story') || msg.includes('about') || msg.includes('history')) {
        return `📖 <strong>Our Journey Since 2016</strong><br><br>
                Cornods started as a vision to empower farmers and has grown into a trusted agricultural export partner. We've:<br>
                • <strong>Partnered with 500+ farmers</strong><br>
                • <strong>Delivered 2000+ successful orders</strong><br>
                • <strong>Maintained 25+ product varieties</strong><br>
                • <strong>Built lasting relationships worldwide</strong><br><br>
                Would you like to know more about our specific products or services?`;
    }
    
    if (msg.includes('featured') || msg.includes('premium') || msg.includes('best')) {
        return `⭐ <strong>Our Featured Premium Products:</strong><br><br>
                🥭 <strong>Premium Mango</strong> - Sweet Alphonso varieties<br>
                🌽 <strong>Quality Corn</strong> - Perfect for feed & processing<br>
                🧄 <strong>Onion Powder</strong> - Pure dehydrated flavor<br>
                🌾 <strong>Premium Wheat</strong> - High-protein varieties<br>
                🌱 <strong>Eco Plates</strong> - Biodegradable solutions<br>
                💚 <strong>Moringa Powder</strong> - Superfood nutrition<br><br>
                Which product interests you most?`;
    }
    
    if (msg.includes('export') || msg.includes('international') || msg.includes('shipping')) {
        return `🌍 <strong>Trusted Export Partner</strong><br><br>
                We provide comprehensive export solutions:<br>
                • <strong>Global shipping & logistics</strong><br>
                • <strong>Documentation & certification</strong><br>
                • <strong>Custom packaging solutions</strong><br>
                • <strong>Quality assurance & testing</strong><br>
                • <strong>Competitive pricing</strong><br><br>
                Our expertise ensures your products reach global markets safely and on time!`;
    }
    
    // Product inquiries
    if (msg.includes('mango') || msg.includes('आम')) {
        return "🥭 Our mangoes are premium Alphonso and Dasheri varieties from Maharashtra! They're rich in Vitamin C and perfect for export. Would you like detailed specifications or pricing information?";
    }
    
    if (msg.includes('corn') || msg.includes('maize') || msg.includes('मक्का')) {
        return "🌽 We offer high-quality yellow and white corn from Karnataka and Maharashtra. Perfect for feed and food processing. Shall I provide you with our current rates and specifications?";
    }
    
    if (msg.includes('price') || msg.includes('cost') || msg.includes('quote')) {
        return "💰 For detailed pricing and quotes, I'd recommend filling out our contact form or calling us at +91 9130255593. Our team will provide you with competitive rates based on your quantity requirements.";
    }
    
    if (msg.includes('organic') || msg.includes('certificate')) {
        return "🏅 All our products meet international quality standards. We provide necessary certifications for export including phytosanitary certificates and quality analysis reports.";
    }
    
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('call')) {
        return "📞 You can reach us at:<br>Phone: +91 9130255593<br>Email: info@cornods.com<br>Office: Mumbai, Maharashtra<br><br>Our team is available Monday-Saturday, 9 AM to 6 PM.";
    }
    
    if (msg.includes('eco') || msg.includes('bamboo') || msg.includes('areca')) {
        return "🌱 Our eco-friendly products include bamboo bottles, toothbrushes, areca leaf plates, and sugarcane bagasse products. All are 100% biodegradable and sustainable!";
    }
    
    // Default enhanced response
    return `🌽 <strong>Welcome to Cornods!</strong><br><br>
            I'm here to help you with:<br>
            • <strong>Product Information</strong> - Detailed specs & benefits<br>
            • <strong>Export Services</strong> - Global shipping solutions<br>
            • <strong>Pricing & Quotes</strong> - Competitive rates<br>
            • <strong>Quality Assurance</strong> - Certification details<br><br>
            What would you like to know more about?`;
}

// ==================== WHATSAPP INTEGRATION ====================
function orderOnWhatsApp(customMessage = '') {
    const phoneNumber = "7058287012"; // Replace with actual WhatsApp business number
    const defaultMessage = "Hello Cornods! I'm interested in your agricultural products. Please provide more information about:\n\n• Product categories and pricing\n• Export services\n• Custom solutions\n\nThank you!";
    const message = customMessage || defaultMessage;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    console.log("📱 Opening WhatsApp for order inquiry");
}

// ==================== UTILITY FUNCTIONS ====================
function showProducts() {
    showSection('products');
}

function showBrochure() {
    // Simulate brochure download
    alert("Brochure download will start shortly! 📄\n\nOur comprehensive product catalog includes:\n• Fresh Fruits\n• Premium Grains\n• Natural Powders\n• Eco-friendly Products");
    
    console.log("📄 Brochure download requested");
}

// ==================== SMOOTH SCROLLING ENHANCEMENTS ====================
function initializeSmoothScrolling() {
    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== HEADER SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = 'none';
        }
    }
});

// ==================== MODAL EVENT LISTENERS ====================
// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (modal && event.target === modal) {
        closeProductModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('productModal');
        if (modal && modal.style.display === 'block') {
            closeProductModal();
        }
        
        const chatWindow = document.getElementById('chatbotWindow');
        if (chatWindow && chatWindow.classList.contains('show')) {
            toggleChatbot();
        }
    }
});

// ==================== ERROR HANDLING ====================
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
});

// ==================== PERFORMANCE MONITORING ====================
window.addEventListener('load', function() {
    console.log("⚡ Website Performance Summary:");
    console.log("- Total slides: " + totalSlides);
    console.log("- Products loaded: " + Object.keys(productData).length);
    console.log("- Animations initialized: ✅");
    console.log("- Contact form ready: ✅");
    console.log("- Chatbot active: ✅");
    console.log("- WhatsApp integration: ✅");
    console.log("🎉 Cornods website fully loaded and operational!");
    
    // Smooth page entrance
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log("🌽 Cornods JavaScript loaded successfully!");
