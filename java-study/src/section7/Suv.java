package section7;

public class Suv implements CarInterface {

    @Override
    public void stepOnAccel(int speed) {
        System.out.println("악셀을 밟아 SUV의 속력을 " + speed + "만큼 증가시킵니다.");
    }

    @Override
    public void stepOnBrake() {
        System.out.println("브레이크를 밟아 SUV를 멈춥니다.");
    }
}
