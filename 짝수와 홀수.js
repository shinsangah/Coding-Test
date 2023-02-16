// 짝수와 홀수

// 문제 설명

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수,
// solution을 완성해주세요.

// 제한 조건
// - num은 int 범위의 정수입니다.
// - 0은 짝수입니다.

// 입출력 예
// num 3, 4
// return "Odd", "Even"

const tc1 = 3;
const tc2 = 2;
const tc3 = 15;

// 그냥 외우면 된다. 이게 짝수라고.

console.log(solution(tc1));
console.log(solution(tc2));
console.log(solution(tc3));

// 짝수인지 홀수인지 확인하고,
// 내 문제는 되는구나 하고 확인하고 솔루션 내부의 코드 copy 해서 프로그래머스에 붙이기
// 프로그래머스 자체에서 하면 불편하니까 7VS CODE 에서 하는 것을 추천하심


function solution(n) {
  let answer = ""
  if (n % 2 === 0) {
    answer = "Even"
  } else {
    answer = "odd"
  }
  return answer;
}

function solution(n) {
  let answer = "";
  return n % 2 === 0 ? "Even" : "Odd"
}

function solution(n) {
  let answer = "";
  if (n % 2 === 0) {
    answer = "Even"
  } else {
    answer = "Odd"
  }
  return answer;
}

function solution(n) {
  let answer = "";
  return n % 2 === 0 ? "Even" : "Odd"
}


fuction solution(n) {
  let answer = "";
  return n % 2 === 0 ? "Even" : "Odd"
}

function solutino(n) {
  let answer = "";
  if (n % 2 === 0) {
    answer = "Even"
  } else {
    answer = "Odd"
  }
  return answer;
}