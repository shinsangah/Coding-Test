// // 문제 설명
// // 정수 n이 매개변수로 주어질 때,
// // n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// // 제한사항
// // 1 ≤ n ≤ 100

// // 입출력 예 설명

// // 입출력 #1
// // 10 이하의 홀수가 담긴 배열[1, 3, 5, 7, 9]를 return합니다.

// // 입출력 #1
// // 15 이하의 홀수가 담긴 배열[1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.

// const tc1 = 3;
// const tc2 = 2;
// const tc3 = 15;

// console.log(solution(tc1));
// console.log(solution(tc2));
// console.log(solution(tc3));

// ↑ 맞게 출력되는지 확인하는 코드

// 답 예시 1.
function solution(n) {
  let answer = []; // answer는 배열이 될거니까 [] 이렇게 시작

  // 반복문이니까 for문 쓴 것
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i) // 배열에 숫자 추가하는 것임!
    }
  }
  return answer;
}

// 답 예시 2.
function solution(n) {
  let answer = [];
  for (let i = 1; i <= num; i += 2) { // 이런식으로 시간을 줄이는 알고리즘도 존재
    answer.push(i)
  }
  return answer;
}
