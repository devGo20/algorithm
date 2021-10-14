def sol(members):
    answer = 0
    members.sort(reverse=False)
    tmp = []
    for i in members:
        tmp.append(i)
        if max(tmp) <= len(tmp):
            answer += 1
            tmp = []
    return answer

print(sol([2,3,1,2,2]))