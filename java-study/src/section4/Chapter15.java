package section4;

public class Chapter15 {
    static void main(String[] args) {
        Dog dog1 = new Dog("이지", "진도", 25);
        Dog dog2 = new Dog("아롱이", "잡종", 5);

        System.out.println(dog1.name);
        dog1.name = "아지";
        System.out.println(dog1.name);
    }
}
