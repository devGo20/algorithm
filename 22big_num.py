n, m, k = map(int, input().split()) # 입력받을 수, 연산횟수, 연속 연산 카운트
data = list(map(int,input().split())) # list 입력

data.sort() # 입력 받은 list 정렬

# 1,2 번째 큰 수 
first = data[n-1] 
second = data[n-2]

result = 0
while True:
    for i in range(k): # 최대 연속 카운트
        if m == 0: 
            break # for문 break
        result += first
        m -= 1 # 더하는 횟수 빼기
    if m == 0:
        break # while문 break
    result += second
    m -= 1

print(result)

# Not use while, for
n, m, k = map(int, input().split())
data = list(map(int,input().split()))

data.sort() # 입력 받은 배열 정렬

# 1,2 번째 큰 수 
first = data[n-1] 
second = data[n-2]

result = 0
# 1번째 큰 수 더 할 cnt
cnt = int(m/(k+1)) * k
# k+1 (반복 연산 크기) 나머지 큰 수로 더함
cnt += m % (k+1)

result += cnt * first
result += (m-cnt) * second 

print(result)
