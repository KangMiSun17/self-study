package section8;

public class Chapter39 {
    static void main(String[] args) {
        // ObjectCave가 가진 문제점
            // 1. 낮은 타입 안전성
            // 2. 번거로운 형변환
        ObjectCave objectCave = new ObjectCave();   // 오직 Bear만 넣기로 약속!
//        Pear pear = new Pear();
//        objectCave.put(pear);

        Bear bear = new Bear();
        objectCave.put(bear);   // 들어간건 Bear인데
        Object object = objectCave.get();   // 나오는건 Object
//        object.getHoney();

        if(object instanceof Bear){
            Bear b = (Bear) object;
        } else {
            Pear p = (Pear) object;
        }
        Bear downCastingBear = (Bear) object;
        downCastingBear.eatHoney();
    }
}
