package section4;

public class Dog {
    String name;
    String type;
    int weight;
    // 타입별 기본값
        // 기본 타입
            // 정수형 : 0
            // 실숳형 : 0.0
            // 논리형 : false
            // 문자형 : '\u0000' (널 문자)
        // 참조 타입 : null

    public Dog(String name, String type, int weight) {
        this.name = name;
        this.type = type;
        this.weight = weight;
    }

    public Dog(String name, String type) {  // 생성자 오버로딩 : 매개변수의 타입이나 개수가 다른 여러개의 생성자를 만드는 것
        this(name, type, 10);
        System.out.println("객체 생성"); // this() 아래에 위치하도록
    }

    public Dog(){ // 기본 생성자 : 어떠한 생성자도 없으면, 자동으로 생성

    }

    // ex) 강아지 미용샵
    // String furColor;
    // int furLength;

    public void eat() {
        System.out.println(name + " 냠냠");
    }
}
