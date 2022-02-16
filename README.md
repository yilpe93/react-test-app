# React Test App

## 테스트 주도 개발(Test Driven Development)

실제 코드를 작성하기 전에 테스트 코드르 먼저 작성한다.
테스트 코드를 작성한 후 그 테스트 코드를 Pass 할 수 있는 실제 코드를 작성한다.

## TDD의 좋은 점

1. TDD를 하므로 인해 많은 기능을 테스트하기에 소스 코드에 안정감이 부여된다.

2. 실제 개발하면서 많은 시간이 소요되는 부분은 디버깅 부분이기에 TDD를 사용하면 디버깅 시간이 줄어들고 실제 개발 시간도 줄어든다.

3. 소스 코드 하나하나를 더욱 시중하게 짤 수 있기 때문에 클린 코드가 나올 확률이 높다.

---
## Jest 란?

Facebook에 의해서 만들어진 테스팅 프레임 워크이다.
최소한의 설정으로 동작하며 Test Case를 만들어서 어플리케이션 코드가 잘, 제대로 돌아가는지 확인할 수 있다.
**단위(Unit)** 테스트를 위해 사용한다.

---
## Jest 시작하기

1. Jest 라이브러리 설치

```
$ npm i -D jest
```

2. Test 스크립트 변경

```json
// package.json

"scripts": {
  "test": "jest"
  ...
}
```

3. 테스트 작성할 폴더 및 파일 기본 구조 생성

- Test
  - 단위 테스트 폴더(Unit Test) - 단위 테스트 파일(<파일 이름>.test.js)
  - 통합 테스트(Interation Test) - 통합 테스트(<파일 이름>.test.init.js)

- Jest가 Test 파일을 찾는 방법
  - <파일 이름>.test.js
  - <파일 이름>.spec.js
  - All files inside "tests" folders

---

## Jest 파일 구조 && 사용법

#### describe

> argument(name, fn)

여러 관련 테스트를 `그룹화`하는 블록을 만든다.

#### it

> argument(name, fn, timeout)

`개별 테스트`를 수행하는 곳, 각 테스트를 작은 문장 처럼 설명한다.

#### expect

expect 함수는 값을 테스트할 때마다 사용된다. 그리고 expect 함수는 혼자서 거의 사용 되지 않으며 matcher와 함께 사용된다.

#### matcher

기대 값에 따라 테스트 하도록 **matcher**를 사용한다.

```js
// App.test.js

describe("테스트 그룹 설명", () => {
  it ("테스트 단위 설명1", () => { ... })
  it ("테스트 단위 설명2", () => { ... })
  it ("테스트 단위 설명3", () => { ... })
  // ...
})
```

---

## 쿼리 함수

쿼리는 `페이지에서 요소를 찾기 위해` 테스트 라이브러리가 제공하는 방법이다. 여러 유형의 쿼리(`get`,`find`,`query`)등이 있다. 유형간의 차이점은 요소가 발견되지 않으면 쿼리에서 요류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부이다. 선택하는 페이지 콘텐츠에 따라 다른 쿼리가 다소 적절할 수 있다.

```js
// App.test.tex
import { render, screen } from "@testing-library/react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### get, find, query 차이점

#### getBy..

쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상의 이리치가 발견되면 `오류를 발생` 시킨다. (둘 이상의 요소가 예상되는 경우 대신 getAllBy 사용)

> getBy + waitFor = findBy

#### queryBy..

쿼리에 대해 일치하는 노드를 반환하고 `일치하는 요소가 없으면 null`을 반환한다.

#### findBy...

주어진 쿼리와 일치하는 요소가 발견되면 해결되는 `Promise`를 반환한다. 요소가 발견되지 않거나 기본 제한 시간의 1000ms 후에 둘 이상의 요소가 발견되면 약속이 거부한다. (둘 이상의 요소를 찾아야 하는 경우 findAllBy를 사용)

---

### FireEvent API

유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용

[FireEvent ApI](https://testing-library.com/docs/dom-testing-library/api-events/)