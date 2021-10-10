def solution(s):
    list = []
    for i in s:
        if len(list) != 0:
            if list[-1] == i:
                list.pop()
            else:
                list.append(i)
        else:
            list.append(i)
    
    return (lambda x: 1 if len(list) == 0 else 0)(len(list)) 

print(solution("cdcd"))
# print(solution("baabaa"))