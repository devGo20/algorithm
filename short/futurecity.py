INF = int(1e9)
# n = 회사의 개수, m = 경로의 개수
n,m = map(int,input().split())
graph = [[INF] * (n+1) for _ in range(n+1)]
# 연결된 두 회사의 번호
for _ in range(m):
    a, b = map(int, input().split())
    # 비용 1
    graph[a][b] = 1
    graph[b][a] = 1

# x 물건 판매 회사, k 소개팅 상대
# 1번 노드 -> k -> x
x,k = map(int,input().split())

# 자기 자신에서 자신으로 가는 비용은 0으로 초기화
for a in range(1, n+1):
    for b in range(1, n+1):
        if a == b:
            graph[a][b] = 0

print("최단 경로전",graph)

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b], graph[a][k]+graph[k][b])

result = graph[1][k]+graph[k][x]
if result < INF:
    print(result)
else:
    print(-1)
