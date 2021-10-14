def sol(coins):
    answer = 0
    target = 1
    coins.sort()
    for i in coins:
        if target < i:
            return target
        target += i
            
    return answer

print(sol([3,2,1,1,9]))