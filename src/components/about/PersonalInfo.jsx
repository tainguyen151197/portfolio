import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Dang Khoa" },
  { meta: "last name", metaInfo: "Pham" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Vietnamese" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Vietnam" },
  { meta: "phone", metaInfo: "+84 907 8888 31" },
  { meta: "Email", metaInfo: "khoaphamdang31@gmail.com" },
  { meta: "Discord", metaInfo: " Robert Downey#6666" },
  { meta: "langages", metaInfo: "Vietnamese, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
