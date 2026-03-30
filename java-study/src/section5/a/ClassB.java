package section5.a;

public class ClassB {
    static void main(String[] args) {
        ClassA classA = new ClassA();
        System.out.println(classA.publicNum);
        System.out.println(classA.defaultNum);
        System.out.println(classA.protectedNum);
//        System.out.println(classA.privateNum); // 오류
        classA.publicPrint();
        classA.defaultPrint();
//        classA.privatePrint(); // 오류
    }
}
