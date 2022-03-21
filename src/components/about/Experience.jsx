import React from "react";

const experienceContent = [
  {
    year: "  Apr 2021  - Present",
    position: "Android Developer",
    compnayName: "Samsung Electronics HCMC CE Complex, Hochiminh, Vietnam",
    project: "SmartThings - Digital Application Software R&D group",
    details: `●	Built the back-end functions, native code with Android Studio using Java, Kotlin, and Flutter`,
    details1: `●	Key contributor in the development of native side of the digital application project (SHP, OCF, MQTT)`,
    details11: ` ●	Strongly capable of integrating with APIs RESTful, connection flow between Native & Front - End`,
    details111: ` ●	Sub-lead Android native team for 3 members, processed interview and mentored for new comers`,
    details1111: ` ●	Strongly co-operated and communicated with HQ from Korea and Idian for training and project`,
  },
  {
    year: "June 2020 - Feb 2021",
    position: " Android Developer",
    compnayName: "VTI Corporation, Hanoi, Vietnam",
    project: "Pet Monitoring - Pet owners stay in touch and interact with their pet ",
    details: `●	Designed UX/UI for some parts of the application with Android SDK and Figma tools`,
    details1: `●	Incorporated the use of Firebase and SQL`,
    details11: ` ●	Built the back-end functions with Android Studio`,
    details111: ` ●	Architecting an app using the MVC model`,
    project2: "TP Mobile Banking - Internet banking for Tien Phong Bank",
    details2: `●	Built, modified, and refactored functional components of code within the main features of banking`,
    details22: `●	Retrieved and updated the real-time database of users with Firebase`,
    details222: ` ●	Strongly capable of integrating with Google services, maps, and APIs RESTful`,
    details2222: ` ●	Architecting an app using the MVVM model`,
  },
  {
    year: "Feb - June 2020",
    position: "Front-end Developer",
    project: "FPT Intern - Remotely Project ",
    compnayName: "FPT Global, Melbourne, Australia",
    details: `●	Designed UX/UI for products and advertisements for FPT internation program using Figma tools`,
    details1: `●	Designed and upgraded the UI for the mobile application in Adobe XD and in Android Studio`,
    details11: ` ●	Worked closely with the Design team to create a UI that optimized the application conversion rates`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <p className="open-sans-font">{val.compnayName}</p>
          </h5>
          <p classname="open-sans-font">{val.project}</p><br></br>
          <p className="open-sans-font">{val.details}</p>
          <p className="open-sans-font">{val.details1}</p>
          <p className="open-sans-font">{val.details11}</p>
          <p className="open-sans-font">{val.details111}</p>
          <p className="open-sans-font">{val.details1111}</p>
          <br></br><p classname="open-sans-font">{val.project2}</p><br></br>
          <p className="open-sans-font">{val.details2}</p>
          <p className="open-sans-font">{val.details22}</p>
          <p className="open-sans-font">{val.details2222}</p>
          <p className="open-sans-font">{val.details2222}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
