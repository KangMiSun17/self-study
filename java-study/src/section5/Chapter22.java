package section5;

public class Chapter22 {
    static void main(String[] args) {
        Bike myBike = new Bike(30);
        upgrade(myBike);
        int minusSpeed = 5;
        myBike.maxSpeed -= minusSpeed;
        myBike.wheel = 1;
    }

    public static void upgrade(Bike bike){
        int plusSpeed = 10; // upgrade 메서드의 지역변수 -> Stack 영역
        bike.maxSpeed = plusSpeed;
        Bike newBike = new Bike(20);
    }
}
