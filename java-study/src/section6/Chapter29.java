package section6;

public class Chapter29 {
    static void main(String[] args) {
        Truck truck = new Truck();

        truck.loadCargo();
        truck.loadCargo(10);
        truck.loadCargo("철근");
        truck.loadCargo(10, "식품");
        truck.loadCargo("목재", 30);

        // 오버로딩을 잘 활용핳ㄴ 예시
        System.out.println(10);
    }
}
