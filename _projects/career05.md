---
title: 서울시청 수방 시스템 관리자 페이지
description: wavus
date: 2024-01-26
---

## 서울시청 수방 시스템 관리자 페이지

### 프로젝트 내용

지도를 기반하여 서울 시청 수방 정보를 제공해주는 웹 시스템

### 프로젝트 기간

#### 2023.08 ~ 2024.03

### 사용 기술

- Front : React, TypeScript, Zustand, React-Query, TailwindCSS
- 배포 : Jeus

### 구성 인원
- Front : 2명
- Designer : 1명

### 맡은 업무
- 서울 시청 수방 시스템 어드민 페이지 개발
  
### 업무 내용
사용자가 만족하는 시스템 제공하고 원활한 협업을 하기 위해서 사용자의 요구 사항을 기반으로 기존 시스템 성능 최적화와 협업 프로세스를 개선하는 데 집중하였습니다.

- JSP 코드를 React Migration 작업으로 공통 기능 컴포넌트화 및 사용자 경험 개선
- 디자이너와 협업을 통해 Atomic Design Pattern을 기반 UI 컴포넌트를 개발
- React-Query로 비동기 데이터를 관리하여 데이터 패칭 작업 간소화 및 캐싱 기능을 활용해 중복 요청을 방지하여 네트워크 요청 50% 감소
- React.lazy를 활용하여 페이지 로딩 속도(FCP)를 2.5초에서 1.3초로 감소
- 비동기 작업을 간결하게 하기 위해 Axios로 전환 및 Interceptor를 활용해 한 곳에서 에러 핸들링을 관리하여 중복 코드 감소
- 효율적인 branch 관리하기 위해 SVN에서 Git으로 전환 및 GitHub flow 도입
- 일관된 변경 이력을 관리하기 위해 commit-message convention 도입
