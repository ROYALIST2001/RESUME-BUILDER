import React from "react";
import { X } from "lucide-react";

const Banner = () => {
   const [isVisible, setIsVisible] = React.useState(true);

   if (!isVisible) return null;

   return (
      <div className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
               <span className="px-2 py-1 bg-white/20 rounded text-xs font-semibold">
                  NEW
               </span>
               <span className="font-medium">
                  AI-Powered Resume Builder Now Available
               </span>
            </div>
            <button
               onClick={() => setIsVisible(false)}
               className="p-1 hover:bg-white/10 rounded transition"
            >
               <X className="size-4" />
            </button>
         </div>
      </div>
   );
};

export default Banner;
