import { apply, css, styled, theme, tw } from "@twind/react";
import { useEffect, useState } from "react";
import { getHoldingProduct } from "../../api/product.api";

interface HoldingProduct {
  amount: number;
  cremaoUserId: number;
  deleteYn: "Y" | "N";
  endDate: string;
  id: number;
  orderId: string;
  paymentDate: string;
  paymentMethod: string;
  paymentType: "ONCE | SUBSCRIBE ";
  productId: number;
  productName: string;
  quantity: number;
  remainingQuantity: number;
  startDate: string;
  subscribeYn: "Y" | "N";
}

const ProductsTable = styled("table", {
  base: css`
    ${apply`w-full text-center`}
    th, td {
      padding: 20px 0;
    }
    th {
      background-color: ${theme(`colors.bg-2`)};
      color: ${theme(`colors.txt-3`)};
      font-weight: 500;
    }
    tbody > tr {
      border-bottom: 1px solid ${theme(`colors.line-1`)};
    }
  `,
});

function PaymenHistoryPage() {
  const getHoldingProductData = async () => {
    const res = await getHoldingProduct();
    console.log(res);
  };

  const [holdingProduct, ssetHoldingProduct] = useState({
    productName: "LITE",
    startData: "2022.07.29",
    endDate: "2022.08.28",
    paymentType: "ONCE",
    remainingQuantity: 200,
  });

  const [productItems, setProductItems] = useState([
    {
      productName: "LITE",
      paymentType: "ONCE",
      approvedAt: "2022.07.25",
      startDate: "2022.07.29",
      endDate: "2022.08.28",
      paymentMethod: "카드",
      amount: 200,
      status: "DONE",
    },
    {
      productName: "LITE",
      paymentType: "ONCE",
      approvedAt: "2022.07.25",
      startDate: "2022.07.29",
      endDate: "2022.08.28",
      paymentMethod: "무통장입금",
      amount: 200,
      status: "FAILED",
    },
  ]);

  useEffect(() => {
    getHoldingProductData();
  });

  return (
    <div className={tw`flex flex-col items-center`}>
      <div
        className={tw`w-9/12 h-48 border-b-1 border-solid border-line-1) flex justify-between items-center px-3`}
      >
        <div className={tw`flex`}>
          <div
            className={tw`text-white h-24 w-24 bg-primary-3 rounded-2xl flex items-center justify-center mr-6`}
          >
            {holdingProduct.paymentType === "ONCE" ? "선결제" : "정기결제"}
          </div>
          <div className={tw`flex flex-col justify-center`}>
            <div>
              <span className={tw`text-txt-2 mr-5`}>상품명</span>
              <span>{holdingProduct.productName}</span>
            </div>
            <div className={tw`mt-2`}>
              <span className={tw`text-txt-2 mr-5`}>이용 기간</span>
              <span>{`${holdingProduct.startData} ~ ${holdingProduct.endDate}`}</span>
            </div>
            <div className={tw`mt-2`}>
              <span className={tw`text-txt-2 mr-5`}>남은 건수</span>
              <span>{holdingProduct.remainingQuantity}건</span>
            </div>
          </div>
        </div>
        <button
          className={tw`text-primary border(1 solid primary) rounded-lg w-48 h-12`}
        >
          상품 구매하기
        </button>
      </div>
      <div
        className={tw`w-9/12 mt-20 border(1 solid line-1) rounded-lg shadow-md p-8`}
      >
        <ProductsTable>
          <thead>
            <th>상품명</th>
            <th>결제일시</th>
            <th>이용기간</th>
            <th>결제 수단</th>
            <th>결제 금액(부가세 포함)</th>
            <th>결제상태</th>
          </thead>
          <tbody>
            {productItems.map((item) => (
              <tr>
                <td>
                  {item.paymentType === "ONCE" ? "선결제" : "정기결제"}
                  {item.productName}
                </td>
                <td className={tw`text-txt-3`}>{item.approvedAt}</td>
                <td>{`${holdingProduct.startData} ~ ${holdingProduct.endDate}`}</td>
                <td>{item.paymentMethod}</td>
                <td>{item.amount}</td>
                <td>
                  <div className={tw`text-white bg-primary rounded-lg py-1`}>
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductsTable>
      </div>
    </div>
  );
}

export default PaymenHistoryPage;
