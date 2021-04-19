/* *******************************
 * 2021-04-19
 * 프로그래머스
 * 가장 큰 정사각형 찾기
 *********************************

 * 문제 설명
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. 
(단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

예를 들어

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 있다면 가장 큰 정사각형은

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.

 * 제한사항
표(board)는 2차원 배열로 주어집니다.
표(board)의 행(row)의 크기 : 1,000 이하의 자연수
표(board)의 열(column)의 크기 : 1,000 이하의 자연수
표(board)의 값은 1또는 0으로만 이루어져 있습니다.

 ****************************** */

//	idea : 1,1 부터 좌측, 상단, 좌상단 세 중 최소값에 +1을 넣어준다.    => 각 값이 모두 1 이라면 자연스럽게 숫자가 커지게 됨
//  - max 값을 계속 갱신해주며 마지막에 max값을 제곱하여 반환한다.

/* SOLUTION */
function solution(board){
    var max = 0;
    var x = board[0].length;
    var y = board.length;

    if(x < 2 || y <2 ) return 1;
    for(var i=1; i<x; i++){
        for(var j=1; j<y; j++){
            if(board[j][i] >= 1){
                board[j][i] = Math.min(board[j-1][i], board[j][i-1], board[j-1][i-1]) + 1;
                max = Math.max(max, board[j][i]);
            }
        }
    }
    return max * max;
}

/* TESTCASE & EXECUTE */
var numbers = [[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]], [[0,0,1,1],[1,1,1,1]], [[0,0,0,0], [0,0,0,0]]];
var resultList = [9, 4, 0];

var i=0;
while(i < resultList.length){
	var result = solution(numbers[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}