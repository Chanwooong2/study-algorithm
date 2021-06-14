/* *******************************
 * 2021-06-14
 * 프로그래머스
 * 문자열 내림차순으로 배치하기
 *********************************

 * 문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

 * 제한 사항
str은 길이 1 이상인 문자열입니다.

 ****************************** */

/* SOLUTION */
function solution(s) {
    return s
        .split("")
        .sort((a, b) => b.charCodeAt()-a.charCodeAt())
        .join("");
}

/* TESTCASE & EXECUTE */
var s = ["Zbcdefg"];
var resultList = ["gfedcbZ"];

var i=0;
while(i < resultList.length){
	var result = solution(s[i]);
	console.log(`solution : ${resultList[i]}, your result : ${result}`);
	i++;
}