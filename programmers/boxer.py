def solution(weights, head2head):
    answer = []
    # 0 승률, 1 무거운 복서 이긴 횟수, 2 무게
    dic = {}
    for j in range(len(weights)):
        parent = 0
        child = 0
        winThanBigger = 0
        for idx, k in enumerate(head2head[j]):
            if k != 'N':
                parent += 1
            if k == 'W':
                child += 1
                if weights[idx] > weights[j]:
                     winThanBigger += 1

        if child != 0 or parent != 0:
            dic[j+1]=[child/parent*100,winThanBigger,weights[j]]
        else:
            dic[j+1]=[0,winThanBigger,weights[j]]

    sort_dict = sorted(dic.items(), key=lambda x: (-x[1][0], -x[1][1], -x[1][2]))

    for key in sort_dict:
        answer.append(key[0])

    return answer

print(solution([60,70,60], ["NNN","NNN","NNN"]))