---
title: JUnit Assertion
date: "2021-06-07T22:40:32.169Z"
tags: ["JUnit"]
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

> _어떤 조건이 예상 결과와 부합하는지 검증하는 구문입니다._

# '데이터댐' 열렸다…AI 학습용 데이터 4억8천만건 개방

## '데이터댐' 열렸다…AI 학습용 데이터 4억8천만건 개방

### '데이터댐' 열렸다…AI 학습용 데이터 4억8천만건 개방

### 과학기술정보통신부와 한국지능정보사회진흥원은 인공지능 학습용 데이터 170종

# H1 편집의 기본,<br/>그리드를 이해하라

## H2 타이포그래피로<br/>정보를 시각화하라

### H3 다양한 편집<br/>& 그리드 디자인을 분석하라

#### H4 인쇄에 안정적인<br/>폰트를 활용한 디자인

##### H5 다양한 변화가 가능한<br/>아이덴티티를 사용한 디자인

###### H6 지난 5월, 보육시설 아동 및 청소년들을 대상으로 진행한 제1회 소이프 미술공모전에 출품된 작품 중 하나가 저희들의 눈길을 끌었습니다.

<p class="body-lg">Body Large 일본 영화 애호가들과 영화 제작자, 그리고 예술가들을 독일 프랑크프루트로 불러 모으고 있습니다.</p>

Body Normal 새, 나비, 벌과 고양이 그리고 화분과 예쁜 구름까지 다양한 색상을 사용하여 그린 그림이 너무 귀엽고 예뻤습니다. 그 중에서도 다채로운 색상으로 꾸며진 구름을 보며 어떻게 이렇게 표현을 했을까! 감탄했습니다. 이러한 아이들의 예쁜 눈과 마음이 더욱 예쁘게 자랄 수 있기를 바라며 이 아동의 그림 중 구름과 꽃을 모티브로 티셔츠를 디자인 했습니다.

#### Style

1. 전통적 스타일의 <span style="color: #f19c43;">**JUnit Assert**</span> 라이브러리
2. 표현력이 뛰어난 <span style="color: #ffcc49;">**Hamcrest CoreMatchers**</span> 라이브러리

## Assert

- assert 메소드의 첫번째 파라미터는 '에러 메시지'이며, 생략 가능합니다.

```java
// 배열 비교
assertArrayEquals(배열1, 배열2);

// 값 비교
assertEquals(데이터, 데이터, <옵션> 오차 범위); // 내용 비교
assertSame(데이터, 데이터); // 주소 비교
assertNotSame(new Object(), new Object()); // 주소 비교

// boolean 논리 값 비교
assertTrue(true);
assertFalse(false);

// null 값 검증
assertNull(null);
assertNotNull(new Object());
```

## AssertJ

> assertThat( 실제 값 ).체이닝 메소드( 인자 )

```java
// assertThat import 구문
import static org.assertj.core.api.Assertions.assertThat;
```

## Hamcrest

> assertThat ( (Optional) Assertion 메시지, 실제값, Matcher 객체 )

<span style="color: #ff0000;">※ 주의 :   junit의 assertThat이 deprecated 되었습니다.</span>

＊Assertion 메시지는 추후 코드와 일치하지 않게 되는 경우가 많으므로 사용하지 않는 것을 추천합니다.

```java
// 값 비교
assertThat("찹쌀떡", equalTo("찹쌀떡"));
// 장식자
assertThat("찹쌀떡", is(equalTo("찹쌀떡")));
// 부정
assertThat("찹쌀떡", not(equalTo("시루떡")));
// null 값
assertThat(user.getAvatar(), nullValue());
assertThat(user.getAvatar(), notNullValue());
// allOf
assertThat("good", allOf(equalTo("good"), startsWith("good")));
// anyOf
assertThat("good", not(allOf(equalTo("bad"), equalTo("good"))));
assertThat("good", anyOf(equalTo("bad"), equalTo("good")));
// hasItems
assertThat(Arrays.asList("one", "two", "three"), hasItems("one", "three"));
// both A and B
assertThat(both(containsString("a")).and(containsString("b")));
// everyItem
assertThat(Arrays.asList(new String[] { "fun", "net" }), everyItem(containsString("n")));
// sameInstance
assertThat(new Object(), not(sameInstance(new Object())));
// either
assertThat(7, not(CombinableMatcher.<Integer> either(equalTo(3)).or(equalTo(4))));

// closeTo : 부동소수점 연산 & 비교
assertThat(3.14 * 5, closeTo(15.70, 0.001));
```

| Matcher 객체 | 인자                                                | 비고                                                                  |
| ------------ | --------------------------------------------------- | --------------------------------------------------------------------- |
| equalTo      | ( 원시 타입 또는 자바 인스턴스 )                    | equals( ) 메소드 사용<br />원시 타입은 Wrapper 객체로 오토박싱        |
| is           | ( Matcher 객체,<br />원시 타입 또는 자바 인스턴스 ) | 가독성을 높이기 위한 장치로,<br />별다른 기능을 수행하지 않습니다.    |
| not          | ( Matcher 객체 )                                    | 부정의 의미를 추가합니다.                                             |
| nullValue    | -                                                   | 예상 값을 null로 둡니다.                                              |
| notNullValue | -                                                   | 예상 값이 null이 아닐 때 사용합니다.                                  |
| allOf        | ( Matcher 객체들, ... )                             | Matcher 객체 모두가 참이어야<br />테스트를 통과합니다.                |
| anyOf        | ( Matcher 객체들, ... )                             | Matcher 객체 중 하나가 참이면<br />테스트를 통과합니다.               |
| closeTo      | ( 부동소수점 값, 근사치 허용 오차 )                 | 두 부동소수점 수의 차이가 허용 오차<br /> 안이면 테스트를 통과합니다. |
|              |                                                     |                                                                       |

### hamcrest 기본 예제

```java
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.number.IsCloseTo.*;

public class TempTest {
    @Test
    public void assertTest() {
        // given
        String name = "테스터";

        // when
        User user = User.builder().name(name).build();

        // then
        assertThat(user.getName(), equalTo("테스터"));
    }
}
```

## Assert vs. Hamcrest 비교

### 1. 오류 메시지

<!--
**JUnit Assert**

![assertEquals(D:\Projects\GitHub\GitBook-TIL.gitbook\assets\spring\junit\junit_assert_error_message.png);](../../../.gitbook/assets/spring/junit/junit_assert_error_message.png)

**Hamcrest**

![assertThat(../../../.gitbook/assets/spring/junit/hamcrest_error_message.png);](../../../.gitbook/assets/spring/junit/hamcrest_error_message.png) -->

- 변경 사항을 체계적으로 관리합니다.
- 파일 이름을 더럽히지 않고 버전을 관리할 수 있게 도와주는 도구입니다.
- 소스 코드를 백업해주므로 장애 회복 시 유용하게 쓰입니다.
