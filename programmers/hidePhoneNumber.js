/* *******************************
 * 2021-05-11
 * 프로그래머스
 * 핸드폰 번호 가리기
 *********************************

 * 문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

 * 제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.

 ****************************** */

/* SOLUTION */
function solution(phone_number) {
    return phone_number.slice(0,phone_number.length-4).replace(/./gm,"*") + phone_number.slice(phone_number.length-4);
}

/* TESTCASE & EXECUTE */
var numbers = ["01033334444", "027778888"];
var resultList = ["*******4444", "*****8888"]

var i=0;
while(i < resultList.length){
	var result = solution(numbers[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}