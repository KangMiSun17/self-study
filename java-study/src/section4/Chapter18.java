package section4;

public class Chapter18 {
    static void main(String[] args) {
        // null : 참조 변수가 어떤 객체도 참조하지 않음을 나타내는 특별한 값 -> 참조변수와 연결된 객체가 없다
        Dog dog = new Dog("해피","불독");
        System.out.println(dog.name);
        dog.eat();

        dog = null;
        if (dog != null){
            System.out.println(dog.name);
        }

        System.out.println("아주 중요한 작업");

        // RuntimeException (런타임 예외) : 프로그램 싫행 중에 발생핳는 예외
        // CompileError (컴파일 에러) : 프로그램 싫행 전, 컴파일 과정에서 발생하는 여러 문법 규칙을 지키지 않았을 때 발생
    }
}
