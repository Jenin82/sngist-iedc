import Image from "next/image";
import Marquee from "@/components/Marquee/Marquee";

export default function Home() {
    return (
        <>
            <main className="hero min-h-screen overflow-x-hidden py-20 md:mt-10 bg-[url('/bg.svg')]">
                <div className="hero-content flex-col md:flex-row-reverse gap-10 md:gap-2 lg:gap-0 px-6 md:px-10 lg:px-0">
                    <div>
                        <div className="text-3xl md:text-6xl lg:text-7xl font-extrabold  text-center">
                            <span className="[&amp;::selection]:text-base-content brightness-150 contrast-150 [&amp;::selection]:bg-blue-700/20">
                                INNOVATION AND
                            </span>
                            <span className="inline-grid py-3">
                                <span
                                    className="pointer-events-none col-start-1 row-start-1 
								bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] 
								bg-clip-text blur-xl [transform:translate3d(0,0,0)] 
								[-webkit-text-fill-color:transparent] 
								before:content-[attr(data-text)] 
								[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                                    aria-hidden="true"
                                    data-text="ENTREPRENEURSHIP"
                                ></span>
                                <span
                                    className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 
								bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] 
								bg-clip-text [-webkit-text-fill-color:transparent] 
								[&amp;::selection]:bg-blue-700/20 
								[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                                >
                                    ENTREPRENEURSHIP
                                </span>
                            </span>
                            <span className="[&amp;::selection]:text-base-content brightness-150 contrast-150 [&amp;::selection]:bg-blue-700/20">
                                DEVELOPMENT CENTRE
                            </span>
                        </div>
                        <div className="flex flex-col gap-8 justify-center items-center py-8 mt-10">
                            <Image
                                src="/logo.svg"
                                width={500}
                                height={300}
                                alt="IEDC SNGIST logo"
                                className="max-w-[300px] md:max-w-[500px] lg:max-w-full"
                            />
                            <p className="text-center text-lg md:text-2xl lg:text-3xl font-extrabold">
                                <span className="[&amp;::selection]:text-base-content brightness-150 contrast-150 [&amp;::selection]:bg-blue-700/20">
                                    OUT OF THE WORLD THINKERS
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Marquee/>
        </>
    );
}