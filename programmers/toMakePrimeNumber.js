/* *******************************
 * 2021-05-11
 * 프로그래머스
 * 소수 만들기
 *********************************

 * 문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

 * 제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
입출력 예
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4
입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.

 ****************************** */

/* SOLUTION */
function solution(nums) {
    var result = 0;
    var arr = combination(nums, 3);
    arr.forEach(item =>{
        if(checkPrimeNumber(item.reduce((a, b) => a+b))){
            result++;
        }
    })
    return result;
}
function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
function checkPrimeNumber(number){
    if(number == 1 || number == 0) return false;
    for(var i=2; i*i <= number; i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}

/* TESTCASE & EXECUTE */
var numbers = [[1,2,3,4], [1,2,7,6,4]];
var resultList = [1, 4]

var i=0;
while(i < resultList.length){
	var result = solution(numbers[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}