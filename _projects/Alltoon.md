---
title: Alltoon
description: 사이드 프로젝트
date: 2023-12-30
---
# Alltoon

<div style= "display: inline-flex">
  <img style="padding: 5px" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>
  <img style="padding: 5px" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
  <img style="padding: 5px" src="https://img.shields.io/badge/recoil-3578E5?style=flat&logo=recoil&logoColor=white"/> 
  <img style="padding: 5px" src="https://img.shields.io/badge/reactquery-FF4154?style=flat&logo=reactquery&logoColor=white"/> 
  <img style="padding: 5px" src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/>
</div>

서비스(naver,kakao,kakaoPage) 별 웹툰을 한 번에 볼 수 있는 웹사이트입니다.

#### [👉 접속하기](https://kn-front.github.io/Alltoon/) 


## 기능

**웹툰 뷰어 무한 스크롤 기능 구현**
- 사용자가 더욱 빠르게 콘텐츠를 탐색하고 정보를 습득할 수 있도록 useInfiniteQuery hook을 활용하여 무한 스크롤을 구현하였습니다.
- useInfiniteQuery hook을 활용하여 데이터 캐시 관리와 중복 요청을 방지하였습니다.
- 스크롤 위치와 요소의 교차점을 감지하기 위해 Intersection Observer API를 사용하여 ScrollDetector 컴포넌트 개발하였습니다.
  
**Skeleton Screen 구현**
- 사용자에게 데이터 로딩 상태를 시각적 피드백을 제공해 주기 위해 react-loading-skeleton을 활용하여 webtoon 로딩 상태를 구현하였습니다.
  
**다크 모드 기능 구현**
- 사용자에게 시각적 편의성을 제공하기 위해 다크 모드를 구현하였고 사용자의 시스템 설정에 따라 화면 테마를 자동으로 전환되도록 구현하였습니다.
- Tailwind CSS의 theme-extends-colors를 활용하여 다크 모드 색상 일관되게 관리하였습니다.

**React-Query 적용**
- 데이터 패칭, 캐싱, 동기화 작업을 효율적으로 구현하기 위해 react-query를 적용하였습니다.
- 불필요한 호출을 방지하고 캐싱을 통해 웹 성능을 최적화하였습니다.

**git branch 전략 도입**
- 효율적으로 버전 별로 소스 관리를 하기 위해서 git branch 전략을 도입하여 형상 관리하였습니다.

## Source
  
<div style= "display: inline-flex;">
  <a href="https://github.com/kwonyongjun1/webtoon"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white&link=https://github.com/kwonyongjun1/commit-message"/></a>
</div>

