/* *******************************
 * 2021-04-13
 * 프로그래머스
 * 완전탐색 소수찾기
 *********************************

 * 문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

 * 제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

 ****************************** */
//	idea : 주어진 숫자를 조합해서 만들수 있는 모든 수를 만들어서 배열에 저장(targetArr)
//	- targetArr를 Set에 옮겨 담는 방식으로 중복 제거
//	- targetArr를 소수판별 함수에 돌린다.

// 소수 판별 Func > target 숫자의 제곱근까지의 숫자를 확인 한다.
// 순열 알고리즘은 구글링...

/* SOLUTION */
function solution(numbers) {
    var numberArr = [...numbers];
    var targetArr = [];
    var tmpArr = [];
    var result = 0;

    for(var i=1; i<=numberArr.length; i++){
        tmpArr = permutation(numberArr, i).map(a => a.join("")*1);	// 순열 알고리즘을 통해 나온 각 원소를 하나의 숫자로 변경
        targetArr = targetArr.concat(tmpArr);						//  ex) [[1, 2], [1, 3]] --> [12, 13]
    }

    var tmpSet = new Set(targetArr);	// Set의 특성을 활용해서 중복값 제거
    targetArr = [...tmpSet];
    targetArr.forEach( a => { if(checkPrimeNumber(a)) result++; });

    return result;
}

function permutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const restArr = arr.filter((_, index) => index !== idx);
        const permuationArr = permutation(restArr, selectNum - 1);
        const combineFixer = permuationArr.map((v) => [fixer, ...v]);
        result.push(...combineFixer);
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
var numbers = ["17", "011"];
var resultList = [3, 2]

var i=0;
while(i < resultList.length){
	var result = solution(numbers[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}