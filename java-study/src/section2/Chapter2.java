package section2;

public class Chapter2 {
    static void main(String[] args) {
        // 1. 논리형 - boolean : true, false
        boolean isFinished = true;
        System.out.println("isFinished : " + isFinished);

        // 2. 정수형 (byte, short, int, long) : 숫자 중에서도 '정수'를 저장하는 데이터 타입
        int intNum = 2147483647; // max 2147483647
        System.out.println("intNum : " + intNum);
        int overNum = intNum + 1; // 오버플로우
        System.out.println(overNum); // -2147483648

        long longNum = 2147483648L; // int 범위를 벗어나면 L(리터럴)이 필수
        System.out.println("longNum : " + longNum);
        long longNum2 = 2_200_000_000L;

        byte byteNum = 10;  // max 127
        System.out.println("byteNum : " + byteNum);

        short shortNum = 20;    // max 32767
        System.out.println("shortNum : " + shortNum);

        // 3. 실수형 (double, float) : 숫자 중에서도 '실수'를 저장하는 데이터 타입
        double doubleNum = 1.1;
        System.out.println("doubleNum : " + doubleNum);

        float floatNum = 2.2f;  // F 필수
        System.out.println("floatNum : " + floatNum);

        // 4. 문자형 (char) : 오직 하나의 문자
        char character = 'a';
        System.out.println("character : " + character);

        // String
        String string = "apple";
        System.out.println("string : " + string);
    }
}
