import { FaOpencart } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
const Products = ({ products }) => {
  return (
    <div className="absolute bottom-0 right-0 w-[calc(100vw-300px)] top-16 from-slate-50 to-gray-50 bg-gradient-to-br flex flex-col items-center rounded-tl-3xl">
      <div className="w-[90%] ">
        <h1 className="my-3 ml-3 text-3xl font-bold underline text-emerald-500">
          Products
        </h1>
        <div className="flex flex-wrap justify-start gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border                                                                                                         rounded-lg shadow-sm drop-shadow-md border-emerald-50 w-[23%]"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="object-fill w-full h-48 rounded-t-lg"
              />
              <span className="absolute top-0 right-0 px-2 py-4 rounded-tr-lg hover:text-red-600 text-sky-600 bg-sky-100">
                <span>
                  <FaOpencart />
                </span>
              </span>
              <div className="flex flex-col items-center p-2">
                <h2 className="text-sm font-bold text-center text-emerald-400">
                  {product.title}
                </h2>
                <p className="max-w-[90%] pt-1 text-sm text-justify text-gray-500">
                  {product.description.slice(0, 90)}...
                </p>
                <div className="flex justify-between w-full pt-3">
                  <p className="px-2 py-1 text-sm text-center rounded-full text-lime-600 bg-lime-50">
                    ${product.price}
                  </p>

                  <span className="flex flex-row items-center gap-1 text-orange-400">
                    {product.rating}
                    <BsFillStarFill />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
