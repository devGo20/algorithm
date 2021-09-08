#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here
    plus = 0
    minus = 0
    zero = 0
    for i in arr:
        if i < 0:
            minus += 1
        elif i > 0:
            plus += 1
        else:
           zero += 1
    p = len(arr)
    return "{:.6f}".format(round(plus/p,6)),"{:.6f}".format(round(minus/p,6)),"{:.6f}".format(round(zero/p,6))
print(plusMinus([-4,3,-9,0,4,1]))

def miniMaxSum(arr):
    # Write your code here
    arr.sort()
    min = sum(arr) - arr[-1]
    max = sum(arr) - arr[0]
    print(min,max)

miniMaxSum([1,2,3,4,5])

def diagonalDifference(arr):
    # Write your code here
    A = 0
    B = 0
    for i in range(len(arr)):
        B += arr[i][i]
    for i in range(len(arr)):
        A += arr[i][len(arr)-1-i]
    return abs(A - B)

def birthdayCakeCandles(candles):
    # Write your code here
    tall = max(candles)
    return candles.count(tall)
print(birthdayCakeCandles([3,2,1,3]))

def timeConversion(s):
    # Write your code here
    if (s[:2] == '12' and s[-2:] == 'PM') or (s[:2] != '12' and s[-2:] == 'AM'):
        return s[:-2]
    else:
        slist = s[:-2].split(':')
        if s[-2:] == "PM":
            slist[0] = str(int(slist[0]) + 12)
        else:
            slist[0] = '00'
        return ':'.join(slist)

print(timeConversion("12:05:39AM"))

def missingNumbers(arr, brr):
    # Write your code here
    ans = []
    arr.sort()
    brr.sort()
    print(len(arr))
    print(len(brr))
    
    flag = set(brr)
    print(len(flag))
    for i in flag:
        if brr.count(i) != arr.count(i):
            ans.append(i)
    return ans

# print(missingNumbers(arr,brr))

def pairs(k, arr):
    # Write your code here
    # 순서 없는 set으로 속도 향상
    arr = set(arr)
    cnt = 0
    for i in arr:
        if i + k in arr:
            cnt += 1
    return cnt

print(pairs(2,[1, 5, 3, 4, 2]))


def balancedSums(arr):
    right = sum(arr)
    left = 0
    for i in arr:
        right -= i

        if right == left:
            return 'YES'
        left += i
    return 'NO'
print(balancedSums([1,2,3,3]))