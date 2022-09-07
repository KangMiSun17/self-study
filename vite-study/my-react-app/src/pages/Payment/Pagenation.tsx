import { css, styled } from "@twind/react";
import React from "react";
import { theme, tw } from "twind";

const Button = styled("button", {
  base: css`
    &:disabled {
      cursor: default;
    }

    &:hover {
      color: ${theme(`colors.primary`)};
    }

    img {
      &:hover {
        color: ${theme(`colors.primary`)};
      }
    }
  `,
  variants: {
    variant: { primary: `text-primary`, gray: `text-txt-3` },
  },
});

function Pagenation({
  page,
  totalPage,
  setPage,
}: {
  page: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pageUp = () => {
    setPage((prev) => prev + 1);
  };
  const pageDown = () => {
    setPage((prev) => prev - 1);
  };

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPage(Number(e.currentTarget.name));
  };

  return (
    <section
      className={tw`flex justify-center gap-[15px] px-[10px] text-[12px]`}
    >
      <Button onClick={() => pageDown()} disabled={page === 0}>
        <img className={tw`w-2`} src="./left-arrow.png" alt="이전 페이지" />
      </Button>
      <div className={tw`flex gap-[10px]`}>
        {Array(totalPage)
          .fill(0)
          .map((_, index) => (
            <Button
              key={index}
              onClick={changePage}
              name={String(index)}
              disabled={page === index}
              variant={page === index ? "primary" : "gray"}
            >
              {index + 1}
            </Button>
          ))}
      </div>
      <Button onClick={() => pageUp()} disabled={page === totalPage - 1}>
        <img className={tw`w-2`} src="./right-arrow.png" alt="다음 페이지" />
      </Button>
    </section>
  );
}

export default Pagenation;
