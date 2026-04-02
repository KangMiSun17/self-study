package section7;

public class Chapter34 {
    static void main(String[] args) {
        Bird animal = new Bird("두루미", 10);

        System.out.println(animal.name);
        System.out.println(animal.beakLength);

        animal.sleep();
        animal.buildNest();
    }
}
