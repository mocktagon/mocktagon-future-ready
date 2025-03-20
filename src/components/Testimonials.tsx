
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Innovations",
    testimonial: "Mocktagon completely transformed my interview preparation. The AI feedback helped me identify weaknesses in my responses I wasn't aware of. I aced my last two technical interviews!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Product Manager",
    company: "Digital Solutions Inc.",
    testimonial: "The interview simulations feel incredibly realistic. After practicing with Mocktagon for just two weeks, I felt so much more confident in my actual interviews and landed my dream job.",
    avatar: "DC",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "UX Designer",
    company: "Creative Studios",
    testimonial: "As someone who gets nervous during interviews, Mocktagon was a game-changer. Being able to practice with AI interviewers helped me overcome my anxiety and articulate my thoughts clearly.",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Data Scientist",
    company: "Analytics Pro",
    testimonial: "The industry-specific questions prepared me for exactly what was asked in my interviews. The analytics dashboard showed my improvement over time, which was incredibly motivating.",
    avatar: "MW",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.testimonial-animate').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.testimonial-animate').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative py-24 bg-mocktagon-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mocktagon-900 to-mocktagon-950 pointer-events-none"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-36 w-96 h-96 rounded-full bg-mocktagon-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-36 w-96 h-96 rounded-full bg-mocktagon-400/10 blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto testimonial-animate animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-mocktagon-800/40 text-mocktagon-200 rounded-full">
            Testimonials
          </span>
          <h2 className="heading-lg text-white">
            Success Stories from Our Users
          </h2>
          <p className="text-lg text-mocktagon-200 max-w-2xl mx-auto">
            Hear from professionals who transformed their interview performance with Mocktagon's AI-powered practice platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto testimonial-animate animate-on-scroll">
          <div 
            className="glass-card-dark rounded-xl p-8 md:p-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="h-12 w-12 text-mocktagon-500/60 mb-6" />
            
            <div className="transition-opacity duration-500">
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                "{testimonials[activeIndex].testimonial}"
              </p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-mocktagon-700 flex items-center justify-center text-white font-medium text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-mocktagon-300">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-mocktagon-400' : 'w-2.5 bg-mocktagon-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full bg-mocktagon-800/80 flex items-center justify-center text-white transform -translate-x-6 transition-all duration-300 hover:bg-mocktagon-700 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full bg-mocktagon-800/80 flex items-center justify-center text-white transform translate-x-6 transition-all duration-300 hover:bg-mocktagon-700 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
