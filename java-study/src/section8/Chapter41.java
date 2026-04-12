package section8;

public class Chapter41 {
    //    AnimalCave<Pear>    // 허용되지 않는 타입은 에러가 발생
    AnimalCave<Animal> animalCave = new AnimalCave<>();

    AnimalCave<Tiger> tigerCave = new AnimalCave<>();

    AnimalCave<Bear> bearCave = new AnimalCave<>();
}
