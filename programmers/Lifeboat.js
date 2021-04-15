/* *******************************
 * 2021-04-11
 * 프로그래머스
 * 그리디 알고리즘 보트문제
 *********************************

 * 문제 설명
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 
2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

 * 제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

 ****************************** */

//  Idea : 내림차순 정렬 후 새로운 리스트에 순서대로 채우기 시작
//  - people로 for 문 돌고 
//  - 안에서 새로운 리스트 길이만큼 for문 돌아
//  - if(합이 <= limit) > 해당 칸에 넣고 삭제, 보트cnt++
//  - result = 보트cnt + 새로운 리스트 길이; 

// 효율성
// - newArr는 내림차순으로 값이 들어간다 > people에서 큰수 부터 뽑기 때문에 newArr의 뒷부분부터 접근한다
// - newArr에 접근 할 때 더이상 계산하지 않아도 되는 부분은 바로 탈출 할 수 있도록 한다. 
//      (처음접근하는 것이 애초에 조건에 맞지않을 경우)
// - 최대한 loop 돌지 않도록 continue와 break을 활용

/* SOLUTION */
function solution(people, limit) {
    var newArr =[];
    var boatCnt = 0;
    
    people.sort((a,b) => a - b);
    while(true){
        if(people.length == 0){
            return newArr.length + boatCnt;
        }
        
        var tmp = people.pop();
        if(newArr.length == 0){
            newArr.push(tmp);
            continue;
        }
        for(var j=newArr.length-1; j>=0; j--){
            if(newArr[j] + tmp <= limit){
                newArr.splice(j,1);
                boatCnt++;
                break;
            }else if(newArr.length-1 == j && newArr[j] + tmp > limit){
                newArr.push(tmp);
                break;
            }else if(j == 0){
                newArr.push(tmp);
            }
        }
    }
}

/* TESTCASE & EXECUTE */
var k = [100, 100, 100];
var number = [[70, 50, 80, 50], [70, 80, 50], [10,20,30,40,50,60,70,80,90]];
var resultList = [3,3, 5]

var i=0;
while(i < resultList.length){
	var result = solution(number[i], k[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}