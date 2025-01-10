function solution(arr) {
    let answer = true;
    
    for (const value of arr) {
        const regex = new RegExp(`^${value}\\d*`);
       arr.find((item) => regex.test(item))
    }
    return answer;
}