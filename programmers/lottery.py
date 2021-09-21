def solution(lottos, win_nums):
    answer = []
    winCnt = 0
    for i in lottos:
        if i in win_nums:
            winCnt += 1

    answer.append(lottos.count(0)+winCnt)
    answer.append(winCnt)
    
    for i in range(2):
        if answer[i] == 6:
            answer[i] = 1
        elif answer[i] == 5:
            answer[i] = 2
        elif answer[i] == 4:
            answer[i] = 3
        elif answer[i] == 3:
            answer[i] = 4
        elif answer[i] == 2:
            answer[i] = 5
        else:
            answer[i] = 6
    
    ######### 다른 사람 풀이 

    rank = [6,6,5,4,3,2,1]
    print(rank[lottos.count(0)+winCnt], rank[winCnt])

    return answer

print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])) # [3,5]
