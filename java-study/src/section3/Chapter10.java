package section3;

public class Chapter10 {
    static void main(String[] args) {
        for (int i = 1; i <= 10; i++){
            if (i == 5) {
                break;
            }
            System.out.println(i);
        }

        int num = 0;
        while (true) {
            num += 2;
            System.out.println("num : " + num);
            if (num >= 20) {
                break;
            }
        }
    }
}
