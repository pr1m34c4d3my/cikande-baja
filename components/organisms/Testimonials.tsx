import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../molecules/ReviewCard";
import Sejin from "../../public/img/profile/sejin.png";

type Testimonials = {
  text: string;
  name: string;
  image: any;
  title: string;
};

type Props = {};

const Testimonials = ({}: Props) => {
  const [testi, setTesti] = useState<Testimonials[]>([]);

  const data = () => {
    let list: Testimonials[] = [
      {
        text: `Untuk keramik, ROMAN is the best, untuk konstruksi bangunan besi - baja kami memilih PT. CIKANDE INDOBAJA MANDIRI sebagai mitra bisnis yang baik.

        Stokist besi - baja yang tergolong lengkap proses pengiriman barangnya pun sangat cepat dan tepat waktu. (Ini yang kami utamakan)
        
        Harga yang flexible dan bersaing dengan kompetitor juga dalam segi pelayanan PT. CIM sangat ramah dan asik.
        
        Sukses selalu untuk PT. CIKANDE INDOBAJA MANDIRI`,
        name: "Eka Prasetia",
        title: "Purchasing Dept - PT. SATYARAYA KERAMINDOINDAH",
        image: "https://roman.co.id/wp-content/uploads/2022/02/LOGOROMAN.jpg",
      },
      {
        text: `Segala permintaan yang kami butuhkan sangat fast respon dan mengesankan sehingga kami tidak perlu menunggu lama dalam proses pengiriman kebutuhan material besi - baja.

        Pelayanan juga sangat baik dana ramah juga harga yang diberikan relatif cukup memuaskan.
        
        Sukses selalu untuk PT. CIKANDE INDOBAJA MANDIRI`,
        name: "Agus Winarto",
        title: "Head HRD - PT. SEJIN CIPTA BANGUN",
        image:
          "https://cakapinterview.com/wp-content/uploads/2021/10/ck-PT-Parkland-World-Indonesia-696x419.jpg",
      },
      {
        text: `PT. CIM dikenal sebagai penyedia bahan besi baja dan bahan bangunan yang lengkap di daerah Cikande, pelayanan cepat & service yang maximal juga pengiriman tepat waktu telah kami rasakan di perusahaan kami.

        Tokonya strategis & tidak jauh dari kawasan industri estate di Cikande dan Workshop kami.
        
        Harapan kami PT. CIM terus berkembang & berinovasi sesuai perkembangan zaman, dalam penyedia produk besi - baja yang lebih lengkap lagi.`,
        name: "Christin Nobiantari",
        title: "Manager - PT. HANJIN KONTRUKSI",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65lI773EOWb-_jm-kdyn3n21J0T454NlOG73no1sDmFNP0WYq7UqexqXGlsU6lPf9HQ&usqp=CAU",
      },
    ];
    setTesti(list);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="w-full items-center p-5 lg:p-0 flex flex-col mx-auto gap-2 justify-between">
      <h1 className="text-[32px] font-bold mb-10">Testimonial</h1>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-[320px] bg-white rounded-xl  text-black"
      >
        {testi.map((v: Testimonials, index) => {
          return (
            <SwiperSlide className="py-5" key={index}>
              <ReviewCard
                data={[
                  {
                    text: v.text,
                    name: v.name,
                    image: v.image,
                    title: v.title,
                  },
                ]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
