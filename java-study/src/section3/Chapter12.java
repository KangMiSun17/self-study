package section3;

public class Chapter12 {
    static void main(String[] args) {
        int a = 10, b = 20;
        int multiplyResult = multiply(a, b);
        System.out.println(multiplyResult);

        printAddResult(a, b);

        int biggerNum = getBigger(a, b);
        System.out.println("biggerNum : " + biggerNum);
    }

    public static int getBigger(int num1, int num2) {
        // return문 역할
        // 1. 결과값을 반환
        // 2. 메서드 종료
        if (num1 > num2) {
            System.out.println("num1이 더 큽니다.");
            return num1;
        }
        System.out.println("num2가 더 큽니다.");
        return num2;
    }

    public static int multiply(int num1, int num2) {
        int result = num1 * num2;
        return result;
    }

    public static void printAddResult(int num1, int num2) {
        System.out.println("덧셈 결과 출력 : " + (num1 + num2));
    }
}
