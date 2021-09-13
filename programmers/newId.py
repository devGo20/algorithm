import re
def solution(new_id):
    answer = ''
    # 1
    new_id = new_id.lower()
    # 2
    new_id = re.sub('[~!@#$%^&*\(\)=+\[\{\]\}:?,\<\>/]', '', new_id)
    # 3
    while True:
        if answer.find("..") != -1:
            answer = answer.replace('..','.')
        else:
            break
    while new_id[0] == '.' or new_id[-1] =='.':
        new_id = new_id.strip('.')
        if len(new_id) == 0:
            new_id = 'a'

    new_id = new_id[:15]

    if len(new_id) <= 2:
        while len(new_id) < 3:
            new_id += new_id[-1]
    return new_id

print(solution("...!@BaT#*..y.abcdefghijklm"))
print(solution('abcdefghijklmn.p'))
print(solution("z-+.^."	))
print(solution("123_.def"))
print(solution("=.="))

