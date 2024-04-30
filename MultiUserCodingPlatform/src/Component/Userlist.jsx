import React, { useState } from 'react';
import Client from './Client';

const Userlist = () => {
    const [clients, setClients] = useState([
        { socket_id: 1, username: 'Shubh' },
        { socket_id: 2, username: 'Dk' }
    ]);

    return (
        <div className="flex h-screen">
            <div className="flex-shrink-0 w-1/6 bg-gray-200 flex flex-col">
                <div className="overflow-auto flex-grow">
                    <div className="p-4">
                        <p className="mb-4 text-lg font-semibold">Connected Users</p>
                        {clients.map((client, index) => (
                            <div key={client.socket_id} className={`mb-3 ${index !== clients.length - 1 ? 'mb-3' : ''}`}>
                                <Client socketid={client.socket_id} username={client.username} />
                            </div>
                        ))}

                    </div>
                </div>
                <div className="flex flex-col  ">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-3 border border-blue-500 hover:border-transparent rounded">
                        Button
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 p-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Copy Room Id</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 bg-gray-100">
                <div className="h-full p-2">
                    <p className="text-lg font-semibold">Code Area</p>
                    <textarea id ="realtimeEditor" className="h-full w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none my-0"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Userlist;
