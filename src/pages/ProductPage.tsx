
import {
  PhotoIcon,
  TrashIcon,
  PencilIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import type { Product } from "my-types";
import { getAllProducts } from "../api/productapi";

const SortIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m8 15 4 4 4-4m0-6-4-4-4 4"
    />
  </svg>
);

const ProductPage: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((products:Product[]) => {
      setProducts(products);
      console.log(products);
    });
  }, []);

  return (
    <div className="p-4">
      <nav className="bg-white border border-gray-200 rounded-lg shadow-sm">

        {/* Header */}
        <div className="border-b border-blue-200 bg-blue-50 px-4 py-3 flex items-center gap-2">
          <ShoppingCartIcon className="h-4 w-4 text-blue-700" />
          <p className="text-sm font-semibold text-blue-900">
            All Products
          </p>
        </div>

        {/* Filter */}
        <div className="px-4 py-4 space-y-3">
          <h2 className="text-sm font-semibold text-gray-900">Filter</h2>

          <div className="flex flex-wrap gap-3 items-end">

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Title
              </label>
              <input
                className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                type="text"
                placeholder="Title"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Description
              </label>
              <input
                className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                type="text"
                placeholder="Description"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Category
              </label>
              <select className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>

            <div>
              <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                Filter
              </button>
            </div>

          </div>
        </div>

        {/* Results */}
        <div className="px-4 py-4 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-gray-900">Results</h2>
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
              NEW PRODUCT
            </button>
          </div>

          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table id="filter-table" className="min-w-full text-sm">

              <thead className="bg-gray-50 text-gray-600">
                <tr className="border-b border-gray-200">
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      #
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    Image
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      Title
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      Description
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      Price
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      Disc.%
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      Rating
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    <span className="flex items-center gap-1">
                      Stock
                      <SortIcon className="h-4 w-4 text-gray-400" />
                    </span>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    Modify
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {products.length === 0 ? (
                  <tr>
                    <td
                      className="px-3 py-6 text-center text-sm text-gray-500"
                      colSpan={10}
                    >
                      No products found.
                    </td>
                  </tr>
                ) : (
                  products.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900">
                        {index + 1}
                      </td>

                      <td className="px-3 py-3 text-center text-gray-700">
                        <PhotoIcon
                          className="mx-auto h-4 w-4 text-gray-400"
                        />
                      </td>

                      <td className="px-3 py-3">
                        <button className="text-blue-600 hover:underline text-sm font-medium">
                          {product.title}
                        </button>
                      </td>

                      <td className="px-3 py-3 text-sm text-gray-600">
                        {product.description}
                      </td>

                      <td className="px-3 py-3 text-gray-700">
                        {product.price.toFixed(2)}
                      </td>
                      <td className="px-3 py-3 text-gray-700">
                        {product.discountPercentage.toFixed(1)}
                        %
                      </td>
                      <td className="px-3 py-3 text-gray-700">
                        {product.rating}
                      </td>
                      <td className="px-3 py-3 text-gray-700">
                        {product.stock}
                      </td>

                      {/* Edit */}
                      <td className="px-3 py-3 text-center">
                        <button
                          onClick={() =>
                            window.confirm(
                              `Save the changes for ${product.title}?`,
                            )
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      </td>

                      {/* Delete */}
                      <td className="px-3 py-3 text-center">
                        <button
                          onClick={() =>
                            window.confirm(
                              `Delete the product "${product.title}"?`,
                            )
                          }
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-3 font-medium text-gray-900">1</td>

                  <td className="px-3 py-3 text-center text-gray-700">
                    <PhotoIcon className="mx-auto h-4 w-4 text-gray-400" />
                  </td>

                  <td className="px-3 py-3">
                    <button className="text-blue-600 hover:underline text-sm font-medium">
                      Title
                    </button>
                  </td>

                  <td className="px-3 py-3 text-sm text-gray-600">
                    Some description
                  </td>

                  <td className="px-3 py-3 text-gray-700">12.34</td>
                  <td className="px-3 py-3 text-gray-700">3.4</td>
                  <td className="px-3 py-3 text-gray-700">5</td>
                  <td className="px-3 py-3 text-gray-700">36</td>

                  {/* Edit */}
                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => window.confirm("Save the changes?")}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                  </td>

                  {/* Delete */}
                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => window.confirm("Delete the product?")}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default ProductPage;
