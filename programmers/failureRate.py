# https://programmers.co.kr/learn/courses/30/lessons/42889
def solution(N, stages):
    answer = []
    p = len(stages) 
    rank = []
    for i in range(1,N+1):
        if p == 0:
            rank.append((0.0,i))
        else:
            rank.append((stages.count(i)/p,i))
            p -= stages.count(i)
    rank.sort(key = lambda x : -x[0])

    for i in rank:
        answer.append(i[1])
    return answer

print(solution(5, [2,2,2,2,2]))