def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    for i in range(len(reserve)):
        if reserve[i] in lost:
            lost.remove(reserve[i])
            reserve[i] = -1
    answer = n - len(lost)

    for i in lost:
        if i - 1 in reserve:
            answer += 1
            reserve.remove(i-1)
        elif i + 1 in reserve:
            answer += 1
            reserve.remove(i+1)

    return answer

print(solution(7,[1,3,5],[3,5,7]))