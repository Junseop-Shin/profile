export interface CareerEvent {
  company: string;
  role: string;
  period: string;
  duration: string;
  highlight: boolean;
  summary: string;
}

export const career: CareerEvent[] = [
  {
    company: "주식회사 티앤엠테크",
    role: "대리 / 서비스팀",
    period: "2025.04 ~ 재직 중",
    duration: "1년 4개월",
    highlight: true,
    summary:
      "SEMS 편의점 유지보수 및 TnM IoT 플랫폼 이관, CI/CD 자동화, 클라우드 비용 최적화, 플랫폼 v2 재설계",
  },
  {
    company: "주식회사 액스",
    role: "프론트엔드 개발자",
    period: "2023.09 ~ 2023.12",
    duration: "4개월",
    highlight: true,
    summary:
      "여행 B2B 서비스 신기능 구현 및 TypeScript·디자인시스템 도입. 할당 이슈 180개 중 140개(78%) 해결",
  },
  {
    company: "티맥스가이아",
    role: "프론트엔드 개발자",
    period: "2021.10 ~ 2023.09",
    duration: "1년 11개월",
    highlight: true,
    summary:
      "웹오피스(포인트/셀/워드) 클립보드·셀렉션 프레임워크 개발 및 CI/CD 관리",
  },
  {
    company: "(주)티맥스에이앤씨",
    role: "C++ 개발자",
    period: "2020.02 ~ 2021.10",
    duration: "1년 9개월",
    highlight: true,
    summary: "ToHangul 한글 문서 편집기 개발. KERIS·서울시 교육청에 서비스 제공",
  },
  {
    company: "한국수력원자력(주)",
    role: "발전소 현장근무",
    period: "2016.08 ~ 2020.01",
    duration: "3년 6개월",
    highlight: false,
    summary: "원자력발전소 현장 교대근무. RI 자격증 취득",
  },
  {
    company: "서울대학교",
    role: "원자핵공학과 학사",
    period: "2010.03 ~ 2016.08",
    duration: "",
    highlight: false,
    summary: "상압 플라즈마(DBD)의 자기장 분포 측정 및 분석",
  },
];
