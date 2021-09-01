def solution(scores):
    answer = ''
    # 학생별 점수 리스트
    scoreList = [[0] * len(scores) for i in range(len(scores))]
    
    avg = 0

    for i in range(len(scores)):
        for j in range(len(scores)):
            scoreList[j][i] = scores[i][j]
    for i in range(len(scores)):
        if max(scoreList[i]) == scoreList[i][i] or min(scoreList[i]) == scoreList[i][i]:
            if scoreList[i].count(scoreList[i][i]) == 1:
                del scoreList[i][i]
    for i in range(len(scoreList)):
        avg = sum(scoreList[i]) / len(scoreList[i])
        if avg >= 90:
            answer += "A"
        elif avg >= 80:
            answer += "B"
        elif avg >= 70:
            answer += "C"
        elif avg >= 50:
            answer += "D"
        else:
            answer += "F"
    return answer

print(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]))