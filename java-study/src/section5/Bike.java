package section5;

public class Bike {
    int maxSpeed;   // 인스턴스 변수 - 객체 필요 O, 객체마다 서로 다른 값, Heap 영역
    static int wheel = 2;  // 클래스 변수 - 객체 필요 X, 모든 객체가 공유, Method 영역

    public Bike(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    // static 특징
        // 객체가 아닌, 클래스 소속
        // 객체 없이 클래스만으로 사용 가능
    public static void print(){
        // static 필드, static 메서드 사용 가능
        System.out.println(wheel);
    }
}
