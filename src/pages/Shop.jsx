import { Link } from 'react-router-dom';
import GeometricBackground from '../components/3d/GeometricBackground';
import { products } from '../data/products';

const Shop = () => {
    // Show a selection of products for the shop page
    const shopProducts = products.filter(p =>
        ['office-chair-1', 'chair-white', 'chair-blue', 'house-sofa-1', 'house-coffee-1', 'kitchen-stools-1'].includes(p.id)
    );
    return (
        <div className="relative min-h-screen pt-32 px-4 md:px-16 bg-[#fcfcfc] overflow-hidden" data-scroll-section>
            <GeometricBackground theme="light" />

            <div className="relative z-10" data-scroll data-scroll-speed="1">
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8 text-primary" data-scroll data-scroll-speed="2">Shop</h1>
                <p className="text-gray-500 mb-12" data-scroll data-scroll-speed="1.5">Explore our premium collection of furniture.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {shopProducts.map((product, index) => (
                        <Link
                            to={`/product/${product.id}`}
                            key={product.id}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                            data-scroll
                            data-scroll-speed={1 + (index * 0.1)}
                        >
                            <div className="h-64 w-full overflow-hidden relative bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-furnworld-gold transition-colors">{product.name}</h3>
                                    <span className="text-lg font-medium text-furnworld-brown">
                                        ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">Premium Finish • Solid Wood</p>

                                <div className="w-full py-3 px-6 bg-furnworld-dark text-white rounded-full font-bold text-center shadow-md transition-all duration-300 transform group-hover:bg-furnworld-gold group-hover:scale-[1.03] group-hover:shadow-lg active:scale-95">
                                    Buy Now
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
