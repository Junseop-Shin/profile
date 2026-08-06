export const about = {
  name: "신준섭",
  nameEn: "Junseop Shin",
  title: "Fullstack Developer",
  tagline: "구조가 정리되고, 팀이 더 잘 일하고, 내가 성장할 때 — 개발이 가장 즐겁습니다.",
  intro: [
    "서비스가 나아지고 스스로도 성장하는 순간의 성취감이 개발을 즐겁게 만듭니다.",
    "넘겨받은 레거시를 정리하는 일에서 시작해, 지금은 플랫폼 아키텍처를 직접 설계하고 그 위에 서비스를 얹는 일을 하고 있습니다.",
    "일정과 우선순위를 스스로 잡아가며 일을 주도하는 걸 좋아합니다.",
  ],
  strengths: [
    {
      title: "레거시 인수와 구조 재설계",
      description:
        "크고 복잡한 레거시 코드를 분석해 기능 개발, 문제 해결, 구조 개선을 주 업무로 오래 다뤘습니다. C++ 문서 편집기부터 웹오피스 공통 프레임워크, JSP→React 전환, 220개 테이블·200GB 규모의 MariaDB→PostgreSQL 이관, Ncloud→Azure 이관을 거쳐, 지금은 5개 서비스가 한 서버에 얽혀 있던 IoT 플랫폼을 서비스별 분리 구조로 재설계하고 프론트엔드 프레임워크와 Go 이벤트 파이프라인을 담당하고 있습니다.",
      metrics: [
        { label: "관리 점포", value: "약 1.8만", suffix: "점포" },
        { label: "센싱 데이터 수집", value: "일 5,200만", suffix: "건" },
        { label: "FCM 처리 속도", value: "90%", suffix: "개선" },
        { label: "쿼리 성능", value: "95%", suffix: "개선 (7분→20초)" },
        { label: "Rollbar 모바일 오류", value: "100%", suffix: "제거" },
        { label: "Azure 운영 비용", value: "월 $742", suffix: "절감" },
        { label: "스토리지 비용", value: "월 123만 → 48만원", suffix: "고정비화" },
      ],
    },
    {
      title: "중단된 일의 완결",
      description:
        "외주가 만들다 중단한 React 모바일 앱을 인계받아 미연결 기능과 잔존 오류를 하나씩 잡아 완성했고, 언어도 운영 패턴도 제각각이던 3개 언어 배치 레포를 한 호흡에 공통 프레임워크로 정리했습니다. 남이 놓고 간 것, 아무도 손대지 않던 것을 끝까지 가져가 마무리하는 일을 반복해왔습니다.",
      metrics: [],
    },
    {
      title: "주도적 플랜 수립과 실행",
      description:
        "한 달째 멈춰 있던 아키텍처 논의를 정리해 전체 설계와 플랜을 수립하고, 파트를 쪼개 팀에 배분한 뒤 남은 프론트엔드와 이벤트 파이프라인을 직접 맡았습니다. 지라 스프린트, 슬랙 모니터링 채널, GitHub 브랜치 룰처럼 필요하다고 판단한 협업 체계도 스스로 만들어 적용했습니다.",
      metrics: [],
    },
  ],
  certifications: [
    { name: "AZ-900", muted: false },
    { name: "SQLD", muted: false },
    { name: "ADsP", muted: false },
    { name: "RI(방사선동위원소취급자 일반면허)", muted: true },
  ],
  email: "nuclearbomb6518@gmail.com",
  linkedin: "https://www.linkedin.com/in/준섭-신-24b5a8247/",
  github: "https://github.com/Junseop-Shin/",
  resumePath: "/resume.pdf",
};
