package section2;

public class Chapter3 {
    static void main(String[] args) {
        // 1. 대입 연산자 : 변수에 값을 할당하는 연산자 ( = )
        int variable = 10;

        // 2. 산술 연산자 : 수학적 계산을 수행하는 연사자 ( +, -, *, /, % )
        int num1 = 10;
        int num2 = 3;
        System.out.println(num1 + num2);
        System.out.println(num1 - num2);
        System.out.println(num1 * num2);
        System.out.println(num1 / num2);
        System.out.println(num1 % num2);

        // 산술 연산 우선순위
        int i = (1 + 2) * 3;
        System.out.println("결과 : " + i);

        // 3. 증감 연산자 : 변수의 값을 1 증가시키거나, 1 감소시키는 연산자 (++, --)
        int n1 = 1;
        System.out.println("n1++ : " + n1++); // 이 줄이 끝나고 1 증가
        System.out.println("after n1++ : " + n1);

        int n2 = 1;
        System.out.println("++n2 : " + ++n2); // 이 줄에서 1 증가
        System.out.println("after ++n2 : " + n2);

        // 4. 복합 대입 연산자 : 산술 연산과 대입 연산이 합쳐진 연산자 ( +=, -=, *=, /=, %= )
        int complex1 = 10;
        complex1 += 1;

        int complex2 = 10;
        complex2 -= 1;

        int complex3 = 10;
        complex3 *= 2;

        int complex4 = 10;
        complex4 /= 3;

        int complex5 = 10;
        complex5 %= 3;

        // 5. 비교 연산자 : 두개의 값을 비교하는 연사자 ( <, >, <=, >=, ==, != )
        int number1 = 10;
        int number2 = 20;
        boolean compare1 = number1 < number2;
        System.out.println(compare1);
        boolean compare2 = number1 > number2;
        boolean compare3 = number1 <= number2;
        boolean compare4 = number1 >= number2;
        boolean compare5 = number1 == number2;
        boolean compare6 = number1 != number2;
        System.out.println(compare5);
        System.out.println(compare6);

        // 6. 논리 연산자 : 여러 조건을 함께 판별할 수 있는 연산자 ( &&, ||, ! )
        // && (and) : 두 조건이 모두 true일 때만 true
        int age1 = 15;
        boolean and = age1 >= 10 && age1 < 20;

        // || (or) : 두 조건 중 하나의 조건만 true면 true
        int age2 = 5;
        boolean or = age2 < 10 || age2 >= 70;

        // ! (not) : true, false 값을 반대로 바꾸는 연산자
        int age3 = 30;
        boolean not = !(age3 < 20);
    }
}
