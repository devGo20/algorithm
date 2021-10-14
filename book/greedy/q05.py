ball = [1,3,2,3,2]
answer = 0
for i in range(len(ball)):
    for j in range(i,len(ball)):
        if ball[i] != ball[j]:
            answer += 1

print(answer)