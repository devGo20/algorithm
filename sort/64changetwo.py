n,k = map(int, input().split()) 
arrA = list(map(int, input().split()))
arrB = list(map(int, input().split()))

arrA.sort()
arrB.sort()
for i in range(k):
    if arrA[i] >= arrB[(len(arrB)-1)-i]:
        break
    if arrA[i] < arrB[(len(arrB)-1)-i]:
        arrA[i], arrB[(len(arrB)-1)-i] = arrB[(len(arrB)-1)-i], arrA[i]

print(sum(arrA))


##############

n,k = map(int, input().split()) 
arrA = list(map(int, input().split()))
arrB = list(map(int, input().split()))

arrA.sort()
arrB.sort(reverse=True)
for i in range(k):
    if arrA[i] < arrB[i]:
        arrA[i], arrB[i] = arrB[i], arrA[i]
    else:
        break

print(sum(arrA))