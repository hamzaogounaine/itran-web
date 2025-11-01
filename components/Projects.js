// components/Projects.jsx
'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ProjectCard from "./mvpblocks/projectsCard";
import ProjectModal from "./ProjectModal"; // Import the new modal component
import { useLocale, useTranslations } from "next-intl";
import getProjects from "@/lib/getProjects";

const Projects = () => {
  const t = useTranslations('projects');
  const currentLocale = useLocale();

  const [rawProjects, setRawProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the project for the modal

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setRawProjects(projects);
    };
    fetchProjects();
  }, []);

  // Data Transformation: Map raw data to localized card props
  const localizedProjects = rawProjects.map(project => {
    return {
      id: project.id,
      title: project.Title || project.id, 
      description: project.Desctiption[currentLocale] || 
                   project.Desctiption.en,
      images: project.Images || [],
      features: project.Features[currentLocale] || 
                project.Features.en,
    };
  });

  const handleShowMore = () => setVisibleCount((prev) => prev + 3);
  const handleShowLess = () => setVisibleCount(3);

  // Animation variants
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-8">
      <h1 className="font-geist  mt-4 text-3xl font-normal tracking-tighter sm:text-center text-white sm:text-4xl md:text-5xl">
        {t('title')}
      </h1>
      <p className="font-geist  mt-4  font-normal tracking-tighter text-white/80 mb-5  sm:text-center">
        {t('subtitle')}
      </p>
      <hr className="mx-auto mt-5 mb-10 h-px w-1/2 bg-gray-700" />

      {/* Animated Grid */}
      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatePresence>
          {localizedProjects.slice(0, visibleCount).map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
              layout
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
                // Pass a function to open the modal with the specific project's full details
                onViewDetails={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show more / less button */}
      <div className="flex justify-center mt-10">
        {visibleCount < localizedProjects.length ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowMore}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            {t('showMore') || 'Show More'}
          </motion.button>
        ) : (
          localizedProjects.length > 3 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowLess}
              className="px-6 py-3 bg-gray-800 text-gray-200 font-semibold rounded-lg hover:bg-gray-700 transition-all"
            >
              {t('showLess') || 'Show Less'}
            </motion.button>
          )
        )}
      </div>

      {/* The Project Modal component */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;