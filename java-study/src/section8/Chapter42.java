package section8;

public class Chapter42 {
    static void main(String[] args) {
        Bear bear = AnimalCave.printAndReturn(new Bear());
        Animal animal = AnimalCave.printAndReturn(new Animal());
        Pear pear = AnimalCave.printAndReturn(new Pear());

        NormalCave.printAndReturn(new Tiger());
    }
}
