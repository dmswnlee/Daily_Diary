# Daily_Diary
### 개인프로젝트
### 내 손안에 데일리 다이어리 (https://jay-dailydiary.web.app/)

<br>

📓 제작기간 

23.02.26 ~ 23.03.05

<br>

📓 사용기술 

React.js , CSS, Local Storage, Firebase

<br>

### 구현계획
1. 로딩화면
2. 일기 리스트  
3. 새로운 일기 추가하기
4. 추가한 일기 상세페이지
5. 일기 수정하기
6. 일기 삭제하기
7. 달마다 일기 필터링
8. 최신순, 오래된순 필터링
9. 감정별 필터링

<br>

___

<img src='https://github.com/dmswnlee/Daily_Diary/blob/master/dd_img/01.png?raw=true' alt='loading page' />

* 로딩페이지

<br>

<img src='https://github.com/dmswnlee/Daily_Diary/blob/master/dd_img/04.png?raw=true' alt='HOME page' />

* HOME 페이지
* 일기 리스트 출력 
* 일기를 작성한 후 추가하면 작성한 일기의 개수 파악 가능 
* 필터기능을 통해 최신순 / 오래된순 , 좋은감정만 / 나쁜감정만 / 모두다 필터링 가능

<br>

<img src='https://github.com/dmswnlee/Daily_Diary/blob/master/dd_img/03.png?raw=true' alt='NEW page' />

* NEW 페이지
* 새 일기 추가하기 

<br>

<img src='https://github.com/dmswnlee/Daily_Diary/blob/master/dd_img/05.png?raw=true' alt='DIARY page' />

* 일기 상세페이지 

<br>

<img src='https://github.com/dmswnlee/Daily_Diary/blob/master/dd_img/06.png?raw=true' alt='EDIT page' />

* 일기 수정페이지
* 일기 삭제버튼 클릭 시 삭제 가능 

<br>

___

<img src='https://github.com/dmswnlee/Daily_Diary/blob/master/dd_img/07.PNG?raw=truee' alt='open graph' />

* open graph 태그를 이용한 링크 미리보기 설정 

<br>

___ 

### 오류해결

1.
오류 : Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: boolean.
원인 : 로딩페이지 컴포넌트가 improt 되지않아 발생
해결 : 로딩페이지 import 함.

<br>

2.
오류 : uncaught typeerror: cannot read properties of undefined (reading 'id')
원인 : 작성한 일기들을 다 삭제한 후 새로고침하면 로컬스토리지의 배열이 비워지며 빈배열 인덱스에 접근할 수 없어 오류가 남
해결 : 조건문을 통해 배열의 길이가 1이상일때만 수행될 수 있도록 함.

<br>

___





