import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import ProductCard from "../../components/molecules/ProductCard";
import TopMenu from "../../components/molecules/TopMenu";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductSlider from "../../components/molecules/ProductSlider";
import Footer from "../../components/organisms/Footer";
import TableBody from "../../components/molecules/table/TableBody";

type Props = {};

const graphcms = new GraphQLClient(
  "https://ap-southeast-2.cdn.hygraph.com/content/clavgu89u2wfb01t4dyh4grkz/master"
);

const ALL = gql`
  {
    categories {
      id
      categoryTitle
      categorySlug
    }
    sliders {
      id
      sliderImage {
        url
      }
    }
    products(first: 10) {
      productPhoto1 {
        url
      }
      productPhoto2 {
        url
      }
      category {
        categoryTitle
      }
      tag {
        title
      }
      productTitle
      productDescription
      homeDescription
      productSlug
      stock
      deliveryDate
      deliveryArea
      fungsiDanPengukuran {
        html
      }
      productType
      productSize
      productDetail
    }
  }
`;

const QUERY = gql`
  query product($slug: String!) {
    product(where: { productSlug: $slug }) {
      id
      productTitle
      productSlug
      productDescription
      deliveryDate
      deliveryArea
      productType
      productSize
      productDetail
      fungsiDanPengukuran {
        html
      }
      category {
        id
        categoryTitle
        categorySlug
      }
      productPhoto1 {
        id
        url
      }
      productPhoto2 {
        id
        url
      }
    }
  }
`;

const SLUGLIST: string = gql`
  {
    products {
      productSlug
    }
  }
`;

export async function getStaticPaths() {
  const { products }: any = await graphcms.request(SLUGLIST);
  return {
    paths: products.map((product: any) => ({
      params: { slug: product.productSlug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug: string = params.slug;
  const data: any = await graphcms.request(QUERY, { slug });
  const product: string = data.product;
  const { categories, products, sliders } = await graphcms.request(ALL);
  return {
    props: {
      categories,
      product,
      products,
    },
    revalidate: 10,
  };
}

const ProductPost = ({ categories, product, products }: any) => {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;
  console.log(URL);
  return (
    <div className="bg-fixed bg-mainBg">
      <Head>
        <title>Cikande Indobaja Mandiri | Produk</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={`Produk ${product.productTitle} dari Cikande Indobaja Mandiri`}
        />
        <meta property="og:description" content={product.productDescription} />
        <meta property="og:url" content={URL} />
        <meta
          property="og:image"
          itemProp="image"
          content={`${product.productPhoto1.url}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>

      {/* HEADER Start */}
      <div className="w-full bg-white">
        <TopMenu />
      </div>

      <div className="bg-[#575757]">
        <MainNavigation />
      </div>

      {/* Category Menu */}
      <div className="bg-[#F9F9F9] w-full">
        <ul className="flex gap-10 max-w-[1170px] mx-auto justify-center items-center py-3">
          {categories.map((category: any, index: number) => {
            return (
              <li
                key={index}
                className="lg:text-[14px] lg:block hidden font-medium hover:text-secondary hover:scale-105 transition-all"
              >
                <CategoryMenu
                  categoryList={[
                    {
                      id: category.id,
                      title: category.categoryTitle,
                      link: category.categorySlug,
                    },
                  ]}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* HEADER end */}

      <div className="flex flex-row max-w-[1170px] my-5 mx-auto justify-between">
        <nav>
          <ul className="flex gap-2">
            <Link href="/">
              <li className="text-faded hover:text-black">
                Homepage <span className="text-faded hover:text-faded">/</span>{" "}
              </li>
            </Link>
            <Link href={/category/ + product.category.categorySlug}>
              <li>{product.category.categoryTitle + " " + "/" + " "}</li>
            </Link>
            <Link href={product.productSlug}>
              <li>{product.productTitle}</li>
            </Link>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:max-w-[1170px] gap-10 my-5 mx-auto justify-center">
        <div className="flex flex-col lg:w-6/12">
          <figure>
            <Image
              src={product.productPhoto1.url}
              alt="#"
              width={569}
              height={436}
            />
          </figure>
        </div>
        <div className="flex flex-col bg-white gap-5 p-2 lg:w-6/12 lg:p-5 rounded-lg border-2">
          <h1 className="text-[32px] font-bold">{product.productTitle}</h1>
          <p>{product.productDescription}</p>
          <ul className="mt-10 flex flex-col">
            <li className="text-faded">
              Kategori:{" "}
              <span className="text-black ml-5">
                {product.category.categoryTitle}
              </span>{" "}
            </li>
            <li className="text-faded">
              Pengiriman:{" "}
              <span className="text-black ml-5">{product.deliveryDate}</span>{" "}
            </li>
            <li className="text-faded">
              Area:{" "}
              <span className="text-black ml-5">{product.deliveryArea}</span>{" "}
            </li>
          </ul>
          <Link
            href={`https://wa.me/6282353320182?text=Halo%20admin%20Cikande%20Indobaja%20Mandiri%2C%20saya%20ingin%20membeli%20produk%20${product.productTitle}.%0A%0ALink:%20${URL}%0A%0ATerima%20kasih.`}
            target="_blank"
          >
            <button className="w-[140px] h-[50px] bg-main rounded-xl hover:bg-white hover:scale-110 hover:text-main transition-all text-white font-bold mt-5">
              Beli Produk
            </button>
          </Link>
          <div className="mt-5">
            <h2 className="text-[28px] font-bold">Deskripsi</h2>
            <div className="bg-main w-[200px] h-[2px]"></div>
          </div>
          <div>
            <span
              className="flex flex-col gap-3"
              dangerouslySetInnerHTML={{
                __html: product.fungsiDanPengukuran.html,
              }}
            ></span>
          </div>
          <table>
            <thead className=" border-b-2">
              <tr>
                <td className="py-2">Tipe</td>
                <td className="py-2">Ukuran</td>
                <td className="py-2">Detail</td>
              </tr>
            </thead>
            <TableBody
              data={[
                {
                  type: product.productType,
                  size: product.productSize,
                  detail: product.productDetail,
                },
              ]}
            />
          </table>
        </div>
      </div>

      <div className="flex justify-between max-w-[1170px] lg:p-0 p-2 my-5 mx-auto font-bold">
        <h3>Produk Lainnya</h3>
        <Link href="/product">
          <h3>Lihat Lebih Banyak</h3>
        </Link>
      </div>

      <div className="w-full  p-2">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 1000,
          }}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className=" flex gap-5 lg:hidden "
        >
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <ProductSlider
                key={index}
                productTitle={product.productTitle}
                homeDescription={product.homeDescription}
                productSlug={product.productSlug}
                productPhoto1={product.productPhoto1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:flex w-full justify-center">
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="max-w-[1170px] h-[500px]"
        >
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <ProductCard
                key={index}
                productTitle={product.productTitle}
                homeDescription={product.homeDescription}
                productSlug={product.productSlug}
                productPhoto1={product.productPhoto1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default ProductPost;
