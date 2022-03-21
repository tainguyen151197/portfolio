import React from "react";

const educationContent = [
  {
    year: "Aug 2017 - Jun 2020",
    degree: "Bachelor of IT: Application Development",
    institute: "Deakin UNIVERSITY, Melbounre, Australia",
    details: `  ● Undergraduate Excellence Award 2021`,
    details1: `● Top 10 undergraduates in IT Department, High Distinction Level`,
    details11: ` ● Honor: Alfred Medal for Outstanding Academic Achievement`,
    details111: ` ● Scholarship: Deakin STEM`,
  },
  {
    year: "Jul 2015 - Jun 2017",
    degree: "Bachelor of Electronics Engineering",
    institute: "Bach Khoa UNIVERSITY, Hochiminh, Vietnam",
    details: `● Transnational Education`,
    details1: `● Distinction Level`,
  },
  {
    year: "Aug 2012 - Jun 2015",
    degree: "Highschool Diploma",
    institute: "Quang Trung High School For The Gifted, Binh Phuoc, Vietnam",
    details: `● Mathematics and Informatics class`,
    details1: ` ● GPA 3.7`,
    details11: ` ● High Distinction Level`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <p className="open-sans-font">{val.institute}</p>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <p className="open-sans-font">{val.details1}</p>
          <p className="open-sans-font">{val.details11}</p>
          <p className="open-sans-font">{val.details111}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
