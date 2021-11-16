def solution(n):
    list = []
    # 자릿수 나누기 /2
    half = len(str(n)) // 2
    
    for i in str(n):
        list.append(int(i))
    if sum(list[half:]) == sum(list[:half]):
        return 'LUCKY'
    else:
        return 'READY'

print(solution(123402))
print(solution(7755))