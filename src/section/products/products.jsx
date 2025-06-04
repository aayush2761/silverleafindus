import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../essentials/productData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";

const ProductDetail = () => {
	const { productID } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [openSection, setOpenSection] = useState(null);
	const [startIndex, setStartIndex] = useState(0);
	
	const navigate = useNavigate();
	
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

	useEffect(() => {
		if (product && currentImageIndex !== null) {
			// If current image is before visible range
			if (currentImageIndex < startIndex) {
				setStartIndex(currentImageIndex);
			}
			// If current image is after visible range (considering 6 visible items)
			else if (currentImageIndex >= startIndex + 6) {
				setStartIndex(currentImageIndex - 5); // Show selected image as last visible
			}
		}
	}, [currentImageIndex, product]);

	if (loading) return <h2 className="text-center p-4">Loading...</h2>;

	if (!product) {
		return (
			<div className="p-4 text-center">
				<h2 className="text-2xl font-bold text-red-500">Product not found</h2>
				<button onClick={() => navigate("/")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" >
					Back to Products
				</button>
			</div>
		);
	}

	const toggleSection = (section) => {
		setOpenSection(openSection === section ? null : section);
	};

	const nextThumbnails = () => {
		if (startIndex + 6 < product.images.length) {
			setStartIndex(startIndex + 1);
		}
	};

	const previousThumbnails = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1);
		}
	};

	return (
		<>
			<main className="relative pt-[50px]">
				<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5 xs:mx-14 transition-all ease-in-out h-screen">
					<div className="w-full flex justify-center items-center max-h-[calc(100vh-2rem)]">
						<div className="relative group flex flex-col justify-center items-center mt-10 lg:mt-5 mb-10">
							<img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-fit max-h-[600px] max-w-[600px] object-cover shadow-md rounded-sm" />
							<button 
								onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1)} 
								className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-black p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 backdrop-blur-sm" 
							>
								<FontAwesomeIcon icon={faCircleArrowLeft} className="w-5 h-5" />
							</button>

							<button 
								onClick={() => setCurrentImageIndex(currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1)} 
								className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-black p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 backdrop-blur-sm" 
							>
								<FontAwesomeIcon icon={faCircleArrowRight} className="w-5 h-5" />
							</button>

							<div className="flex mt-4 gap-2 justify-center relative w-full max-w-[600px]">
								<button 
									onClick={previousThumbnails}
									className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 text-black p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 backdrop-blur-sm ${
										startIndex === 0 ? 'opacity-40 cursor-not-allowed hover:bg-white/90 hover:text-black hover:scale-100' : 'opacity-80 hover:opacity-100'
									}`}
									disabled={startIndex === 0}
								>
									<FontAwesomeIcon icon={faCircleArrowLeft} className="w-4 h-4" />
								</button>
								
								<div className="flex gap-2 overflow-hidden mx-12">
									<div className="flex gap-2 transition-transform duration-300" style={{ transform: `translateX(-${startIndex * 72}px)` }}>
										{product.images.map((img, index) => (
											<img 
												key={index} 
												src={img} 
												alt={`Thumbnail ${index + 1}`} 
												className={`w-16 h-16 object-cover cursor-pointer flex-shrink-0 transition-all duration-200 hover:shadow-lg rounded-sm ${
													index === currentImageIndex 
														? "border-2 border-black/80 shadow-md scale-105" 
														: "border border-gray-200 hover:border-black/50 hover:scale-105"
												}`}
												onClick={() => setCurrentImageIndex(index)}
											/>
										))}
									</div>
								</div>
								
								<button 
									onClick={nextThumbnails}
									className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 text-black p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 backdrop-blur-sm ${
										startIndex + 6 >= product.images.length ? 'opacity-40 cursor-not-allowed hover:bg-white/90 hover:text-black hover:scale-100' : 'opacity-80 hover:opacity-100'
									}`}
									disabled={startIndex + 6 >= product.images.length}
								>
									<FontAwesomeIcon icon={faCircleArrowRight} className="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>

					<div className="w-full flex-col justify-center items-center lg:mt-[100px] overflow-y-auto max-h-[calc(100vh-2rem)] break-words sm:mt-16 transition-all ease-in-out">
						<div className="flex flex-row justify-between items-center">
							<span>
								<h1 className="text-2xl md:text-3xl xl:text-4xl font-megante uppercase tracking-wider font-bold">{product.name}</h1>
								<p className="text-sm md:text-base lg:text-lg font-megante text-gray-500 mt-2">
									{product.category} - {product.brand}
								</p>
							</span>

							<span>
								<p className="text-xl md:text-2xl lg:text-3xl text-green-600 font-saudagar mt-4">
									{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(product.price)}
								</p>
							</span>
						</div>
								
						<div className="flex items-center gap-2 mt-1">
							<span className="text-yellow-500 font-megante">⭐ {product.reviews.rating}</span>
							<span className="text-gray-600 font-megante">({product.reviews.count} reviews)</span>
						</div>

						<p className="text-sm md:text-base lg:text-lg font-saudagar text-gray-500 mt-6">{product.description}</p>
						
						<button className="mt-6 bg-[#FED685] w-full hover:cursor-pointer  px-10 py-3 text-[#131313] font-megante capitalize md:px-6 md:py-3 hover:bg-amber-400 transition text-sm md:text-base" >
							buy now
						</button>

						<p className="text-xs md:text-sm text-gray-400 mt-3 text-center font-megante">{product.shipping_info}</p>

						<div className="mt-6 mb-6">
							{[
								{ label: "Features", content: product.features },
								{ label: "Materials", content: product.materials },
								{ label: "Dimensions", content: product.dimensions },
								{ label: "Product Care", content: product.productCare },
								{ label: "Styling Tips", content: product.stylingTips },
							].map(({ label, content }) => (
								<div key={label} className="border-b border-gray-200">
								<button
									onClick={() => toggleSection(label)}
									className="w-full py-4 flex justify-between items-center text-left font-megante hover:bg-gray-50 transition-all ease-in-out px-5"
								>
									<span className="text-base font-medium">{label}</span>
									<ChevronDown
									className={`w-5 h-5 transition-transform duration-200 ${
										openSection === label ? "rotate-180" : ""
									}`}
									/>
								</button>

								<div
									className={`overflow-hidden transition-all duration-200 ${
									openSection === label ? "max-h-96" : "max-h-0"
									}`}
								>
									<div className="pb-4 space-y-2 text-gray-700">
										{Array.isArray(content) ? (
											<ul className="list-disc pl-10 text-sm md:text-sm px-5 font-megante text-gray-600 space-y-1">
											{content.map((item, idx) => (
												<li key={idx}>{item}</li>
											))}
											</ul>
										) : (
											<p className="text-sm md:text-sm px-5 font-megante text-gray-400">
												{content}
											</p>
										)}
										</div>
									</div>
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
