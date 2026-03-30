package section5;

public class Motorcycle {
    private int speed;

    public Motorcycle(int speed) {
        this.speed = speed;
    }

    public void speedUp(int speed) {
        if (this.speed + speed > 200) {
            System.out.println("최대 200까지만 speed를 올릴 수 있습니다.");
            return;
        }
        this.speed += speed;
    }

    public int getSpeed() { // getter
        return this.speed;
    }

    public void setSpeed(int speed) { // setter
        this.speed = speed;
    }
}
