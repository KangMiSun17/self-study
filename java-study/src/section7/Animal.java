package section7;

public abstract class Animal {
    String name;

    public Animal(){

    }

    public Animal(String name) {
        this.name = name;
    }

    public abstract void move();

    public void sleep(){
        System.out.println("잠을 잡니다.");
    }
}
