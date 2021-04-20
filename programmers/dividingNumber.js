/* *******************************
 * 2021-04-20
 * 프로그래머스
 * 나누어 떨어지는 숫자 배열
 *********************************

 * 문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

 * 제한사항
arr은 자연수를 담은 배열입니다.
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
divisor는 자연수입니다.
array는 길이 1 이상인 배열입니다.

 ****************************** */

/* SOLUTION */
function solution(arr, divisor) {
    var resultArr = arr.filter(item => item % divisor === 0).sort((a, b) => a-b);

    return resultArr.length === 0? [-1]: resultArr;
}

/* TESTCASE & EXECUTE */
var arr = [[5, 9, 7, 10], [2, 36, 1, 3], [3,2,6]];
var divisor = [5, 1, 10];
var resultList = [[5, 10], [1, 2, 3, 36], [-1]];

var i=0;
while(i < resultList.length){
	var result = solution(arr[i], divisor[i]);
	console.log(`solution : ${resultList[i]}, your result : ${result}`);
	i++;
}