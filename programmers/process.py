def solution(progresses, speeds):
    answer = []
    while len(progresses) > 0:
        cnt = 0
        for i in range(len(progresses)):
            progresses[i] += speeds[i]

        if progresses[0] >= 100:
            for i in range(len(progresses)):
                if progresses[i] >= 100:
                    cnt += 1
                else:
                    break
            answer.append(cnt)
            for j in range(cnt):
                progresses.pop(0)
                speeds.pop(0)
    return answer



print(solution([95, 90, 99, 99, 80, 99]	,[1,1,1,1,1,1]))