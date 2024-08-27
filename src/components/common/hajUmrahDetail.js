import React, { useState } from "react";
import Accordion from "./accordion";
const HajUmrahDetail = (props) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (accordionNumber) => {
    setOpenAccordion(
      openAccordion === accordionNumber ? null : accordionNumber
    );
  };
  const accordionData = [
    {
      count: "1",
      head: "What technologies do you specialize in?",
      para: "I specialize in modern web development technologies including React, Node.js, and TypeScript. I also have experience with database management using MySQL and ORM tools like Prisma.",
    },
    {
      count: "2",
      head: "Can you build custom web applications?",
      para: "Absolutely! I can build custom web applications tailored to your specific needs. From front-end design to back-end development, I ensure the application is robust and scalable.",
    },
    {
      count: "3",
      head: "How do you ensure code quality?",
      para: "I follow best practices in software development, including writing clean, maintainable code and implementing thorough testing. I also perform regular code reviews and refactoring to improve code quality.",
    },
    {
      count: "4",
      head: "Do you offer maintenance and support?",
      para: "Yes, I offer ongoing maintenance and support for the projects I develop. This includes fixing bugs, adding new features, and ensuring the application runs smoothly over time.",
    },
    {
      count: "5",
      head: "What is your approach to project management?",
      para: "I use agile methodologies to manage projects effectively. This allows for flexibility, continuous improvement, and collaboration with clients to ensure their requirements are met and the project is delivered on time.",
    },
  ];
  return (
    <div>
      <section className="mt-16">
        <div className="flex flex-col gap-2 text-white ">
          <h4 className="text-[40px] gilroy-medium">Guide</h4>
          <p className="pb-4 text-[20px] text-[#A8A8A8]">{props.para}</p>
          <img src={props.img} alt="haj_intro"/>
          <div className="pt-8 pb-11">
            <p>{props.mainPara}</p>
          </div>
          <div className="flex flex-col  gap-3 justify-center w-full ">
            {accordionData.map((item) => (
              <Accordion
                key={item.count}
                isOpen={openAccordion === item.count}
                onToggle={handleAccordionToggle}
                count={item.count}
                head={item.head}
                para={item.para}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HajUmrahDetail;
