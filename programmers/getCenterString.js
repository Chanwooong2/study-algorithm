/* *******************************
 * 2021-04-22
 * 프로그래머스
 * 가운데 글자 가져오기
 *********************************

 * 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

 * 제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

 ****************************** */

/* SOLUTION */
function solution(s) {
    var newArr = [...s];
    return newArr.length%2 == 0 ?  newArr.splice(newArr.length/2-1, 2).join(""): newArr.splice(Math.floor(newArr.length/2), 1).join("");
}

/* TESTCASE & EXECUTE */
var n = ["abcde", "qwer"];
var resultList = ["c", "we"];

var i=0;
while(i < resultList.length){
	var result = solution(n[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}