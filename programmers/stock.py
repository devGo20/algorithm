def solution(prices):
    answer = []
    
    for i in range(len(prices)):
        sec = 0
        for j in range(i, len(prices)-1):
            if prices[i] <= prices[j]:
                sec += 1
            else: 
                break
        answer.append(sec)
    
    return answer

print(solution([1,2,3,2,3]))