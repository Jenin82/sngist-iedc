import Image from "next/image";
import React from "react";

const about = () => {
    return (
      <div className="mt-20 min-h-screen px-8 md:px-20 lg:px-[15rem]">
        <div className="text-4xl font-bold pt-2 text-center">ABOUT</div>
        <p className="text-justify pt-4 mb-5">
          Innovation and Entrepreneurship Development Cell (IEDC-SNGIST),
          earlier known as EDC@SNGIST, was established in the year of 2014. It
          was formed with the aim of creating an eco-system, where students as
          well as teachers are encouraged and supported to develop innovative
          products, register start-ups, attain patents etc. Also activities like
          technical workshops, trainings, industrial visits, project and idea
          contests etc. are organised on a regular basis, by which students and
          faculty members are able to apply their technical capabilities and
          convert them into socially relevant products. IEDC-SNGIST was
          registered in Directorate of Industries and Commerce (DIC) (Reg. No.
          EDC/EKLM/ 07/14). In 2015 it was recognized as an approved IEDC by
          Kerala Start-up Mission earlier known as Technopark – Technology
          Business Incubator (Reg. No. T-TBI/2014-15/IEDC/SNGIST). SNGIST signed
          an MoU with KITCO Ltd in March 2016, with the aim of working together
          to promote entrepreneurial activities.
        </p>
        <div className="flex lg:flex-row gap-8 justify-between pb-8 ">
        <p className="text-justify pt-2 w-[600px]">
        <span className="text-2xl font-bold pt-6 pb-8">Vision</span><br />
          To be globally recognized as a Centre of Excellence for Research,
          Innovation, Entrepreneurship and disseminating knowledge by providing
          inspirational learning to produce professional leaders for serving the
          society.
        </p>
        <div className="gap-8 justify-center items-center pt-8 ">
            <Image
              src="https://i.ibb.co/27Gcysp/Screenshot-2024-01-13-203108.png"
              width={600}
              height={300}
              alt="IEDC SNGIST logo"
              className="max-w-[400px] md:max-w-[500px] lg:max-w-full  rounded-md"
            />
          </div>
        </div>
        <div className="flex lg:flex-row gap-8 justify-between pb-8 md:flex-col sm:flex-col ">
        <div className="gap-8 justify-center items-center pt-8 ">
            <Image
              src="https://i.ibb.co/nMbVync/About-9e41b265079e22a85b0a.jpg"
              width={600}
              height={300}
              alt="IEDC SNGIST logo"
              className="max-w-[400px] md:max-w-[500px] lg:max-w-full  rounded-md"
            />
          </div>
        <ul className="text-justify pt-2 list-disc pl-4 w-[600px]">
        <span className="text-2xl font-bold pt-6">Mission</span>
          <li>
            Ensuring students delight by meeting their aspirations through
            blended learning, corporate mentoring, professional grooming,
            flexible curriculum and healthy atmosphere based on co- curricular
            and extra-curricular activities.
          </li>
          <li>
            Providing infrastructure, renowned academicians and ideal
            environment for Research, Innovation, Consultancy and
            Entrepreneurship relevant to the society.
          </li>
          <li>
            Contributing for creation of healthy, vibrant and sustainable
            society by involving in Institutional Social Responsibility (ISR)
            activities like rural development, welfare of senior citizens, women
            empowerment, community service, health and hygiene awareness and
            environmental protection.
          </li>
        </ul>
        </div>
        <div className="flex lg:flex-row gap-8 justify-between pb-8 md:flex-col sm:flex-col ">
            <ul className="text-justify pt-8 list-disc pl-4 w-[600px]">
              <span className="text-2xl font-bold ">Objectives of IEDC</span>
              <li>
                To inculcate a culture of innovation-driven entrepreneurship
                through student projects.
              </li>
              <li>
                To act as an institutional mechanism for providing various
                services including information on all aspects of enterprise
                building to budding student entrepreneurs.
              </li>
              <li>
                To catalyze and promote the development of student
                knowledge-based enterprises and promote employment opportunities
                in innovative areas.
              </li>
            </ul>
          <div className="gap-8 justify-center items-center pt-8 ">
            <Image
              src="https://i.ibb.co/YN1KQSw/image.png"
              width={600}
              height={300}
              alt="IEDC SNGIST logo"
              className="max-w-[300px] md:max-w-[500px] lg:max-w-full  rounded-md"
            />
          </div>
        </div>
      </div>
    );
};

export default about;
