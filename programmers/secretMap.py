def solution(n, arr1, arr2):
    answer = []
    map = [[0]* n for i in range(n)]
    for i in range(len(arr1)):
        target = format(arr1[i], 'b').zfill(n)
        for j in range(len(target)):
            if target[j] == '1':
                map[i][j] = '#'
            else :
                map[i][j] = ' '
    
    for i in range(len(arr2)):
        target = format(arr2[i], 'b').zfill(n)
        for j in range(len(target)):
            if target[j] == '1' and map[i][j] == ' ':
                map[i][j] = '#'
    for i in range(n):
        answer.append(''.join(map[i]))
    return answer

print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))