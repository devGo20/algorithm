have = [8,3,7,9,2]
need = [5,7,9]
answer = ''
for i in need:
    if i in have:
        answer += "yes "
    else:
        answer += "no "

print(answer)
have.sort()
def binary_search(array, target, start, end):
    while start <= end:
        mid = (start+end) // 2
        if array[mid] == target:
            return mid
        elif array[mid] > target:
            end = mid - 1
        elif array[mid] < target:
            start = mid + 1

    return None

for i in need:
    result = binary_search(have, i, 0, len(have))

    if result != None:
        print("yes",end=" ")
    else:
        print("no",end=" ")