import { Zap } from "lucide-react";
import React from "react";

const Features = () => {
   const features = [
      {
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="size-8 stroke-green-500"
            >
               <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
               <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
            </svg>
         ),
         title: "Easy Editor",
         description:
            "Intuitive drag-and-drop interface makes creating your resume a breeze.",
      },
      {
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="size-8 stroke-green-500"
            >
               <rect width="18" height="18" x="3" y="3" rx="2" />
               <path d="M3 9h18" />
               <path d="M9 21V9" />
            </svg>
         ),
         title: "Professional Templates",
         description: "Beautiful, ATS-friendly templates designed by hiring experts.",
      },
      {
         icon: (
            <svg
               className="size-8 stroke-green-500"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M12 15V3" />
               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
               <path d="m7 10 5 5 5-5" />
            </svg>
         ),
         title: "Instant Download",
         description: "Export your resume to PDF format with one click, anytime.",
      },
      {
         icon: (
            <svg
               className="size-8 stroke-green-500"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
               <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
               <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
         ),
         title: "AI Assistant",
         description: "Get smart suggestions to improve your resume content.",
      },
      {
         icon: (
            <svg
               className="size-8 stroke-green-500"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M8 2v4" />
               <path d="M16 2v4" />
               <rect width="18" height="18" x="3" y="4" rx="2" />
               <path d="M3 10h18" />
            </svg>
         ),
         title: "Real-time Preview",
         description: "See changes instantly as you edit your resume content.",
      },
      {
         icon: (
            <svg
               className="size-8 stroke-green-500"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
               <circle cx="12" cy="12" r="3" />
            </svg>
         ),
         title: "Customizable",
         description: "Personalize colors, fonts, and layouts to match your style.",
      },
   ];

   return (
      <div id="features" className="flex flex-col items-center py-24 bg-gray-950 px-6">
         <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-sm text-green-500 bg-green-500/10 rounded-full px-4 py-2 mb-6">
                  <Zap width={16} />
                  <span>Features</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Everything You Need
               </h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Powerful tools to create the perfect resume
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="group p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:bg-gray-900 hover:border-green-600/50 transition-all duration-300"
                  >
                     <div className="mb-5 inline-flex p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                        {feature.icon}
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                     </h3>
                     <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Features;
