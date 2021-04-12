/* *******************************
 * 2021-04-12 
 * 프로그래머스
 * 그리디 알고리즘 1번 체육복 문제
 *********************************

 * 문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

 * 제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

 ****************************** */

//  Idea : 체육복 현황을 주어진 배열을 통해 0, 1, 2로 표현하고 lost의 인덱스에서 앞 뒤에 빌릴 수 있는 지 확인

/* SOLUTION */
function solution(n, lost, reserve) {
    var answer = 0;
    var item;
    
    // 리스트 0, 1, 2로 표현 해보자 
    var checkList = new Array(n).fill(1);
    for(item of reserve){
        checkList[item-1] = 2;
    }
    for(item of lost){
        checkList[item-1] -= 1;
    }
    
    for(var i=0; i<lost.length; i++){
        let idx = lost[i]-1;
        // 없는 애 인덱스로 가서 앞 뒤 검사 밑 리스트 수정
        if(checkList[idx] === 0 && checkList[idx-1] === 2){
            checkList[idx] = 1;
            checkList[idx-1] = 1;
            continue;
        }
        if(checkList[idx] === 0 && checkList[idx+1] === 2){
            checkList[idx] = 1;
            checkList[idx+1] = 1;
            continue;
        }
    }
    
    return n - checkList.filter(a=> a==0).length;
}

/* TESTCASE & EXECUTE */
var n = [5, 5, 3, 7, 9, 5];
var lost = [[2, 4], [2, 4], [3], [2, 3, 4], [2, 4, 7, 8], [3, 4]];
var reserve = [[1, 3, 5], [3], [1], [1, 2, 3, 6], [3, 6, 9], [3, 5]];
var resultList = [5, 4, 2, 6, 8, 5];

var i=0;
while(i < resultList.length){
	var result = solution(n[i], lost[i], reserve[i]);
	result === resultList[i] ? console.log(`${i}. [Correct]`) : console.log(`${i}. ---Fail---  your result : ${result}`);
	i++;
}
