def solution(nums):
    answer = 0
    can = int(len(nums) / 2)
    remove = len(set(nums))
    
    return min(can,remove)

print(solution([3,3,3,2,2,2]))