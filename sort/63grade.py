n = int(input())

arr = []
for i in range(n):
    input_data = input().split()
    arr.append((input_data[0], int(input_data[1])))

def setting(data):
    return data[1]  

result = sorted(arr, key=setting, reverse=True)
print(result)