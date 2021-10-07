from collections import Counter
def solution(s):
    dic = Counter(s.lower())
    if dic['p'] != dic['y']:
        return False
    
    return True


print(solution('ppoooPYyy'))