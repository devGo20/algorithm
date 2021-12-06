from collections import deque
def solution(priorities, location):
    answer = 0
    queue = deque()
    for i in range(len(priorities)):
        queue.append((priorities[i], i))

    while queue:    
        target, index = queue.popleft()
        for i in range(len(queue)):
            if queue[i][0] > target:
                queue.append((target, index))
                break
        else:
            answer += 1
            if index == location:
                return answer
    return answer

# print(solution([2, 1, 3, 2], 2)) # 1
print(solution([1,1,9,1,1,1], 0)) # 5