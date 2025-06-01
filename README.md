# product-webpage

## 개요

본 Repository는 WEEBUR 프론트엔드 코딩 과제를 위한 저장소입니다. 상품 데이터를 활용하여, 상품 리스트 페이지와 상품 생성 페이지를 구현한 프로젝트입니다.

## 요구사항 명세

1. 기술 요구사항
    
    React, Next.js, TypeScript
    
2. 기능 요구사항
    
    | 페이지 | 요구 기능 | 상세 |
    | --- | --- | --- |
    | 상품 리스트 페이지 <br/>`/products` | 페이지 진입시 상품 리스트 표시 | 20개의 아이템만 노출된다. |
    |  | 각 상품마다 상세 데이터 표시 | - 상품명 (`title`)<br/> - 상품설명 (`description`) <br/> - 썸네일 이미지 (`thumbnail`) <br/> - 별점 (`rating`) <br/> - 리뷰 수 (`reviews`) |
    |  | 보기(View) 타입 2종류 | 1. 리스트형(List): 한 줄에 1개 아이템 <br/> 2. 그리드형(Grid): 한 줄에 4개 아이템 |
    |  | 페이지 최초 진입시 보기(View) 타입 결정 | - 최초 진입 시에 50% 확률로 랜덤하게 View 방식이 결정된다. <br/> - View 방식은 24시간 동안 유지된다. |
    |  | 상품 생성 페이지 이동 버튼 | 리스트 상단에 있는 상품 생성 버튼을 누르면 `/products/new` 페이지로 이동한다. |
    | 상품 생성 페이지 <br/> `/products/new` | 상품 생성 | 유효성 검사 조건은 3번에서 나열한다. |
    |  | 할인가 계산 | price에서 discountPrecentage 로 계산된 최종 가격을 실시간으로 표시 |
    |  | 생성 완료시 페이지 이동 | 상품 생성이 완료되면 `/products` 페이지로 이동한다. (생성 데이터 반영x) |

1. 상품 데이터 유효성 조건

    | 필드명 | 타입 | 필수여부 | 유효성 검사 |
    | --- | --- | --- | --- |
    | title | text | required | 15자 이내 입력 |
    | description | textarea | optional | - |
    | price | number | required | 1000원 이상 입력 |
    | discountPercentage | number | optional | 100이내로 입력 |
    | brand | select | required | `Apple`, `Samsung`, `Weebur` | 2. 그리드형 |

<br/>

## 개발 전 설계

### 1. 기술 스택

- Next.js 14 (App Router)
- TypeScript
- React Server Components (RSC)
- React Query (@tanstack/react-query)
- Tailwind CSS
- Zod
- sonner
- react-icons

### 2. 디렉토리 구조

| Layer | 설명 |
| --- | --- |
| `/app/` | 페이지 라우팅 및 RSC 기반 SSR |
| `/entities/` | 도메인 모델 (타입, UI 컴포넌트, 유틸) |
| `/features/` | 사용자 액션 기반 기능 단위 (상품 생성) |
| `/shared/` | 공통 UI 및 라이브러리 |
| `/widgets/` | 특정 페이지를 구성하는 큰 UI 블록 |

### 3. 렌더링 전략

| 페이지 | 컴포넌트 | 방식 | 설명 |
| --- | --- | --- | --- |
| `/products` | `ProductPage` | Server Component | 서버에서 API fetch |
| `/products/new` | `CreateProductForm` | Client Component | React Query 사용(상태 관리, 뮤테이션 처리, 토스트 UI) |

### 4. 기타 고려사항

- `viewType`은 진입 시 랜덤 결정 후, `localStorage`에 24시간 저장
- API 에러 시, 400응답을 감지해 toast 모달 처리
- `discountPercentage` 입력 시 실시간 할인가 계산