import { projects, type Project } from "./projects";

/** projects[]의 slug를 참조하는 자식은 링크, 그 외는 텍스트로만 표시된다 */
export type GroupChild =
  | { ref: string }
  | { title: string; period?: string; note: string };

export interface ProjectGroup {
  main: string;
  children: GroupChild[];
}

/** 배열 순서가 곧 화면 노출 순서 (최신 제품 우선) */
export const projectGroups: ProjectGroup[] = [
  {
    main: "platform-v2",
    children: [{ ref: "platform-v2-redesign" }],
  },
  {
    main: "tnm-platform",
    children: [
      { ref: "platform-migration" },
      { ref: "tnm-widgets" },
      { ref: "cloud-cost" },
      {
        title: "플랫폼 Task 구조 리팩토링",
        period: "2026.02",
        note: "로깅 정책 통일, FastAPI + Uvicorn 통일, graceful shutdown 및 Azure Monitor 적용",
      },
      {
        title: "SEMS 정기점검·설치공사 사후점검 기능 추가",
        period: "2026.05",
        note: "기사가 완료한 정기점검·설치공사를 무작위 표본으로 뽑아 관리자가 현장에서 재검사하는 감사 기능",
      },
    ],
  },
  {
    main: "sems",
    children: [
      { ref: "mobile-renewal" },
      {
        title: "레거시 유지보수·장애 대응",
        period: "2025.05 ~ 2026.01",
        note: "JSP/JS 파일 캐시 문제 쿼리스트링 처리, 기상청 API 오류 대응",
      },
      {
        title: "신규 기능 추가",
        period: "2025.05 ~ 2026.01",
        note: "간판 정기점검, 해피콜, 양수도 등",
      },
      { ref: "platform-migration" },
      {
        title: "전력량 보정",
        period: "2025.11",
        note: "보정 로직 적용으로 80% 점포에서 한전 실제 전력량과 오차 5% 이내 달성",
      },
      { ref: "mobile-native" },
    ],
  },
  {
    main: "ax",
    children: [
      {
        title: "제품 안정화",
        note: "할당 이슈 약 180개 중 140개(78%) 해결, 백로그 제외 전체 해결",
      },
      {
        title: "신기능 구현",
        note: "계정·상품 관리 페이지 및 가채널 판매 미리보기 구현",
      },
      {
        title: "CI/CD 및 공통 구조",
        note: "TypeScript·ESLint 도입, 디자인 시스템 구축, Redux·SWR 적용",
      },
    ],
  },
  {
    main: "weboffice",
    children: [
      {
        title: "클립보드 프레임워크",
        period: "2022.02 ~ 2023.09",
        note: "포맷 데이터 Object화, sync 보장 및 큐 구조 리팩토링, 외부 오피스 데이터 호환",
      },
      {
        title: "셀렉션 프레임워크",
        period: "2022.06 ~ 2023.09",
        note: "모델 정보 기반 셀렉션 자동생성, 도형·표 자체 셀렉션 및 공동 편집 세션별 처리",
      },
      {
        title: "클라이언트 CI/CD",
        period: "2023.02 ~ 2023.09",
        note: "webpack v4→v5, jest v26→v29, React v16→v18 마이그레이션",
      },
    ],
  },
  {
    main: "tohangul",
    children: [
      {
        title: "문서 편집 기능",
        note: "쪽 번호 매기기, 머리말꼬리말 편집/템플릿, 줄번호 카운팅",
      },
      {
        title: "인쇄·렌더링 처리",
        note: "인쇄/미리보기/회색조 전체처리(paint vs print), 화면 스케일링",
      },
    ],
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** 메인이거나 어떤 메인의 자식인 slug — 단독 카드 그리드에서 제외된다 */
export const groupedSlugs = new Set(
  projectGroups.flatMap((g) => [
    g.main,
    ...g.children.flatMap((c) => ("ref" in c ? [c.ref] : [])),
  ])
);

/** 라우팅 가능한 하위 프로젝트만 — 텍스트 전용 자식은 이동할 곳이 없어 제외한다 */
export function findChildren(slug: string): Project[] {
  const group = projectGroups.find((g) => g.main === slug);
  if (!group) return [];
  return group.children
    .flatMap((c) => ("ref" in c ? [findProject(c.ref)] : []))
    .filter((p): p is Project => p !== undefined);
}

/** 한 프로젝트가 여러 메인에 걸칠 수 있어 배열을 반환한다 */
export function findParents(slug: string): Project[] {
  return projectGroups
    .filter((g) => g.children.some((c) => "ref" in c && c.ref === slug))
    .map((g) => findProject(g.main))
    .filter((p): p is Project => p !== undefined);
}
