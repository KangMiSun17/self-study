package section4;

public class Chapter16 {
    static void main(String[] args) {
        Dog dog1 = new Dog("이지", "진도", 25);
        Dog dog2 = dog1;

        System.out.println(dog1.name);
        dog2.name = "아롱이";
        System.out.println(dog1.name);

        System.out.println(dog2.name);
        dog1.name = "콩이";
        System.out.println(dog2.name);
    }
}
