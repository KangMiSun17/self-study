import { apply, css, styled, theme, tw } from "@twind/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getHoldingProduct, getOrderHistory } from "../../api/product.api";
import Pagenation from "./Pagenation";

interface HoldingProduct {
  amount: number;
  cremaoUserId: number;
  deleteYn: "Y" | "N";
  endDate: string;
  id: number;
  orderId: string;
  paymentDate: string;
  paymentMethod: string;
  paymentType: "ONCE" | "SUBSCRIBE";
  productId: number;
  productName: string;
  quantity: number;
  remainingQuantity: number;
  startDate: string;
  subscribeYn: "Y" | "N";
}

interface OrderHistory {
  amount: number;
  approvedAt: string;
  endDate: string;
  orderId: string;
  paymentMethod: string;
  paymentType: "ONCE" | "SUBSCRIBE";
  productName: string;
  startDate: string;
  status:
    | "CANCELED"
    | "DONE"
    | "FAILED"
    | "PENDING"
    | "REFUNDED"
    | "WAITING_FOR_DEPOSIT"
    | "WAITING_FOR_DEPOSIT_CONFIRM"
    | "WAITING_REFUND";
  useCoupon: "Y" | "N";
  userId: string;
}

const ProductsTable = styled("table", {
  base: css`
    width: 100%;
    text-align: center;
    td {
      padding: 17px 10px;
    }
    th {
      padding: 15px 10px;
      font-size: 15px;
      background-color: ${theme(`colors.bg-2`)};
      color: ${theme(`colors.txt-3`)};
      font-weight: 500;
    }
    tbody > tr {
      font-size: 14px;
      border-bottom: 1px solid ${theme(`colors.line-1`)};
    }
  `,
});

function PaymenHistoryPage() {
  const [page, setPage] = useState(0);

  const changeDate = (date: string | undefined) => {
    if (date !== undefined) {
      const arr = date.split("-");
      const year = arr[0];
      const month = arr[1];
      const day = arr[2];
      return `${year}.${month}.${day}`;
    }
  };

  const { isLoading, data: holdingProduct } = useQuery<HoldingProduct, Error>(
    ["holdingProduct"],
    () => getHoldingProduct().then((res) => res.data)
  );

  const { data: orderHistory } = useQuery(["orderHistory", page], () =>
    getOrderHistory(page, 5).then((res) => res.data)
  );

  if (isLoading) return <></>;

  return (
    <section className={tw`flex flex-col items-center gap-[80px] mt-[60px]`}>
      <div
        className={tw`w-9/12 h-[261px] flex flex-col items-center gap-[15px]`}
      >
        <div
          className={tw`w-full flex border-b(1 solid) border-black gap-[30px] text-[28px] pb-[20px] font-bold`}
        >
          결제 내역
        </div>
        <div
          className={tw`w-full flex justify-between items-center gap-[30px] py-10 px-5 border-b-1 border-line-1`}
        >
          <div className={tw`flex gap-[30px]`}>
            <div
              className={tw`text-white text-[22px] font-medium h-[120px] w-[120px] bg-primary-3 rounded-2xl flex items-center justify-center`}
            >
              {holdingProduct?.paymentType === "ONCE" ? "선결제" : "정기결제"}
            </div>
            <div className={tw`flex flex-col justify-center gap-[15px]`}>
              <div className={tw`flex gap-2s`}>
                <span className={tw`text-txt-2 mr-5 w-16 inline-block`}>
                  상품명
                </span>
                <span className={tw`font-medium`}>
                  {holdingProduct?.productName}
                </span>
              </div>
              <div className={tw`flex gap-2s`}>
                <span className={tw`text-txt-2 mr-5 w-16 inline-block`}>
                  이용 기간
                </span>
                <span className={tw`font-medium`}>{`${changeDate(
                  holdingProduct?.startDate
                )} ~ ${changeDate(holdingProduct?.endDate)}`}</span>
              </div>
              <div className={tw`flex gap-2s`}>
                <span className={tw`text-txt-2 mr-5 w-16 inline-block`}>
                  남은 건수
                </span>
                <span className={tw`font-medium`}>
                  {holdingProduct?.remainingQuantity}건
                </span>
              </div>
            </div>
          </div>
          <button
            className={tw`text-primary border(1 solid primary) rounded-lg w-[180px] h-12`}
          >
            상품 구매하기
          </button>
        </div>
      </div>
      <div
        className={tw`w-9/12 border(1 solid line-1) rounded-2xl shadow-md p-10 flex flex-col items-center gap-[30px]`}
      >
        <ProductsTable>
          <thead>
            <tr>
              <th>상품명</th>
              <th>결제일시</th>
              <th>이용기간</th>
              <th>결제 수단</th>
              <th>결제 금액(부가세 포함)</th>
              <th>결제상태</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory?.content?.map((item: OrderHistory, index: number) => (
              <tr key={index}>
                <td className={tw`font-medium`}>
                  {item.paymentType === "ONCE" ? "선결제" : "정기결제"}
                  {item.productName}
                </td>
                <td className={tw`text-txt-3`}>
                  {item.approvedAt !== null &&
                    changeDate(item?.approvedAt.split("T")[0])}
                </td>
                <td>
                  {(item.startDate || item.endDate !== null) &&
                    `${changeDate(item.startDate)} ~ ${changeDate(
                      item.endDate
                    )}`}
                </td>
                <td>{item.paymentMethod}</td>
                <td>{item.amount.toLocaleString()}</td>
                <td>
                  <div
                    className={tw`text-white text-xs font-medium bg-primary rounded-lg py-[8px] px-[4px] inline`}
                  >
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductsTable>
        {orderHistory?.totalElements > 10 && (
          <Pagenation
            page={page}
            setPage={setPage}
            totalPage={orderHistory?.totalPages}
          />
        )}
      </div>
    </section>
  );
}

export default PaymenHistoryPage;
