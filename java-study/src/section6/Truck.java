package section6;

public class Truck extends Car { // 단일 상속 지원
    int cargoWeightLimit;

    public Truck(){

    }

    public Truck(String name, int speed, int cargoWeightLimit) {
        super(name, speed);
        this.cargoWeightLimit = cargoWeightLimit;
    }

    public void loadCargo() {
        System.out.println("화물을 적재합니다.");
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
