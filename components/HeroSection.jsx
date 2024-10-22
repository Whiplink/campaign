import { Bell, PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-56 py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Badge
          variant="outline"
          className="mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5 bg-black/10 backdrop-blur"
        >
          <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
            <Bell className="size-4" />
          </span>
          <p className="truncate whitespace-nowrap text-background ">
            Join us in shaping a brighter future for our community!
          </p>
        </Badge>
        <h1 className="mb-6 text-4xl font-bold text-background leading-none tracking-tighter md:text-[7vw] lg:text-7xl">
          Together, we can make a difference.
        </h1>
        <div className="bg-black/20 w-fit p-2 rounded-md">
          <p className="max-w-2xl text-background md:text-[2vw] lg:text-xl backdrop-blur-sm">
            Welcome to the official campaign site of Elmer Panotes Alberto. With
            a passion for public service and a commitment to positive change,
            Elmer is dedicated to addressing the needs of our community. Join us
            on this journey to bring about meaningful progress.
          </p>
        </div>
        {/* <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
          <Button size={"lg"} className="w-full md:w-auto">
            Primary
          </Button>
          <Button size={"lg"} variant={"outline"} className="w-full md:w-auto">
            Secondary
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
