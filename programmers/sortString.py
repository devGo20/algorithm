def solution(strings, n):
    answer = []
    strings.sort()
    answer = sorted(strings, key=lambda strings: strings[n:n+1])
    return answer

print(solution(["ae","be","ce","aed"],1))
print(solution(	["sun", "bed", "car"], 1))
print(solution(["abzcd","cdzab","abzfg","abzaa","abzbb","bbzaa"] ,2))
