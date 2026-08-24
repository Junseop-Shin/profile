export type ProjectType = "personal" | "work";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectDiagram {
  src: string;
  alt: string;
  caption?: string;
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
  thumbnailContain?: boolean;
  ogImage?: string;
  summary: string;
  diagram?: ProjectDiagram;
  metrics?: ProjectMetric[];
  web?: string;
  github?: string;
  sections?: {
    heading: string;
    items: string[];
    diagram?: ProjectDiagram;
  }[];
}

export const projects: Project[] = [
  // ── Personal ──────────────────────────────────────────────────
  {
    slug: "ontology-pipeline",
    type: "personal",
    title: "온톨로지 파이프라인 랩",
    subtitle: "제조 데이터 지식그래프·GraphRAG 파이프라인",
    period: "2026.06 ~",
    stack: ["Python", "RDF/OWL", "RML", "SHACL", "GraphDB", "SPARQL", "GraphRAG"],
    thumbnail: "/ontology-pipeline-thumb.png",
    summary:
      "제조 공정(권선 품질) 데이터를 온톨로지 설계→정제→RML 매핑→SHACL 검증→GraphDB 적재→GraphRAG로 잇는 지식그래프 파이프라인 학습 랩",
    github: "https://github.com/Junseop-Shin/ontology-pipeline",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "BFO·IOF·SOSA·QUDT·PROV-O 표준 온톨로지를 상속한 응용 온톨로지 설계",
          "YARRRML→RML 매핑, SHACL 검증, GraphDB 적재까지 전 단계 스크립트화",
          "549 트리플 생성·검증 및 SPARQL 조회",
          "단계별 학습 문서화 (RDF vs LPG, OWA vs CWA 등 개념 정리)",
        ],
      },
    ],
  },
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
    web: "https://profile.nuclearbomb6518.com",
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
  {
    slug: "kis-trader",
    type: "personal",
    title: "KIS Trader",
    subtitle: "한국투자증권 API 기반 풀스택 주식 자동매매 시스템",
    period: "2026.03 ~",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    thumbnail: "",
    summary:
      "한국투자증권 KIS API를 연동한 풀스택 주식 자동매매 플랫폼. 실시간 매매 전략 설정, 백테스트, 포트폴리오 분석을 단일 대시보드에서 제공.",
    web: "https://trader.nuclearbomb6518.com",
    github: "https://github.com/Junseop-Shin/kis-trader",
    sections: [
      {
        heading: "주요 특징",
        items: [
          "KIS REST API 연동으로 실시간 시세 조회 및 주문 실행",
          "전략별 백테스트 엔진 (Celery 비동기 워커 + Redis)",
          "pykrx + pandas-ta 기반 기술적 지표 분석 (RSI, MACD, 볼린저밴드 등)",
          "Next.js 대시보드 + lightweight-charts 실시간 캔들 차트",
          "TOTP 2FA 인증 + JWT 기반 보안 로그인",
          "Docker Compose 멀티 서비스 구성 + GitHub Actions CI/CD",
        ],
      },
      {
        heading: "서비스 구성",
        items: [
          "backend: FastAPI + SQLAlchemy + TimescaleDB 시계열 데이터 저장",
          "frontend: Next.js 15 + Zustand + TanStack Query",
          "data-collector: 주식 데이터 스케줄링 수집",
          "real-trading: 실전 매매 자동화 서비스",
          "backtest-worker: Celery 기반 백테스트 병렬 처리",
        ],
      },
    ],
  },
  {
    slug: "techfeed",
    type: "personal",
    title: "TechFeed",
    subtitle: "개발자를 위한 테크 콘텐츠 큐레이션 모바일 앱",
    period: "2026.02 ~",
    stack: [
      "React Native",
      "Expo",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    thumbnail: "/techfeed.png",
    thumbnailContain: true,
    summary:
      "테크 블로그 · YouTube · 채용공고를 한 곳에서 소비하는 개발자 특화 콘텐츠 큐레이션 앱. AI 요약, 개인화 피드, 실시간 푸시 알림을 제공.",
    github: "https://github.com/Junseop-Shin/techfeed",
    sections: [
      {
        heading: "주요 기능",
        items: [
          "RSS/YouTube/채용공고 자동 크롤링 (BullMQ, 15분 간격)",
          "Gemini 2.5 Flash 기반 AI 요약 (Redis 7일 캐시)",
          "Elasticsearch 전문 검색 + 자동완성 + 태그/소스 필터",
          "구독 태그 기반 개인화 피드 + Redis Sorted Set 트렌딩 랭킹",
          "FCM 즉시 푸시 알림 (새 콘텐츠 등록 시)",
          "다크 / 라이트 모드, 댓글 · 북마크 기능",
        ],
      },
      {
        heading: "기술 스택",
        items: [
          "모바일: Expo (React Native) — iOS / Android 동시 지원",
          "백엔드: NestJS + TypeORM + MongoDB / Elasticsearch / Redis / PostgreSQL",
          "AI: Google Gemini 2.5 Flash API",
          "인프라: Docker Compose + GitHub Actions + Cloudflare Tunnel",
          "분석: TimescaleDB 기반 유저 행동 이벤트 시계열 저장",
        ],
      },
    ],
  },
  {
    slug: "yt-comment-filter",
    type: "personal",
    title: "YT 댓글 필터",
    subtitle: "YouTube 댓글 키워드 · 봇 자동 필터링 크롬 확장",
    period: "2026.03 ~",
    stack: ["Vue 3", "TypeScript", "TailwindCSS", "Chrome Extension MV3", "Vite"],
    thumbnail: "/yt-comment-filter.png",
    thumbnailContain: true,
    github: "https://github.com/Junseop-Shin/yt-comment-filter",
    summary:
      "YouTube 댓글을 키워드, 닉네임, 봇 패턴으로 실시간 필터링하는 크롬 확장 프로그램. 한글 초성 검색 및 자동 봇 감지 기능 지원.",
    sections: [
      {
        heading: "주요 기능",
        items: [
          "키워드 / 닉네임 블랙리스트 필터링 (정규식 지원)",
          "한글 초성 패턴 검색 (ㅅㅂ, ㅂㅅ 등 우회 표현 포함)",
          "봇 댓글 자동 감지 (반복 패턴 · 링크 도배 · 이모지 도배)",
          "Vue 3 팝업 UI — 필터 탭 / 통계 탭 분리",
          "Chrome storage API로 설정 영속화",
        ],
      },
    ],
  },
  // ── Work — 티앤엠테크 ─────────────────────────────────────────
  {
    slug: "sems",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "SEMS 편의점",
    subtitle: "편의점 점포 에너지 관리 서비스",
    period: "2025.04 ~ 2026.05",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "JSP",
      "Java",
      "Spring",
      "PostgreSQL",
      "Android",
      "iOS",
      "FCM",
    ],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz:8443",
    summary:
      "전국 편의점 프랜차이즈 약 1.8만 점포의 에너지를 관리하는 서비스. 모바일 웹·관제웹·설치앱으로 구성된다. 전환이 중단된 모바일 앱을 인계받아 완성하고 전력량 정확도·장애 대응을 개선한 뒤, Ncloud에 있던 서비스 전체를 TnM IoT 플랫폼으로 이관",
    metrics: [
      { label: "관리 점포", value: "약 1.8만 점포" },
      { label: "센싱 데이터 수집", value: "일 약 5,200만 건" },
      { label: "FCM 처리 속도", value: "90% 개선" },
      { label: "점포 전력량 오차", value: "5% 이내 달성" },
      { label: "모바일 프론트 오류", value: "100% 제거" },
      { label: "모바일 WAS 오류", value: "80% 제거" },
    ],
    sections: [
      {
        heading: "서비스 규모",
        items: [
          "전국 편의점 프랜차이즈 약 1.8만 점포 관리",
          "점포당 약 10종 센싱 데이터를 5분 주기 수집 — 시간당 약 216만 건, 일 약 5,200만 건",
          "Azure Table Storage → MongoDB → PostgreSQL로 이어지는 집계 서비스가 별도 Python 데몬으로 돌고 있던 것을 공통 배치 프레임워크로 이관해 통합 관리",
        ],
      },
      {
        heading: "서비스 구성",
        items: [
          "모바일 웹 — 점포 전력 사용량 조회, 간판 정기점검, 해피콜, 양수도",
          "관제웹 — 점포 상태 통합 관제",
          "설치앱 — 현장 설치 및 점검 지원",
        ],
      },
      {
        heading: "주요 작업",
        items: [
          "외주가 만들다 중단한 React 모바일 앱을 인계받아 미연결 기능·잔존 오류를 잡아 완성",
          "FCM 최신화 및 배치 처리로 푸시 처리 속도 90% 개선",
          "Rollbar 모니터링 적용으로 모바일 프론트 오류 100% / WAS 오류 80% 제거",
          "전력량 보정 로직 적용으로 80% 점포에서 한전 실제 전력량과 오차 5% 이내 달성",
          "JSP/JS 파일 캐시 문제 쿼리스트링 처리, 기상청 API 오류 대응",
          "간판 정기점검, 해피콜, 양수도 등 신규 기능 추가",
          "서비스 전체를 TnM IoT 플랫폼으로 이관 — 관제웹·설치앱·모바일앱 API 서버 이전 및 도메인 전환",
          "모바일 네이티브 개선 — 자동로그인 평문 저장 제거, 네이티브↔웹앱 연동 정비, 앱링크·푸시 토큰 자동 갱신·강제 업데이트 도입",
        ],
      },
    ],
  },
  {
    slug: "mobile-native",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "모바일 네이티브 개선",
    subtitle: "인증·네이티브 연동·푸시 체계 정비",
    period: "2026.04 ~ 2026.05",
    stack: ["React", "Next.js", "TypeScript", "Android", "iOS", "FCM"],
    thumbnail: "/mobile-renewal.png",
    summary:
      "웹앱을 감싼 네이티브 앱의 인증 방식과 네이티브↔웹앱 연동, 푸시 체계를 전반적으로 정비. 자동로그인 평문 저장 제거, 앱링크 적용, 푸시 토큰 자동 갱신과 로그 추적을 도입",
    sections: [
      {
        heading: "인증·연동 개선",
        items: [
          "id/pw를 기기 localStorage에 평문 저장하던 자동로그인 방식 개선",
          "url param·쿠키·localStorage에 의존하던 네이티브↔웹앱 데이터 전달(deviceType, osVersion, pushToken) 방식 정비",
          "Android 카메라·이미지 권한 정책 변경 적용 — 권한 요청 로직을 공통 컴포넌트로 구현해 흩어져 있던 사용처를 일괄 처리",
        ],
      },
      {
        heading: "푸시 체계 정비",
        items: [
          "앱링크 적용으로 푸시 클릭 시 targetUrl 페이지 이동 — 기존에는 원하는 페이지로 이동하지 않았음",
          "푸시 클릭 후 알림이 리스트에 남던 오류 해결",
          "푸시 토큰 만료 시 자동 재발급 — 기존에는 앱을 재설치해야만 갱신 가능했음",
          "FCM 전송 성공 후 미수신 추적이 불가하던 문제를 푸시 로그 적재로 해결",
        ],
      },
      {
        heading: "배포 대응",
        items: [
          "앱 버전 체크 후 강제 업데이트 다이얼로그 및 플레이스토어/앱스토어 이동 도입",
          "기존 개발 환경과 분리된 모바일 앱 테스트 환경 구축",
          "신·구앱 iOS/Android 빌드 및 로그인·푸시·강제 업데이트 시나리오 테스트 완료",
        ],
      },
    ],
  },
  {
    slug: "tnm-platform",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "TnM IoT 플랫폼",
    subtitle: "사내 IoT 통합 플랫폼",
    period: "2025.06 ~",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "EMQX",
      "Azure",
    ],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz",
    summary:
      "5개 비즈니스 서비스를 올려 운영하는 사내 IoT 통합 플랫폼. 최대 서비스인 SEMS 편의점 기준 약 1.8만 점포에서 일 5,200만 건의 센싱 데이터가 들어온다. SEMS 편의점을 이 플랫폼으로 이관하고 대시보드 위젯, 운영 구조, 클라우드 비용까지 플랫폼 전반을 정비",
    metrics: [
      { label: "운영 서비스", value: "5개" },
      { label: "센싱 데이터 수집", value: "일 약 5,200만 건" },
      { label: "Azure 비용 최적화", value: "월 $742 절감" },
      { label: "SQL dialect 변환", value: "366개" },
    ],
    sections: [
      {
        heading: "운영 서비스 (5개)",
        items: [
          "SEMS 편의점 — 점포 에너지 관리",
          "EMS — 에너지 관리 시스템",
          "근태관리(Working)",
          "청소관리",
          "CCTV 전기차 화재 탐지",
        ],
      },
      {
        heading: "주요 작업",
        items: [
          "SEMS 편의점 서비스 전체를 플랫폼으로 이관 (DB·스토리지 마이그레이션, CI/CD 자동화)",
          "대시보드 커스텀 위젯 개발 (차트, react-flow 룰체인 편집기, AI 연동)",
          "Ncloud 정리 및 Azure 리소스 최적화로 운영·개발 환경 비용 절감",
          "SEMS 사후점검 기능 신규 개발 — 기사가 완료한 정기점검·설치공사를 무작위 표본으로 뽑아 관리자가 현장에서 재검사",
          "SEMS GS프레시, 서울시 경로당, 시설관리현황 등 아직 외부에서 운영 중인 서비스의 플랫폼 이관 진행",
        ],
      },
      {
        heading: "플랫폼 Task(배치) 운영 정비",
        items: [
          "Python·Java·Node.js 3개 언어로 흩어진 배치를 하나의 운영 표준으로 통일 (로깅 포맷·Slack 알림·설정 구조)",
          "7개 Python 서비스를 FastAPI + Uvicorn으로 통일, 14개 SQL Mapper 분리",
          "Table Storage → MongoDB → PostgreSQL 집계 서비스를 배치 프레임워크로 이관 — 단일 파이썬 데몬이 메모리 스케줄러로 돌리던 12개 수집 작업을 8개 systemd 배치로 재편 (5분 3 / 1시간 3 / 1일 2)",
          "폴더 구조 개선, graceful shutdown 및 Azure Monitor 적용",
          "PostgreSQL 프로시저 프레임워크 구현 — 단일 진입 프로시저가 로깅·예외 처리·Slack 알림을 감싸고, 비즈니스 함수는 로직만 작성",
          "pg_cron 스케줄 등록, pg_partman 파티셔닝, pg_notify 기반 Slack 에러 알림 파이프라인 적용",
        ],
      },
      {
        heading: "팀 협업 체계",
        items: [
          "비즈니스별 Slack 모니터링/유지보수 채널 구성",
          "Jira 팀 스페이스 생성, 스프린트 및 자동화 룰 적용",
          "GitHub 브랜치 관리 룰 및 Codex PR 리뷰 도입",
        ],
      },
    ],
  },
  {
    slug: "platform-v2",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "IoT 플랫폼 v2",
    subtitle: "서비스별 분리 구조의 차세대 IoT 플랫폼 · 전체 아키텍처 설계 담당",
    period: "2026.06 ~",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "EMQX",
      "Kafka",
      "Azure Event Hubs",
    ],
    thumbnail: "/platform-v2-thumb.png",
    summary:
      "여러 서비스가 한 서버에 얽혀 있던 기존 IoT 플랫폼을, 비즈니스별로 분리해 얹는 구조로 다시 세우는 차세대 버전. 한 달째 멈춰 있던 아키텍처 논의를 정리해 전체 설계와 플랜을 수립하고, 설계를 파트로 쪼개 팀에 배분한 뒤 남은 프론트엔드와 이벤트 파이프라인을 직접 맡았다",
    diagram: {
      src: "/platform-v2-architecture.svg",
      alt: "프론트(web·mobile)에서 APIM을 거쳐 비즈니스별 API 서버로 가는 동기 축과, 설비·계측기에서 어댑터와 공유 Event Hubs를 거쳐 이벤트 파이프라인·텔레메트리 파이프라인으로 가는 비동기 축이 PostgreSQL·MongoDB 데이터 계층에서 만나는 플랫폼 구조도",
      caption:
        "비즈니스 식별자는 business-api-N · biz_N으로 익명 표기했습니다. 전체 아키텍처 정리는 본인이 맡았고, 직접 설계·구현한 파트는 프론트엔드와 이벤트 파이프라인입니다.",
    },
    metrics: [
      { label: "대상 서비스", value: "5개 분리" },
      { label: "수집 이벤트", value: "일 약 5,200만 건" },
      { label: "명세 유스케이스", value: "64건" },
      { label: "컨테이너 이미지", value: "수백MB → 수십MB" },
    ],
    web: "https://github.com/Junseop-Shin/Work/blob/main/Work_History/2026-06-플랫폼-v2-재설계.md",
    sections: [
      {
        heading: "설계 방향",
        items: [
          "매니지드 서비스를 최대한 쓴다 — Event Hubs·APIM·Blob처럼 직접 운영할 컴포넌트를 늘리지 않는 쪽으로 고른다",
          "새 비즈니스를 쉽게 얹을 수 있어야 한다. 단 '플랫폼이라 부르지만 결국 서비스마다 로컬화가 필요한 SI'라는 전제를 잊지 않는다",
          "설비에서 올라오는 수집 데이터는 메인 DB가 죽어도 계속 쌓여야 한다 — 그래서 수집 경로를 분리한다",
          "새 비즈니스는 기본 포맷을 복사해 분리 생성한다. 분리 빌드·배포를 기본으로 하되 통으로 빌드·배포하는 길도 열어둔다",
          "프론트는 APIM 하나만 알게 하고, API 서버·배치가 파이프라인을 직접 부르는 경로는 제어 요청과 알림 요청 둘로 제한한다. 나머지 교류는 전부 DB를 거친다",
        ],
      },
      {
        heading: "맡은 일",
        items: [
          "한 달째 멈춰 있던 유스케이스 논의를 정리해 전체 설계와 플랜을 수립",
          "설계를 파트로 쪼개 미팅을 돌리고 팀원에게 담당 파트를 배분 — 남은 프론트엔드와 이벤트 파이프라인을 직접 맡았다",
          "수집 경로 분리 방향 설계 — Function Apps에서 Kafka(Event Hubs)로 옮겨 유실 없는 수집과 Capture 아카이빙을 확보했다 (텔레메트리 수집 파이프라인의 세부 설계·구현은 담당 팀원)",
        ],
      },
      {
        heading: "비즈니스 하나를 추가하면 실제로 뭐가 늘어나는가",
        items: [
          "프론트 — 추가 작업 없음 (메뉴·앱 카탈로그가 DB 기반)",
          "APIM — 라우팅 규칙 추가 (설정)",
          "API 서버 — 전용 업무가 있으면 서버 1종 신규",
          "PostgreSQL — 스키마 1개 추가 + 시드 (DDL)",
          "파이프라인 — 이벤트/텔레메트리 각각 어댑터와 소비자, 즉 프로세스 4개가 신규 기동",
          "결국 비용의 중심은 파이프라인 쪽이다. 비즈니스 수 × 4가 운영 부담의 실체이므로, 파이프라인의 멀티테넌시 여부는 다시 판단해야 할 지점으로 남겨 두었다",
        ],
      },
    ],
  },
  {
    slug: "platform-v2-frontend",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "v2 프론트엔드 프레임워크",
    subtitle: "공통 커널 + 앱 플러그인 구조 · 관리자/기본앱 웹·모바일",
    period: "2026.06 ~",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "TanStack Query",
      "Zustand",
      "Expo",
      "React Native",
      "Vitest",
      "Storybook",
    ],
    thumbnail: "/platform-v2-thumb.png",
    summary:
      "새 비즈니스가 들어오면 매니페스트 하나와 DB 메타데이터만으로 앱이 얹히도록 만든 프론트엔드 프레임워크. 셸은 UI 없는 런타임 프레임으로 최소화하고, 공통은 스타일을 갖지 않는 headless 커널로 두고, '비즈니스마다 다르다'의 대부분은 DB 메타데이터와 토큰으로 흡수했다. 여기에 관리자 앱과 비즈니스 기본앱(웹·모바일)이 무엇을 제공할지를 명세 유스케이스 기준으로 정의해 구현했다",
    sections: [
      {
        heading: "4계층 구조",
        items: [
          "셸 — 화면을 그리지 않는 런타임 프레임. 라우팅·앱 식별·인증 가드·슬롯 프레임·레지스트리 로더만 맡는다",
          "공통 커널(headless) — 동작·구조·접근성만 갖고 스타일은 토큰만 참조한다",
          "스타일 토큰 — 계약은 코드, 값은 DB. 공통 기본값 위에 앱 값을 얹는 cascade를 SSR 루트에서 주입해 FOUC를 막는다",
          "앱 플러그인 — 데이터로 못 푸는 코드만. 백엔드와 같은 사상(공통 커널 + 비즈니스별 플러그인)을 프론트에 그대로 적용했다",
        ],
      },
      {
        heading: "앱 매니페스트와 플러그인 구조",
        items: [
          "앱 하나 = 매니페스트 파일 하나. 앱 식별자와 비즈니스 코드만 필수고 나머지는 전부 선택 — 리전 override, coded 페이지 바디, 앱 위젯 팔레트, editable 페이지 바디, 메뉴, 베이스 테마, 스타일 델타, i18n 사전",
          "스타일 델타는 두 겹 — 라이트/다크 공통 브랜드 토큰과, 라이트에만 얹는 추가 토큰(대비 보정 같은 것)을 나눠 선언한다",
          "i18n은 중앙 레지스트리를 두지 않았다. 각 플러그인이 자기 사전을 매니페스트로 소유하고 커널이 공통 위에 깊은 병합한다. 라벨은 위젯 폴더에, 화면 라벨은 페이지 바디 폴더에 붙여 두는 콜로케이션 규칙",
          "신규 앱 온보딩 = 매니페스트 작성 + DB 구성. 커널은 건드리지 않는다",
          "빌드 스코프로 비즈니스를 골라 빌드한다 — 스코프가 정적 import 코드생성·런타임 등록·CSS 스캔 세 지점에 걸려, 스코프 밖 앱은 JS 번들에서 물리적으로 빠진다. 같은 코드베이스로 통합 빌드와 앱별 빌드가 양립",
          "모바일 앱도 같은 선언 패턴 — 웹 매니페스트와 대칭인 모바일 매니페스트를 뒀다",
        ],
      },
      {
        heading: "UI 패키지 분리와 디자인 시스템",
        items: [
          "웹 UI 패키지는 shadcn 스타일 headless 라이브러리 — 동작·접근성은 Radix, 변형은 CVA, 스타일은 TailwindCSS 토큰 클래스가 맡는다. Radix 프리미티브 14종 위에 버튼·폼·테이블·다이얼로그부터 게이지·바리스트·차트까지 올리고 Storybook으로 문서화했다",
          "색과 radius는 토큰만 참조하고 hex·raw 팔레트 직접 사용은 빌드 전 검사가 차단한다. asChild 합성을 열어둬 링크 같은 다른 태그에도 같은 변형을 얹을 수 있다",
          "모바일 UI 패키지 분리 — Radix와 CVA 없이 clsx + tailwind-merge만으로 바텀시트·필터칩·스테퍼·리스트아이템 같은 모바일 웹 컴포넌트와 구조 토큰을 소유한다. 웹 컴포넌트를 화면 폭으로 우겨넣지 않기 위해서다",
          "다크 모드 관제화면을 기본으로 — 무채색 잉크 표면에 그림자 대신 표면 층과 헤어라인으로 깊이를 주고, 브랜드 액센트 하나와 5단 심각도 사다리만 색을 갖는다. '색은 장식이 아니라 의미'가 기준",
          "운영자가 하루 8시간 들여다보는 화면이라 밀도와 정보 명확성을 즐거움보다 앞에 뒀다. 한국어 우선, 기계 데이터(ID·측정값·타임스탬프)는 고정폭 숫자로 칼럼이 맞게",
          "디자인 시스템 문서는 Claude Design으로 뽑은 HTML 세트로 만들었다. 토큰 CSS 한 장을 링크하는 규칙을 세우고 그 위에 로그인·셸·대시보드·관리자 화면·페이지 편집기·모바일까지 화면 킷 20여 장을 그려, 구현 전 합의 자료이자 이후 목업 생성 기준으로 썼다",
          "토큰 값은 단일 소스에서 코드생성으로 CSS·앱별 CSS·디자인 시스템 문서의 토큰까지 함께 뽑는다 — 문서와 코드가 어긋날 수 없고 가드 테스트로 고정했다",
        ],
      },
      {
        heading: "API 레이어",
        items: [
          "위젯은 엔드포인트를 모른다. key 하나로 부르고, key에서 엔드포인트·메서드·스키마로 가는 매핑은 DB 카탈로그가 정본이다",
          "호출 코어는 하나다 — 매핑과 파라미터로 경로·쿼리·바디를 조립하고, 게이트웨이 표준 응답 봉투(status·message·data)를 풀어 data만 돌려준다. 미등록 key는 조용히 undefined가 되지 않고 명시적 에러를 던진다",
          "클라이언트는 훅(useClientApi·useClientApiMutation), 서버는 함수(callServerApi)로 나눴다. 같은 코어와 같은 매핑 레지스트리를 쓰고 base URL만 다르다 — 클라는 프록시 라우트를 거치고 서버는 게이트웨이로 직행한다",
          "매핑 카탈로그는 서버 레이아웃이 미리 받아 클라이언트 캐시로 넘긴다. 클라 훅이 같은 키로 이어받으므로 Context를 쓰지 않고, 서버에서 한 일을 클라에서 다시 부르지 않는다",
          "같은 key와 파라미터면 자동으로 합쳐진다 — 한 화면의 위젯 넷이 같은 요약 데이터를 써도 네트워크는 1콜",
          "Request/Response 타입은 백엔드 OpenAPI 문서에서 자동 생성한다. 백엔드 코드가 타입의 진실이고 위젯은 생성된 이름을 그대로 가져다 쓴다",
          "생성된 타입은 컴파일 타임 보장이라 런타임에는 zod 스키마로 응답을 한 번 더 검증한다 — 계약이 어긋났을 때 화면 안쪽에서 이상한 값으로 번지지 않고 경계에서 걸리게",
          "에러는 층을 나눴다 — 네트워크와 서버 오류는 전역 토스트로, 요청 오류는 위젯 인라인으로. 리다이렉트는 따라가지 않고 그대로 받아 호출부가 해석한다(임시 비밀번호 로그인에서 강제 변경으로 넘어가는 플로우 전환이 리다이렉트 계약이라)",
          "로딩(스켈레톤)·에러(재시도)·성공 3상태는 ApiGate가 공통 처리한다. 위젯은 상태 분기 코드를 갖지 않고 성공했을 때의 UI만 그린다. 게이트는 위젯 전용이 아니라 페이지 바디 전체나 리전에도 씌울 수 있다",
        ],
      },
      {
        heading: "상태 관리",
        items: [
          "서버에서 받아오는 데이터의 캐시·무효화는 TanStack Query가, 클라이언트 상태는 Zustand가 맡는다. 라이브러리 난립을 막으려고 각각 하나로 못 박았다",
          "변이가 성공하면 관련 key를 무효화해 새로고침 없이 의존 위젯이 갱신된다",
          "테마·세션 store는 전역 싱글턴이 아니라 요청별 인스턴스다. 영속 소스는 쿠키 쪽에 뒀다 — 기기별이고 서버가 읽을 수 있어 SSR 단계에서 루트에 테마를 칠할 수 있기 때문. store는 그 값으로 시드된 뒤 토글 시 쿠키를 같이 갱신하고, store 자체는 영속하지 않아 SSR 상태 누수가 없다",
          "위젯끼리 공유하는 앱 스코프 store만 localStorage에 영속하되 앱별 키로 격리한다",
          "Context는 정적 의존성 주입에만 쓴다 — 비즈니스 코드, 합성 사전, 메뉴, 세션, store 인스턴스 공유. 가변 서버 상태를 Context로 흘리지 않는 것을 규칙으로 뒀다",
          "모바일은 지속 상태가 한 겹 더 있다. 리프레시 토큰은 네이티브 보안 저장소에 두고, 로그인에 성공하면 웹이 브리지로 미러링한다. 쿠키가 사라지면 그 값으로 세션을 복구하고, 게이트웨이가 토큰을 회전시키면 응답 헤더를 보고 다시 미러링한다",
          "그 보안 저장소는 토큰용 도메인 키와 범용 키 채널을 분리했다 — 범용 채널로는 토큰 키에 손댈 수 없고, 허용 목록에 있는 키만 읽고 쓴다. 비밀이 아닌 값은 아예 다른 로컬 저장소 채널로 뺐다",
          "폼 라이브러리는 쓰지 않는다 — 라벨·필수 표시·힌트·에러 한 줄을 규격화한 필드 컴포넌트 위에 서버 액션으로 제출하고, 제출 페이로드는 서버에서 zod 스키마로 다시 검증한다",
        ],
      },
      {
        heading: "화면 구조와 편집 모드",
        diagram: {
          src: "/platform-v2-screen-terms.svg",
          alt: "헤더·메뉴·드로어·푸터를 Region으로, 그 내부 조각을 RegionWidget으로, 라우트 본문을 PageBody로, 본문 블록을 Widget으로 배치하는 화면 용어 다이어그램",
          caption:
            "셸이 잡는 자리와 본문 배치의 용어 체계. 팀이 같은 말을 쓰게 하려고 온보딩 문서에 넣었던 그림이다.",
        },
        items: [
          "각 단계는 key에서 구현을 찾는 레지스트리로 해석된다. 앱은 배치도만 바꾼 얇은 래퍼를 매니페스트로 주입하고, 리전 위젯 코드는 공통 것을 그대로 쓴다",
          "메뉴는 셸이 직접 렌더하는 고정 영역으로 뒀다 — 여기까지 확장 지점을 열면 앱마다 셸이 갈라진다고 봤다. 메뉴 데이터는 DB 카탈로그가 정본이고 권한으로 걸러 트리를 만든다",
          "본문은 두 종류다. DB 레이아웃을 그리는 editable, 배치를 코드로 고정하는 coded. coded의 진입 파일은 순수 조립만 하고 상태·컬럼 정의·핸들러·다이얼로그 같은 절차 코드는 전부 위젯이 갖는다",
          "배치 단위는 위젯 종류가 아니라 '그 자리에 놓인 인스턴스'다. 같은 위젯을 여러 칸에 놓으면 칸마다 독립된 크기·좌표·파라미터 바인딩을 갖는다 — 위젯 정의는 받을 수 있는 파라미터만 알려주고, 이 자리에서 무엇을 넘길지는 배치가 소유한다",
          "그리드는 명시 좌표 모델이다. 좌표가 없는 레거시 배치는 편집기를 열 때 빈자리를 찾아 좌표를 부여하고, 그다음부터는 항상 좌표로 동작한다",
          "이동과 리사이즈는 겹치면 거부한다 — 밀어내기를 넣지 않았다. 드래그 고스트가 놓을 수 있는지를 색으로 알려준다",
          "편집 모드는 쿼리 파라미터로 진입한다. 위젯 팔레트에서 끌어다 놓고, 드래그로 옮기고, 핸들로 크기를 바꾸고, 탭을 편집하고, 파라미터 바인딩을 지정한 뒤 저장한다. 진입 권한과 저장 권한을 서버가 각각 검증하고, 저장 페이로드는 스키마로 검증한다",
          "편집 상태는 리듀서 하나가 유일한 변경 통로다. 저장하지 않고 나가려 하면 이탈 가드가 잡는다",
          "팔레트는 등록된 위젯을 공용/앱 → UI 유형 → 위젯으로 묶고 실제 컴포넌트를 축소해 미리 보여준다. 빈 그룹은 감춘다",
          "웹과 모바일이 같은 좌표 모델과 같은 충돌·빈자리 로직을 공유하고, 컬럼 수(웹 12칸 / 모바일 4칸)와 UI만 다르다 — 웹은 드로어 인스펙터, 모바일은 바텀시트와 큰 터치 핸들",
        ],
      },
      {
        heading: "네이티브 셸의 기능별 플러그인과 브리지",
        items: [
          "네이티브 셸은 웹에 종속되지 않는다 — 임의의 URL을 WebView로 띄우는 호스트이고, 기능은 앱 설정의 배열에 넣은 것만 번들된다. 안 쓰면 코드와 네이티브 모듈이 둘 다 빠진다",
          "기능 카탈로그 12종 — 디바이스 정보, 보안 저장소, 로컬 저장소, 버전 체크, 푸시, 카메라/갤러리 권한, QR 스캔, 이미지 피커, NFC, 위치, BLE. 외부 SDK 의존이 없는 넷은 기본 묶음, NFC·위치는 선택형",
          "웹 쪽 브리지는 Provider도 Context도 없는 순수 함수 3개(호출·구독·환경 판별)로 좁혔다. 일반 브라우저에서는 판별 함수가 false를 돌려주며 자연스럽게 비활성화된다",
          "전송은 WebView 메시지 한 채널. 요청-응답은 요청 ID로 매칭하고 비동기 이벤트는 타입으로 구독한다 — 요청 ID를 셸의 디스패처가 응답에 자동으로 되붙여서, 기능 핸들러는 ID를 신경 쓰지 않고 웹은 응답 타입별 매핑 테이블이 필요 없다",
          "알림을 눌러 앱이 시작되는 경우는 즉시 보내면 웹이 아직 없어 유실된다 — 네이티브가 슬롯에 담아두고 웹이 부팅 후 당겨가는 방식으로 바꿨다",
          "모바일 앱은 워크스페이스 밖에 두고 파일 참조로 셸을 가져온다 — 웹 설치·빌드가 React Native를 전혀 건드리지 않게 하기 위해서",
        ],
      },
      {
        heading: "관리자 · 기본앱 제공 기능 기획",
        items: [
          "6개 서비스(테넌트/사이트·자산·모니터링·인증·정책/이벤트·제어) 명세 유스케이스 64건을 기준으로, 각 건이 어느 표면(관리자 앱 / 기본앱 웹 / 기본앱 모바일)에 필요한지부터 배정했다",
          "64건 중 화면이 필요한 건 50건, 나머지는 자동 처리라 결과만 다른 화면에 노출되면 되는 것으로 분리했다 — '화면 불필요'를 명시적으로 판정한 게 범위를 줄인 핵심",
          "다루는 영역은 조직·사이트 관리, 게이트웨이와 설비 자산, 사이트 대시보드와 시계열 조회, 계정·권한·감사, 제어 룰과 알람 정책, 직접 제어와 일괄 제어",
          "정책·제어·자산·감사·품질 같은 신규 영역은 화면과 위젯을 먼저 만들고 저장은 인메모리로 두는 방식으로 갔다. 대신 필요한 백엔드 계약을 갭 문서로 정리해 요청했다",
          "화면을 먼저 만들면 필요한 API의 모양이 구체적으로 나온다. 프론트에 목업으로 기능을 넣어보고 거기서 필요한 API를 요청하는 식으로 기획을 이어갔다",
        ],
      },
    ],
  },
  {
    slug: "platform-v2-event-pipeline",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "v2 이벤트 파이프라인",
    subtitle: "Go로 만든 설비 제어·알람 폐루프",
    period: "2026.06 ~",
    stack: [
      "Go",
      "Kafka",
      "Azure Event Hubs",
      "EMQX",
      "MQTT",
      "CloudEvents",
      "PostgreSQL",
      "OpenTelemetry",
      "KEDA",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    thumbnail: "/platform-v2-thumb.png",
    summary:
      "게이트웨이·사용자·배치에서 올라온 이벤트를 받아 판단하고, 설비 제어와 알림을 실행한 뒤 결과가 되돌아오는 것까지 닫는 폐루프. 한 번도 써본 적 없는 Go로 구현했다. 아래는 구현하면서 실제로 판단이 갈렸던 지점과, 지금도 열려 있다고 보는 한계를 같이 적은 것이다",
    sections: [
      {
        heading: "서비스는 세 가지 틀뿐",
        items: [
          "어댑터 — 받는다 → CloudEvents 봉투에 싣는다 → 발행한다. 입력만 다르다 (게이트웨이의 MQTT, 사용자·배치의 HTTP 트리거, 미디어 업로드)",
          "코어 — 소비한다 → 판단시킨다 → 기록한다. 컨슈머 → 라우터 → 디스패처 → 프로세서 → 결과 저장",
          "실행기 — 결과를 받아 바깥세상에 행동한다. 게이트웨이 명령 발사, 알림 채널 발송",
          "새 코드를 읽을 때 '어느 틀인가'만 판정하면 나머지는 골격의 반복이 되도록 맞췄다",
          "게이트웨이 직접 호출은 막았다 — 제어는 반드시 파이프라인을 거쳐 판단·감사·폐루프를 타게 했다",
          "배포 단위는 나중에 접었다. 어댑터 3종을 한 프로세스로, 판단 코어와 실행기를 한 프로세스로 합쳤는데 전송 계약이 투명해서 논리 흐름은 그대로 유지된다",
        ],
      },
      {
        heading: "왜 큐가 아니라 로그인가",
        items: [
          "메시지 큐는 소비하는 순간 사라지고, 로그는 보존 기간 동안 남아 몇 번이든 다시 읽힌다. 필요했던 건 지나간 이벤트를 다시 읽는 것과 자동 아카이빙이었고 그건 큐로는 안 되는 일이었다",
          "'유실 없는 수집'의 진짜 근거도 여기다 — 컨슈머가 잘못 처리해도 오프셋을 되돌리면 다시 읽는다",
          "기존 메시지 브로커는 더 나은 것으로 교체됐다기보다, 아키텍처가 바뀌면서 홉이 줄어 없어진 쪽에 가깝다",
          "보존은 7일(플랜 상한이자 주말·미대응 여유), 장기 보존은 Capture가 담당한다 — Avro로 60초 또는 10MB 중 먼저 도달하는 쪽에서 끊어 Blob에 적재. 파일 수와 파일 크기 양쪽에 가드를 건 것",
        ],
      },
      {
        heading: "유실도 중복도 없게",
        items: [
          "발행 측 ack를 모든 복제본 확인으로 명시했다 — 게이트웨이가 받는 ack가 '저장됐다'는 보장이 되게. 이 옵션은 안 적으면 기본값이 fire-and-forget이라, 브로커를 바꿔도 여기를 안 챙기면 같은 구멍이 그대로 재현된다",
          "오프셋 커밋을 처리 후에 한다 → 처리하고 커밋 전에 죽으면 같은 메시지를 또 읽는다 → 그래서 at-least-once고, 그래서 멱등이 필요하다. 이 세 문장이 한 줄로 이어지는 게 설계의 근거다",
          "멱등 3겹은 각각 다른 실패를 막는다 — 저장 단계의 UNIQUE는 재전달로 판단 결과가 두 벌 쌓이는 것을, 디스패처의 중복 스킵은 저장이 중복이면 실행기를 아예 안 부르게, 실행기의 중복 제거는 저장은 됐는데 실행이 실패해 재전송될 때의 이중 발사를 막는다",
          "세 번째가 제일 중요하다. 제어가 두 번 나가면 실제 장비가 두 번 동작한다",
          "실행기 안에서도 방어 범위가 다르다 — 프로세스 안의 중복은 인메모리 예약이, 프로세스가 죽었다 살아난 뒤의 중복은 성공 기록 확인이, 시스템 밖은 같은 메시지 ID를 재사용해 게이트웨이가 거르게 하는 것이 맡는다",
          "남은 창은 인정하고 문서에 적어뒀다 — 발사 성공과 기록 사이에 크래시가 나면 중복 발사가 가능하다. 없애려면 발사와 기록이 한 트랜잭션이어야 하는데 외부 발사라 불가능하다. 그래서 게이트웨이 쪽 중복 제거를 최종 방어로 둔다",
          "신규 컨슈머 그룹의 최초 기동은 최신 오프셋부터 읽게 못 박았다. 처음부터 읽게 두면 보존된 7일치가 재생되고, 그 안에 제어 명령이 있으면 7일 전 명령이 지금 발사된다",
        ],
      },
      {
        heading: "DLQ와 순서",
        items: [
          "파티션 키를 장비 ID로 둬서 같은 장비 이벤트가 같은 파티션에 들어간다. 파티션 안에서는 순서가 보장되므로 전역 순서는 애초에 필요 없다 — DB를 보거나 게이트웨이가 정렬할 필요가 없다는 게 이 설계의 요점",
          "파싱조차 안 되는 이벤트는 별도 DLQ 허브에 보존한다",
          "DLQ 쓰기마저 실패하면 커밋하지 않고 같은 오프셋에서 재시도한다 — 그 파티션이 멈춘다. 의도한 선택이다. DLQ 불통 동안의 파티션 정지가 유실보다 낫다고 봤다",
          "다만 DLQ로 뺀 메시지를 나중에 재주입하면 그 장비의 순서가 깨진다. DLQ는 격리 보관이지 재처리 큐가 아니고, 재주입 도구는 아직 없다",
        ],
      },
      {
        heading: "AI 추론을 붙이며 배운 것",
        items: [
          "추론이 3초 걸리면 그 워커가 소유한 파티션이 3초 멈춘다. 소비 루프가 가져오기 → 처리 → 커밋을 직렬로 돌기 때문이다. 이벤트 내부는 병렬(체인별 fan-out이라 소요시간이 합이 아니라 최댓값)인데, 이벤트 간은 직렬이다",
          "병목은 두 겹이다. 추론 시간이 그대로 파티션 정지 시간이 되는 동기 블로킹이 큰 쪽이고, HTTP 요청·응답 왕복 자체도 거기에 얹힌다. 그래서 호출을 비동기로 떼어내는 것과 전송을 더 빠른 것으로 바꾸는 것을 같이 본다",
          "전송을 바꾼다면 gRPC 쪽인데, 지연보다 스키마 계약 때문이다 — 응답 필드가 바뀌었을 때 조용히 기본값으로 통과하는 문제가 코드생성 단계에서 걸린다. 다만 쿠버네티스 기본 로드밸런싱에서는 커넥션이 파드 하나에 고정돼 추론 파드를 늘려도 부하가 안 퍼지므로 클라이언트 쪽 분산이 필요하다",
          "HTTP 클라이언트를 공용으로 쓴 것도 문제였다. 수백 밀리초에서 수 초가 걸리는 추론과 수십 밀리초짜리 일반 REST가 같은 타임아웃을 쓴다 — 설계한 게 아니라 기본값이 겹친 결과다",
          "재시도 기준은 하나로 정리했다. '재시도해서 나아질 여지가 있나' — 서버 오류와 전송 오류만 재시도하고, 요청이 잘못된 경우는 재시도해도 소용없다",
          "여기에 일관되지 않은 곳이 있다. 어댑터는 발행 실패 시 ack를 안 보내 원본을 브로커에 남겨 순서를 지키는데, 파이프라인은 추론 실패를 DLQ로 보내고 커밋한다 — 순서에서 이탈하고 재주입 도구는 없다. 지수 백오프나 서킷 브레이커가 있어야 할 자리가 비어 있다",
          "응답 스키마가 바뀌면 조용히 통과한다. 필드 이름이 바뀌어도 디코딩은 성공하고 값만 기본값으로 채워져서, 에러도 로그도 없이 '이상 없음'이 된다 — 응답에 버전을 두고 불일치를 에러로 만들거나 모르는 필드를 거부하는 처리가 필요하다",
          "다시 설계한다면 추론을 전용 컨슈머 그룹으로 분리하겠다. 같은 스트림을 AI 컨슈머가 따로 읽으면 추론이 느려도 알람·제어 체인은 밀리지 않는다",
          "AI 판단으로 제어를 자동 발동시키는 건 아직 붙이지 않았다. 어떤 명령을 모델 단독으로 허용할지, 신뢰도 하한을 얼마로 둘지, 승인 게이트가 필요한 명령이 무엇인지에 대한 정책이 없기 때문이다. 알람까지만 연결해 뒀다",
        ],
      },
      {
        heading: "Go와 표준 라이브러리",
        items: [
          "기존 파이썬 파이프라인은 GIL 때문에 멀티프로세스로 우회하며 확장 집합(VMSS)을 돌렸다. Go는 동시성 하나하나가 가벼워 그 우회 자체가 필요 없어졌고, 같은 일을 훨씬 단순한 구성으로 감당한다",
          "정적 링크 바이너리 하나를 셸도 패키지 매니저도 없는 최소 베이스에 올리고 비루트로 실행한다. 이미지가 수백MB에서 수십MB로 준 것 자체보다, 새 노드에서 내려받기가 빨라져 스케일 아웃 반응이 좋아진 것과 공격 표면이 줄어든 것이 실제 이득이다 (이미지 크기와 런타임 메모리는 별개 얘기다)",
          "팀에 Go를 아는 사람이 없다는 건 리스크가 맞다. 그래서 표준 라이브러리 위주로 짜서 러닝커브를 낮췄고, 봉투는 CloudEvents, 추적은 OpenTelemetry처럼 표준 규격을 골라 처음 보는 사람도 아는 형태로 읽히게 했다",
          "더 큰 완화책은 구조 쪽이다. 판단 룰과 실행 라우팅을 코드가 아니라 DB에 두고 PostgreSQL의 LISTEN/NOTIFY로 즉시 리로드하게 만들어서, 룰이 바뀌어도 파이프라인 코드를 건드리지 않는다 (알림이 유실돼도 TTL 폴링이 안전망이라 정확성은 유지되고 즉시성만 잃는다)",
          "결과적으로 한 번 구현·배포한 뒤에는 파이프라인 코드 자체를 수정할 일이 많지 않은 구조가 됐다. 낯선 언어를 고르는 비용을 여기서 상쇄했다",
        ],
      },
    ],
  },
  {
    slug: "mobile-renewal",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "모바일 앱 리뉴얼",
    subtitle: "외주 중단된 React 앱을 인계받아 기능 연결 및 안정화",
    period: "2025.04 ~ 2025.12",
    stack: ["React", "Next.js", "TypeScript", "Java", "Spring", "Rollbar"],
    thumbnail: "/mobile-renewal.png",
    web: "https://platform.atxpert.biz:8443",
    summary:
      "JSP 모바일 웹을 React로 전환하다 중단된 외주 결과물을 인계받아, 연결되지 않은 기능과 잔존 오류를 하나씩 잡아가며 완성. FCM 푸시와 오류 모니터링을 정상화해 안정성 확보",
    metrics: [
      { label: "FCM 처리 속도", value: "90% 개선" },
      { label: "모바일 프론트 오류", value: "100% 제거" },
      { label: "모바일 WAS 오류", value: "80% 제거" },
    ],
    sections: [
      {
        heading: "주요 작업",
        items: [
          "외주가 만들다 중단한 React/Next 앱 인계 — 미연결 기능과 잔존 오류를 파악해 순차적으로 연결",
          "공통 컴포넌트(서명, 이미지, 헤더 아이콘) 구현 및 적용",
          "FCM 최신화 및 배치 처리로 푸시 로직 단순화, 처리 속도 90% 개선",
          "Rollbar 모니터링 적용, 모바일 프론트 오류 100% / WAS 오류 80% 제거",
        ],
      },
    ],
  },
  {
    slug: "platform-migration",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "SEMS 편의점 → TnM IoT 플랫폼 이관",
    subtitle: "Ncloud 기반 SEMS 편의점을 Azure 위 TnM IoT 플랫폼으로 전면 이관",
    period: "2025.06 ~ 2026.02",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "EMQX",
      "Azure",
      "GitHub Actions",
    ],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz",
    summary:
      "Ncloud에 있던 SEMS 편의점 서비스를 Azure 위 TnM IoT 플랫폼으로 전면 이관. 220개 테이블 · 약 200GB · 1.8만 점포가 실시간으로 달려 있는 DB를 옮기면서 CI/CD 자동화, API 연동까지 풀스택 마이그레이션 수행",
    metrics: [
      { label: "이관 DB 규모", value: "220 테이블 · 약 200GB" },
      { label: "SQL dialect 변환", value: "366개" },
      { label: "프로시저 쿼리 성능", value: "95% 개선 (7분→20초)" },
      { label: "배포 방식", value: "수동 → 자동화" },
    ],
    sections: [
      {
        heading: "데이터 마이그레이션",
        items: [
          "MariaDB → PostgreSQL — 220개 테이블 · 약 200GB · 1.8만 점포 실시간 거래 시스템 (SQL dialect 변환 366개, CTE 적용으로 가독성 개선)",
          "Ncloud bucket storage → Azure Blob Storage, 이미지 SDK S3→Azure 전환 및 SAS token 적용",
          "pg_stat_statement로 쿼리 실행 통계 분석, 1초 이상 쿼리 성능 개선",
          "인덱싱 및 pg_partman 테이블 파티셔닝 적용",
        ],
      },
      {
        heading: "배치·프로시저 이관 및 공통 프레임워크",
        items: [
          "Java·Node.js·Python 3개 언어 배치를 하나의 공통 프레임워크로 통합 (Java 배치 10여 개 · 프로시저 10여 개) — 추상 베이스가 실행 로그·예외·Slack 알림·설정 로딩을 처리하고, 자식은 비즈니스 로직과 메타 정보만 작성",
          "3개 언어의 로깅 포맷·Slack 오류 알림 양식·설정 파일 구조를 하나로 통일 — 배치가 어디서 돌든 운영 인터페이스가 동일",
          "PostgreSQL 단일 진입 프로시저 구현 — 시작 로그 → 비즈니스 함수 동적 실행 → 성공/실패 로그·알림을 감싸고, 비즈니스 함수는 결과 요약만 반환",
          "pg_cron 등록도 진입 프로시저 호출 한 패턴으로 통일 — 신규 SP 배치 추가가 '함수 작성 + 스케줄 한 줄'로 축소",
          "직접 만들고 보니 실행 로그·실패 알림·설정 표준화 등 Spring Batch가 제공하는 기본 기능과 상당 부분 수렴 — 이후 도입 비용 대비 효용을 별도 검토",
          "성공/실패 로그 DB 저장, HikariPool/배치처리 공통 로직 구현",
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
        heading: "서비스 전환",
        items: [
          "관제웹·설치앱·모바일앱 API 서버 이전 및 도메인 전환",
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
    subtitle: "Azure 리소스 다운스케일 · 스토리지 아카이빙 · Ncloud 잔여 정리",
    period: "2026.01 ~ 2026.07",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Azure",
      "Azure Data Factory",
      "Blob Storage",
      "Ncloud",
      "GitHub Actions",
    ],
    thumbnail: "/cloud-cost.svg",
    summary:
      "Azure 리소스를 실사용량에 맞게 다운스케일하고, 계속 증가하던 스토리지 비용을 압축 아카이빙 파이프라인으로 고정비화. Ncloud는 플랫폼 이관에 따라 잔여 리소스를 정리",
    metrics: [
      { label: "Azure 운영 환경 최적화", value: "월 $742 절감" },
      { label: "Table Storage", value: "월 123만원 → 48만원" },
      { label: "Ncloud 잔여 리소스 정리", value: "월 830만원 → 125만원" },
    ],
    sections: [
      {
        heading: "Azure 리소스 최적화",
        items: [
          "실사용량 대비 과한 성능의 리소스를 필요 성능 기준으로 다운스케일 (ServiceBus, PostgreSQL server, MongoDB disk)",
          "Azure logAnalytics, Function apps 설정 변경 및 VM 대체로 운영 환경 월 $742 절감 (당시 USD 청구 기준, 이후 원화 청구로 전환)",
          "미사용 VM 제거",
          "GitHub self-hosted runner 적용으로 보안 강화 및 운영 서비스 배포환경 네트워크 inbound 규칙 적용",
        ],
      },
      {
        heading: "Table Storage 아카이빙 이관",
        items: [
          "계속 증가하던 Table Storage 비용에 대응 — 최근 3개월치만 남기고 나머지는 Blob Storage에 압축 저장",
          "Azure Data Factory 파이프라인을 구성해 이관 자동화",
          "월 123만원(증가 추세) → 48만원(고정) — 일회성 마이그레이션 비용 92만원은 약 1.2개월 만에 회수",
        ],
      },
      {
        heading: "Ncloud 잔여 리소스 정리",
        items: [
          "플랫폼 이관에 따른 정리 작업 — 사용 현황 파악 후 Azure로 이관하고 남은 리소스를 제거",
          "VM·로드밸런서 정리, DB 가용성 해제, 컨테이너·VM 재배치 등",
          "미이관 서비스를 제외한 잔여 리소스 정리 — 월 830만원 → 125만원",
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
    stack: ["React", "Next.js", "TypeScript", "react-flow"],
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
        heading: "제품 안정화",
        items: [
          "백로그 포함 할당 이슈 약 180개 중 78%, 140개 해결",
          "백로그 제외 전체 해결",
        ],
      },
      {
        heading: "신기능 구현",
        items: [
          "계정 계좌/채널/계약 정보 생성·상세·수정 페이지 추가",
          "상품 판매단위 생성 상세/수정 페이지 추가",
          "가채널 판매 미리보기 및 비회원 공유용 미리보기 구현",
        ],
      },
      {
        heading: "CI/CD 및 공통 구조",
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
    slug: "weboffice",
    type: "work",
    company: "티맥스가이아 (구 티맥스에이앤씨)",
    title: "웹오피스",
    subtitle: "웹오피스 공통 프레임워크 개발 (docx/pptx/xlsx/hwp)",
    period: "2022.02 ~ 2023.09",
    stack: ["React", "TypeScript", "MobX", "Webpack", "Jest"],
    thumbnail: "/no_image_available.jpg",
    summary:
      "웹오피스 클립보드·셀렉션 프레임워크 개발 및 CI/CD 관리. React v16→v18, webpack v4→v5 마이그레이션 수행",
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
    company: "티맥스가이아 (구 티맥스에이앤씨)",
    title: "ToHangul",
    subtitle: "한글 문서 편집기 개발",
    period: "2020.02 ~ 2022.02",
    stack: ["C++", "OOXML", "MVC"],
    thumbnail: "/no_image_available.jpg",
    summary:
      "ToHangul 한글 문서 편집기 핵심 기능 구현. KERIS(한국교육학술정보원)·서울시 교육청에 서비스 제공",
    sections: [
      {
        heading: "문서 편집 기능",
        items: [
          "쪽 번호 매기기 기능 구현",
          "머리말꼬리말 편집 및 템플릿 기능 구현",
          "줄번호 카운팅 및 페인트 기능 구현",
        ],
      },
      {
        heading: "인쇄·렌더링 처리",
        items: [
          "인쇄/미리보기/회색조 전체처리 (paint vs print)",
          "화면 스케일링 처리",
        ],
      },
    ],
  },
];
