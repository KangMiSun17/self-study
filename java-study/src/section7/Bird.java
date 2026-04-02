package section7;

public class Bird extends Animal {

    int beakLength;

    public Bird(){

    }

    public Bird(String name, int beakLength) {
        super(name);
        this.beakLength = beakLength;
    }

    @Override
    public void move() {
        System.out.println("새가 날아다닙니다.");
    }

    public void buildNest(){
        System.out.println("둥지를 짓습니다.");
    }
}
