INF = int(1e9)

# n 회사 갯수, m 도로 갯수
n,m = 5,7
graph = [[INF]*(n+1) for _ in range(n+1)]

for a in range(1,n+1):
    for b in range(1,n+1):
        if a == b:
            graph[a][b] = 0

map = [[1,2],[1,3],[1,4],[2,4],[3,4],[3,5],[4,5]]
for i in range(m):
    a, b = map[i]
    graph[a][b] = 1
    graph[b][a] = 1
print(graph)
x,k = 4,5

for k in range(1,n+1):
    for a in range(1, n+1):
        for b in range(1,n+1):
            graph[a][b] = min(graph[a][b], graph[a][k]+graph[k][b])
        for i in range(1,n+1):
            print(graph[i])
        print()
dis = graph[1][k] + graph[k][x]

if dis >= INF:
    print('-1')
else:
    print(dis)