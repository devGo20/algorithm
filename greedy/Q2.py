def sol(n):
    result = 0
    for i in n:
        if i == 0:
            continue
        else:
            if result != 0:
                result *= int(i)
            elif result == 0:
                result += int(i)
    return result

print(sol("02984"))
print(sol("567"))
######################## 

def book(string):
    result = int(string[0])
    for i in range(1, len(string)):
        num = int(string[i])
        # 1일 경우 곱하는 것보다 더하는게 좋음 빼먹은 부분..
        if num <= 1 or result <= 1:
            result += num
        else :
            result *= num
    return result



print(book("02984"))
print(book("567"))

