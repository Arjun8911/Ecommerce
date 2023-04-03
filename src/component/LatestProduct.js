import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// Import Swiper ....
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// end Import Swiper ....

export default function LatestProducts() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2>Recently added products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {product.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard
                      thumbnail={product.image}
                      rating={product.rating}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                      id={product.id}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
