export type ProjectType = "personal" | "work";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  type: ProjectType;
  title: string;
  subtitle: string;
  period: string;
  company?: string;
  stack: string[];
  thumbnail: string;
  ogImage?: string;
  summary: string;
  metrics?: ProjectMetric[];
  web?: string;
  github?: string;
  sections?: {
    heading: string;
    items: string[];
  }[];
}

export const projects: Project[] = [
  // ── Personal ──────────────────────────────────────────────────
  {
    slug: "profile",
    type: "personal",
    title: "프로필 사이트",
    subtitle: "개인 포트폴리오 웹페이지",
    period: "2025.04 ~",
    stack: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "motion"],
    thumbnail: "/profile-screenshot.png",
    summary:
      "Next.js 15 App Router, React 19 기능, react-bits 라이브러리를 활용한 개인 포트폴리오 사이트",
    web: "https://testproject-ba5ce.web.app/",
    github: "https://github.com/Junseop-Shin/profile",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "Next.js 15 App Router + generateStaticParams로 SSG 구현",
          "React 19 use(), async Server Components 활용",
          "react-bits 라이브러리로 인터랙티브 애니메이션 구현",
          "TailwindCSS 기반 다크모드 및 반응형 디자인",
          "Cloudflare Tunnel + pm2 + GitHub Actions 배포 자동화",
        ],
      },
    ],
  },
  {
    slug: "bold",
    type: "personal",
    title: "BOLD 웹페이지",
    subtitle: "디자이너 포트폴리오 웹사이트",
    period: "2025.03 ~ 2025.04",
    stack: ["Next.js", "TypeScript", "Styled-Components", "Framer Motion"],
    thumbnail: "/bold-screenshot.jpg",
    summary: "디자이너 BOLD의 포트폴리오 사이트. 이미지 캐러셀, 갤러리, 문의 메일 알림 기능 구현",
    web: "https://boldgobynd.vercel.app/",
    github: "https://github.com/Junseop-Shin/boldgobynd",
    sections: [
      {
        heading: "주요 작업",
        items: [
          "Next.js 페이지 라우팅 및 Framer Motion 애니메이션",
          "Carousel, Gallery, Dropdown 등 UI 컴포넌트 직접 구현",
          "문의 시 메일 알림 기능 (Nodemailer)",
          "Styled-Components 반응형 디자인",
          "Vercel 배포",
        ],
      },
    ],
  },
  {
    slug: "my-ui-lib",
    type: "personal",
    title: "My UI Library",
    subtitle: "금융권 특화 React 디자인 시스템",
    period: "2026.03 ~",
    stack: ["React 19", "TypeScript", "TailwindCSS", "Radix UI", "Rollup"],
    thumbnail: "/my-ui-lib.png",
    summary: "테마 시스템과 데이터 시각화 컴포넌트를 제공하는 npm 라이브러리. Light/Dark/Finance 3가지 테마 지원.",
    web: "https://storybook.nuclearbomb6518.com",
    github: "https://github.com/Junseop-Shin/my-ui-lib",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "Light / Dark / Finance 3가지 테마 (CSS 변수 커스터마이징)",
          "ThemeProvider 기반 전역 테마 관리",
          "Radix UI 기반 접근성 준수 컴포넌트",
          "npm 패키지 배포 (@junseop-shin/my-ui-lib)",
        ],
      },
    ],
  },
  {
    slug: "seobi-chat",
    type: "personal",
    title: "서비 챗봇",
    subtitle: "AI 기반 서비스 안내 챗봇",
    period: "2026.03 ~",
    stack: ["Node.js", "WebSocket", "OpenAI API", "PM2"],
    thumbnail: "/seobi-chat-screenshot.jpg",
    ogImage: "https://seobi.nuclearbomb6518.com",
    summary: "OpenAI API를 활용한 서비스 안내 챗봇. 실시간 WebSocket 통신으로 대화형 AI 응답 제공.",
    web: "https://seobi.nuclearbomb6518.com",
    github: "https://github.com/Junseop-Shin/seobi-chat",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "OpenAI API 기반 자연어 처리 및 대화 컨텍스트 유지",
          "WebSocket 실시간 스트리밍 응답",
          "Node.js + PM2로 Windows 서버 배포",
          "Cloudflare Tunnel로 HTTPS 서비스",
        ],
      },
    ],
  },
  {
    slug: "devops-monitor",
    type: "personal",
    title: "DevOps Monitor",
    subtitle: "자체 서비스 통합 옵저버빌리티 플랫폼",
    period: "2026.03 ~",
    stack: ["Prometheus", "Grafana", "Loki", "Docker", "TimescaleDB", "Node.js"],
    thumbnail: "/devops-monitor.png",
    ogImage: "https://monitoring.nuclearbomb6518.com",
    summary:
      "맥미니 + 배포 PC 전체 서비스를 단일 대시보드로 모니터링. 시스템 메트릭, 로그, 유저 이벤트를 Grafana에서 통합 조회.",
    web: "https://monitoring.nuclearbomb6518.com",
    github: "https://github.com/Junseop-Shin/devops-monitor",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "Prometheus + node_exporter + cAdvisor로 멀티호스트 시스템 메트릭 수집",
          "Loki + Promtail로 Docker 컨테이너 로그 중앙 집계",
          "AlertManager → Slack 실시간 알림 (HostDown / HighCPU / HighMemory 등)",
          "TimescaleDB Hypertable로 유저 이벤트 시계열 저장 및 분석",
          "Cloudflare Tunnel로 외부 접근, Docker Compose 단일 명령 실행",
        ],
      },
    ],
  },
  {
    slug: "lotto-oracle",
    type: "personal",
    title: "Lotto Oracle",
    subtitle: "로또 역대 당첨번호 분석 기반 번호 추천 시스템",
    period: "2026.03 ~",
    stack: ["Python", "FastAPI", "Docker", "GitHub Actions"],
    thumbnail: "/lotto-oracle.png",
    summary: "역대 로또 당첨번호 데이터를 분석해 번호를 추천하는 시스템. FastAPI 백엔드 + Docker 컨테이너화.",
    web: "https://lotto.nuclearbomb6518.com",
    github: "https://github.com/Junseop-Shin/lotto-oracle",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "역대 당첨번호 통계 분석 및 추천 알고리즘",
          "FastAPI 기반 REST API 서버",
          "Docker + docker-compose 컨테이너화",
          "GitHub Actions CI/CD",
        ],
      },
    ],
  },
  // ── Work — 티앤엠테크 ─────────────────────────────────────────
  {
    slug: "mobile-renewal",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "모바일 앱 리뉴얼",
    subtitle: "SEMS 모바일 웹 JSP → React 전환 및 안정화",
    period: "2025.04 ~ 2025.12",
    stack: ["React", "Next.js", "TypeScript", "Spring", "Java", "Rollbar"],
    thumbnail: "/mobile-renewal.png",
    web: "https://platform.atxpert.biz:8443",
    summary:
      "레거시 JSP 모바일 웹을 React로 전환하며 안정성 대폭 개선. FCM 푸시, 오류 모니터링, 전력량 보정 등 핵심 기능 정상화",
    metrics: [
      { label: "FCM 처리 속도", value: "90% 개선" },
      { label: "모바일 프론트 오류", value: "100% 제거" },
      { label: "모바일 WAS 오류", value: "80% 제거" },
      { label: "점포 전력량 오차", value: "5% 이내 달성" },
    ],
    sections: [
      {
        heading: "주요 작업",
        items: [
          "JSP → React 전환 유지보수 및 공통 컴포넌트(서명, 이미지, 헤더 아이콘) 구현",
          "FCM 최신화 및 배치 처리로 푸시 로직 단순화, 처리 속도 90% 개선",
          "Rollbar 모니터링 적용, 모바일 프론트 오류 100% / WAS 오류 80% 제거",
          "전력량 보정 로직 적용으로 80% 점포 한전 실제 전력량과 오차 5% 이내 달성",
          "JSP/JS 파일 캐시 문제 쿼리스트링 처리, 기상청 API 오류 대응",
          "간판 정기점검, 해피콜, 양수도 등 신규 기능 추가",
        ],
      },
    ],
  },
  {
    slug: "platform-migration",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "Azure 플랫폼 이관",
    subtitle: "SEMS 서비스 Ncloud → Azure 전면 마이그레이션",
    period: "2025.06 ~ 2026.02",
    stack: [
      "Spring Boot",
      "Java",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Azure",
      "GitHub Actions",
    ],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz",
    summary:
      "Ncloud 기반 서비스를 Azure로 전면 이관. DB 마이그레이션, CI/CD 자동화, API 연동까지 풀스택 마이그레이션 수행",
    metrics: [
      { label: "SQL dialect 변환", value: "366개" },
      { label: "프로시저 쿼리 성능", value: "95% 개선 (7분→20초)" },
      { label: "배포 방식", value: "수동 → 자동화" },
    ],
    sections: [
      {
        heading: "데이터 마이그레이션",
        items: [
          "MariaDB → PostgreSQL (SQL dialect 변환 366개, CTE 적용으로 가독성 개선)",
          "Ncloud bucket storage → Azure Blob Storage, 이미지 SDK S3→Azure 전환 및 SAS token 적용",
          "pg_stat_statement로 쿼리 실행 통계 분석, 1초 이상 쿼리 성능 개선",
          "인덱싱 및 pg_partman 테이블 파티셔닝 적용",
        ],
      },
      {
        heading: "배치/프로시저 이관",
        items: [
          "성공/실패 로그 DB 저장, 슬랙 에러 알림, HikariPool/배치처리 공통 로직 구현",
          "프로시저 쿼리 개선으로 실행시간 7분 → 20초 (95% 단축)",
          "기상청(단기/초단기/특보), 환경공단, 알리고(카카오톡) API 연동",
        ],
      },
      {
        heading: "CI/CD 및 인프라",
        items: [
          "GitHub Actions로 자동 배포 파이프라인 구축 (수동 배포 탈피)",
          "pm2 + nginx 무중단 배포 적용",
          "스테이징 환경 도메인 및 SSL 적용",
          "서버 서비스 FastAPI + Uvicorn 통일, graceful shutdown 적용",
          "Azure Monitor 적용, 로깅 정책 통일",
        ],
      },
      {
        heading: "서비스 전환 및 신규 개발",
        items: [
          "관제웹 신규 서비스 개발 및 도메인 전환",
          "설치앱 신규 서비스 개발 및 도메인 전환",
          "모바일앱 신규 서비스 개발 및 도메인 전환",
          "기타 외부 연동 API 유지보수",
        ],
      },
    ],
  },
  {
    slug: "cloud-cost",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "클라우드 비용 절감",
    subtitle: "Ncloud 정리 및 Azure 리소스 최적화",
    period: "2026.01",
    stack: ["Azure", "Ncloud", "GitHub Actions"],
    thumbnail: "/cloud-cost.svg",
    summary:
      "불필요한 클라우드 리소스를 분석하고 최적화해 운영·개발 환경 모두에서 비용을 대폭 절감",
    metrics: [
      { label: "Ncloud 리소스 정리", value: "월 260만원 절감" },
      { label: "Azure 운영 환경 최적화", value: "월 $742 추가 절감" },
    ],
    sections: [
      {
        heading: "주요 작업",
        items: [
          "SEMS 기존 Ncloud 리소스 사용 현황 파악 및 Azure 이관으로 불필요 리소스 정리 (VM, 로드밸런서, DB 가용성 해제 등)",
          "Azure logAnalytics, Function apps 설정 변경 및 VM 대체로 운영 환경 월 $742 절감",
          "미사용 VM 제거, ServiceBus/PostgreSQL server/MongoDB disk 성능 최적화",
          "GitHub self-hosted runner 적용으로 보안 강화 및 운영 서비스 배포환경 네트워크 inbound 규칙 적용",
        ],
      },
    ],
  },
  {
    slug: "tnm-widgets",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "TnM 플랫폼 위젯",
    subtitle: "대시보드용 커스텀 위젯 개발",
    period: "2025.12 ~ 2026.01",
    stack: ["React", "TypeScript", "react-flow"],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz",
    summary:
      "IoT 플랫폼 대시보드에서 사용하는 커스텀 위젯 개발. react-flow 기반 룰체인 편집기 및 AI 연동 위젯 포함",
    sections: [
      {
        heading: "개발 위젯",
        items: [
          "커스텀 차트 위젯 (실시간 데이터 시각화)",
          "react-flow 기반 룰체인 노드 편집기 위젯",
          "냉장비 정기점검 AI 연동 대시보드 위젯",
        ],
      },
    ],
  },
  // ── Work — 이전 경력 ──────────────────────────────────────────
  {
    slug: "ax",
    type: "work",
    company: "주식회사 액스",
    title: "여행 B2B 서비스",
    subtitle: "여행 상품 관리 플랫폼 개발",
    period: "2023.09 ~ 2023.12",
    stack: ["React", "TypeScript", "Styled-Components", "SWR", "Redux"],
    thumbnail: "/no_image_available.jpg",
    summary:
      "여행 B2B 서비스 신기능 구현 및 TypeScript·디자인시스템 도입. 할당 이슈 180개 중 140개(78%) 해결",
    metrics: [
      { label: "이슈 해결", value: "140/180 (78%)" },
      { label: "백로그 제외", value: "100% 해결" },
    ],
    sections: [
      {
        heading: "주요 작업",
        items: [
          "계정 계좌/채널/계약 정보 생성·상세·수정 페이지 추가",
          "상품 판매단위 생성 및 가채널 판매 미리보기 구현",
          "TypeScript, ESLint, Prettier 신규 구현부부터 적용",
          "Color, Label, Icon, InputField, Dropdown, Modal 등 디자인 시스템 구축",
          "Redux, SWR 상태관리 적용. moment → date-fns 교체",
        ],
      },
    ],
  },
  {
    slug: "weboffice",
    type: "work",
    company: "티맥스가이아",
    title: "웹오피스",
    subtitle: "웹오피스 공통 프레임워크 개발 (docx/pptx/xlsx/hwp)",
    period: "2020.08 ~ 2023.09",
    stack: ["React", "TypeScript", "MobX", "Webpack", "Jest"],
    thumbnail: "/no_image_available.jpg",
    summary:
      "웹오피스 클립보드·셀렉션 프레임워크 개발 및 CI/CD 구축. React v16→v18, webpack v4→v5 마이그레이션 수행",
    sections: [
      {
        heading: "클립보드 프레임워크",
        items: [
          "오피스 클립보드 포맷 데이터 Object화, sync 보장 및 큐 구조 리팩토링",
          "표준 웹 클립보드 API를 이용한 외부 오피스 데이터 호환 프레임워크 구현",
          "포맷 간 변환 parse/write 구조 및 copy/paste pre/post 프로세스 개선",
        ],
      },
      {
        heading: "셀렉션 프레임워크",
        items: [
          "모델 정보 기반 셀렉션 자동생성 리팩토링",
          "도형·표 등 자체 셀렉션 및 공동 편집 세션별 처리",
        ],
      },
      {
        heading: "CI/CD 개선",
        items: [
          "webpack v4→v5, babel-loader→esbuild-loader 전환으로 빌드 성능 개선",
          "jest v26→v29, 비동기 mocking으로 테스트 성능 개선",
          "React v16→v18 마이그레이션",
          "GitLab runner 메모리 제한, husky Node.js 마이그레이션",
        ],
      },
    ],
  },
  {
    slug: "tohangul",
    type: "work",
    company: "(주)티맥스에이앤씨",
    title: "ToHangul",
    subtitle: "한글 문서 편집기 개발",
    period: "2020.02 ~ 2020.08",
    stack: ["C++", "OOXML", "MVC"],
    thumbnail: "/no_image_available.jpg",
    summary:
      "ToHangul 한글 문서 편집기 핵심 기능 구현. KERIS(한국교육학술정보원) 서비스 제공",
    sections: [
      {
        heading: "주요 구현",
        items: [
          "쪽 번호 매기기, 머리말꼬리말 편집/템플릿 기능",
          "인쇄/미리보기/회색조 전체처리 (paint vs print), 화면 스케일링",
          "줄번호 카운팅 및 페인트 기능",
          "KERIS에 ToHangul 서비스 제공",
        ],
      },
    ],
  },
];
