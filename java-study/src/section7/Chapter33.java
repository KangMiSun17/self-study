package section7;

public class Chapter33 {
    static void main(String[] args) {
        Animal bird = new Bird();
        Animal cat = new Cat();
        Animal fish = new Fish();

        moveAnimal(bird);
        moveAnimal(cat);
        moveAnimal(fish);

    }

    // 추상메서드 장점
        // 1. 구현을 강제 : move() 메서드를 가지고 잇음 보장
        // 2. 공통된 규격 : 동일한 메서드를 움직일 수 있도록 하는 "일관성 제공"
    public static void moveAnimal(Animal animal) {
        animal.move();
    }
}
