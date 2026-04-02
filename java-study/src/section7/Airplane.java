package section7;

public class Airplane implements Flyable{
    @Override
    public void fly() {
        System.out.println("비행기가 이륙합니다!");
    }

    @Override
    public void flyHigher() {
        System.out.println("비행기의 고도를 높입니다!");
    }
}
