package section4;

import java.util.Objects;

public class Axe {
    String material;
    String status;

    public Axe(String material, String status) {
        this.material = material;
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Axe axe = (Axe) o;
        return Objects.equals(material, axe.material) && Objects.equals(status, axe.status);
    }
}
