/* *******************************
 * 2021-04-13
 * 프로그래머스
 * 완전탐색 모의고사
 *********************************

 * 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

 * 제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

 ****************************** */

//	idea : answer의 길이만큼 1, 2, 3번 학생의 답안을 작성
//  - 각 학생의 정답 여부 확인 

// 너무 어렵게 푼 것 같아서 다시 ... ㅠㅠ..
/* SOLUTION */
function solution(answers) {
    var max = 0;
    var result = [];
    var pattern1 = [1,2,3,4,5];
    var pattern2 = [2,1,2,3,2,4,2,5];
    var pattern3 = [3,3,1,1,2,2,4,4,5,5];
    
    var student1 = answers.filter((item, idx) => item === pattern1[idx % pattern1.length]).length;
    var student2 = answers.filter((item, idx) => item === pattern2[idx % pattern2.length]).length;
    var student3 = answers.filter((item, idx) => item === pattern3[idx % pattern3.length]).length;

    max = Math.max(student1, student2, student3);

    if(student1 === max) result.push(1);
    if(student2 === max) result.push(2);
    if(student3 === max) result.push(3);

    return result;
    
    // var student1 = check(pattern1, answers);
    // var student2 = check(pattern2, answers);
    // var student3 = check(pattern3, answers);
    // var res = [[1,student1], [2,student2], [3,student3]];


    // res.sort((a, b) => b[1]-a[1]);
    // max = res[0][1];

    // var resultArr = res.filter(item => {
    //     if(item[1] >= max){
    //         return item[0];
    //     }
    // });

    // return resultArr.sort((a, b)=>a-b).map(a=>a[0]);
}
// function check(pattern, answers){
//     var result = 0;
//     var pIdx = 0;
//     for(var i=0; i<answers.length; i++){
//         if(pIdx == pattern.length){
//             pIdx = 0;
//         }
//         if(answers[i] == pattern[pIdx]){
//             result++;
//         }
//         pIdx++;
//     }
//     return result;
// }

/* TESTCASE & EXECUTE */
var answers = [[1,2,3,4,5], [1,3,2,4,2], [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];
var resultList = [[1], [1,2,3], [2]]

var i=0;
while(i < resultList.length){
	var result = solution(answers[i]);
	console.log(`solution : ${resultList[i]}, your result : ${result}`);
	i++;
}