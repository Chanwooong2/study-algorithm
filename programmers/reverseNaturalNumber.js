/* *******************************
 * 2021-05-11
 * 프로그래머스
 * 자연수 뒤집어 배열로 만들기

 *********************************

 * 문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

 * 제한 조건
n은 10,000,000,000이하인 자연수입니다.

 ****************************** */

/* SOLUTION */
function solution(n) {
    return (n+"").split("").map(a => a*1).reverse();
}

/* TESTCASE & EXECUTE */
var numbers = [12345];
var resultList = [[5,4,3,2,1]]

var i=0;
while(i < resultList.length){
	var result = solution(numbers[i]);
	console.log(`solution : ${resultList[i]}  your result : ${result}`);
	i++;
}