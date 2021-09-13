def solution(numbers, hand):
    answer = ''
    dic = {1: [0, 0], 2: [0, 1], 3: [0, 2],
           4: [1, 0], 5: [1, 1], 6: [1, 2],
           7: [2, 0], 8: [2, 1], 9: [2, 2],
           '*':[3, 0], 0: [3, 1], '#': [3, 2]}
    left = dic['*']
    right = dic['#']
    for i in numbers:
        cur = dic[i]
        if i in (1,4,7):
            answer += 'L'
            left = cur
        elif i in (3,6,9):
            answer += 'R'
            right = cur
        elif i in (2,5,8,0):
            rLen = abs((right[0] - cur[0])) + abs(right[1]-1)
            lLen = abs((left[0] - cur[0])) + abs(left[1]-1)
            if rLen < lLen:
                answer +='R'
                right = cur
            elif rLen > lLen:
                answer += 'L'
                left = cur
            else :
                if hand == 'right':
                    answer +='R'
                    right = cur
                else:
                    answer += 'L'
                    left = cur
    return answer

print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'))