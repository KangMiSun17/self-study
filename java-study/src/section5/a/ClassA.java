package section5.a;

public class ClassA {
    public int publicNum;   // 모든 클래스 (접근 제한 X)
    protected int protectedNum; // 같은 패키지 or 자식 클래스 (즉 a 패키지 내에서만)
    int defaultNum;     // 같은 패키지
    private int privateNum; // 같은 클래스

    public void publicPrint(){
        System.out.println("public 메서드입니다.");
        System.out.println("privateNum : " + privateNum);
    }

    void defaultPrint(){
        System.out.println("default 메서드입니다.");
        privatePrint()
    }

    private void privatePrint(){
        System.out.println("private 메서드입니다.");
    }
}
