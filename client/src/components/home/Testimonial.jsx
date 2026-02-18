import React from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
   const testimonials = [
      {
         name: "Sarah Johnson",
         role: "Software Engineer",
         rating: 5,
         text: "This resume builder helped me land my dream job at Google. The templates are incredibly professional and the AI suggestions were spot-on.",
      },
      {
         name: "Michael Chen",
         role: "Marketing Manager",
         rating: 5,
         text: "Best resume builder I've ever used. Clean interface, beautiful templates, and it took me less than 10 minutes to create a stunning resume!",
      },
      {
         name: "Emily Davis",
         role: "Product Designer",
         rating: 5,
         text: "Love how simple and professional everything looks. Got multiple interview calls after updating my resume with this tool. Highly recommend!",
      },
   ];

   return (
      <div
         id="testimonials"
         className="flex flex-col items-center py-24 bg-gray-900/30 px-6"
      >
         <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-sm text-green-500 bg-green-500/10 rounded-full px-4 py-2 mb-6">
                  <Star className="size-4 fill-green-500" />
                  <span>Testimonials</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Loved by Thousands
               </h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Join professionals who landed their dream jobs
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((testimonial, index) => (
                  <div
                     key={index}
                     className="p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all"
                  >
                     <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                           <Star
                              key={i}
                              className="size-5 fill-green-500 stroke-green-500"
                           />
                        ))}
                     </div>
                     <p className="text-gray-300 leading-relaxed mb-6">
                        "{testimonial.text}"
                     </p>
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                           {testimonial.name.charAt(0)}
                        </div>
                        <div>
                           <p className="text-white font-semibold">{testimonial.name}</p>
                           <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Testimonial;
