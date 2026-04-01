package section6;

public class Car {
    String name;
    int speed;

    public Car(){

    }

    public Car(String name, int speed) {
        this.name = name;
        this.speed = speed;
    }

    public void speedUp() {
        System.out.println("엑셀을 밟아 빠르게 가속!");
    }

    public void slowdown() {
        System.out.println("브레이크를 밟아 감속!");
    }
}
