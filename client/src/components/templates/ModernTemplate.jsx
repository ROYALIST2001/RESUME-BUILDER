const ModernTemplate = ({ data, accentColor }) => {
   const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const [year, month] = dateStr.split("-");
      return new Date(year, month - 1).toLocaleDateString("en-US", {
         year: "numeric",
         month: "short",
      });
   };

   return (
      <div className="max-w-4xl mx-auto bg-white text-gray-800">
         {/* Header */}
         <header className="p-8 text-white" style={{ backgroundColor: accentColor }}>
            <h1 className="text-3xl font-bold mb-3">
               {data.personal_info?.full_name || "Your Name"}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm">
               {data.personal_info?.email && <span>{data.personal_info.email}</span>}
               {data.personal_info?.phone && <span>• {data.personal_info.phone}</span>}
               {data.personal_info?.location && (
                  <span>• {data.personal_info.location}</span>
               )}
               {data.personal_info?.linkedin && (
                  <span className="break-all">• {data.personal_info.linkedin}</span>
               )}
               {data.personal_info?.website && (
                  <span className="break-all">• {data.personal_info.website}</span>
               )}
            </div>
         </header>

         <div className="p-8">
            {/* Professional Summary */}
            {data.professional_summary && (
               <section className="mb-8">
                  <h2 className="text-xl font-bold mb-3" style={{ color: accentColor }}>
                     Summary
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                     {data.professional_summary}
                  </p>
               </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
               <section className="mb-8">
                  <h2 className="text-xl font-bold mb-5" style={{ color: accentColor }}>
                     Experience
                  </h2>

                  <div className="space-y-6">
                     {data.experience.map((exp, index) => (
                        <div key={index}>
                           <div className="flex justify-between items-start mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                 {exp.position}
                              </h3>
                              <span className="text-sm text-gray-500">
                                 {formatDate(exp.start_date)} -{" "}
                                 {exp.is_current ? "Present" : formatDate(exp.end_date)}
                              </span>
                           </div>
                           <p className="text-gray-600 mb-2">{exp.company}</p>
                           {exp.description && (
                              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                 {exp.description}
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
               <section className="mb-8">
                  <h2 className="text-xl font-bold mb-4" style={{ color: accentColor }}>
                     Projects
                  </h2>

                  <div className="space-y-5">
                     {data.project.map((p, index) => (
                        <div key={index}>
                           <h3 className="text-lg font-semibold text-gray-900">
                              {p.name}
                           </h3>
                           {p.description && (
                              <div className="text-gray-700 leading-relaxed mt-2">
                                 {p.description}
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </section>
            )}

            <div className="grid sm:grid-cols-2 gap-8">
               {/* Education */}
               {data.education && data.education.length > 0 && (
                  <section>
                     <h2
                        className="text-xl font-bold mb-4"
                        style={{ color: accentColor }}
                     >
                        Education
                     </h2>

                     <div className="space-y-4">
                        {data.education.map((edu, index) => (
                           <div key={index}>
                              <h3 className="font-semibold text-gray-900">
                                 {edu.degree} {edu.field && `in ${edu.field}`}
                              </h3>
                              <p className="text-gray-600">{edu.institution}</p>
                              <div className="flex gap-3 text-sm text-gray-500">
                                 <span>{formatDate(edu.graduation_date)}</span>
                                 {edu.gpa && <span>• GPA: {edu.gpa}</span>}
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>
               )}

               {/* Skills */}
               {data.skills && data.skills.length > 0 && (
                  <section>
                     <h2
                        className="text-xl font-bold mb-4"
                        style={{ color: accentColor }}
                     >
                        Skills
                     </h2>

                     <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                           <span
                              key={index}
                              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                           >
                              {skill}
                           </span>
                        ))}
                     </div>
                  </section>
               )}
            </div>
         </div>
      </div>
   );
};

export default ModernTemplate;
