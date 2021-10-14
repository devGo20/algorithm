def sol(s):
    answer = 0
    one = 0
    zero = 0
    target = s[0]
    if target == "0":
        one += 1
    else:
        zero += 1
    for i in range(len(s)):
        if target != s[i]:
            if s[i] == "0":
                one += 1
            else:
                zero += 1
            target = s[i]
    return min(one,zero)

print(sol("00011000"))