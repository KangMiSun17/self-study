package section7;

public class Doogang  implements Singer, Developer{
    @Override
    public void develop() {
        System.out.println("프로그램을 개발합니다.");
    }

    @Override
    public void sing() {
        System.out.println("노래를 부릅니다.");
    }
}
