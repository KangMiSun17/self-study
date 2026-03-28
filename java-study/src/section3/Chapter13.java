package section3;

public class Chapter13 {
    static void main(String[] args) {
        int x = 10, y = 20;
        testLocalVariable(x, y);
/*
        System.out.println(localNum1);
        System.out.println(localResult);
*/

        int n1 = 1, n2 = 2;
        System.out.println("before num1 : " + n1 + " num2 : " + n2);
        changeValue(n1, n2);
        System.out.println("after num1 : " + n1 + " num2 : " + n2);
    }

    public static int testLocalVariable(int localNum1, int localNum2) {
        int localResult = localNum1 + localNum2;
        System.out.println(localNum1);
        System.out.println(localResult);
        return localResult;
    }

    public static void changeValue(int num1, int num2){
        System.out.println("before num1 : " + num1 + " num2 : " + num2);
        num1 = 100;
        num2 = 200;
        System.out.println("after num1 : " + num1 + " num2 : " + num2);
    }
}
