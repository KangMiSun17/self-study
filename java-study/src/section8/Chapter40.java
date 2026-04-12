package section8;

public class Chapter40 {
    static void main(String[] args) {
        // 제네릭의 장점
            // 1. 강력핳ㄴ 타입 체킹
            // 2. 번거로운 형변환 불필요
        GenericCave<Bear> bearCave = new GenericCave<>();
//        bearCave.put(new Pear()) // 강력한 타입 체킹
        bearCave.put(new Bear());

        GenericCave<Pear> pearCave = new GenericCave<>();
        pearCave.put(new Pear());

        Bear bear = bearCave.get(); // 번거로운 형변환 X
        bear.eatHoney();
    }
}
