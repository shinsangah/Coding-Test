// 문제 설명
// 정수 n이 매개변수로 주어질 때,
// n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예 설명

// 입출력 #1
// 10 이하의 홀수가 담긴 배열[1, 3, 5, 7, 9]를 return합니다.

// 입출력 #1
// 15 이하의 홀수가 담긴 배열[1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.


// const tc1 = 3;
// const tc2 = 2;
// const tc3 = 15;

// function solution(n) {
//   let answer = []; // answer는 배열이 될거니까 [] 이렇게 시작

//   for (let i = 1; i <= n; i++) { // 반복이니까 for문 씀
//     if (i % 2 === 1) {
//       answer.push(i); // 배열에 숫자 추가하는 것은 push(i)
//     }
//   }

//   return answer;
// }

function solution(num) {
  let answer = []; // answer는 배열이 될거니까 [] 이렇게 시작

  for (let i = 1; i <= num; i += 2) { // 간단하게 tip 같은걸로 시간을 줄이는걸 알고리즘
    answer.push(i);
  }

  return answer;
}

// console.log(solution(tc1));
// console.log(solution(tc2));
// console.log(solution(tc3));

// 이렇게 하나 하나 외워나가면 됨
