package section4;

public class Chapter14 {
    static void main(String[] args) {
        Dog dog1 = new Dog("이지", "진돗개", 25);
        System.out.println("dog1 name : " + dog1.name);
        System.out.println("dog1 type : " + dog1.type);
        System.out.println("dog1 weight : " + dog1.weight);
        dog1.eat();

        Dog dog2 = new Dog("아롱이", "시고르자브르", 5);
        dog2.eat();
    }
}
