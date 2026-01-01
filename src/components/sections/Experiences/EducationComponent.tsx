import { Education } from "@/data/Experiences";
import Image from "next/image";
import { motion } from "framer-motion";

const EducationComponent = ({ education }: { education: Education }) => {
  return (
    <motion.div
      className="flex gap-4 lg:gap-6 p-4 lg:p-5 hover:bg-white/5 rounded-xl transition-all duration-300 ease-out group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-shrink-0 pt-1.5">
        <Image
          className="rounded-xl w-12 h-12 sm:w-14 sm:h-14 object-contain bg-white/5 p-1.5 transition-transform duration-300 group-hover:scale-105"
          width={56}
          height={56}
          src={`/brands/${education.image}`}
          alt={`${education.school} logo`}
          loading="lazy"
        />
      </div>

      <div className="flex-1 space-y-3">
        <div className="space-y-1.5">
          <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wide">
            {education.date}
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {education.school}
          </h3>
          <div className="text-sm sm:text-base text-gray-200 space-y-1">
            <p className="font-semibold">{education.degree}</p>
            {education.fieldOfStudy && (
              <p className="text-gray-400">{education.fieldOfStudy}</p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-3">
          <div className="space-y-3">
            {education.grades && (
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/20 mt-2" />
                <p className="text-sm">
                  <span className="font-medium">Grades:</span>{" "}
                  {education.grades}
                </p>
              </div>
            )}

            {education.honors?.map((honor, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 text-gray-300"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/20 mt-2" />
                <p className="text-sm">🏅 {honor}</p>
              </div>
            ))}

            {education.coursework?.length && (
              <div className="pt-2">
                <p className="text-xs text-primary/80 mb-1">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationComponent;
