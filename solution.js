// 두 수의 합

// 정수 num1과 num2가 주어질 때,
// num1과 num2의 합을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1. -50,000 <= num1 <= 50,000
// 2. -50,000 <= num2 <= 50,000

// 입출력 예
// num1 num2 result
// 2    3    5
// 100  2    102

// 입출력 예 설명
// 입출력 예 #1
// num1이 2이고 num2가 3이므로 2 + 3 = 5를 return 합니다.
// 입출력 예 #2
// num1이 100이고 num2가 2이므로 100 + 2 = 102를 return 합니다.

// 변수 : 변하는 수
// num1 => 2
// num2 => 3

function solution(num1, num2) {
  return num1 + num2;
}

// function solution(num1, num2) {
//   var answer = -1;
//   return answer;
// }


// 두 수의 차

// 정수 num1과 num2가 주어질 때,
// num1에서 num2를 뺀 값을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1. -50,000 <= num1 <= 50,000
// 2. -50,000 <= num2 <= 50,000

// 입출력 예
// num1 num2 result
// 2    3    -1
// 100  2    98

// 입출력 예 설명
// 입출력 예 #1
// num1이 2이고 num2가 3이므로 2 - 3 = -1 return 합니다.
// 입출력 예 #2
// 

function solution(num1, num2) {
  var answer = num1 - num2;
  return answer;
}


// 두 수의 곱

// 정수 num1, num2가 매개변수 주어집니다.
// num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1. 0 <= num1 <= 100
// 2. 0 <= num2 <= 100

// 입출력 예
// num1 num2 result
// 3    4    12
// 27   19   513

// 입출력 예 설명
// 입출력 예 #1
// num1이 3, num2가 4이므로 3 * 4 = 12 return 합니다.
// 입출력 예 #2
// 

function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}



// 몫 구하기

// 정수 num1, num2가 매개변수로 주어질 때,
// num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1. 0 <= num1 <= 100
// 2. 0 <= num2 <= 100

// 입출력 예
// num1 num2 result
// 10   5    2
// 7    2    3

// 입출력 예 설명
// 입출력 예 #1
// num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
// 입출력 예 #2
// 

function solution(num1, num2) {
  return Math.floor(num1 / num2);
}