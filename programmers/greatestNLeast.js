/* *******************************
 * 2021-04-15
 * 프로그래머스
 * 최대공약수와 최소공배수
 *********************************

 * 문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

 * 제한 사항
두 수는 1이상 1000000이하의 자연수입니다.

 ****************************** */
//	idea : 유클리드호제법
//  - a * b = G * L
//  - 최대공약수를 통해 최소공배수를 구한다

/* SOLUTION */
function solution(n, m) {
    var bigger = Math.max(n,m);
    var smaller = Math.min(n,m);

    while(smaller != 0){
        var tmp = smaller;
        smaller = bigger%smaller;
        bigger = tmp;
    }

    return [bigger, n*m/bigger];
}

/* TESTCASE & EXECUTE */
var n = [3,2,1,9, 41, 6];
var m = [12,5,1,6, 3, 12];
var resultList = [[3,12],[1,10],[1,1],[3,18], [1,123],[6,12]];

var i=0;
while(i < resultList.length){
	var result = solution(n[i], m[i]);
	console.log(`solution : ${resultList[i]} your result : ${result}`);
	i++;
}