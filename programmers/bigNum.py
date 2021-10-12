def solution(numbers):
    answer = ''
    strArr = []
    for i in numbers:
        strArr.append(str(i))
    strArr.sort(key=lambda strArr: strArr*3, reverse=True)
    if max(strArr) == "0":
        return "0"
    return ''.join(strArr)

print(solution(
[9,997,99,878,87]))

print(solution(
[3,30,34,5,9]))
print(solution([15,151]))