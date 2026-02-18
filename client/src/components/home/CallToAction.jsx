import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CallToAction = () => {
   return (
      <div id="cta" className="w-full max-w-6xl mx-auto px-6 py-20 mt-20">
         <div className="relative overflow-hidden py-16 px-8 md:px-12 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="relative z-10 text-center">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Your Perfect Resume?
               </h2>
               <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals who have already created stunning
                  resumes. Start building your future today!
               </p>

               <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                  <div className="flex items-center gap-2 text-white">
                     <CheckCircle className="size-5" />
                     <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                     <CheckCircle className="size-5" />
                     <span>Free forever</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                     <CheckCircle className="size-5" />
                     <span>Cancel anytime</span>
                  </div>
               </div>

               <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                     to="/login"
                     className="px-8 py-3.5 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
                  >
                     Get Started Free
                  </Link>
                  <Link
                     to="#features"
                     className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
                  >
                     Learn More
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CallToAction;
