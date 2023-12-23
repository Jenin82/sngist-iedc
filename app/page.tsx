import Image from "next/image";

export default function Home() {
    return (
        <main className="hero min-h-screen overflow-x-hidden">
            <div className="hero-content flex-col md:flex-row-reverse gap-10 md:gap-2 lg:gap-0 px-6 md:px-10 lg:px-0">
                <Image
                    src="/hero.svg"
                    width={700}
                    height={700}
                    className="max-w-[300px] md:max-w-[50%] lg:max-w-full"
                    alt="hero"
                />

                <div>
                    <Image
                        src="/logo.svg"
                        width={300}
                        height={300}
                        alt="IEDC SNGIST logo"
                        className="max-w-[300px] md:max-w-full pb-8"
                    />
                    <div className="text-8xl font-extrabold">
                        <span className="inline-grid">
                            <span
                                className="pointer-events-none col-start-1 row-start-1 
								bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] 
								bg-clip-text blur-xl [transform:translate3d(0,0,0)] 
								[-webkit-text-fill-color:transparent] 
								before:content-[attr(data-text)] 
								[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                                aria-hidden="true"
                                data-text="SNGIST IEDC"
                            ></span>
                            <span
                                className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 
								bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] 
								bg-clip-text [-webkit-text-fill-color:transparent] 
								[&amp;::selection]:bg-blue-700/20 
								[@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                            >
                                SNGIST IEDC
                            </span>
                        </span>
                    </div>
                    <p className="py-10 md:py-6 text-justify">
                        <span className="font-bold">Grow Your Ideas: </span> A
                        Place to Create, Connect, and Launch Your
                        Entrepreneurial Dreams into Success. Unleash Your
                        Potential with Expert Guidance and a Thriving Community
                        of Innovators.
                    </p>
                    <button className="btn btn-primary">Join us</button>
                </div>
            </div>
        </main>
    );
}