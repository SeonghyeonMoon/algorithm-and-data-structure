s1 = input()
s2 = input()

dp = [["" for _ in range(len(s2) + 1)] for _ in range(len(s1) + 1)]

for i in range(len(s1)):
    for j in range(len(s2)):
        if s1[i] == s2[j]:
            dp[i + 1][j + 1] = dp[i][j] + s1[i]
        else:
            if len(dp[i + 1][j]) > len(dp[i][j + 1]):
                dp[i + 1][j + 1] = dp[i + 1][j]
            else:
                dp[i + 1][j + 1] = dp[i][j + 1]

print(len(dp[-1][-1]))
print(dp[-1][-1])