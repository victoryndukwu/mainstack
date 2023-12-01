/* eslint-disable no-unused-vars */
import Mbutton from "./components/button/mainstackButton";
import Navbar from "./components/navbar/navbar";
import { useState, useEffect } from "react";
import { TRANSACTIONS, WALLET, USER } from "./api/apiUrl";
import request from "./api/apiService";
import info from "./assets/info.svg";
import { formatDate, customLabels } from "./utility/service";
import download from "./assets/download.svg";
import down from "./assets/down.svg";
import call from "./assets/call_received.svg";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [user, setUser] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await request(TRANSACTIONS);
      const result = await response.json();

      if (response.status === 200) {
        setTransactions(result);
      }
      console.log("transactions", transactions);
    } catch (error) {
      //
    }
  };
  const getWallet = async () => {
    try {
      const response = await request(WALLET);
      const result = await response.json();
      if (response.status === 200) {
        setWallet(result);
      }
      console.log("wallet", wallet);
    } catch (error) {
      //
    }
  };
  const getUser = async () => {
    try {
      const response = await request(USER);
      const result = await response.json();
      if (response.status === 200) {
        setUser(result);
      }
      console.log("user", user);
    } catch (error) {
      //
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTransactions();
    getWallet();
    getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col py-[50px]">
        {/* top */}
        <section className="flex justify-between">
          <div className="flex items-center justify-between">
            {Object.entries(wallet)
              .slice(0, 1)
              .map(([key, value]) => (
                <div className="flex flex-col items-start my-3" key={value.id}>
                  <div className="flex justify-between w-full">
                    <p className="text-sm text-[#56616B] font-medium">
                      {customLabels[key]}
                    </p>
                  </div>
                  <p className="text-[36px] font-bold text-[#131316]">
                    {`USD ${value}`}
                  </p>
                </div>
              ))}{" "}
            <Mbutton
              text="Withdraw"
              className="bg-[#131316] rounded-[100px] w-[167px] h-[52px]  text-white text-[16px] ml-[64px]"
            />
          </div>
          {/* wallet area */}
          <div className="flex flex-col mr-[50px] min-w-[300px]">
            {Object.entries(wallet)
              .slice(1)
              .map(([key, value]) => (
                <div className="flex flex-col items-start my-5" key={value.id}>
                  <div className="flex justify-between w-full">
                    <p className="text-sm text-[#56616B] font-medium">
                      {customLabels[key]}
                    </p>
                    <img src={info} className="w-4 h-4" />
                  </div>
                  <p className="text-[36px] font-bold text-[#131316]">
                    {`USD ${value}`}
                  </p>
                </div>
              ))}
          </div>
        </section>

        {/* bottom */}
        <section className="flex flex-col py-[108px]">
          <div className="flex justify-between mb-[50px]">
            <div className="flex flex-col items-start">
              <p className="font-bold text-2xl">
                {`${transactions.length} Transactions`}{" "}
              </p>
              <p className="text-sm font-medium text-[#56616B]">
                Your transactions for the last 7 days
              </p>
            </div>

            <div className="flex">
              <Mbutton
                text="Filter"
                className="bg-[#EFF1F6] rounded-[100px] w-[139px] h-[48px] font-semibold text-[#131316] text-[16px] mr-[6px]"
                icon={down}
              />
              <Mbutton
                text="Export List"
                className="bg-[#EFF1F6] rounded-[100px] w-[167px] h-[48px] font-semibold text-[#131316] text-[16px] ml-[6px]"
                icon={download}
              />
            </div>
          </div>
          <div>
            {transactions.map((transaction, id) => (
              <div key={id} className="flex justify-between my-3">
                <div className="flex items-start my-3">
                  <div className="bg-[#E3FCF2] rounded-full grid place-items-center h-12 w-12 mr-4">
                    <img src={call} alt="" />
                  </div>
                  <div className="flex flex-col items-start ">
                    <div className="text-[16px] text-[#131316] font-medium">
                      {transaction.metadata?.product_name ?? transaction.type}
                    </div>
                    <div className="text-sm text-[#56616B] font-medium">
                      {transaction.metadata?.name ?? transaction.status}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-[16px] text-[#131316] font-bold">
                    USD {transaction.amount}
                  </div>
                  <div className="text-sm text-[#56616B] font-medium">
                    {formatDate(transaction.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
