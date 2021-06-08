/* *******************************
 * 2021-06-09
 * 프로그래머스
 * 수박수박수박수박수박수
 *********************************

 * 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

 * 제한 조건
n은 길이 10,000이하인 자연수입니다.

 ****************************** */

/* SOLUTION */
function solution(n) {
    var answer = '';
    for(var i=0; i<Math.floor(n/2); i++){
        answer += "수박";
    }
    return n%2 == 1 ? answer + "수" : answer;
}

/* TESTCASE & EXECUTE */
var s = [3,4];
var resultList = ["수박수", "수박수박"];

var i=0;
while(i < resultList.length){
	var result = solution(s[i]);
	console.log(`solution : ${resultList[i]}, your result : ${result}`);
	i++;
}