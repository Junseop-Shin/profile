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
  thumbnailContain?: boolean;
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
    title: "SEMS",
    subtitle: "점포 에너지 관리 서비스",
    period: "2025.04 ~ 2026.05",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Spring",
      "Java",
      "PostgreSQL",
      "Android",
      "iOS",
      "FCM",
    ],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz:8443",
    summary:
      "모바일 웹·관제웹·설치앱으로 구성된 점포 에너지 관리 서비스. 전환이 중단된 모바일 앱을 인계받아 완성하고 전력량 정확도·장애 대응을 개선한 뒤, Ncloud에 있던 서비스 전체를 TnM IoT 플랫폼으로 이관",
    metrics: [
      { label: "FCM 처리 속도", value: "90% 개선" },
      { label: "모바일 프론트 오류", value: "100% 제거" },
      { label: "모바일 WAS 오류", value: "80% 제거" },
      { label: "점포 전력량 오차", value: "5% 이내 달성" },
    ],
    sections: [
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
    stack: ["Android", "iOS", "React", "TypeScript", "FCM"],
    thumbnail: "/mobile-renewal.png",
    summary:
      "웹앱을 감싼 네이티브 앱의 인증 방식과 네이티브↔웹앱 연동, 푸시 체계를 전반적으로 정비. 자동로그인 평문 저장 제거, 앱링크 적용, 푸시 토큰 자동 갱신과 로그 추적을 도입",
    sections: [
      {
        heading: "인증·연동 개선",
        items: [
          "id/pw를 기기 localStorage에 평문 저장하던 자동로그인 방식 개선",
          "url param·쿠키·localStorage에 의존하던 네이티브↔웹앱 데이터 전달(deviceType, osVersion, pushToken) 방식 정비",
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
      "Spring Boot",
      "Java",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Azure",
      "PostgreSQL",
      "MongoDB",
    ],
    thumbnail: "/sems-platform.png",
    web: "https://platform.atxpert.biz",
    summary:
      "여러 비즈니스 서비스를 올려 운영하는 사내 IoT 통합 플랫폼. SEMS를 이 플랫폼으로 이관하고 대시보드 위젯, 운영 구조, 클라우드 비용까지 플랫폼 전반을 정비",
    metrics: [
      { label: "Ncloud 리소스", value: "월 830만원 → 125만원" },
      { label: "Table Storage", value: "월 123만원 → 48만원" },
      { label: "Azure 운영 환경 최적화", value: "월 $742 추가 절감" },
      { label: "SQL dialect 변환", value: "366개" },
    ],
    sections: [
      {
        heading: "주요 작업",
        items: [
          "SEMS 서비스 전체를 플랫폼으로 이관 (DB·스토리지 마이그레이션, CI/CD 자동화)",
          "대시보드 커스텀 위젯 개발 (차트, react-flow 룰체인 편집기, AI 연동)",
          "Ncloud 정리 및 Azure 리소스 최적화로 운영·개발 환경 비용 절감",
          "SEMS 사후점검 기능 신규 개발 — 기사가 완료한 정기점검·설치공사를 무작위 표본으로 뽑아 관리자가 현장에서 재검사",
        ],
      },
      {
        heading: "플랫폼 운영 정비",
        items: [
          "로깅 정책 통일 (롤링, 포맷, Slack 메시지)",
          "폴더 구조 개선 및 서버 서비스 FastAPI + Uvicorn 통일",
          "graceful shutdown 및 Azure Monitor 적용",
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
    subtitle: "서비스별 분리 구조의 차세대 IoT 플랫폼",
    period: "2026.06 ~",
    stack: [
      "Next.js",
      "TypeScript",
      "Go",
      "Kafka",
      "Azure Event Hubs",
      "PostgreSQL",
      "MongoDB",
    ],
    thumbnail: "/platform-v2-thumb.png",
    summary:
      "여러 서비스가 한 서버에 얽혀 있던 기존 IoT 플랫폼을 서비스별 분리 구조로 다시 세우는 차세대 버전. '플랫폼이지만 결국 SI'라는 전제 위에서 공통 구조 + 분리 빌드·배포 + 기본앱 제공 체계를 목표로 함",
    sections: [
      {
        heading: "설계 방향",
        items: [
          "공통 구조 위에 비즈니스별 서비스를 얹는 분리 구조",
          "서비스별 분리 빌드·배포",
          "비즈니스 기본앱(웹·모바일) 제공 체계",
        ],
      },
    ],
  },
  {
    slug: "platform-v2-redesign",
    type: "work",
    company: "주식회사 티앤엠테크",
    title: "IoT 플랫폼 v2 재설계",
    subtitle: "전체 아키텍처 설계 · 프론트엔드/이벤트 파이프라인 담당",
    period: "2026.06 ~",
    stack: [
      "Next.js",
      "TypeScript",
      "Go",
      "Kafka",
      "Azure Event Hubs",
      "PostgreSQL",
      "MongoDB",
    ],
    thumbnail: "/platform-v2-thumb.png",
    summary:
      "멈춰 있던 아키텍처 논의를 정리해 전체 플랜을 수립하고, 프론트엔드와 이벤트 파이프라인을 담당",
    web: "https://github.com/Junseop-Shin/Work/blob/main/Work_History/2026-06-플랫폼-v2-재설계.md",
    sections: [
      {
        heading: "주요 작업",
        items: [
          "멈춰 있던 아키텍처 논의를 정리해 전체 플랜 수립 — 공통 구조 + 분리 빌드·배포 + 기본앱 제공 체계로 재설계",
          "프론트엔드: 관리자 앱 + 비즈니스 기본앱(웹·모바일), 공통/비즈니스 경계 설계, 디자인 시스템 적용",
          "이벤트 파이프라인(Go): 수신 어댑터→판단 코어→실행기 구조, 멱등 처리 + DLQ, Event Hubs 별도 토픽",
          "수집 경로 분리 방향 설계: Function Apps→Kafka 전환으로 유실 없는 수집 + Capture 아카이빙, 수집 입구 비용 1/5 절감",
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
    stack: ["React", "Next.js", "TypeScript", "Spring", "Java", "Rollbar"],
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
    title: "SEMS → TnM IoT 플랫폼 이관",
    subtitle: "Ncloud 기반 SEMS를 Azure 위 TnM IoT 플랫폼으로 전면 이관",
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
      "Ncloud에 있던 SEMS 서비스를 Azure 위 TnM IoT 플랫폼으로 전면 이관. DB 마이그레이션, CI/CD 자동화, API 연동까지 풀스택 마이그레이션 수행",
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
    subtitle: "Ncloud 정리 · Azure 리소스 및 스토리지 최적화",
    period: "2026.01 ~ 2026.07",
    stack: [
      "Azure",
      "Azure Data Factory",
      "Blob Storage",
      "Ncloud",
      "GitHub Actions",
    ],
    thumbnail: "/cloud-cost.svg",
    summary:
      "불필요한 클라우드 리소스를 분석·정리하고, 계속 증가하던 스토리지 비용을 압축 아카이빙 파이프라인으로 고정비화. 운영·개발 환경 모두에서 비용을 대폭 절감",
    metrics: [
      { label: "Ncloud 리소스", value: "월 830만원 → 125만원" },
      { label: "Table Storage", value: "월 123만원 → 48만원" },
      { label: "Azure 운영 환경 최적화", value: "월 $742 추가 절감" },
    ],
    sections: [
      {
        heading: "Ncloud 리소스 정리",
        items: [
          "SEMS 기존 Ncloud 리소스 사용 현황 파악 및 Azure 이관으로 불필요 리소스 정리 (VM, 로드밸런서, DB 가용성 해제 등)",
          "플랫폼 이관 완료 후 미이관 서비스를 제외한 전 리소스 정리 — 월 830만원 → 125만원",
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
        heading: "Azure 리소스 최적화",
        items: [
          "Azure logAnalytics, Function apps 설정 변경 및 VM 대체로 운영 환경 월 $742 절감 (당시 USD 청구 기준, 이후 원화 청구로 전환)",
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
