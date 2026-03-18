export interface CareerEvent {
  company: string;
  role: string;
  period: string;
  duration: string;
  highlight: boolean;
  summary: string;
  tasks?: {
    title: string;
    period?: string;
    stack?: string;
    items: string[];
  }[];
}

export const career: CareerEvent[] = [
  {
    company: "주식회사 티앤엠테크",
    role: "대리 / 서비스팀",
    period: "2025.04 ~ 재직 중",
    duration: "1년",
    highlight: true,
    summary:
      "SEMS 서비스 유지보수 및 Azure 플랫폼 마이그레이션, CI/CD 자동화, 클라우드 비용 최적화",
    tasks: [
      {
        title: "SEMS 서비스 유지관리",
        period: "2025.04 ~ 2025.12",
        stack: "Spring, Java, MariaDB, React, Next.js, TypeScript, Rollbar",
        items: [
          "모바일 웹 JSP → React 전환 유지보수",
          "FCM 최신화 및 배치 처리로 푸시 속도 90% 개선",
          "Rollbar 모바일 프론트 오류 100% / WAS 오류 80% 제거",
          "전력량 보정 로직 적용으로 80% 점포 오차 5% 이내 달성",
          "공통 컴포넌트(서명, 이미지, 헤더 아이콘 등) 구현 및 적용",
          "기상청 API 오류 대응 및 신규 기능 추가(간판 점검, 해피콜, 양수도 등)",
        ],
      },
      {
        title: "SEMS 플랫폼 Azure 이관",
        period: "2025.06 ~ 2026.02",
        stack:
          "Spring Boot, Java, Python, PostgreSQL, MongoDB, Azure Servicebus, Azure Function app, MQTT",
        items: [
          "MariaDB → PostgreSQL 마이그레이션 (SQL dialect 변환 366개)",
          "Ncloud bucket → Azure Blob Storage 이관, SAS token 적용",
          "프로시저 쿼리 개선으로 실행시간 7분 → 20초 (95% 단축)",
          "수동 배포 → GitHub Actions CI/CD 자동화, pm2 무중단 배포",
          "기상청·환경공단·알리고 API 연동 및 스테이징 환경 구축",
          "관제웹 신규 서비스 개발 및 도메인 전환",
          "설치앱 신규 서비스 개발 및 도메인 전환",
          "모바일앱 신규 서비스 개발 및 도메인 전환",
          "기타 외부 연동 API 유지보수",
        ],
      },
      {
        title: "TnM 플랫폼 위젯 개발",
        period: "2025.12 ~ 2026.01",
        stack: "React, TypeScript, react-flow",
        items: [
          "커스텀 차트 위젯 개발",
          "룰체인(react-flow) 위젯 개발",
          "냉장비 정기점검 AI 연동 대시보드 위젯 개발",
        ],
      },
      {
        title: "클라우드 비용 절감",
        period: "2026.01",
        stack: "Azure, Ncloud",
        items: [
          "기존 Ncloud 리소스 정리로 월 약 260만원 절감",
          "Azure 운영 환경 최적화로 월 약 $742 추가 절감",
          "logAnalytics, Function apps, VM 최적화 및 미사용 리소스 제거",
          "GitHub self-hosted runner 적용으로 보안 강화",
        ],
      },
      {
        title: "팀 협업툴 체계 수립",
        stack: "Jira, Slack, GitHub, Codex",
        items: [
          "비즈니스별 Slack 모니터링/유지보수 채널 구성",
          "Jira 팀 스페이스 생성, 스프린트 및 자동화 룰 적용",
          "GitHub 브랜치 관리 룰 및 Codex PR 리뷰 도입",
        ],
      },
      {
        title: "플랫폼 Task 구조 리팩토링",
        period: "2026.02",
        stack: "Java, Python, FastAPI, Azure Monitor",
        items: [
          "로깅 정책 통일 (롤링, 포맷, Slack 메시지)",
          "폴더 구조 개선 및 서버 서비스 FastAPI + Uvicorn 통일",
          "graceful shutdown 및 Azure Monitor 적용",
        ],
      },
    ],
  },
  {
    company: "주식회사 액스",
    role: "프론트엔드 개발자",
    period: "2023.09 ~ 2023.12",
    duration: "4개월",
    highlight: true,
    summary:
      "여행 B2B 서비스 신기능 구현 및 TypeScript·디자인시스템 도입. 할당 이슈 180개 중 140개(78%) 해결",
    tasks: [
      {
        title: "제품 안정화",
        stack: "React, JavaScript, Styled-Components",
        items: [
          "백로그 포함 할당 이슈 약 180개 중 78%, 140개 해결",
          "백로그 제외 전체 해결",
        ],
      },
      {
        title: "신기능 구현",
        stack: "React, TypeScript, Styled-Components, SWR, Redux",
        items: [
          "계정 계좌/채널/계약 정보 생성·상세·수정 페이지 추가",
          "상품 판매단위 생성 상세/수정 페이지 추가",
          "가채널 판매 미리보기 및 비회원 공유용 미리보기 구현",
        ],
      },
      {
        title: "CI/CD 및 공통 구조",
        stack: "TypeScript, ESLint, Redux, SWR, date-fns",
        items: [
          "TypeScript, ESLint, Prettier 신규 구현부부터 적용",
          "pre-commit type/lint check 및 PR 빌드 action 추가",
          "Color, Label, Icon, InputField, Dropdown, Modal 등 디자인 시스템 구축",
          "Redux, SWR 적용. moment → date-fns 교체",
        ],
      },
    ],
  },
  {
    company: "티맥스가이아",
    role: "프론트엔드 개발자",
    period: "2020.08 ~ 2023.09",
    duration: "3년 2개월",
    highlight: true,
    summary:
      "웹오피스(포인트/셀/워드) 클립보드·셀렉션 프레임워크 개발 및 CI/CD 구축",
    tasks: [
      {
        title: "웹오피스 클립보드 프레임워크",
        period: "2022.02 ~ 2023.09",
        stack: "React, TypeScript, MobX",
        items: [
          "오피스 클립보드 포맷 데이터 Object화, sync 보장 및 큐 구조로 리팩토링",
          "표준 웹 클립보드 API를 이용한 외부 오피스 데이터 호환 프레임워크 구현",
          "포맷 간 변환 parse/write 구조 및 copy/paste pre/post 프로세스 개선",
        ],
      },
      {
        title: "웹오피스 셀렉션 프레임워크",
        period: "2022.06 ~ 2023.09",
        stack: "React, TypeScript, MobX",
        items: [
          "모델 정보 기반 셀렉션 자동생성 리팩토링",
          "도형·표 등 자체 셀렉션 및 공동 편집 세션별 처리",
          "중복/불필요 구조 개선 및 전처리/후처리 로직 추가",
        ],
      },
      {
        title: "웹오피스 클라이언트 CI/CD",
        period: "2023.02 ~ 2023.09",
        stack: "Webpack, Jest, React, GitLab",
        items: [
          "webpack v4→v5, babel-loader→esbuild-loader 전환으로 빌드 성능 개선",
          "jest v26→v29 업그레이드, 비동기 mocking으로 테스트 성능 개선",
          "React v16→v18 마이그레이션 및 전체 패키지 버전 업데이트",
          "GitLab runner 메모리 제한, husky Node.js 마이그레이션, MR action 속도 개선",
        ],
      },
    ],
  },
  {
    company: "(주)티맥스에이앤씨",
    role: "C++ 개발자",
    period: "2020.02 ~ 2020.08",
    duration: "7개월",
    highlight: true,
    summary: "ToHangul 한글 문서 편집기 개발. KERIS에 서비스 제공",
    tasks: [
      {
        title: "ToHangul 개발",
        stack: "C++, OOXML, MVC 패턴",
        items: [
          "쪽 번호 매기기, 머리말꼬리말 편집/템플릿 기능 구현",
          "인쇄/미리보기/회색조 전체처리(paint vs print), 화면 스케일링",
          "줄번호 카운팅 및 페인트 기능 구현",
          "KERIS에 ToHangul 서비스 제공",
        ],
      },
    ],
  },
  {
    company: "한국수력원자력(주)",
    role: "발전소 현장근무",
    period: "2016.08 ~ 2020.01",
    duration: "3년 6개월",
    highlight: false,
    summary: "원자력발전소 계통 및 기계 설비 유지보수. RI 자격증 취득",
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
