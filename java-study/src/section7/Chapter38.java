package section7;

public class Chapter38 {
    static void main(String[] args) {
        Flyable airplane = new Airplane();
        airplane.flyHigher();

        Flyable fairy = new Fairy();
        fairy.flyHigher();

        Flyable.introduce();
    }
}
