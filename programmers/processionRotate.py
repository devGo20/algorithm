# https://programmers.co.kr/learn/courses/30/lessons/77485#qna
import copy
import numpy as np
def solution(rows, columns, queries):
    answer = []
    tmp = []
    matrix = [[i+(j)*columns for i in range(1,columns+1)] for j in range(rows)]
    for i in range(len(queries)):
        tmp = copy.deepcopy(matrix)
        minArr = []
        x1 = queries[i][0] - 1
        y1 = queries[i][1] - 1
        x2 = queries[i][2] - 1
        y2 = queries[i][3] - 1
        # 가로 첫줄
        for i in range(y1, y2):
            matrix[x1][i+1] = tmp[x1][i]
            minArr.append(tmp[x1][i])

        for i in range(x1, x2):
            matrix[i+1][y2] = tmp[i][y2]
            minArr.append(tmp[i][y2])

        for i in range(x2, x1, -1):
            matrix[i-1][y1] = tmp[i][y1]
            minArr.append(tmp[i][y1])

        for i in range(y2,y1,-1):
            matrix[x2][i-1] = tmp[x2][i]
            minArr.append(tmp[x2][i])
        answer.append(min(minArr))
    return answer

print()