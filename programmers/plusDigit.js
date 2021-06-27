/* *******************************
 * 2021-06-27
 * 프로그래머스
 * 자릿수 더하기
 *********************************

 * 문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

 * 제한사항
N의 범위 : 100,000,000 이하의 자연수

 ****************************** */

/* SOLUTION */
function solution(n){
    return [...(n+"")].reduce((a, b) => a*1+b*1)*1;
}

/* TESTCASE & EXECUTE */
var numbers = [123, 987];
var resultList = [6, 24];

var i=0;
while(i < resultList.length){
	var result = solution(numbers[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}