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

- 불필요한 요청을 방지하기 위해 React Query의 useInfiniteQuery hook을 활용하여 무한 스크롤 구현
- 스크롤 할 때마다 이벤트가 발생하는 scroll event의 문제점을 개선하기 위해 Intersection Observer API 도입
- react-loading-skeleton을 활용하여 사용자에게 로딩 상태 시각적 피드백 제공
- local storage를 활용하여 사용자 시스템 설정에 따라 화면 테마를 자동으로 전환되도록 다크/라이트 모드 구현
