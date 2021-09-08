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
    a = trans(str1.upper())
    b = trans(str2.upper())
    inter = set(a) & set(b)
    union = set(a) | set(b)
    print(inter,union)
    sum_inter = sum([min(a.count(i), b.count(i)) for i in inter])
    sum_union = sum([max(a.count(i), b.count(i)) for i in union])
    print(sum_inter, sum_union)
    if not sum_inter and not sum_union: return 65536
    return int(sum_inter/sum_union * 65536)     
def trans(str):
    list = []
    for i in range(len(str)-1):
        if str[i:i+2].isalpha():
            list.append(str[i:i+2]) 
    return list

    
print(solution("FRANCE", "french"))
# print(solution("E=M*C^2", "e=m*c^2"))
# print(solution("aa1+aa2", "AAAA12"))
# print(solution("handshake", "shake hands"))
