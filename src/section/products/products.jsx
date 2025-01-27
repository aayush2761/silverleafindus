import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../essentials/productData.json";

const ProductDetail = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dropdowns, setDropdowns] = useState({
    features: false,
    materials: false,
    dimensions: false,
    productCare: false,
    stylingTips: false,
  });

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      const foundProduct = products.find((item) => item.productID === productID);
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productID]);

  if (loading) return <h2 className="text-center p-4">Loading...</h2>;

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
        <main className="relative">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mr-10 ml-10">
            {/* Left Section - Images */}
            <div className="w-full max-h-[calc(100vh-2rem)] mt-20">
                <div className="relative group">
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-64 md:h-[550px] object-cover rounded-lg shadow-md"
                />
                {/* Arrows */}
                <button
                    onClick={() =>
                    setCurrentImageIndex(
                        currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1
                    )
                    }
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition hover:bg-black hover:text-white"
                >
                    ◀
                </button>
                <button
                    onClick={() =>
                    setCurrentImageIndex(
                        currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1
                    )
                    }
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition hover:bg-black hover:text-white"
                >
                    ▶
                </button>
                <div className="flex mt-4 gap-2 justify-center">
                    {product.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                        index === currentImageIndex ? "border-2 border-black" : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                    ))}
                </div>
                </div>
            </div>

            {/* Right Section - Scrollable Details */}
            <div className="w-full mt-[80px] overflow-y-auto max-h-[calc(100vh-2rem)] p-4 break-words ">
                <h1 className="text-2xl md:text-3xl font-saudagar font-bold">{product.name}</h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">
                {product.category} - {product.brand}
                </p>
                <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500">⭐ {product.reviews.rating}</span>
                <span className="text-gray-600">({product.reviews.count} reviews)</span>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-green-600 mt-4">
                ${product.price.toFixed(2)}
                </p>
                <p className="text-sm md:text-base text-gray-500 mt-2">{product.description}</p>

                {/* Add to Cart */}
                <button
                className="mt-6 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg w-full hover:bg-gray-800 transition text-sm md:text-base"
                >
                Add to Cart
                </button>
                <p className="text-xs md:text-sm text-gray-500 mt-2">{product.shipping_info}</p>

                {/* Dropdown Sections */}
                <div className="mt-6 font-megante">
                {[
                    { label: "Features", content: product.features },
                    { label: "Materials", content: product.materials },
                    { label: "Dimensions", content: product.dimensions },
                    { label: "Product Care", content: product.productCare },
                    { label: "Styling Tips", content: product.stylingTips },
                ].map(({ label, content }, index) => (
                    <div key={index} className="mb-2">
                    <button
                        onClick={() => toggleDropdown(label.toLowerCase().replace(" ", ""))}
                        className="w-full flex justify-between items-center bg-[#d3a76a] p-3 rounded-lg shadow-md text-left text-sm md:text-base"
                    >
                        {label}
                        <span className="text-lg">
                        {dropdowns[label.toLowerCase().replace(" ", "")] ? "−" : "+"}
                        </span>
                    </button>
                    {dropdowns[label.toLowerCase().replace(" ", "")] && (
                        <div className="p-4 bg-gray-50 border rounded-lg mt-2">
                        <p className="text-gray-600 text-sm md:text-base">{content}</p>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
            </div>
        </main>
    </>
  );
};

export default ProductDetail;
