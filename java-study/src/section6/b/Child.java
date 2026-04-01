package section6.b;

import section6.a.Parent;

public class Child extends Parent {
    public void printParentFields() {
        System.out.println(publicNum);
        System.out.println(protectedNum);
//        System.out.println(defaultNum);
//        System.out.println(privateNum);
    }
}
