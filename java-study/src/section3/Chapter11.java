package section3;

public class Chapter11 {
    static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 2) {
                continue;
            }
            System.out.println(i);
        }

        int i = 1;
        while (i <= 5) {
            System.out.println("시작!");
            i++;
            if (i >= 3) {
                continue;
            }
            System.out.println(i);
        }
    }
}
