import React from "react";

function HomePage() {
  return (
    <>
      <section className="flex flex-col lg:flex-row h-screen bg-black bg-opacity-99">
        <div className="lg:w-2/3">
          <div className="relative h-[45vh] lg:h-full">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-md object-cover object-top"
                src="https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl">
                <h2 className="text-3xl font-bold text-white opacity-70 text-center">
                  Collaborative Code Symphony: Unleash Innovation Together.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <form className="border border-gray-600 py-1 px-2 border-radius-2  text-white w-full sm:w-1/2 h-auto rounded-[20px]">
            <p class="mb-4 p-2">Please login to your account</p>

            <div class="relative mb-4">
              <input
                type="text"
                className="py-3 peer block w-full rounded-md border-none bg-white px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-200 ease-linear focus:placeholder-gray-500"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>

            <div class="relative mb-4">
              <input
                type="password"
                className="py-3 peer block w-full rounded-md border-none bg-white px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-200 ease-linear focus:placeholder-gray-500"
                id="exampleFormControlInput11"
                placeholder="Room ID"
              />
            </div>

            <div class="mb-4 flex items-center justify-between">
              <button
                type="button"
                class="w-full bg-gradient-to-r from-amber-400 to-red-500 text-white py-2 px-4 rounded-md font-medium uppercase tracking-wide hover:bg-gradient-to-r from-red-400 to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-200 ease-linear"
              >
                JOIN{" ->"}
              </button>
            </div>

            <div class="flex flex-col items-center justify-between pb-6">
              <p class="mb-0 mr-2 text-white">Don't have a Room ID?</p>
              <button
                type="button"
                class="my-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-200 ease-linear"
              >
                Create New ID
              </button>
            </div>
            <footer className="text-white items-center p-4 fixed bottom-0 right-0">
              <div className="relative">
                <p className="text-s font-bold tracking-wide bg-gradient-to-l from-amber-100 to-red-400 bg-clip-text text-transparent">
                  Made By GodZ
                </p>
              </div>
            </footer>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
