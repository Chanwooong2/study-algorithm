/* *******************************
 * 2021-04-06
 * 프로그래머스
 * 그리디 알고리즘 단속카메라
 *********************************
//  Idea : 진출지점을 기준으로 정렬해서 반복문을 돌면서 카메라 위치 조정
//  - 진출지점 기준으로 routes 정렬
//  - 최초 카메라 위치는 주어진 -30000으로 지정
//  - for 문 돌면서 진입지점과 카메라 위치 비교
//  - 카메라 위치가 진입지점보다 작으면 카메라 수 늘리고 진출지점으로 카메라 위치 설정
//  ***** 어떻게 풀지 생각해내는 것이 어려운 문제인 것 같다... 나중에 다시봐도 어떻게 풀지 고민 할 듯
 ****************************** */

/* SOLUTION */
function solution(routes) {
    var camera = -30001;
    var result = 0;

    routes.sort((a, b) => a[1] - b[1]);

    for(var i=0; i<routes.length; i++){
        if(camera < routes[i][0]){
           result++;
           camera = routes[i][1]; 
        }
    }
    return result;
}

/* TESTCASE & EXECUTE */
var routes = [[-20,15], [-14,-5], [-18,-13], [-5,-3]];
var resultList = [2]

var i=0;
var i=0;
while(i < resultList.length){
	var result = solution(routes[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}

