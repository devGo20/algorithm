from collections import Counter
def solution(participant, completion):
    answer = ''
    dic = Counter(participant) - Counter(completion)

    answer = dict(filter(lambda t: t[1] != 0,dic.items()))

    return ''.join(answer)

    
print(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))