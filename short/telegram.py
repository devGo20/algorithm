import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

n, m, c = map(int, input().split())
start = c

graph = [[] for i in range(n+1)]
distance = [INF] * (n+1)

for _ in range(m):
    a, b, c = map(int,input().split())
    # a번 노드에서 b번 노드로 가는 비용 c
    graph[a].append((b,c))

def dijkstra(start):
    q = []
    # q라는 큐에 최단경로 0 설정
    heapq.heappush(q,(0, start))
    distance[start] = 0
    while q: # 큐가 비어있지 않다면!
        dist, now = heapq.heappop(q)
        # 현재 노드가 거리보다 작을 경우 이미 처리된 적 있다고 판단
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(start)

count = 0
time = 0
print(distance)
for i in range(1, n+1):
    if 0 < distance[i] < INF:
        count += 1
        time = max(time, distance[i]) 

################ 해설
cnt = 0
max_distance = 0
for d in distance:
    if d != INF:
        cnt += 1
        max_distance = max(max_distance, d)

print(count,time)
# 시작 노드 제외 -1
print(cnt-1, max_distance)