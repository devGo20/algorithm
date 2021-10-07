def solution(a, b):
    answer = 0
    for i in range(min(a,b),max(a,b)+1):
        answer += i
    return answer

############# 다른사람 풀이
def solution(a,b):
    if a > b: a, b = b, a

    return sum(range(a,b+1))
    
print(solution(3, 5))