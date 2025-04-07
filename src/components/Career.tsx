import React from "react";
import Section from "./common/Section";

const CareerSection: React.FC = () => {
  const events = [
    {
      heading: "서울대학교",
      where: "원자핵공학과",
      fromTo: "2010.03 ~ 2016.08",
      description: "학점 3.2/4.3",
    },
    {
      heading: "발전소 현장근무",
      where: "한국수력원자력",
      fromTo: "2016.08 ~ 2020.01",
      description: "인턴 교육 및 원자력발전소에서 계통 및 기계 설비 유지보수",
    },
    {
      heading: "C++ 개발",
      where: "티맥스오피스",
      fromTo: "2020.02 ~ 2022.02",
      description:
        "윈도우 기반 문서 편집기(포인트/셀/워드/한글)를 개발하는 본부에서 hwp 문서 편집기 개발",
    },
    {
      heading: "프론트엔드 개발",
      where: "티맥스오피스",
      fromTo: "2022.02 ~ 2023.09",
      description:
        "웹 오피스(포인트/셀/워드)를 개발하는 본부에서 공통 프레임워크 개발",
    },
    {
      heading: "프론트엔드 개발",
      where: "액스",
      fromTo: "2023.09 ~ 2023.12",
      description: "여행 상품 관리 웹페이지 개발",
    },
  ];

  return (
    <Section id="career">
      <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
        Career
      </h2>

      <div className="space-y-6 ">
        {events.reverse().map((event) => (
          <div
            key={event.fromTo}
            className="flex flex-col items-center space-x-4 nth-last-[n+3]:shadow-lg nth-last-[n+3]:rounded-lg nth-last-[n+3]:p-4 nth-last-[-n+2]:opacity-50"
          >
            <h4 className="text-2xl font-bold text-gray-800">
              {event.heading}
            </h4>
            <div className="flex items-center justify-center text-lg font-semibold opacity-50">
              {`${event.where} (${event.fromTo})`}
            </div>
            <p className="text-sm text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CareerSection;
