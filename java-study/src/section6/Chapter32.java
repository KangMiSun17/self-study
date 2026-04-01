package section6;

public class Chapter32 {
    static void main(String[] args) {
        Car car = new Truck();  // Truck 클래스의 요소만 가진 Truck 객체 -> Bux 타입으로 다운캐스팅 불가
        // 다운캐스팅은 원래부터 가졌던 필드와 메서드를 다시 '회복'하는 것
//        Bus bus = (Bus)car;
        if (car instanceof Bus) { // Pattern Matching
            Bus bus = (Bus) car;

            System.out.println(bus.busFare);
            bus.useBusLane();
        }

        System.out.println("아주 중요한 작업");
    }
}
