def solution(table, languages, preference):
    score = []
    
    for i in table:
        returnScore = []
        splitTbl = []
        splitTbl = i.split()
        tblName = splitTbl[0]
        splitTbl.reverse()
        for j in languages:
            if j in splitTbl:
                returnScore.append(splitTbl.index(j)+1)
            else:
                returnScore.append(0)
        sum = 0 
        for j in range(len(languages)):
            sum += returnScore[j]*preference[j]
        score.append((tblName,sum))
    score = sorted(score, key=lambda x: x[0], reverse=False)
    print(score)
    score = sorted(score, key=lambda x: x[1], reverse=True)
    print(score)
    answer = score[0][0]
    return answer

## zip, enumerate 알아보기,,흑흑,,
table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]
languages = ["PYTHON", "C++", "SQL"]
lang = ["JAVA", "JAVASCRIPT"]
preference = [7,5]
print(solution(table,lang,preference))