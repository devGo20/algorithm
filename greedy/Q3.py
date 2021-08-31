def solution(data):
    count0 = 0
    count1 = 0
    
    if data[0] == '1':
        count0 += 1
    else :
        count1 += 1
    # 다음 수 비교하므로 len(data) - 1 해줌
    for i in range(len(data) -1):
        # 다음 수가 같지 않은 경우 
        if data[i] != data[i + 1]:
            # 1일 경우 0 count ++
            if data[i+1] == "1":
                count0 += 1
            else :
                count1 += 1
    result = min(count1, count0)
    return result

print(solution("0001100"))