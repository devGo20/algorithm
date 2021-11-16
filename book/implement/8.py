def sol(s):
    sortS = sorted(s)
    list = []
    sum = 0
    for i in s:
        if i.isalpha():
            list.append(i)
        else:
            sum += int(i)
    list.sort()
    if sum != 0:
        list.append(str(sum))
    return ''.join(list)
    
print(sol("K1KA5CB7"))