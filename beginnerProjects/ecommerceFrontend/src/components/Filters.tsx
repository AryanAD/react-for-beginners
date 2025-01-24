import { useState } from "react";

const Filters = ({
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
  selectedColor,
  setSelectedColor,
}) => {
  const categories = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
  ];
  const tags = ["New Arrival", "Best Seller", "Discount", "Popular"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <aside className="absolute top-0 left-0 w-[300px] min-h-screen p-6 ">
      <h2 className="mb-6 text-2xl font-bold text-emerald-600">Filters</h2>

      {/* Categories Filter */}
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold text-gray-700">Categories</h3>
        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-md ${
                selectedCategory === category
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 text-gray-700"
              } hover:bg-emerald-400 hover:text-white`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Filter */}
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold text-gray-700">Tags</h3>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 text-sm rounded-full ${
                selectedTag === tag
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 text-gray-700"
              } hover:bg-emerald-400 hover:text-white`}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Colors Filter */}
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold text-gray-700">Colors</h3>
        <div className="flex gap-4">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color
                  ? "border-emerald-500"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <div className="mt-10">
        <button
          className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          onClick={() => {
            setSelectedCategory(null);
            setSelectedTag(null);
            setSelectedColor(null);
          }}
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};

export default Filters;
