def solution(s):
    answer = 0
    arr = ['one','two','three','four','five','six','seven','eight','nine']
    for i in range(len(arr)):
        s = s.replace(arr[i], str(i+1))
    return int(s)


print(solution("ninenineone"))