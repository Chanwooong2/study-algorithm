/* *******************************
 * 2021-04-16
 * 프로그래머스
 * 완전탐색 소수찾기
 *********************************

 * 문제 설명
 https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

 ****************************** */
/* SOLUTION */
function solution(board, moves) {
    var answer = 0;
    var result = []; 

    moves.forEach((number, idx)=>{
        for(var i=0; i<board.length; i++){
            if(board[i][number-1] != 0){
                if(result[result.length-1] == board[i][number-1]){
                    result.pop();
                    answer += 2;
                }else{
                    result.push(board[i][number-1]);
                }
                board[i][number-1] = 0;
                i = board[i].length;
            }
        }
    })
    return answer;
}

/* TESTCASE & EXECUTE */
var board = [[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]];
var moves = [[1,5,3,5,1,2,1,4]];
var resultList = [4]

var i=0;
while(i < resultList.length){
	var result = solution(board[i], moves[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}