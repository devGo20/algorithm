def solution(record):
    answer = []
    split = []
    dic = {}
    for i in range(len(record)):
        split.append(record[i].split(' '))
        if split[i][0] != 'Leave':
            dic[split[i][1]] = split[i][2] 

    for i in range(len(split)):
        if split[i][0] == 'Enter':
           answer.append('{0}님이 들어왔습니다.'.format(dic[split[i][1]]))
        elif split[i][0] == 'Leave':
           answer.append('{0}님이 나갔습니다.'.format(dic[split[i][1]]))

    return answer

print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))