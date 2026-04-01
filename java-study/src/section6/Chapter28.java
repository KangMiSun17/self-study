package section6;

public class Chapter28 {
    static void main(String[] args) {
        // 부적절한 상속 관계의 문제점
            // 1. 논리적으로 부적합한 구조
            // 2. 불필요한 필드와 메소드를 상속받음
            // 3. 진짜 필요한 상속 불가 - 단일 상속
            // 4. 프로그래밍이 복잡해지고, 유지보수가 어려워짐
        Person person = new Person("미선", 29);
        System.out.println(person.name);
        System.out.println(person.age);
        person.sleep();
    }
}
