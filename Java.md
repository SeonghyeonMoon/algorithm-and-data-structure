# Java

1. 객체란? 구체적, 추상적 데이터 단위
2. Public Class 단 하나 존재 & 클래스명 = 파일명
3. static?
4. stack, heap 메모리?
5. overloading?

## 접근 제어자

private
x(default) - same package onle
protected - same package or inheritance
public - everywhere

## static 변수

인스턴스가 공유가는 기준 값, 변수
고유 ID 값

### Singleton pattern

하나의 객체만 생성할 수 있는 클래스, 또한 어디서든 접근 할 수 있는 클래스

```java
public class Singleton {
    private Singleton() {
    }

    public static Singleton singleton = null;

    public static Singleton getSingleton() {
        if (singleton == null) {
            singleton = new Singleton();
        }
        return singleton;
    }
}
```