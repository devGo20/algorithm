def solution(A,B):
    answer = 0
    A.sort()
    B.sort(reverse=True)
    for i in range(len(A)):
        answer += A[i] * B[i]

    return answer

print(solution([1,4,2], [5,4,4]))
print(solution([1,2], [3,4]))

# News
def solution(str1, str2):
    answer = 0
    a = tans(str1.upper())
    b = tans(str2.upper())

    if len(a) == 0 and len(b) == 0:
        return 65536
    cntUnion = len(b.union(a))
    cntIntersect = len(a.intersection(b))
    print(list(a.intersection(b)))

    return int((cntIntersect / cntUnion) * 65536) 

def tans(str):
    list = []
    for i in range(len(str)-1):
        if str[i:i+2].isalnum():
            list.append(str[i:i+2]) 
    print(list)
    return list
# print(solution("FRANCE", "french"))
# print(solution("E=M*C^2", "e=m*c^2"))
print(solution("aa1+aa2", "AAAA12"))
# print(solution("handshake", "shake hands"))

