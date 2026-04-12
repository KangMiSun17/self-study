package section8;

public class AnimalCave<T extends Animal> { // Animal을 포함한 Animal의 하위 클래스까지 헣용
    T animal;

    public void put(T animal){
        this.animal = animal;
    }

    public T get(){
        return animal;
    }

    public static <U> U printAndReturn(U item){ // 제네릭 클래스와 별개로 독립적으로 사용
        System.out.println(item.getClass().getName());
        return item;
    }
}
