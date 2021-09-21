def solution(answers):
    answer = []
    supo = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    score = []
    for i in range(3):
        k = 0
        sum = 0
        j = 0
        while j < len(answers):
            if supo[i][k] == answers[j]:
                sum += 1
            k += 1
            j += 1
            if k == len(supo[i]):
                k = 0
        score.append(sum)
    topScore = max(score)
    topCnt = score.count(max(score))

    if topCnt == 1:
        return [score.index(max(score)) +1]
    else:
        for i in range(len(score)):
            if score[i] == max(score):
                answer.append(i+1)

    return answer

############ 다른 사람 코드
# enumerate index USE
    # for idx, answer in enumerate(answers):
    #     if answer == pattern1[idx%len(pattern1)]:
    #         score[0] += 1
    #     if answer == pattern2[idx%len(pattern2)]:
    #         score[1] += 1
    #     if answer == pattern3[idx%len(pattern3)]:
    #         score[2] += 1

    # for idx, s in enumerate(score):
    #     if s == max(score):
    #         result.append(idx+1)
print(solution([1,2,3,4,5]))