def solution(a, b):
    answer = 0
    for i in range(len(a)):
        answer += a[i] * b[i]
    return answer

#### zip함수 활용 
#    return sum([x*y for x,y in zip(a,b)])
print(solution([1,2,3,4], [-3,-1,0,2]))