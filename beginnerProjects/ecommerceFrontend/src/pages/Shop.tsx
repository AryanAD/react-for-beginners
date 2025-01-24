import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import Products from "../components/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=100");
    setProducts(res.data.products);
    setFilteredProducts(res.data.products); // Initialize filtered products
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory.toLowerCase()
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((product) =>
        product.tags?.includes(selectedTag)
      );
    }

    if (selectedColor) {
      filtered = filtered.filter((product) =>
        product.colors?.includes(selectedColor.toLowerCase())
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedTag, selectedColor, searchQuery, products]);

  return (
    <div className="flex flex-col">
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-row">
        <Filters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Products products={filteredProducts} />
      </div>
    </div>
  );
};

export default Shop;
