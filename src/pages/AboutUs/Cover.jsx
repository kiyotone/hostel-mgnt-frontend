const Cover = () => {
  return (
    <main className="relative flex items-center justify-center mb-[6rem]">
      <div className="w-full h-[15rem] flex items-center justify-center overflow-hidden rounded-md shadow-md max-w-[1080px]">
        <img src="/hostel_image.jpeg" alt="Hostel Cover Image" />
      </div>
      <img
        src="https://thumbs.dreamstime.com/z/vector-logo-hostel-hotel-183952515.jpg"
        alt="Hostel Profile Image"
        className="rounded-full absolute sm:w-[10rem] w-[7rem] sm:top-2/3 top-3/4"
      />
    </main>
  );
};

export default Cover;
