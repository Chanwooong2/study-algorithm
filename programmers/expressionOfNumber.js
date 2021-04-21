/* *******************************
 * 2021-04-21
 * 프로그래머스
 * 숫자의 표현
 *********************************

 * 문제 설명
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 
예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

 * 제한사항
n은 10,000 이하의 자연수 입니다.

 ****************************** */

/* SOLUTION */
function solution(n) {
	var loopCnt = Math.ceil(n/2);
	var answer = 0;

	for(var i=0; i<loopCnt; i++){
		var tmp = i;
        var j = 1;
        while(true){
            tmp += (i+j);
            if(tmp > n){
                break;
            }
			if(tmp == n){
				answer++;
                break;
			}
            j++;
		}
	}
	return answer + 1;// 자기 자신의 숫자 추가
}

/* TESTCASE & EXECUTE */
var n = [15];
var resultList = [4];

var i=0;
while(i < resultList.length){
	var result = solution(n[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}