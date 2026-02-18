import {
   FilePenLineIcon,
   LoaderCircleIcon,
   PencilIcon,
   PlusIcon,
   TrashIcon,
   UploadCloud,
   UploadCloudIcon,
   XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";
import pdfToText from "react-pdftotext";

const Dashboard = () => {
   const { user, token } = useSelector((state) => state.auth);

   const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
   const [allResumes, setAllResumes] = useState([]);
   const [showCreateResume, setShowCreateResume] = useState(false);
   const [showUploadResume, setShowUploadResume] = useState(false);
   const [title, setTitle] = useState("");
   const [resume, setResume] = useState(null);
   const [editResumeId, setEditResumeId] = useState("");

   const [isLoading, setIsLoading] = useState(false);

   const navigate = useNavigate();

   const loadAllResumes = async () => {
      try {
         const { data } = await api.get("/api/users/resumes", {
            headers: { Authorization: token },
         });
         setAllResumes(data.resumes);
      } catch (error) {
         toast.error(error?.response?.data?.message || error.message);
      }
   };

   const createResume = async (event) => {
      try {
         event.preventDefault();
         const { data } = await api.post(
            "/api/resumes/create",
            { title },
            { headers: { Authorization: token } },
         );
         setAllResumes([...allResumes, data.resume]);
         setTitle("");
         setShowCreateResume(false);
         navigate(`/app/builder/${data.resume._id}`);
      } catch (error) {
         toast.error(error?.response?.data?.message || error.message);
      }
   };

   const uploadResume = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
         const resumeText = await pdfToText(resume);
         const { data } = await api.post(
            "/api/ai/upload-resume",
            { title, resumeText },
            { headers: { Authorization: token } },
         );
         setTitle("");
         setResume(null);
         setShowUploadResume(false);
         navigate(`/app/builder/${data.resumeId}`);
      } catch (error) {
         toast.error(error?.response?.data?.message || error.message);
      }
      setIsLoading(false);
   };

   const editTitle = async (event) => {
      try {
         event.preventDefault();
         const { data } = await api.put(
            `/api/resumes/update`,
            { resumeId: editResumeId, resumeData: { title } },
            { headers: { Authorization: token } },
         );
         setAllResumes(
            allResumes.map((resume) =>
               resume._id === editResumeId ? { ...resume, title } : resume,
            ),
         );
         setTitle("");
         setEditResumeId("");
         toast.success(data.message);
      } catch (error) {
         toast.error(error?.response?.data?.message || error.message);
      }
   };

   const deleteResume = async (resumeId) => {
      try {
         const confirm = window.confirm("Are you sure you want to delete this resume?");
         if (confirm) {
            const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
               headers: { Authorization: token },
            });
            setAllResumes(allResumes.filter((resume) => resume._id !== resumeId));
            toast.success(data.message);
         }
      } catch (error) {
         toast.error(error?.response?.data?.message || error.message);
      }
   };

   useEffect(() => {
      loadAllResumes();
   }, []);

   return (
      <div className="bg-gray-950 min-h-screen">
         <div className="max-w-7xl mx-auto px-4 py-8">
            <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent sm:hidden">
               Welcome, Joe Doe
            </p>

            <div className="flex gap-4 ">
               <button
                  onClick={() => setShowCreateResume(true)}
                  className="w-full bg-gray-900 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-gray-300 border border-dashed border-gray-700 group hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
               >
                  <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600  text-white rounded-full" />
                  <p className="text-sm group-hover:text-indigo-400 transition-all duration-300">
                     Create Resume
                  </p>
               </button>
               <button
                  onClick={() => setShowUploadResume(true)}
                  className="w-full bg-gray-900 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-gray-300 border border-dashed border-gray-700 group hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
               >
                  <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-500 to-purple-600  text-white rounded-full" />
                  <p className="text-sm group-hover:text-purple-400 transition-all duration-300">
                     Upload Existing
                  </p>
               </button>
            </div>

            <hr className="border-gray-800 my-6 sm:w-[305px]" />

            <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
               {allResumes.map((resume, index) => {
                  const baseColor = colors[index % colors.length];
                  return (
                     <button
                        key={index}
                        onClick={() => navigate(`/app/builder/${resume._id}`)}
                        className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                        style={{
                           background: `linear-gradient(135deg, ${baseColor}20, ${baseColor}50)`,
                           borderColor: baseColor + "60",
                        }}
                     >
                        <FilePenLineIcon
                           className="size-7 group-hover:scale-105 transition-all "
                           style={{ color: baseColor }}
                        />
                        <p
                           className="text-sm group-hover:scale-105 transition-all  px-2 text-center"
                           style={{ color: baseColor }}
                        >
                           {resume.title}
                        </p>
                        <p
                           className="absolute bottom-1 text-[11px] text-gray-400 group-hover:text-gray-300 transition-all duration-300 px-2 text-center"
                           style={{ color: baseColor + "90" }}
                        >
                           Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                        </p>
                        <div
                           onClick={(e) => e.stopPropagation()}
                           className="absolute top-1 right-1 group-hover:flex items-center hidden"
                        >
                           <TrashIcon
                              onClick={() => deleteResume(resume._id)}
                              className="size-7 p-1.5 hover:bg-black/30 rounded text-gray-200 transition-colors"
                           />
                           <PencilIcon
                              onClick={() => {
                                 setEditResumeId(resume._id);
                                 setTitle(resume.title);
                              }}
                              className="size-7 p-1.5 hover:bg-black/30 rounded text-gray-200 transition-colors"
                           />
                        </div>
                     </button>
                  );
               })}
            </div>

            {showCreateResume && (
               <form
                  onSubmit={createResume}
                  onClick={() => setShowCreateResume(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
               >
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className="relative bg-gray-900 border border-gray-800 shadow-md rounded-lg w-full max-w-sm p-6"
                  >
                     <h2 className="text-xl font-bold mb-4 text-gray-100">
                        Create a Resume
                     </h2>
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Enter resume title"
                        className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 bg-gray-800 border-gray-700 text-gray-100"
                        required
                     />

                     <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        Create Resume
                     </button>
                     <XIcon
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
                        onClick={() => {
                           setShowCreateResume(false);
                           setTitle("");
                        }}
                     />
                  </div>
               </form>
            )}

            {showUploadResume && (
               <form
                  onSubmit={uploadResume}
                  onClick={() => setShowUploadResume(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
               >
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className="relative bg-gray-900 border border-gray-800 shadow-md rounded-lg w-full max-w-sm p-6"
                  >
                     <h2 className="text-xl font-bold mb-4 text-gray-100">
                        Upload Resume
                     </h2>
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Enter resume title"
                        className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 bg-gray-800 border-gray-700 text-gray-100"
                        required
                     />
                     <div>
                        <label
                           htmlFor="resume-input"
                           className="block text-sm text-gray-300"
                        >
                           Select resume file
                           <div className="flex flex-col items-center justify-center gap-2 border group text-gray-400 border-gray-600 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-400 cursor-pointer transition-colors bg-gray-800">
                              {resume ? (
                                 <p className="text-green-400">{resume.name}</p>
                              ) : (
                                 <>
                                    <UploadCloud className="size-14 stroke-1" />
                                    <p>Upload resume</p>
                                 </>
                              )}
                           </div>
                        </label>
                        <input
                           type="file"
                           id="resume-input"
                           accept=".pdf"
                           hidden
                           onChange={(e) => setResume(e.target.files[0])}
                        />
                     </div>
                     <button
                        disabled={isLoading}
                        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                     >
                        {isLoading && (
                           <LoaderCircleIcon className="animate-spin size-4 text-white" />
                        )}
                        {isLoading ? "Uploading..." : "Upload Resume"}
                     </button>
                     <XIcon
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
                        onClick={() => {
                           setShowUploadResume(false);
                           setTitle("");
                        }}
                     />
                  </div>
               </form>
            )}

            {editResumeId && (
               <form
                  onSubmit={editTitle}
                  onClick={() => setEditResumeId("")}
                  className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
               >
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className="relative bg-gray-900 border border-gray-800 shadow-md rounded-lg w-full max-w-sm p-6"
                  >
                     <h2 className="text-xl font-bold mb-4 text-gray-100">
                        Edit Resume Title
                     </h2>
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Enter resume title"
                        className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 bg-gray-800 border-gray-700 text-gray-100"
                        required
                     />

                     <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        Update
                     </button>
                     <XIcon
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
                        onClick={() => {
                           setEditResumeId("");
                           setTitle("");
                        }}
                     />
                  </div>
               </form>
            )}
         </div>
      </div>
   );
};

export default Dashboard;
