def solution(board, moves):
    answer = 0
    play = []
    for i in moves:
        for j in range(len(board)):
            # 인형을 찾았을 경우
            if board[j][i-1] != 0:
                # play에 인형이 담겨있는지, 마지막 인형이 현재 뽑을 인형과 같은지 확인
                if len(play) > 1 and play[-1] == board[j][i-1]:
                    # 같을 경우 answer + 2
                    answer += 2
                    # play 마지막 인형 제거
                    play.pop(-1)
                else:
                    # play에 담아두기
                    play.append(board[j][i-1])
                # 꺼낸 인형 0으로 만들기
                board[j][i-1] = 0
                break
                    
    return answer

print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))