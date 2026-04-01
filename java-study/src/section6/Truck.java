package section6;

public class Truck extends Car { // 단일 상속 지원
    int cargoWeightLimit;

    public Truck() {

    }

    public Truck(String name, int speed, int cargoWeightLimit) {
        super(name, speed);
        this.cargoWeightLimit = cargoWeightLimit;
    }

    // 오버로딩 : 같은 이름의 메서드를 여러 개 만드는 것
    // 매개변수의 개수 or 타입 or 순서 하나라도 다르게 해야함
    public void loadCargo() {
        System.out.println("화물을 적재합니다.");
    }

    public void loadCargo(int weight) {
        System.out.println(weight + "kg의 화물을 더 적재합니다.");
    }

    public void loadCargo(String type) {
        System.out.println(type + "종류의 화물을 적재합니다.");
    }

    public void loadCargo(int weight, String type){
        System.out.println(weight + "kg인" + type + " 종류의 화물을 적재합니다.");
    }

    public void loadCargo(String type, int weight){
        System.out.println(weight + "종류의 화물을 " + weight + "kg만큼 적재합니다.");
    }

    @Override // override 어노테이션 : 오버라이딩 과정에서 문제가 없는지 검사
    public void speedUp() {
        System.out.println("화물이 있으니 천천히 속도를 올리세요!");
    }

    public void print() {
        System.out.println("이름 : " + name);
        System.out.println("현재 속력 : " + speed);
        System.out.println("최대 적재 중량 : " + cargoWeightLimit);
    }
}
