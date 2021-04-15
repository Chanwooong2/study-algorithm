/* *******************************
 * 2021-04-09
 * 프로그래머스
 * 정렬 H-Index
 *********************************

 * 문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 
어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 
위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

 * 제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

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