import itertools
def solution(nums):
    answer = 0
    result = list(itertools.combinations(["1","2","3","4"],3))
    print(result)
    for i in result:
        sum = 0
        for k in i:
            sum += int(k)
        
        answer += check(sum)
    return answer

def check(sum):
    for i in range(2,sum):
        if sum % i == 0:
            return 0
    return 1
print(solution([1,2,3,4]))