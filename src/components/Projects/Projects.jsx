import React from 'react'
import Title from '../layouts/Title'
import { projectThree,atm, Poshan_Tracker, Netflix, ecommerce ,} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=' A E-COMMERCE CLOTHING SHOP'
          des="Developed a modern and user-friendly e-commerce web application for seamless online shopping. The platform offers an extensive collection of trendy clothing with an intuitive browsing experience. Users can explore categories, view detailed product descriptions, and add items to their cart effortlessly. The admin panel allows easy management of inventory, product listings, and customer orders.!"
          src={ecommerce}
        />
        <ProjectsCard
          title="POSHAN TRACKER"
          des=" Developed a web-based Poshan Tracker to streamline the monitoring of nutritional products distributed to Anganwadi centers in villages. The platform enables efficient tracking of beneficiaries, including pregnant women, lactating mothers, and children, ensuring timely support to prevent malnutrition. The system features a user-friendly interface for data entry and an admin dashboard for managing records, generating reports, and overseeing distributions.!"
          src={Poshan_Tracker}
        />
        <ProjectsCard
          title="NETFLIX REPLICA (2023)"
          des=" Designed and developed a Netflix replica front-end with a sleek and responsive UI. The platform features an intuitive homepage with dynamic content categories, a smooth browsing experience, and an interactive search bar. Implemented a hover effects, and a user-friendly navigation system for seamless content discovery. Built using modern front-end technologies to ensure a visually appealing and engaging streaming experience.."
          src={Netflix}
        />
        <ProjectsCard
          title="TO-DO-LIST (2024)"
          des=" Developed a sleek and interactive To-Do web application with a user-friendly interface. The platform allows users to add, edit, delete, and mark tasks as complete, ensuring efficient task management. Features include real-time updates, categorization, and a responsive design for seamless use across devices. Built with a modern front-end framework to enhance user experience and productivity."
          src={projectThree}
        />
        <ProjectsCard
          title="ATM Simulation System"
          des="A Java-based application that simulates essential ATM functionalities like checking balances, updating PINs,
           and withdrawing/depositing money. Users are assigned a unique ATM number with a default PIN, which must be changed. 
           The system uses OOP concepts, HashMap for user data, and ensures secure transactions with exception handling and ATM cash management. It offers a menu-driven interface for a seamless and secure banking experience."
          src={atm}
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects