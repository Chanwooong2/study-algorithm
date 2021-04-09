/* *******************************
 * 2021-04-09
 * 프로그래머스
 * 정렬 H-Index
 *********************************
 ****************************** */
//  Idea : 가장 큰 수를 기준으로 -1씩 해가면서 그 값보다 큰 값들의 갯수가 크거나 같으면 반환
//  - 일단 배열의 길이가 최대값이기 때문에 배열의 길이를 가장 큰 수로 잡고 시작
//  - Array.filter()를 사용하여 특정 값 이상의 값으로 새로운 배열을 만들어 길이 구하기

/* SOLUTION */
function solution(citations) {
    var lastVal = citations[citations.length-1];
    var loopCnt = citations.length;

    for(var i=0; i<loopCnt+1; i++){
        if(citations.filter(a => a >= loopCnt-i).length >= loopCnt-i){
            return loopCnt-i;
        }
    }
}

/* TESTCASE & EXECUTE */
var citations = [
	[6, 5, 4, 1, 0],
	[12, 11, 10, 9, 8, 1],
	[6, 6, 6, 6, 6, 1],
	[4, 4, 4],
	[4, 4, 4, 5, 0, 1, 2, 3],
	[10, 11, 12, 13],
	[3, 0, 6, 1, 5],
	[0, 0, 1, 1],
	[0, 1],
	[10, 9, 4, 1, 1],
	[0, 1, 1],
	[1, 4],
	[1, 4, 4],
	[0, 1, 2]
];
var resultList = [3,5,5,3,4,4,3,1,1,3,1,1,2,1]

var i=0;
while(i < resultList.length){
	var result = solution(citations[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}