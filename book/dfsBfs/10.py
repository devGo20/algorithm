graph = [[0,0,1],[0,1,0],[1,0,1]]
n,m = 3,3
def dfs(x,y):
    # 범위에서 벗어날 경우
    if x < 0 or x >= n or y < 0 or y >= m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1

        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    # 이미 방문한 곳 or 칸막이일 경우
    return False

result = 0
for i in range(n):
    for j in range(m):
        if dfs(i,j) == True:
            result += 1

print(result)

