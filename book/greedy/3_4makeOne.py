def sol(n,k):
    answer = 0
    answer += n % k
    n -= answer

    while n != 1:
        n /= k
        answer += 1
    return answer

print(sol(17,4))