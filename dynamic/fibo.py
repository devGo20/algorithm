# <탑다운 방식>
# 동일한 함수가 반복적으로 호출되는 피보나치 함수
def fibo(x):
    if x == 1 or x == 2:
        return 1
    return fibo(x-1) + fibo(x-2)

print(fibo(4))

# 한 번 계산된 결과 저장하는 피보나치 함수
d = [0] * 100
def fibo2(x):
    if x == 1 or x == 2:
        return 1
    if d[x] != 0:
        return d[x]
    d[x] = fibo2(x-1) + fibo2(x-2) 
    return d[x]

print(fibo2(99))

# 반복문을 이용한 피보나치 함수 - 보텀업 방식
f = [0] * 100
f[1] = 1
f[2] = 1
n = 4
# 3부터 n+1 전까지 반복
for i in range(3, n+1):
    f[i] = f[i-1] + f[i-2]

print(f[n])

