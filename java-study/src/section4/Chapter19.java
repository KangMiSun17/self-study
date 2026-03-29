package section4;

public class Chapter19 {
    static void main(String[] args) {
        Axe axe1 = new Axe("금", "최상");
        Axe axe2 = new Axe("금", "최상");

        // 동일성 비교
        System.out.println(axe1 == axe2);

        // 동등성 비교
        System.out.println(axe1.equals(axe2));
    }
}
