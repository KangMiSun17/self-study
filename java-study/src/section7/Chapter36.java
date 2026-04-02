package section7;

public class Chapter36 {
    static void main(String[] args) {
        Flyable fairy = new Fairy();
        Flyable airplane = new Airplane();

        flyFlyable(fairy);
        flyFlyable(airplane);
        flyFlyable(new Bird());

        // 클래스 상속 : IS-A 관계, 단일 상속할만한 클래스, 물려받을 적절한 필드와 메서드가 있음
        // 인터페이스 구현 : 기능 중심, 기능의 구현을 강제할 필요가 있음, '자유롭게' 묶기, 다중 구현
    }

    public static void flyFlyable(Flyable flyable) {    // 상속 없어도 자유롭게 클래스들을 묶어줌
        flyable.fly();
    }
}
