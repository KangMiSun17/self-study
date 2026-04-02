package section7;

public interface Flyable {
    void fly();

    // default 메서드 : 구현부를 가지고 있음, 구현(오버라이딩) 필요 X
    default void flyHigher(){
        System.out.println("더 높이 날아갑니다!");
    }

    // static 메서드 : 인터페이스 자체에 속함, 오버라이딩 불가
    static void introduce(){
        System.out.println("비행 가능한 그룹입니다.");
    }
}
