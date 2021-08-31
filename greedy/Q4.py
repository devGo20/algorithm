def sol(n, list):
    list.sort()
    target = 1
    for x in list:
        if target < x:
            break
        target += x
                    
    return target


print(sol(5,[3,2,1,1,8,9]))
# print(sol(3,[3,5,7]))