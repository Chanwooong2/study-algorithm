/* *******************************
 * 2021-04-14
 * 프로그래머스
 * 완전탐색 카펫
 *********************************

 * 문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

carpet.png

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

 * 제한사항
갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

 ****************************** */

//	idea : [brown + yellow]를 3이상의 수로 나누어서 떨어지는 경우의 수 중
//  - (가로-2) * (세로-2) == yellow 인 경우 return;

/* SOLUTION */
function solution(brown, yellow) {
    let i = 3;
    const total = brown + yellow;

    while(i*i <= total){    // 가로가 세로보다 길기 때문에 제곱근보다 작거나 같은 값까지 확인
        if(total%i === 0 && (total/i-2)*(i-2) == yellow){   // 몫은 가로, 나머지는 세로
            return [total/i, i];
        }
        i++;
    }    
}

/* TESTCASE & EXECUTE */
var brown = [10,8,24];
var yellow = [2,1,24];
var resultList = [[4,3], [3,3], [8,6]];

var i=0;
while(i < resultList.length){
	var result = solution(brown[i], yellow[i]);
	console.log(`solution : ${resultList[i]}  your result : ${result}`);
	i++;
}