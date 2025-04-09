export type ProjectType = "personal" | "work" | "all";

export interface Project {
  type: ProjectType;
  title: string;
  subtitle: string;
  date: string;
  skills: string;
  link: string;
  git?: string;
  web?: string;
  image: string;
  description?: string[];
  subProjects?: Project[];
}

export const projects: Project[] = [
  {
    type: "personal",
    title: "프로필",
    subtitle: "프로필 웹페이지 만들기",
    date: "2025.04 ~ ",
    skills: "React, TypeScript, TailwindCSS",
    link: "profile",
    image: "/profile.png",
    web: "https://testproject-ba5ce.web.app/",
    git: "https://github.com/Junseop-Shin/profile",
    description: [
      "기본 웹페이지 만들기",
      "섹션id와 scrollIntoView를 통한 이동과 react-router를 이용한 SPA 라우팅",
      "Framer-motion을 이용한 기본 애니메이션 적용",
      "ContextAPI와 TailwindCSS를 이용한 테마(다크모드) 지원",
      "TailwindCSS를 이용한 반응형 디자인 적용",
      "커서 컴포넌트 및 애니메이션 적용",
      "구글 firebase를 이용한 배포",
    ],
  },
  {
    type: "personal",
    title: "BOLD 웹페이지",
    subtitle: "디자이너 포트폴리오 웹사이트",
    date: "2025.03 ~ 2025.04",
    skills: "React, TypeScript, Next.js, Styled-Components",
    link: "bold",
    image: "/BOLD.png",
    web: "https://boldgobynd.vercel.app/",
    git: "https://github.com/Junseop-Shin/boldgobynd",
    description: [
      "기본 웹페이지 만들기",
      "next를 이용한 페이지 라우팅",
      "Framer-motion을 이용한 기본 애니메이션 적용",
      "Styled-Components 이용한 반응형 디자인 적용",
      "Carousel, Gallery, Dropdown 등 구현",
      "카카오톡 플러스 친구 알림 기능 적용",
      "Vercel을 이용한 배포",
    ],
  },
  {
    type: "work",
    title: "Ax",
    subtitle: "여행 B2B 서비스",
    date: "2023.09 ~ 2023.12",
    skills: "React, TypeScript, Styled-Components, SWR, Redux",
    link: "ax",
    image: "vite.svg",
    subProjects: [
      {
        type: "work",
        title: "",
        subtitle: "신기능 구현",
        link: "",
        date: "2023.09 ~ 2023.12",
        skills: "React, TypeScript, Styled-Components, SWR, Redux",
        image: "",
        description: [
          "계정관리: 계정의 계좌/채널/계약 정보 관련 생성/상세/수정 페이지 추가",
          "상품 판매단위생성: 상세/수정 페이지 추가",
          "상품 미리보기: 상품의 가채널 판매 화면 제공, 비회원을 위한 공유용 미리보기 화면 제공",
        ],
      },
      {
        type: "work",
        title: "",
        subtitle: "CI/CD 및 공통 구조 관련 업무",
        link: "",
        date: "2023.09 ~ 2023.12",
        skills: "React, TypeScript, Styled-Components, SWR, Redux 등",
        image: "",
        description: [
          "Typescript, eslint, prettier 적용: TypeScript 새 구현부부터 적용",
          "Git hooks 추가: pre-commit시 type check 및 link check 추가. PR action으로 패키지 설치 및 빌드 수행 추가",
          "디자인 시스템 적용: Color, Label, Icon, InputField, TextArea, Dropdown, Dialog, Modal 등 구현. 새 구현부부터 적용",
          "상태 관리 라이브러리: 새 구현부부터 redux, swr 적용. 기존 ContextAPI, react-hook-form, zustand 사용",
          "날짜 관리: 기존 moment 라이브러리를 date-fns로 변경",
        ],
      },
      {
        type: "work",
        title: "",
        subtitle: "제품 안정화",
        link: "",
        date: "2023.09 ~ 2023.12",
        skills: "React, JavaScript, Styled-Components",
        image: "",
        description: [
          "백로그 포함 할당 이슈 약 180개 중 약 78%, 140개 해결",
          "백로그 제외 전체 해결",
        ],
      },
    ],
  },
  {
    type: "work",
    title: "웹오피스",
    subtitle: "웹오피스 공통(docx, pptx, xlsx, hwp)",
    date: "2022.02 ~ 2023.09",
    skills: "React, TypeScript, MobX, sass, eslint, prettier, jest, webpack",
    link: "weboffice",
    image: "vite.svg",
    subProjects: [
      {
        type: "work",
        title: "",
        subtitle: "웹오피스 클립보드 프레임워크",
        link: "",
        date: "2022.02 ~ 2023.09",
        skills: "React, TypeScript, MobX",
        image: "",
        description: [
          "오피스 클립보드 컨테이너 관리: 오피스 클립보드 포맷 데이터를 Object화해 sync 보장 및 큐처럼 관리하도록 리팩토링",
          "표준 웹 클립보드 API 이용 외부 오피스와 데이터 호환 프레임워크 구현",
          "데이터 포맷간 변환을 위한 parse/write 구조 구현",
          "copy, paste 관련 pre/post 프로세스 구조 개선",
          "기타 문제 해결 및 유지보수",
        ],
      },

      {
        type: "work",
        title: "",
        subtitle: "웹오피스 셀렉션 프레임워크",
        link: "",
        date: "2022.06 ~ 2023.09",
        skills: "React, TypeScript, MobX",
        image: "",
        description: [
          "블럭 셀렉션 처리를 위해 모델 정보를 이용해 셀렉션 자동생성하도록 리팩토링",
          "도형, 표 등 오피스 자체 셀렉션 및 공동 편집 시 세션 별 처리",
          "중복이나 불필요한 구조 개선 및 전처리/후처리 로직 추가 등",
          "기타 문제 해결 및 유지보수",
        ],
      },
      {
        type: "work",
        title: "",
        subtitle: "웹오피스 클라이언트 CI/CD",
        link: "",
        date: "2023.02 ~ 2023.09",
        skills: "webpack, jest, React",
        image: "",
        description: [
          "빌드 성능 개선: webpack v4에서 v5로 마이그레이션. babel-loader/terser-webpack-plugin에서 esbuild-loader/esbuildMinifyPlugin 전환",
          "jest 성능 개선: jest v26에서 v29로 버전 업을 통해 성능 개선. 비동기 로직(리소스 로딩 등) mocking을 통한 성능 개선",
          "패키지 버전 최신화: React v.16에서 v.18로 마이그레이션 및 관련 패키지 전체 버전 업데이트",
          "Gitlab 파이프라인 관리, husky: Gitlab runner docker에 메모리 제한을 걸어 jest 실행 중 메모리 충돌로 인한 파이프라인 실패 개선. husky python에서 node.js로 마이그레이션, pre-commit 오류 해결, 깃랩 MR action에서 cp를 mv로 변경해 속도 개선",
          "빌드 환경별 옵션 및 패키지 관리, 배포 패키징",
        ],
      },
    ],
  },
  {
    type: "work",
    title: "오피스",
    subtitle: "Hwp 문서 편집기 ToHangul 개발",
    date: "2020.02 ~ 2022.02",
    skills: "C++, OOXML, MVC 패턴",
    link: "office",
    image: "vite.svg",
    subProjects: [
      {
        type: "work",
        title: "",
        subtitle: "ToHangul 개발",
        link: "",
        date: "2023.09 ~ 2023.12",
        skills: "React, TypeScript, Styled-Components, SWR, Redux",
        image: "",
        description: [
          "쪽 번호 매기기: 동작 정상화 및 오피스 소기능 페인트 구조 파악",
          "머리말꼬리말: 오피스 레이아웃 구조 파악. 바이너리 스펙 read/write 구현. 머리말꼬리말 편집/템플릿 기능 구현",
          "확대/축소, 인쇄/미리보기/회색조: 전체적인 오피스 뷰컨트롤러/페인트 구조 파악. 편집기호 등 편집화면과 다른 인쇄/미리보기 화면 전체처리(paint vs print). 화면 스케일링, 필터링 처리",
          "줄번호: 기존 event-driven 구조를 이용한 카운팅 및 페인트 기능 구현",
          "기타 전반적인 제품 안정화",
          "KERIS에 ToHangul 서비스 제공",
        ],
      },
    ],
  },
];
