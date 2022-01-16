# Class
- template 
- declare once 
- no data in

> Data가 없는 정의만 하는 template 같은 형식

# Object
- instance of a class
- created many times
- data in

> 실질적으로 data를 넣어 만드는 친구


## Object 구성
- data (데이터)
- function (행동)

### 예시
차를 형상하는 Object가 있다고 생각하여 예시를 들어보자

- 차의 부품, 가격, 이름 - data
    - 바퀴, 유리, 문, 차의 틀 등등...
- 주행법  - function
    - 엑셀
    - 브레이크
    ...

여기에 조금을 더 추가해야한다.
- Error
- Exception
- Event
...


# OOP 원칙
OOP를 만드는 것이 위의 예시처럼이라면 쉽겠지만, 사실은 그렇지 않다. 정해진 것은 아니지만 4가지의 대원칙을 지켜며 만드는 것이 중요하다.

#### Encapsulation (캡슐화) : 같은 모듈끼리 캡슐화를 하는 것
- 같은 function을 하는 것 끼리 모아두는 것을 말한다.

> 강아지의 예시

강아지의 감정 - 배부름, 피곤함, 배고픔 등은 내부적인 감정이다. 즉, state다
그리고 강아지와 연관되어 있는 play, feed 등은 외부에서 작용할 수 있는 function이다.

> 내부의 감정을 직접적으로 건드리지는 못하지만, 외부 function을 이용해 내부의 state를 바꿀 수 있다. 이것이 캡슐화 이다.

조금 했갈리지만, 내부에 state를 외부에서 직접적으로 적용하지 못하게 하고(은닉) 외부의 function으로 내부를 건들 수 있다는 것이다. 캡슐화를 통해 내부와 외부를 나누고, 외부에 보여주기 위한 요소를 구분지어 만드는 것이 **Encapsulation**이라고 생각한다.

#### Abstraction (추상화) : 내부의 기능을 몰라도 Interface로 사용 가는 한 것

> 자동차 예시
자동차 예시를 들어 이해 해볼 수 있다. 우리가 사용하는 자동차는 다양한 기능이 있다. 움직임, 멈춤 등 기본적인 것과 내부적으로 복잡한 시스템으로 돌아간다. 하지만 우리가 자동차를 사용하기 위해 이런 기능을 모두 알아야 하는가? 

> 당연히 그것은 아니라고 말할 것이다.

즉, 내부적인 기능을 모르고 외부에 보이는 Interface(엑셀, 브레이크, 핸들)를 가지고 Obejct(자동차)를 사용하는 것을 말한다.


#### Inheritance (상속화) : 잘 정의되어 진 큰 개념을 작은 개념에 사용하는 것

- 상속화는 이름부터가 직관적이다. ~~한 줄로 요약하려니 어렵게 말했다.~~
그냥 쉽게 직관적으로 생각하면 된다.

부모가 자식에게 주는 것을 상속이라고 말하는 것 처럼 Parent Class가 정의되어 있고, Child Class에서는 Parent Class를 상속받았다고 하면, Parent Class에 있는 기능, 데이터, 등 다양하게 정의되어 있는 것을 사용할 수 있는 것이다.

> 자동차 예시
Car 라는 Class를 만들었다고 가정하자

```ts
type Car = {가격: number, 모양: string, 이름: string, move()} 

const sonata: Car; // Child Class
```
보면 알 수 있듯 sonata는 Car라는 parent class의 내용을 모두 사용할 수 있다.
~~(TS에서 이렇게 간단하게 만드는 것이 맞는지 옳바른 방식은 검증되지 않았다)~~

이 3가지를 통해 

#### Polymorphism (다형성) : Inheritance 된 instance가 공통적으로 function을 사용할 수 있는 것

- 연관없는 내용인데 같은 parent에서 상속받은 child class가 있으면, parent class에 있는 function, data 등 공통된 것에 접근이 가능한 것

예시로 생각하면 쉽게 이해할 수 있다.

> 자동차 예시

Car를 parent class로 sonata, avanta 등이 상속을 받았다고 가정하자.
Parent class에 `move()`라는 **공통적인** function이 있기 때문에 접근할 수 있는 것을 말한다.

