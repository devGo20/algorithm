x = int(input())

d = [0] * 30001
# d[0] d[1] 은 연산횟수 0이므로 그냥 둔다
for i in range(2, x+1):
    # 1 뺄 경우 전 횟수 
    d[i] = d[i-1] + 1
    print("현재 수",i)
    if i % 2 == 0:
        d[i] = min(d[i],d[i//2]+1)
        print("2로 나눔")
    if i % 3 == 0:
        d[i] = min(d[i],d[i//3]+1)
        print("3로 나눔")
    if i % 5 == 0:
        d[i] = min(d[i],d[i//5]+1)

print(d[x])

