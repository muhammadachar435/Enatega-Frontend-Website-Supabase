import React, { useEffect, useState } from "react";
import { productboxes } from "./Product";
import { FaPlay } from "react-icons/fa6";
import { useProduct } from "./ProductProvider";
import Model from "../UIModel/model";

function Products() {
  const { dispatch } = useProduct();
  const { addItem } = useProduct();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [selectedProduct]);

  function ClearCart() {
    dispatch({ type: "ClearCart" });
  }

  function handleAdd(product) {
    const newItem = {
      id: product.id,
      title: product.title,
      img: product.img,
    };
    addItem(newItem);
    setSelectedProduct(product); // store clicked product only
  }

  return (
    <>
      {productboxes.map((product) => (
        <React.Fragment key={product.id}>
          <div className="bg-white rounded-md sm:mx-auto sm:w-full sm:max-w-[90%] sm:h-[300px] mymob:h-[340px] tablet:h-[370px] mb-10">
            <div className="section3 py-[12px] px-2 desktop:px-0 xll:h-[300px]">
              <img
                src={product.img}
                alt={product.title}
                className="sm:w-[250px] mymob:w-[295px] mymob:h-auto myiphone:w-[323px] tablet:w-[316px] tablet:h-[263px] desktop:w-[271px] xll:w-full xll:max-w-[323px] h-auto mx-auto"
              />
            </div>
            <div className="flex flex-col items-center space-y-2 tablet:space-y-2 tablet:items-start tablet:ml-4 desktop:ml-2 xll:ml-3">
              <p className="mt-2 text-xl text-[#101828] sm:text-center tablet:text-left font-semibold font-inter mymob:w-64 h-[22px] ">
                {product.id}. {product.title}
              </p>
              <p className="flex cursor-pointer items-center space-x-2 text-[#624DE3] font-inter tablet:ml-1">
                <button
                  onClick={() => handleAdd(product)}
                  className="cursor-pointer"
                >
                  Link Demo
                </button>
                <FaPlay />
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}

      {selectedProduct && (
        <Model
          closeup={() => {
            setSelectedProduct(null);
            ClearCart();
          }}
        >
          <div className="bg-[#fbfaff] tablet:mt-4 px-2 py-2 sm:w-[160px] mymob:w-[150px] desktop:w-[200px] mx-auto rounded-2xl">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="sm:w-full sm:max-w-[100px] mymob:w-full mymob:max-w-[150px] desktop:w-full desktop:max-w-[200px] h-auto  mx-auto "
            />
          </div>
          <p className="mt-2 text-2xl mx-auto text-center font-inter text-[#0F172A] font-semibold">
            {selectedProduct.title}
          </p>
          <p className="mt-2 font-roboto myiphone:w-full text-center tablet:w-[95%] tablet:h-auto desktop:w-[94%] desktop:text-center mx-auto text-[#475569]">
            {selectedProduct.text}
          </p>
        </Model>
      )}
    </>
  );
}

export default Products;
