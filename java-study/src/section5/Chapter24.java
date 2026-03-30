package section5;

public class Chapter24 {
    static void main(String[] args) {
        Motorcycle motorcycle = new Motorcycle(50);
//        motorcycle.speed += 500;
//        System.out.println(motorcycle.speed);
        motorcycle.speedUp(50);
        System.out.println(motorcycle.getSpeed());
    }
}
