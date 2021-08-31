from sys import stdin
for i in range(3):
    n = int(stdin.readline())
    sum = 0
    for j in range(n):
        sum += int(stdin.readline())
    
    if sum == 0:
        print("0")
    elif sum > 0:
        print("+")
    else:
        print("-")
    sum = 0
