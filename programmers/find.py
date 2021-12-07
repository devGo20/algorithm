from itertools import permutations
def isPrime(n):
    if n == 2:
        return True
    for i in range(2,n):
        if n % i == 0:
            return False
        return True
def solution(numbers):
    answer = []
    for i in range(1,len(numbers)+1):
        # 조합 join 
        permu_nums = list(map(''.join, permutations(list(numbers), i)))
        print(set(permu_nums))
        for num in list(set(permu_nums)):
            if isPrime(int(num)) and int(num) not in answer: 
                answer.append(int(num))
    
    return len(answer)
print(solution("17"))
print(solution("011"))