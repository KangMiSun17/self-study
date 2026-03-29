package section4;

public class Chapter20 {
    static void main(String[] args) {
//        int[] numbers = new int[3];
//        numbers[0] = 10;
//        numbers[1] = 20;
//        numbers[2] = 30;
        int[] numbers = {10, 20, 30};

//        System.out.println(numbers[0]);
//        System.out.println(numbers[1]);
//        System.out.println(numbers[2]);
        System.out.println("for문");
        for (int i = 0; i < numbers.length; i++) {
            // 인덱스 직접 다룰 수 잇음 -> 인덱스를 이용한 정교한 작업 가능
            // 배열 요소 변경 가능
            if (i % 2 == 0) {
                numbers[i] = 77;
                System.out.println(numbers[i]);
            }
        }

        System.out.println("향상된 for문"); // for-each문 : 컬렉션이나 배열의 요소들을 순차적으로 접근할 수 있는 더 간결한 버전의 for문
        // 인덱스 직접 다룰 수 없음 -> 모든 요소 순회 / 간결핳ㄴ 코드, 높은 가독성
        // 배열 요소 변경 불가
        for (int number : numbers) {
            System.out.println(number);
        }
    }
}
