package section4;

public class Dog {
    String name;
    String type;
    int weight;

    public Dog(String name, String type, int weight) {
        this.name = name;
        this.type = type;
        this.weight = weight;
    }

    // ex) 강아지 미용샵
    // String furColor;
    // int furLength;

    public void eat() {
        System.out.println(name + " 냠냠");
    }
}
