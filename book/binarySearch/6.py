need = 6
riceCake = [19,15,10,17]
answer = 0

# 효율성 안됨
for i in range(max(riceCake),0,-1):
    result = 0
    for j in range(len(riceCake)):
        if riceCake[j] - i > 0:
            result += riceCake[j] - i

    if result == need:
        answer = i
        break

print(answer)

res = 0
start = 0
end = max(riceCake)

while(start <= end):
    total = 0
    mid = (start + end) // 2
    for x in riceCake:
        if x > mid:
            total += x - mid
    if total < need:
        end = mid - 1
    else:
        res = mid
        start = mid + 1

print(res)