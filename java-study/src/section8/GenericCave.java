package section8;

public class GenericCave<T> {
    T item;

    public void put(T item){
        this.item = item;
    }

    public T get(){
        return item;
    }
}
