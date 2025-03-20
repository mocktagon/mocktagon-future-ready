
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const categoryData = [
  {
    id: 1,
    title: "College Admission Interviews",
    description: "Practice with realistic college admission interview questions for Ivy League and top universities.",
    pattern: "bg-gradient-to-br from-purple-500/20 to-blue-500/20 via-pink-500/10",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Software Engineering",
    description: "Technical interviews covering algorithms, system design, and coding challenges.",
    pattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 via-indigo-500/10",
    icon: "💻"
  },
  {
    id: 3,
    title: "Product Management",
    description: "Product sense, analytical, and strategy questions for PM roles.",
    pattern: "bg-gradient-to-br from-green-500/20 to-emerald-500/20 via-teal-500/10",
    icon: "📊"
  },
  {
    id: 4,
    title: "Data Science",
    description: "Statistical analysis, machine learning, and data modeling interview preparation.",
    pattern: "bg-gradient-to-br from-orange-500/20 to-amber-500/20 via-yellow-500/10",
    icon: "📈"
  },
  {
    id: 5,
    title: "MBA Interviews",
    description: "Case studies and behavioral questions for business school admissions.",
    pattern: "bg-gradient-to-br from-red-500/20 to-rose-500/20 via-pink-500/10",
    icon: "📝"
  },
  {
    id: 6,
    title: "Medical School Admissions",
    description: "MMI scenarios and traditional medical school interview practice.",
    pattern: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 via-indigo-500/10",
    icon: "⚕️"
  },
  {
    id: 7,
    title: "Law School Interviews",
    description: "Legal reasoning and admissions interviews for JD programs.",
    pattern: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20 via-purple-500/10",
    icon: "⚖️"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="relative py-16 bg-white">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto process-animate animate-on-scroll">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full">
            Interview Categories
          </span>
          <h2 className="heading-lg">
            Specialized Mock Interviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practice with tailored interview simulations for various career paths and academic admissions.
          </p>
        </div>

        <div className="process-animate animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categoryData.map((category) => (
                <CarouselItem key={category.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="glass-card overflow-hidden h-[320px] border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div 
                          className={`relative h-1/2 flex items-center justify-center ${category.pattern}`}
                        >
                          <div className="absolute inset-0 opacity-30">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                              <defs>
                                <pattern id={`pattern-${category.id}`} patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
                                  <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill={`url(#pattern-${category.id})`} />
                            </svg>
                          </div>
                          <span className="text-5xl z-10">{category.icon}</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                          <ScrollArea className="flex-1">
                            <p className="text-gray-600 text-sm">{category.description}</p>
                          </ScrollArea>
                          <button className="mt-4 bg-secondary hover:bg-secondary/80 text-primary font-medium py-2 px-4 rounded-md transition-colors">
                            Learn More
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="relative -left-4 h-12 w-12 border-primary/10 bg-white/80 backdrop-blur-sm hover:bg-white" />
              <CarouselNext className="relative -right-4 h-12 w-12 border-primary/10 bg-white/80 backdrop-blur-sm hover:bg-white" />
            </div>
            <div className="flex justify-center gap-2 mt-8 md:hidden">
              <button className="h-10 w-10 rounded-full flex items-center justify-center border border-primary/10 bg-white/80 backdrop-blur-sm hover:bg-white">
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              <button className="h-10 w-10 rounded-full flex items-center justify-center border border-primary/10 bg-white/80 backdrop-blur-sm hover:bg-white">
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Categories;
