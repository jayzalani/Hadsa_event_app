import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 ms:py:10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className=" flex flex-col justify-center gap-8">
          <h1 className="h1-bold"> Host, Connect, Celebrate your Hadsaa!!, on our platform.😊</h1>
          <p className="p-regular-20 md:p-regular-24">
            Book and learn helpfull tips from 5000+ mentors in world-class companies with our global community.
          </p>
          <Button size='lg' asChild className="button w-full sm:w-fit">
            <Link href="#events">
              Explore Now
            </Link>
          </Button>
        </div>
        <Image
        src="/assets/images/hero.png"
        alt="hero"
        width={1000}
        height={1000}
        className="max-h-[70VH] object-contain object-center 2xl:max-h-[50vh]"
        
        />

      </div>
    </section>
    <section id = 
    "events" className="wrapper my-8 flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">
           Trusted by <br /> Thousands of <span className="text-yellow-800">Events</span>
      </h2>
      <div className ="flex w-flex flex-col gap-5 md:flex-row">
        Search <br />
        Catogory filter

      </div>
    </section>
    </>
  );
}
