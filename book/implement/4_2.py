def sol(location):
    answer = 0
    y = int(location[1]) - 1
    x = int(ord(location[0])) - int(ord('a'))
    go = [[-2,-1],[-2,1],[-1,2],[1,2],[-1,-2],[1,-2],[2,-1],[2,1]]

    for go in go:
        if -1 < x + go[0] < 8 and -1 < y + go[1] < 8:
            answer += 1
    return answer

print(sol("a1"))
print(sol("c2"))