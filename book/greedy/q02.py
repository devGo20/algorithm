def sol(numStr):
    answer = int(numStr[0])
    for i in range(1,len(numStr)):
        if answer != 0:
            if numStr[i] == "1":
                answer += int(numStr[i])
            else:
                answer *= int(numStr[i])
        else:
            answer += int(numStr[i])
    return answer

print(sol("02984"))