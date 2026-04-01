package section6;

public class Chapter31 {
    static void main(String[] args) {
        Car car = new Bus(); // 업캐스팅
//        car.useBusLane();

        Bus bus = (Bus)car;
        bus.busFare = 2000;
        System.out.println(bus.busFare);
        bus.useBusLane();
    }
}
