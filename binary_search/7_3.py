n, m = list(map(int, input().split()))
array = list(map(int, input().split()))

start = 0
# 배열 중 가장 큰 떡 고르기
end = max(array)

result = 0
while(start<=end):
    # 떡 크기
    total = 0
    # 중간값 설정
    mid = (start+end) // 2
    print(mid)
    for x in array:
        # 떡 크기 중 중간값 보다 큰 경우만 더하기
        if x > mid :
            total += x - mid
    # 요청한 떡 보다 total이 작을 경우 마지막 값을 mid-1
    if total < m :
        end = mid -1
    else:
        result = mid
        start = mid +1
print(result)