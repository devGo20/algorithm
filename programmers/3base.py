def solution(n):
    answer = 0
    answer = base3(n, 3)
    answer = int(str(answer[::-1]),3)
    return answer

def base3(n, q):
    rev_base = ''

    while n > 0:
        n, mod = divmod(n, q)
        rev_base += str(mod)

    return rev_base[::-1] 
print(solution(45))