package section6;

public class Chapter27 {
    static void main(String[] args) {
        Truck truck = new Truck("truck", 50, 1000);

        System.out.println(truck.name);
        System.out.println(truck.speed);
        System.out.println(truck.cargoWeightLimit);

        truck.print();
    }
}
