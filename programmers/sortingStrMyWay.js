/* *******************************
 * 2021-05-03
 * 프로그래머스
 * 문자열 내 마음대로 정렬하기
 *********************************

 * 문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

 * 제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

 ****************************** */

// idea : sort 함수로 정렬, 같은 것이 있다면 전체 문자열로 정렬
/* SOLUTION */
function solution(strings, n) {
	strings.sort((a,b) =>{
		if(a[n] === b[n]){
			return a < b ? -1:1;
		}
		return a[n] < b[n] ? -1:1;
	});

    return strings;
}

/* TESTCASE & EXECUTE */
var s = [["sun", "bed", "car"], ["abce", "abcd", "cdx"]];
var resultList = [["car", "bed", "sun"], ["abcd", "abce", "cdx"]];

var i=0;
while(i < resultList.length){
	var result = solution(s[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}