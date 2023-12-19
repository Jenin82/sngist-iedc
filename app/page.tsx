import Image from "next/image";

export default function Home() {
    return (
        <main className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <Image
                    src="/hero.svg"
					width={800}
					height={800}
                    className="rounded-lg"
					alt="hero"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
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