package section8;

public class NormalCave {
    public static <U> U printAndReturn(U item) { // 제네릭 클래스와 별개로 독립적으로 사용
        System.out.println(item.getClass().getName());
        return item;
    }
}
