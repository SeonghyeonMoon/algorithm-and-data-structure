# 이진탐색

def binary_search(target, start, end, arr):
    if start > end:
        return end
    mid = (start + end) // 2
    data = arr[mid] # 데이터 구하는 부분만 수정
    if data >= target:
        start = mid + 1
    else:
        end = mid - 1
    return binary_search(target, start, end)


while start <= end:
    mid = (start + end) // 2

    # 데이터 추출

    if data >= target:
        start = mid + 1
    else:
        end = mid - 1
    