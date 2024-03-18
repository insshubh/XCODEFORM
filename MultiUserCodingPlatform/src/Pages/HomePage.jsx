import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  // set the username and room id with help uuid module
  const [roomID, setId] = useState('');
  const [user, setuser] = useState('');
  const navigate = useNavigate(); // Using useNavigate hook

  const newroom = (e) => {
   
    const id = nanoid();
    setId(id);
    toast.success('ID Created Successfully', { toastId: "joinRoom", autoClose: 2000 });

  };

  const joinroom = () => {
    if (!user || !roomID) { 
      toast.error("Please Enter Username and Room ID",{ toastId: "joinRoom", autoClose: 2500 });
      return;
    }

    // if It is Valid then Redirect to editorpage
    navigate(`/editor/${roomID}`, {state :{user}});
  };

  // Method which responds when we hit enter 
  const enterInput = (e) =>
  {
    if(e.code == 'Enter')
    {
      joinroom();
    }
  }

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
                <div className="relative">
                  <h2 className="img-text text-3xl font-bold text-center relative z-10 group">
                    Collaborative Code Symphony: Unleash Innovation Together.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <form className="border border-gray-600 py-1 px-2 border-radius-2  text-white w-full sm:w-1/2 h-auto rounded-[20px]">
            <p className="mb-4 p-2 text-xl font-bold text-white">
              Please login to your account
            </p>

            <div className="relative mb-4">
              <input
                type="text"
                className="py-3 peer block w-full rounded-md border-none bg-white px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-200 ease-linear focus:placeholder-gray-500"
                id="exampleFormControlInput1"
                placeholder="Username"
                onKeyUp={enterInput}
                onChange={(e) => setuser(e.target.value)}
                value={user}
              />
            </div>

            <div className="relative mb-4">
              <input
                type="id"
                className="py-3 peer block w-full rounded-md border-none bg-white px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-200 ease-linear focus:placeholder-gray-500"
                id="exampleFormControlInput11"
                placeholder="Room ID"
                onKeyUp={enterInput}
                onChange={(e) => setId(e.target.value)}
                value={roomID}
                
              />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-amber-400 to-red-500 text-white py-2 px-4 rounded-md font-medium uppercase tracking-wide hover:bg-gradient-to-r from-red-400 to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-200 ease-linear"
                onClick={joinroom}
              >
                JOIN{" ->"}
              </button>
            </div>

            <div className="flex flex-col items-center justify-between pb-6">
              <p className="mb-0 mr-2 text-white">Don't have a Room ID?</p>
              <button onClick={newroom}
                type="button"
                className="my-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-200 ease-linear"
              >
                Create New ID
              </button>
              <ToastContainer />
            </div>
            <footer className="text-white items-center p-4 fixed bottom-0 right-0">
              <div className="relative group">
                <p className="text-s font-bold tracking-wide bg-gradient-to-l from-gray-900 to-white bg-clip-text text-transparent group-hover:from-white">
                  <Link to="https://github.com/insshubh">Made By GodZ</Link>
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
