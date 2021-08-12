# 1이 될 때까지
# 두가지 연산
# 1. n에서 1을 빼기 2. n을 k로 나누기 (나누어떨어질때만)
n,k = map(int, input().split()) # k 나누는 수
cnt = 0
while True:
    if n == 1:
        break
    elif n%k == 0:
        n = n/k
        cnt += 1
    elif n%k != 0:
        n -= 1
        cnt += 1

print(cnt)
    
#########################
n,k = map(int, input().split()) # k 나누는 수
cnt = 0
result = 0
# while True:
#     while n%k != 0:
#         n -= 1
#         cnt += 1
#     n //= k
#     cnt += 1
#     if n == 1:
#         break

while True:
    target = (n // k) * k
    result += (n - target)
    n = target
    if n == 1:
        break
    result += 1
    n //= k
print(n)
# result += (n-1)
print(result)

print(cnt)


