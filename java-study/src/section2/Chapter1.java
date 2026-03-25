package section2;

public class Chapter1 {
    static void main(String[] args) {
        int number; // 선언
        number = 10;    // 초기화
        int number2 = 1;
        System.out.println(number);
        System.out.println("number의 값은 " + number + " 입니다.");
        System.out.println("number의 값은 " + number2 + " 입니다.");

        number = 20;    // 재할당
        System.out.println("새로운 number의 값은 " + number + " 입니다.");

        final int num = 5;
        //  num = 75; // 오류

        int number3, number4, number5;
        int number6 = 1, number7 = 2;

        // 변수 네이밍 규칙
        // 1. 특수기호 - $ _
        int abc123$_;

        // 2. 숫자로 시작 불가
        int _$abc3;

        // 3. 예약어 사용 불가
        // int int;
        //int if;

        // 변수 네이밍 컨벤션
        int price; // 변수의 의미
        int eventSalePrice; // camelCase 표기법

    }
}
