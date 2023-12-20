import Image from "next/image";

export default function Home() {
    return (
        <main className="hero min-h-screen overflow-x-hidden">
            <div className="hero-content flex-col md:flex-row-reverse">
                <Image
                    src="/hero.svg"
                    width={800}
                    height={800}
                    className="rounded-lg max-w-[300px] md:max-w-full"
                    alt="hero"
                />
                <div>
                    <div className="flex items-center gap-5">
                        <Image
                            src="/logo2.svg"
                            width={150}
                            height={150}
                            alt="logo"
                            className="m-[-1rem]"
                        />
                        <h1 className="text-5xl font-bold">SNGIST IEDC</h1>
                    </div>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </main>
    );
}