import Product from "./Product";

function ProductView() {
  return (
    <div className="mb-0">
      <div className="flex flex-col">
        <h2 className="leading-tight text-[1.8rem] font-semibold	">
          THE RAZER DEATHADDER RANGE
        </h2>
        <p className="text-[1.2rem] leading-tight">
          Competitive gaming mice with an award-winning legacy of iconic
          ergonomics
        </p>
        <p className="place-self-end">
          View All{" "}
          <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
        </p>
      </div>
      <div className="flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductView;
