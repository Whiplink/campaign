import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-6 bg-white/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* <Badge variant="outline">
              New Release
              <ArrowDownRight className="ml-2 size-4" />
            </Badge> */}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-background">
              About us
            </h1>
            <p className="mb-8 max-w-xl text-background lg:text-xl">
              United Camnortenyo working together towards accountable,
              transparent and good governance for God's glory and honor.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/about">Read more</Link>
              </Button>
            </div>
          </div>
          <div className="relative bg-red-200">
            <Image
              src="https://static.wixstatic.com/media/11062b_fb45c576a59449ecb9eac57c75ad15cc~mv2.jpg/v1/fill/w_950,h_449,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Luxurious%20Office.jpg"
              alt="placeholder hero"
              // fill={true}
              width={950}
              height={800}
              // className="max-h-96 w-full rounded-md "
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
