// 23.02.17 수업시간
// // 수박수박수박수박수박수?

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// 테스트 케이스
const tc1 = 3; // 수박수
const tc2 = 4; //수박수박

console.log(solution(tc1));

// for문 쓰고 하는 버릇이 있음.
// for문으로 거의 해결하는게 코테여서.

// 강사님 답 1.
function solution(n) {
  let answer = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

// 강사님 답 2.
function solution(n) {
  let answer = '';
  const str = "수박";
  return n % 2 === 1 ? str.repeat(Math.floor(n / 2)) + "수" : str.repeat(Math.floor(n / 2))
} // 이런건 나중에 장난치듯이 하는 것이고, 실제로는 1번 방법들을 익혀놓아라.
// 코드를 줄이기 위해서 이런 식으로 한다. Math.floor 소숫점 없애는거임.


// 1. 답
function solution(n) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

// 2. 답
function solution(n) {
  let answer = ""
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += "박"
    } else {
      answer += "수"
    }
  }
  return answer;
}

// 3. 답
function solution(n) {
  return "수박".repeat(n).substring(0, n)
}

