def solution(numbers):
    answer = 0
    for i in range(1,10):
        if i not in numbers:
            answer += i
    return answer


###### 다른 사람 풀이
answer = 45 - sum(numbers)
print(solution([1,2,3,4,6,7,8,0]))