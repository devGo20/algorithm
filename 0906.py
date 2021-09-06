def solution1(n):
    answer = 0
    nlist = list(map(int,str(format(n,'b'))))
    cnt = nlist.count(1)
    print(cnt)
    while True:
        n += 1
        look = list(map(int,str(format(n,'b'))))
        if look.count(1) == cnt:
            answer = n
            break

    return answer

print(solution1(15))

def solution2(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)-1):
        if len(phone_book[i]) < len(phone_book[i+1]):
            if phone_book[i] == phone_book[i+1][0:len(phone_book[i])]:
                answer = False
                break
    return answer

print(solution2(["119", "97674223", "1195524421"]))
print(solution2(["123","456","789","12389"]))
