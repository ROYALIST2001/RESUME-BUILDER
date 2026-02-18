const MinimalImageTemplate = ({ data, accentColor }) => {
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
         <div className="p-8 border-b border-gray-200">
            <div className="flex items-center gap-6">
               {/* Image */}
               {data.personal_info?.image &&
               typeof data.personal_info.image === "string" ? (
                  <img
                     src={data.personal_info.image}
                     alt="Profile"
                     className="w-24 h-24 object-cover rounded-full"
                  />
               ) : data.personal_info?.image &&
                 typeof data.personal_info.image === "object" ? (
                  <img
                     src={URL.createObjectURL(data.personal_info.image)}
                     alt="Profile"
                     className="w-24 h-24 object-cover rounded-full"
                  />
               ) : null}

               {/* Name + Contact */}
               <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-1" style={{ color: accentColor }}>
                     {data.personal_info?.full_name || "Your Name"}
                  </h1>
                  <p className="text-gray-600 mb-3">
                     {data?.personal_info?.profession || "Profession"}
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                     {data.personal_info?.phone && (
                        <span>{data.personal_info.phone}</span>
                     )}
                     {data.personal_info?.email && (
                        <span>• {data.personal_info.email}</span>
                     )}
                     {data.personal_info?.location && (
                        <span>• {data.personal_info.location}</span>
                     )}
                  </div>
               </div>
            </div>
         </div>
         {/* Main Content */}
         <div className="p-8">
            {/* Professional Summary */}
            {data.professional_summary && (
               <section className="mb-8">
                  <h2
                     className="text-lg font-bold mb-3 uppercase"
                     style={{ color: accentColor }}
                  >
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
                  <h2
                     className="text-lg font-bold mb-4 uppercase"
                     style={{ color: accentColor }}
                  >
                     Experience
                  </h2>
                  <div className="space-y-6">
                     {data.experience.map((exp, index) => (
                        <div key={index}>
                           <div className="flex justify-between items-start mb-1">
                              <h3 className="font-bold text-gray-900">{exp.position}</h3>
                              <span className="text-sm text-gray-500">
                                 {formatDate(exp.start_date)} -{" "}
                                 {exp.is_current ? "Present" : formatDate(exp.end_date)}
                              </span>
                           </div>
                           <p className="text-gray-600 mb-2">{exp.company}</p>
                           {exp.description && (
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                 {exp.description}
                              </p>
                           )}
                        </div>
                     ))}
                  </div>
               </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
               <section className="mb-8">
                  <h2
                     className="text-lg font-bold mb-4 uppercase"
                     style={{ color: accentColor }}
                  >
                     Projects
                  </h2>
                  <div className="space-y-4">
                     {data.project.map((project, index) => (
                        <div key={index}>
                           <h3 className="font-bold text-gray-900">{project.name}</h3>
                           {project.description && (
                              <p className="text-gray-700 mt-1 leading-relaxed whitespace-pre-line">
                                 {project.description}
                              </p>
                           )}
                        </div>
                     ))}
                  </div>
               </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
               <section className="mb-8">
                  <h2
                     className="text-lg font-bold mb-4 uppercase"
                     style={{ color: accentColor }}
                  >
                     Education
                  </h2>
                  <div className="space-y-4">
                     {data.education.map((edu, index) => (
                        <div key={index}>
                           <div className="flex justify-between items-start">
                              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                              <span className="text-sm text-gray-500">
                                 {formatDate(edu.graduation_date)}
                              </span>
                           </div>
                           <p className="text-gray-600">{edu.institution}</p>
                           {edu.gpa && (
                              <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                           )}
                        </div>
                     ))}
                  </div>
               </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
               <section>
                  <h2
                     className="text-lg font-bold mb-4 uppercase"
                     style={{ color: accentColor }}
                  >
                     Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                     {data.skills.map((skill, index) => (
                        <span
                           key={index}
                           className="px-3 py-1 bg-gray-100 text-gray-700 rounded"
                        >
                           {skill}
                        </span>
                     ))}
                  </div>
               </section>
            )}
         </div>
      </div>
   );
};

export default MinimalImageTemplate;
