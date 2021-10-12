def solution(n,m,k,arr):
    answer = 0
    arr.sort(reverse=True)
    remain = m % k
    answer += (m - remain) * arr[0] + (remain * arr[1])
    return answer


print(solution(5,8,3,[2,4,5,4,6]))