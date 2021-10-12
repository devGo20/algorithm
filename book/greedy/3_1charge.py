def solution(money):
    answer = 0
    coin = [500,100,50,10]
    for i in coin:
        answer += money // i
        money %= i

    return answer


print(solution(1260))