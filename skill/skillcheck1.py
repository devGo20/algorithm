# 1번 문제
def solution(n):
    answer = 0
    a = []    
    for i in str(n):
        a.append(int(i))
    answer = sum(a)
    return answer

print(solution(987))

# 2번 문제
from itertools import combinations 

def solution(nums):
    answer = 0
    combi = list(combinations(nums, 3))
    sumList = []
    for i in combi:
        result = 0
        result += sum(i)
        sumList.append(result)

    for i in range(len(sumList)):
        if True == is_prime_number(sumList[i]):
            answer += 1
    return answer

def is_prime_number(x):
    for i in range(2, x):
        if x % i == 0:
            return False 
    return True 
print(solution([1,2,3,4,6]))