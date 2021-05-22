/* *******************************
 * 2021-05-22-----------------------------------------------다시 풀어보기
 * 프로그래머스
 * Heap 디스크컨트롤러
 *********************************

 * 문제 설명
하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 
가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.

각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 
작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. 
(단, 소수점 이하의 수는 버립니다)

제한 사항
jobs의 길이는 1 이상 500 이하입니다.
jobs의 각 행은 하나의 작업에 대한 [작업이 요청되는 시점, 작업의 소요시간] 입니다.
각 작업에 대해 작업이 요청되는 시간은 0 이상 1,000 이하입니다.
각 작업에 대해 작업의 소요시간은 1 이상 1,000 이하입니다.
하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.

 ****************************** */
//	idea : 요청이 먼저 들어온 순으로 정렬
//	- 작업중일 경우 pQ에 담고 소요시간 적은 순으로 정렬
//	- pQ작업 진행 후 다시 jobs작업 시작

/* SOLUTION */
function solution(jobs) {
    jobs.sort((a,b) => a[0]-b[0]);  //  요청이 먼저 들어온 순으로 정렬
    
    let result = 0;
    let accumulate = 0; //  총 걸린 시간
    let pQ = [];    // 작업중
    let i = 0;

    while(i < jobs.length || pQ.length !== 0){
        if(i < jobs.length && jobs[i][0] <= accumulate){
            pQ.push(jobs[i++]);
            pQ.sort((a,b) => a[1]-b[1]);
            continue;
        }
        if(pQ.length != 0){
            accumulate += pQ[0][1];
            result += accumulate - pQ[0][0];
            pQ.shift();
        }else{
            accumulate = jobs[i][0];
        }
    }

    return Math.floor(result/jobs.length);

    // let accumulate = jobs[0][0];
    // let result = 0;
    // let pQ = [];

    // jobs.forEach(item => {
    //     if(accumulate < item[0]){
    //         result += item[1];
    //         accumulate += item[1] + item[0] - accumulate;
    //     }else if(accumulate == item[0]){
    //         result += item[1];
    //         accumulate += item[1];
    //     }else if(accumulate > item[0]){
    //         result += item[1] + accumulate - item[0];
    //         accumulate += item[1];
    //     }
    // });

    // return Math.floor(result/jobs.length);
}
// print(solution([[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]), 74)
// print(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]), 72)
/* TESTCASE & EXECUTE */
var jobs = [[[0, 3], [1, 9], [2, 6]], 
    [[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]],
    [[0, 3], [4, 3], [10, 3]],
    [[0, 10], [2, 3], [9, 3]]
];
var resultList = [9, 74, 3, 9]

var i=0;
while(i < resultList.length){
	var result = solution(jobs[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}