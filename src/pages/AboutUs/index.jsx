import Cover from "./Cover";

const AboutUs = () => {
  return (
    <div className="mx-4 flex items-center justfy-center flex-col">
      {/* Cover */}
      <Cover />
      {/* Intro */}
      <section className="intro max-w-[1080px]">
        <h1 className="text-3xl text-center font-bold text-[#330088]">
          Nepal Hostels pvt. ltd
        </h1>
        <div className="mt-6 mb-16">
          Welcome to Nepal Hostels, an online platform built by the students of
          Nepal. We have spend a lot of hours building and optimizing the UI of
          this platform. This platform is made possible by a team of Frontend
          and Backend Web Developers. It takes quite a while to settle in
          Kathmandu, specially when you&apos;re not quite fimiliar with the
          place. This is where Nepal Hostels pvt. ltd comes in.
        </div>
        <h1 className="text-3xl text-center font-bold text-[#330088]">
          Our Mission
        </h1>
        <div className="my-6">
          Our mission is to be a provide platform for students through which it
          will be easier for them to search the hostels that suits their needs.
          Our goal is to merge all the hostels available in Kathmandu into one
          place. This platform was build by the students, for the students of
          Nepal.
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

// https://thumbs.dreamstime.com/z/vector-logo-hostel-hotel-183952515.jpg
