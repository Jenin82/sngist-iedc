import Image from "next/image";

export default function Home() {
    return (
        <main className="hero min-h-screen overflow-x-hidden">
            <div className="hero-content flex-col md:flex-row-reverse gap-10 md:gap-2 lg:gap-0 md:px-10 lg:px-0">
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
                    <div className="text-5xl font-extrabold ...">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                            SNGIST IEDC
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