import Image from "next/image";
import React from "react";

const about = () => {
    return (
        <div className="mt-20 min-h-screen px-8 md:px-20 lg:px-[15rem]">
            <div className="text-4xl font-bold pt-2 text-center">ABOUT</div>
            <p className="text-justify pt-4 mb-5">
                Innovation and Entrepreneurship Development Cell (IEDC-SNGIST),
                earlier known as EDC@SNGIST, was established in the year of
                2014. It was formed with the aim of creating an eco-system,
                where students as well as teachers are encouraged and supported
                to develop innovative products, register start-ups, attain
                patents etc. Also activities like technical workshops,
                trainings, industrial visits, project and idea contests etc. are
                organised on a regular basis, by which students and faculty
                members are able to apply their technical capabilities and
                convert them into socially relevant products. IEDC-SNGIST was
                registered in Directorate of Industries and Commerce (DIC) (Reg.
                No. EDC/EKLM/ 07/14). In 2015 it was recognized as an approved
                IEDC by Kerala Start-up Mission earlier known as Technopark –
                Technology Business Incubator (Reg. No.
                T-TBI/2014-15/IEDC/SNGIST). SNGIST signed an MoU with KITCO Ltd
                in March 2016, with the aim of working together to promote
                entrepreneurial activities.
            </p>
            <div className="flex flex-col gap-8 pb-8">
                <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
                    <div className="text-justify pt-2 w-[600px] gap-2 flex flex-col">
                        <h2 className="text-2xl font-bold">Vision</h2>
                        <p>
                            To be globally recognized as a Centre of Excellence
                            for Research, Innovation, Entrepreneurship and
                            disseminating knowledge by providing inspirational
                            learning to produce professional leaders for serving
                            the society.
                        </p>
                    </div>
                    <div className="py-4 ">
                        <Image
                            src="/logo.svg"
                            width={600}
                            height={300}
                            alt="IEDC SNGIST logo"
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 pb-8">
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-center">
                    <div className="py-4 md:w-1/2">
                        <Image
                            src="https://i.ibb.co/nMbVync/About-9e41b265079e22a85b0a.jpg"
                            width={600}
                            height={300}
                            alt="IEDC SNGIST logo"
                            className="w-full"
                        />
                    </div>
                    <div className="text-justify pt-2 md:w-1/2 gap-2 flex flex-col">
                        <h2 className="text-2xl font-bold">Mission</h2>
                        <p>
                            <ul className="text-justify pt-2 list-disc list-inside flex flex-col gap-2">
                                <li>
                                    Ensuring students delight by meeting their
                                    aspirations through blended learning,
                                    corporate mentoring, professional grooming,
                                    flexible curriculum and healthy atmosphere
                                    based on co- curricular and extra-curricular
                                    activities.
                                </li>
                                <li>
                                    Providing infrastructure, renowned
                                    academicians and ideal environment for
                                    Research, Innovation, Consultancy and
                                    Entrepreneurship relevant to the society.
                                </li>
                                <li>
                                    Contributing for creation of healthy,
                                    vibrant and sustainable society by involving
                                    in Institutional Social Responsibility (ISR)
                                    activities like rural development, welfare
                                    of senior citizens, women empowerment,
                                    community service, health and hygiene
                                    awareness and environmental protection.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 pb-8">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="text-justify pt-2 md:w-1/2 gap-2 flex flex-col">
                        <h2 className="text-2xl font-bold">
                            Objectives of IEDC
                        </h2>
                        <p>
                            <ul className="text-justify pt-2 list-disc list-inside flex flex-col gap-2">
                                <li>
                                    To inculcate a culture of innovation-driven
                                    entrepreneurship through student projects.
                                </li>
                                <li>
                                    To act as an institutional mechanism for
                                    providing various services including
                                    information on all aspects of enterprise
                                    building to budding student entrepreneurs.
                                </li>
                                <li>
                                    To catalyze and promote the development of
                                    student knowledge-based enterprises and
                                    promote employment opportunities in
                                    innovative areas.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="py-4 md:w-1/2">
                        <Image
                            src="https://i.ibb.co/YN1KQSw/image.png"
                            width={600}
                            height={300}
                            alt="IEDC SNGIST logo"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about;
