/* *******************************
 * 2021-05-02
 * 프로그래머스
 * 신규 아이디 추천
 *********************************

 * 문제
신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, 
"네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

 * 제한사항
new_id는 길이 1 이상 1,000 이하인 문자열입니다.
new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.

 * 규칙
1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

 ****************************** */

/* SOLUTION */
function solution(files) {
    var answer = [];

    var objArr = files.map(item => {
        var number = item.match(/\d+/)[0];
        var part = item.split(number);
        var head = part[0];
        var tail;
        if(part.length > 2){    // "abc123defg123.jpg"
            part.shift();
            tail = part.join(number);
        }else{
            tail = part[1];
        }
        return {head: head, number: number, tail: tail};
    });
    
    objArr.sort((a, b) => {
        if(a.head.toLowerCase() < b.head.toLowerCase()) return -1;
        if(a.head.toLowerCase() > b.head.toLowerCase()) return 1;
        if(a.head.toLowerCase() === b.head.toLowerCase()) return 0;
    });
    objArr.sort((a, b) => {
        if(a.head.toLowerCase() == b.head.toLowerCase())
            return a.number*1 - b.number*1
        return 0;
    });
    answer = objArr.map(item => item.head + item.number + item.tail);

    return answer;
}

/* TESTCASE & EXECUTE */
var files = [["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"], ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]];
var resultList = [["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"],  ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]];

var i=0;
while(i < resultList.length){
	var result = solution(files[i]);
	console.log(`solution : ${resultList[i]}, your result : ${result}`);
	i++;
}