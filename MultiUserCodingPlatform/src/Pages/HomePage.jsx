import React from "react";

function HomePage() {
  return (
    <>
<section className="flex flex-col lg:flex-row h-screen bg-black">
  <div className="lg:w-1/2">
    <div className="relative h-72 lg:h-full">
      <div className="absolute inset-0">
        <img
          className="h-full w-full rounded-md object-cover object-top"
         src="https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="relative">
        <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
          <h3 className="text-4xl font-bold text-white">
            Now you don't have to rely on your designer to create a new page
          </h3>
        </div>
      </div>
    </div>
  </div>

  

    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center mb-4">
        Sign up
      </h2>
      <p className="text-base text-gray-600 text-center">
        Create a new Room ID: ?{" "}
        <button
          type="button"
          className="font-medium text-black bg-transparent transition-all duration-200 hover:bg-gray-200 hover:underline"
        >
          Sign In
        </button>
      </p>
    </div>

</section>



    </>
  );
}

export default HomePage;
