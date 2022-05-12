# [Leetcode] [Course Schedule](https://leetcode.com/problems/course-schedule/)

```py
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # 그래프 생성
        graph = defaultdict(list)
        # 배울 수 있는 코스들 초기화(선행 과정이 없는 아이들만 남기기)
        learned = set([x for x in range(numCourses)])
        for prerequisite in prerequisites:
            graph[prerequisite[0]].append(prerequisite[1])
            if prerequisite[0] in learned:
                learned.remove(prerequisite[0])

        while True:
            # 한 루프 끝날동안 삭제가 발생했는지 확인
            ck = True
            # 빈 딕셔너리 저장 공간
            delete_nums = []
            for key, values in graph.items():
                for idx, value in enumerate(values):
                    # 배운 과정일 경우 graph에서 삭제
                    if value in learned:
                        del values[idx]
                        ck = False
                if not values:
                    # 빈 배열을 가진 키 learned에 저장하고 graph에서 삭제
                    learned.add(key)
                    delete_nums.append(key)
            for delete_num in delete_nums:
                del graph[delete_num]
            # 삭제가 발생하지 않았다면 루프 종료
            if ck == True:
                break
        # 배울 수 있는 숫자가 numCourses와 동일한지 반환
        return len(learned) == numCourses
```
