/* *******************************
 * 2021-04-18
 * 프로그래머스
 * 2016년
 *********************************

 * 문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

 * 제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

 ****************************** */

//	idea : Date 내장 객체 사용

/* SOLUTION */
function solution(a, b) {
    var dayList = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var date = new Date("2016-"+ a +"-"+ b);
    var day = date.getDay();

    return dayList[day];
}

/* TESTCASE & EXECUTE */
var a = [5];
var b = [24];
var resultList = ["TUE"]

var i=0;
while(i < resultList.length){
	var result = solution(board[i], moves[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}