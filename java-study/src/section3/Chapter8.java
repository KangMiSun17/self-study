package section3;

public class Chapter8 {
    static void main(String[] args) {
//        for (int i = 1; i <= 10; i++){
//            System.out.println(i);
//        }

        // 구구단
        int dan = 3;
        System.out.println(dan + "단 결과 ====");
        for (int i = 1; i <= 9; i++){
            int result = dan * i;
            System.out.println(dan + " x " + i + " = " + result);
        }
    }
}
