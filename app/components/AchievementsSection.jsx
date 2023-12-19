import React from "react";

const achievementsList = [
  {
    value: "1",
    metric: "First one in my university class",
    
  },
  {
    metric: "Projects",
    value: "4",
    postfix: "+",
  },
  {
    metric: "Awards: Webster University Scholarship",
    value: "1",
  },
  {
    metric: "Years of experience in English",
    value: "10",
    prefix: "+"
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {achievement.value}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
