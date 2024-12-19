import React from "react";

const page = ({ params }) => {
  return (
    <>
      <div className="cover relative">
        <img
          className="w-full object-cover h-64"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8910197/5dcab59e757847838febcb48b2ce8bba/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/2.png?token-time=1730678400&token-hash=JnEEx6sYSL267deuX8X5sK2puPn4TCtKoulKNs00i5c%3D"
          alt=""
        />
        <div className="absolute -bottom-20 right-[44.5%]">
          <img
          height={150}
          width={150}
            className="rounded-full"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8910197/11d12dcb603948fa804cfb88d7945391/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.gif?token-time=1731283200&token-hash=P0k94UnW2mRgnPgGQ-SAaP_in5w_njfZ6yZFucAL_Rk%3D"
            alt=""
          />
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col">
        <div className="font-bold text-xl">@{params.username}</div>
        <div className="text-slate-300">Besties Book Club</div>
        <div className="text-slate-300">472 posts</div>
        <div className="payment flex gap-3 w-4/5 mt-3">
          <div className="supporters w-1/2 bg-slate-800 p-10">
            <h2 className="font-bold text-2xl">Supporters</h2>
            <ul>
              <li className="my-2 flex items-center gap-2">
                <img width={33} src="avatar.gif" alt="" />
                <div>
                  Moiz donated <span className="font-bold">$30</span> he says
                  waith a message "I support you bro lots of 💗"
                </div>
              </li>
              <li className="my-2 flex items-center gap-2">
                <img width={33} src="avatar.gif" alt="" />
                <div>
                  Moiz donated <span className="font-bold">$30</span> he says
                  waith a message "I support you bro lots of 💗"
                </div>
              </li>
              <li className="my-2 flex items-center gap-2">
                <img width={33} src="avatar.gif" alt="" />
                <div>
                  Moiz donated <span className="font-bold">$30</span> he says
                  waith a message "I support you bro lots of 💗"
                </div>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-800 p-10">
            <h2 className="font-bold text-lg">Make a payment</h2>
            <div className="fields flex flex-col gap-2 my-3">
              <input
                className="bg-[#192333] p-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-[#192333] p-2"
                type="text"
                placeholder="Message"
              />
              <input
                className="bg-[#192333] p-2"
                type="number"
                placeholder="Amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Pay
              </button>
            </div>
            <div className="btns flex gap-2 mt-5">
              <button className="bg-slate-900 rounded-lg p-3">Pay $10</button>
              <button className="bg-slate-900 rounded-lg p-3">Pay $20</button>
              <button className="bg-slate-900 rounded-lg p-3">Pay $50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
