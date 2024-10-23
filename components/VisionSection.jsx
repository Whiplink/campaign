import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="py-24 px-4 md:px-6 relative bg-gradient-to-r from-white/50 to-white">
      <Image
        src={
          "https://static.wixstatic.com/media/abe54f70a9504871817b48a172824eac.jpg/v1/fill/w_980,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/abe54f70a9504871817b48a172824eac.jpg"
        }
        fill={true}
        sizes="500px"
        className="w-full object-cover object-top pointer-events-none absolute z-[-1] "
        // width={500}
        // height={500}
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 w-full h-full">
          <div className="max-w-[500px] max-h-[500px] w-full h-full aspect-square relative mx-auto">
            <Image
              src={
                "https://static.wixstatic.com/media/9990b9_d98ff47e56824dbdb9254db304a51347~mv2.png/v1/crop/x_42,y_7,w_599,h_847/fill/w_423,h_599,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/viber_image_2021-10-26_11-16-56-138_edited.png"
              }
              fill={true}
              sizes="500px"
              className="w-full object-cover object-center pointer-events-none"
              // width={500}
              // height={500}
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-foreground">
              Vision and Values
            </h1>
            <p className="mb-8 max-w-xl text-foreground lg:text-xl">
              Our vision is to build a community where everyone has access to
              quality education, healthcare, and economic opportunities. We
              believe in integrity, inclusivity, and sustainability as guiding
              principles for our campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
