// Portfolio Slider Class
class PortfolioSlider {
    constructor() {
        this.slider = document.getElementById("slider");
        this.prevBtn = document.getElementById("prev-btn");
        this.nextBtn = document.getElementById("next-btn");
        this.currentIndex = 0;
        this.slides = [
            {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%204.12.51%20PM.png-BqoqI9LzMoIAQroSYJFVaxi18hvoUD.jpeg",
                title: "Tree Service Website",
                type: "Local Service Business",
                description: "Professional website for a tree service company"
            },
            {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%204.12.20%20PM-lV0oPqV6pPx6LqosWxNmsDEUcdMyE3.png",
                title: "Massage Chair Service",
                type: "E-commerce & Service",
                description: "Home appliance solutions website"
            },
            {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%204.12.32%20PM-vRzjHYAsUsZCWzzPg3RKyang3339iV.png",
                title: "Emergency Roof Repair",
                type: "Emergency Services",
                description: "24/7 emergency roofing service website"
            },
            {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%204.13.28%20PM-SzZB2VzC4g7hCtgWuk17Rtu5Pm05J3.png",
                title: "NY Flooring Company",
                type: "Home Improvement",
                description: "Professional flooring services website"
            },
            {
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%204.14.30%20PM-R8Qe7dMbDHC8lX56IMohy985enmPzI.png",
                title: "Electrical Services",
                type: "Local Contractor",
                description: "Local electrician service website"
            }
        ];

        this.init();
        this.setupLightbox();
    }

    init() {
        // Create slides
        this.slides.forEach(slide => {
            const slideElement = document.createElement("div");
            slideElement.className = "slide";
            slideElement.innerHTML = `
                <div class="slide-content">
                    <img src="${slide.image}" alt="${slide.title}" crossorigin="anonymous">
                    <div class="slide-overlay">
                        <h3>${slide.title}</h3>
                        <p>${slide.type}</p>
                        <p>${slide.description}</p>
                    </div>
                </div>
            `;
            this.slider.appendChild(slideElement);
        });

        // Add event listeners
        this.prevBtn.addEventListener("click", () => this.move("prev"));
        this.nextBtn.addEventListener("click", () => this.move("next"));

        // Add keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") this.move("prev");
            if (e.key === "ArrowRight") this.move("next");
        });

        // Add touch support
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        this.slider.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.move("next");
            } else if (touchEndX - touchStartX > 50) {
                this.move("prev");
            }
        }, false);

        // Handle window resize
        window.addEventListener('resize', () => {
            this.updateSliderPosition();
        });
    }

    setupLightbox() {
        // Create lightbox
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img src="/placeholder.svg" alt="Lightbox image">
        `;
        document.body.appendChild(lightbox);

        // Add click events to slides
        const slides = document.querySelectorAll(".slide-content");
        slides.forEach(slide => {
            slide.addEventListener("click", () => {
                const img = slide.querySelector("img");
                const lightboxImg = lightbox.querySelector("img");
                lightboxImg.src = img.src;
                lightbox.classList.add("active");
            });
        });

        // Close lightbox
        const closeBtn = lightbox.querySelector(".lightbox-close");
        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });

        // Close on outside click
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });

        // Close on escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && lightbox.classList.contains("active")) {
                lightbox.classList.remove("active");
            }
        });
    }

    move(direction) {
        const slideWidth = 320; // Width of slide (300px) + gap (20px)
        const maxSlides = this.slides.length;
        const visibleSlides = window.innerWidth >= 768 ? 3 : 1;
        const maxPosition = -(maxSlides - visibleSlides) * slideWidth;

        if (direction === "prev") {
            this.currentIndex = Math.min(this.currentIndex + slideWidth, 0);
        } else {
            this.currentIndex = Math.max(this.currentIndex - slideWidth, maxPosition);
        }

        this.updateSliderPosition();
    }

    updateSliderPosition() {
        this.slider.style.transform = `translateX(${this.currentIndex}px)`;
    }
}

// FAQ Accordion Class
class FaqAccordion {
    constructor() {
        this.accordion = document.querySelector(".accordion");
        this.faqItems = [
            {
                question: "What's included in the $349 price?",
                answer: "Your one-page website includes custom design, mobile responsiveness, SEO optimization, contact form integration, social media links, unlimited revisions, and 30 days of support. There are no hidden fees or monthly charges."
            },
            {
                question: "How does a one-page website help with SEO?",
                answer: "One-page websites can perform excellently in search rankings because they concentrate relevant keywords and content in one place. We optimize your site with proper heading structure, meta descriptions, fast loading times, and mobile responsiveness - all factors that Google loves."
            },
            {
                question: "How long does it take to build my website?",
                answer: "Once we have your content and brand materials, we typically complete websites within 2-3 business days. Need it faster? Let us know and we'll try to accommodate your timeline."
            },
            {
                question: "What do I need to provide?",
                answer: "To get started, we'll need your business information, logo (if you have one), brand colors, images you'd like to use, and the content for your website. Don't have everything ready? No problem - we can guide you through the process."
            },
            {
                question: "Can I update the website myself?",
                answer: "Yes! We'll provide you with simple instructions on how to update your content. Need help? We're always just an email away during your 30-day support period."
            }
        ];

        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const faqItem = document.createElement("div");
            faqItem.className = "accordion-item";
            faqItem.innerHTML = `
                <button class="accordion-header">
                    ${item.question}
                    <span class="icon">+</span>
                </button>
                <div class="accordion-content">
                    <p>${item.answer}</p>
                </div>
            `;

            this.accordion.appendChild(faqItem);

            const header = faqItem.querySelector(".accordion-header");
            header.addEventListener("click", () => this.toggleItem(faqItem));
        });
    }

    toggleItem(item) {
        const isActive = item.classList.contains("active");
        
        // Close all items
        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add("active");
        }
    }
}

// Smooth scroll functionality
function scrollToSection(sectionId) {
    // If it's the pricing section, redirect to Stripe
    if (sectionId === "pricing") {
        window.location.href = "https://buy.stripe.com/cN2bLj44naqq8zSbJ5";
        return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Portfolio Slider
    new PortfolioSlider();

    // Initialize FAQ Accordion
    new FaqAccordion();

    // Setup smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            scrollToSection(this.getAttribute("href").substring(1));
        });
    });
});
