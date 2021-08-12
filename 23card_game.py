# 각 행마다 가장 작은 수 중 가장 큰 수 찾기
n,m = map(int, input().split()) # n 행, m 렬

result = 0

for i in range(n): # 행으로 반복
    data = list(map, input().split())
    # list 중 가장 작은 수 
    min_value = min(data)
    # result와 min_value 중 큰 수 result로 선언
    result = max(result, min_value)

print(result)