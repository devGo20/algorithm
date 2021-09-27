# https://programmers.co.kr/learn/courses/30/lessons/12982
def solution(d, budget):
    answer = 0
    d.sort()
    if sum(d) <= budget:
        return len(d)
    for i in range(len(d)):
        if budget - d[i] < 0:
            answer = i - 1
            break 
        budget -= d[i]
        answer = i
    return answer

print(solution([2,2,3,3], 10))