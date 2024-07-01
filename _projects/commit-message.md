---
title: Commit-Message
description: 사이드 프로젝트
date: 2024-01-10
---

# Commit-Message 

<div style= "display: inline-flex">
  <img style="padding: 5px" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black "/>
  <img style="padding: 5px" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black "/>
  <img style="padding: 5px" src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white "/>
  <img style="padding: 5px" src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white "/>
  <img style="padding: 5px" src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white "/>
  <img style="padding: 5px" src="https://img.shields.io/badge/Electron-47848F?style=flat&logo=Electron&logoColor=white"/>
</div>

좋은 커밋 메시지를 작성하도록 도와주는 웹사이트입니다.
컨벤션에 맞게 커밋 메시지를 작성하는데 어려운 팀원들과 신입 사원들을 위해 개발하였습니다.
- 일관성 있는 커밋 메시지를 작성하기 위해 커밋 컨벤션에 맞추어 작성할 수 있습니다.
- 😀 Desktop App도 지원합니다.


#### [👉 접속하기](https://kwonyongjun1.github.io/commit-message/) 


## Commit Message Basic Structure
```
{emoji} {type}({scope}): {subject} //header(제목)
​
{body} //body(본문)
​
{issue tracker} //footer(꼬리말)

{breaking change}
```
- 커밋 메세지 구조는 참고자료와 주로 사용할 팀원들과 회의를 통해 결정하였습니다.
- 가시성을 높이기위해서 메시지 앞에 gitEmoji를 사용하였습니다.

## 기능
- 사용자의 편리한 접근성을 제공해 주기 위해 Electron을 활용하여 desktop App 제공
- 사용자에게 커밋 메시지 작성 이력을 제공해 주기 위해 local storage를 활용하여 히스토리 기능 구현
- Electron의 호환성과 사용자에게 간결하게 알림을 제공하기 위해 Toast 메시지 알림 구현

## References
- [좋은 커밋 메시지 작성하기](https://github.com/sj960126/Commit-message)
- [gitmoji](https://gitmoji.dev/)

