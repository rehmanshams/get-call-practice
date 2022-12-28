import axios from "axios";
import React, { useEffect, useState } from "react";
import Model from "../components/model";
export default function Home() {
  const [getid, setGetid] = useState("");
  const [cardmodel, setCardmodel] = useState(false);
  const [getdata, setGetdata] = useState([]);
  // const [getdataone, setGetdataone] = useState([]);
  useEffect(() => {
    axios.get("https://dev.center-piece.com/api/v1/skins/store").then((res) => {
      setGetdata(res.data.categoryData);
      // setGetdataone(res.data.categoryData);
    });
  }, []);
  console.log(getdata, "ldfjnfjkdbsjkgbdjkb");
  // console.log(getdatao , "udigubduigbruibg")
  // console.log(getdata, "hbsbjkbfgjf");
  return (
    <>
      <div className="text-white w-full h-full">
        {cardmodel && <Model setCardmodel={setCardmodel} getid={getid}/>}
        <div>
          <div className="text-3xl pl-8 pt-8">
            <p className="font-bold text-slate-100"> Anime :-</p>
          </div>
          <div className="grid-container">
            {getdata?.Anime?.map((item) => {
              console.log("item", item);
              // key= {keyid}
              // console.log(item);
              return (
                <>
                  <div className="flex justify-center w-full h-full">
                    <div className="w-[490px] h-[200px] bg-white mt-8 flex rounded-md">
                      <img
                        className={`${
                          item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                            ? "w-[490px] h-[200px] rounded-md"
                            : "vkldnkj"
                          // item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          // .skinId == 75
                          // ? "w-[490px] h-[200px]"
                          // : "gdjnjkd"
                        }`}
                        src={
                          item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                        }
                      />
                      <p
                        className={`${
                          item?.skinMeta.find((e) => e.key == "rarity").value ==
                          "DELUXE"
                            ? " font-bold text-purple-500 pl-10 pt-8 absolute for-background-color transition duration-300 ease-in-out rounded-b-md "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "ULTRA"
                            ? " font-bold text-green-400 pl-10 pt-8 absolute for-background-color-two for-background-color transition duration-300 rounded-b-md "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "PREMIUM"
                            ? "font-bold text-red-600 pl-10 pt-8 absolute  for-background-color-one for-background-color rounded-b-md  transition duration-300"
                            : "foidgub"
                        }`}
                      >
                        {item?.skinMeta.find((e) => e.key == "rarity").value}
                      </p>
                      <img
                        onClick={() => {setCardmodel(true); 
                          setGetid(item)
                        }}
                        className="w-[40px] cursor-pointer h-8 absolute ml-[420px] mt-[133px]"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/8674846_ic_fluent_eye_tracking_on_icon%20%281%29.png"
                      />
                      <p className="font-bold text-slate-200 pl-10 pt-32 absolute ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div>
          <div className="text-3xl pl-8 pt-8">
            <p className="font-bold text-slate-100"> Nature :-</p>
          </div>
          <div className="flex">
            {getdataone?.Nature?.map((itemone) => {
              console.log("first");

              return (
                <>
                  <div className="flex justify-center w-full h-full">
                    <div className="w-[490px] h-[200px] bg-white mt-8 flex rounded-md">
                      <img
                        className={`${
                          itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                            ? "w-[490px] h-[200px] rounded-md"
                            : "vkldnkj"
                          // itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          // .skinId == 75
                          // ? "w-[490px] h-[200px]"
                          // : "gdjnjkd"
                        }`}
                        src={
                          itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                        }
                      />
                      <p
                        className={`${
                          itemone?.skinMeta.find((e) => e.key == "rarity").value ==
                          "DELUXE"
                            ? " font-bold text-purple-500 pl-10 pt-8 absolute for-background-color rounded-b-md "
                            : itemone?.skinMeta.find((e) => e.key == "rarity")
                                .value == "ULTRA"
                            ? " font-bold text-green-400 pl-10 pt-8 absolute for-background-color-two for-background-color rounded-b-md "
                            : itemone?.skinMeta.find((e) => e.key == "rarity")
                                .value == "PREMIUM"
                            ? "font-bold text-red-600 pl-10 pt-8 absolute  for-background-color-one for-background-color rounded-b-md  "
                            : "foidgub"
                        }`}
                      >
                        {itemone?.skinMeta.find((e) => e.key == "rarity").value}
                      </p>
                      <p className="font-bold text-slate-200 pl-10 pt-32 absolute ">
                        {itemone.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
      </div>
      <div className="text-white  w-full h-full">
        <div>
          <div className="text-3xl pl-8 pt-8">
            <p className="font-bold text-slate-100"> Movies & TV :-</p>
          </div>
          <div className="flex">
            {getdata?.["Movies & TV"]?.map((item) => {
              console.log("item", item);

              return (
                <>
                  <div className="flex justify-center w-full h-full">
                    <div className="w-[490px] h-[200px] bg-black mt-8 flex rounded-md">
                      <img
                        className={`${
                          item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                            ? "w-[490px] h-[200px] rounded-md"
                            : "vkldnkj"
                          // item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          // .skinId == 75
                          // ? "w-[490px] h-[200px]"
                          // : "gdjnjkd"
                        }`}
                        src={
                          item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                        }
                      />
                      <p
                        className={`${
                          item?.skinMeta.find((e) => e.key == "rarity").value ==
                          "LEGENDARY"
                            ? " font-bold text-red-500 pl-10 pt-8 absolute for-background-color-one for-background-color rounded-b-md transition duration-300 "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "STANDARD"
                            ? " font-bold text-blue-400 pl-10 pt-8 absolute for-background-color-new for-background-color rounded-b-md transition duration-300 "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "ULTRA"
                            ? " font-bold text-blue-400 pl-10 pt-8 absolute for-background-color-new for-background-color rounded-b-md transition duration-300 "
                            : "foidgub"
                        }`}
                      >
                        {item?.skinMeta.find((e) => e.key == "rarity").value}
                      </p>
                      <img
                        onClick={() => {setCardmodel(true); 
                          setGetid(item)
                        }}
                        className="w-[40px] cursor-pointer h-8 absolute ml-[420px] mt-[133px]"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/8674846_ic_fluent_eye_tracking_on_icon%20%281%29.png"
                      />
                      <p className="font-bold text-slate-200 pl-10 pt-32 absolute ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div>
          <div className="text-3xl pl-8 pt-8">
            <p className="font-bold text-slate-100"> Nature :-</p>
          </div>
          <div className="flex">
            {getdataone?.Nature?.map((itemone) => {
              console.log("first");

              return (
                <>
                  <div className="flex justify-center w-full h-full">
                    <div className="w-[490px] h-[200px] bg-white mt-8 flex rounded-md">
                      <img
                        className={`${
                          itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                            ? "w-[490px] h-[200px] rounded-md"
                            : "vkldnkj"
                          // itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          // .skinId == 75
                          // ? "w-[490px] h-[200px]"
                          // : "gdjnjkd"
                        }`}
                        src={
                          itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                        }
                      />
                      <p
                        className={`${
                          itemone?.skinMeta.find((e) => e.key == "rarity").value ==
                          "DELUXE"
                            ? " font-bold text-purple-500 pl-10 pt-8 absolute for-background-color rounded-b-md "
                            : itemone?.skinMeta.find((e) => e.key == "rarity")
                                .value == "ULTRA"
                            ? " font-bold text-green-400 pl-10 pt-8 absolute for-background-color-two for-background-color rounded-b-md "
                            : itemone?.skinMeta.find((e) => e.key == "rarity")
                                .value == "PREMIUM"
                            ? "font-bold text-red-600 pl-10 pt-8 absolute  for-background-color-one for-background-color rounded-b-md  "
                            : "foidgub"
                        }`}
                      >
                        {itemone?.skinMeta.find((e) => e.key == "rarity").value}
                      </p>
                      <p className="font-bold text-slate-200 pl-10 pt-32 absolute ">
                        {itemone.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
      </div>
      <div className="text-white  w-full h-full">
        <div>
          <div className="text-3xl pl-8 pt-8">
            <p className="font-bold text-slate-100"> Nature :-</p>
          </div>
          <div className="grid-container ">
            {getdata?.Nature?.map((item) => {
              console.log("seeingthatistheitem", item);
              return (
                <>
                  <div className="flex justify-center w-full  h-full">
                    <div className="w-[490px] h-[200px] bg-black mt-8 flex rounded-md">
                      <img
                        className={`${
                          item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                            ? "w-[490px] h-[200px] rounded-md"
                            : "vkldnkj"
                          // item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          // .skinId == 75
                          // ? "w-[490px] h-[200px]"
                          // : "gdjnjkd"
                        }`}
                        src={
                          item?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                        }
                      />
                      <p
                        className={`${
                          item?.skinMeta.find((e) => e.key == "rarity").value ==
                          "LEGENDARY"
                            ? " font-bold text-yellow-600 pl-10 pt-8 absolute for-background-color-oneoene for-background-color rounded-b-md transition duration-300 "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "STANDARD"
                            ? " font-bold text-blue-400 pl-10 pt-8 absolute for-background-color-new for-background-color rounded-b-md transition duration-300 "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "ULTRA"
                            ? " font-bold text-pink-400 pl-10 pt-8 absolute for-background-color-newone for-background-color rounded-b-md transition duration-300 "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "DELUXE"
                            ? " font-bold text-red-700 pl-10 pt-8 absolute for-background-color-onenewone for-background-color rounded-b-md transition duration-300 "
                            : item?.skinMeta.find((e) => e.key == "rarity")
                                .value == "PREMIUM"
                            ? " font-bold text-yellow-400 pl-10 pt-8 absolute for-background-color-yellownewone for-background-color rounded-b-md transition duration-300 "
                            : "foidgub"
                        }`}
                      >
                        {item?.skinMeta.find((e) => e.key == "rarity").value}
                      </p>
                      <p className="font-bold text-slate-200 pl-10 pt-32 absolute ">
                        {item.description}
                      </p>
                      <img
                        onClick={() => {setCardmodel(true); 
                          setGetid(item)
                        }}
                        className="w-[40px] cursor-pointer h-8 absolute ml-[420px] mt-[133px]"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/8674846_ic_fluent_eye_tracking_on_icon%20%281%29.png"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div>
          <div className="text-3xl pl-8 pt-8">
            <p className="font-bold text-slate-100"> Nature :-</p>
          </div>
          <div className="flex">
            {getdataone?.Nature?.map((itemone) => {
              console.log("first");

              return (
                <>
                  <div className="flex justify-center w-full h-full">
                    <div className="w-[490px] h-[200px] bg-white mt-8 flex rounded-md">
                      <img
                        className={`${
                          itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                            ? "w-[490px] h-[200px] rounded-md"
                            : "vkldnkj"
                          // itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          // .skinId == 75
                          // ? "w-[490px] h-[200px]"
                          // : "gdjnjkd"
                        }`}
                        src={
                          itemone?.skinMeta.find((e) => e.key == "thumbnailLarge")
                            .value
                        }
                      />
                      <p
                        className={`${
                          itemone?.skinMeta.find((e) => e.key == "rarity").value ==
                          "DELUXE"
                            ? " font-bold text-purple-500 pl-10 pt-8 absolute for-background-color rounded-b-md "
                            : itemone?.skinMeta.find((e) => e.key == "rarity")
                                .value == "ULTRA"
                            ? " font-bold text-green-400 pl-10 pt-8 absolute for-background-color-two for-background-color rounded-b-md "
                            : itemone?.skinMeta.find((e) => e.key == "rarity")
                                .value == "PREMIUM"
                            ? "font-bold text-red-600 pl-10 pt-8 absolute  for-background-color-one for-background-color rounded-b-md  "
                            : "foidgub"
                        }`}
                      >
                        {itemone?.skinMeta.find((e) => e.key == "rarity").value}
                      </p>
                      <p className="font-bold text-slate-200 pl-10 pt-32 absolute ">
                        {itemone.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
      </div>
      {/* <div className="flex justify-center">
        <div>
        <div className="mt-16">
        <p className="text-purple-700 font-bold text-2xl">DELUXE</p>
            <div className="w-[1000px]  h-52 bg-slate-100 rounded-lg flex ">
            <img
            className=" w-[490px] h-[200px] mt-1 rounded-md ml-1"
                src={
                  getdata[0]?.skinMeta.find(
                    (itemtwo) => itemtwo.key == "thumbnailLarge"
                  ).value
                }
                />
              <div className="mt-3">
                <p className="text-lg font-normal text-purple-700">
                  <span className="text-lg font-bold pl-4 pr-4">Description: </span>
                  {getdata[0]?.description}
                </p>
                <p className="text-purple-700 font-normal pl-4 text-lg">
                  <span className="font-bold pr-[40px]"> Category:</span>
                  {getdata[0]?.category}
                </p>
                <p className="font-normal text-purple-700 text-lg pl-4">
                  <span className="font-bold pr-[66px]"> Rarity:</span>
                  {
                    getdata[0]?.skinMeta.find(
                      (itemone) => itemone.key == "rarity"
                    ).value
                  }
                </p>
              </div>
            </div>
            <div className="w-[1000px] mt-6 h-52 bg-slate-100 rounded-lg flex ">
              <img
                className=" w-[490px] h-[200px] mt-1 rounded-md ml-1"
                src={
                  getdata[2]?.skinMeta.find(
                    (itemtwo) => itemtwo.key == "thumbnailLarge"
                  ).value
                }
              />
              <div className="mt-3">
                <p className="text-lg font-normal text-purple-700">
                  <span className="text-lg font-bold pl-4 pr-4">Description: </span>
                  {getdata[2]?.description}
                </p>
                <p className="text-purple-700 font-normal pl-4 text-lg">
                  <span className="font-bold pr-[41px]"> Category:</span>
                  {getdata[2]?.category}
                </p>
                <p className="font-normal text-purple-700 text-lg pl-4">
                  <span className="font-bold pr-[66px]"> Rarity:</span>
                  {
                    getdata[2]?.skinMeta.find(
                      (itemone) => itemone.key == "rarity"
                    ).value
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-green-500 font-bold text-2xl">ULTRA</p>
            <div className="w-[1000px]  h-52 bg-slate-100 rounded-lg flex ">
              <img
                className=" w-[490px] h-[200px] mt-1 rounded-md ml-1"
                src={
                  getdata[3]?.skinMeta.find(
                    (itemtwo) => itemtwo.key == "thumbnailLarge"
                  ).value
                }
              />
              <div className="mt-3">
                <p className="text-lg font-normal text-green-700">
                  <span className="text-lg font-bold pl-4  pr-4">Description: </span>
                  {getdata[3]?.description}
                </p>
                <p className="text-green-700 font-normal pl-4 text-lg">
                  <span className="font-bold pr-[42px]"> Category:</span>
                  {getdata[3]?.category}
                </p>
                <p className="font-normal text-green-700 text-lg pl-4">
                  <span className="font-bold pr-[68px]"> Rarity:</span>
                  {
                    getdata[3]?.skinMeta.find(
                      (itemone) => itemone.key == "rarity"
                    ).value
                  }
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="mt-16">
            <p className="text-red-500 font-bold text-2xl">PREMIUM</p>
            <div className="w-[1000px]  h-52 bg-slate-100 rounded-lg flex ">
              <img
                className=" w-[490px] h-[200px] mt-1 rounded-md ml-1"
                src={
                  getdata[1]?.skinMeta.find(
                    (itemtwo) => itemtwo.key == "thumbnailLarge"
                  ).value
                }
              />
              <div className="mt-3">
                <p className="text-lg font-normal text-red-500">
                  <span className="text-lg font-bold pl-4 pr-4">Description: </span>
                  {getdata[1]?.description}
                </p>
                <p className="text-red-500 font-normal pl-4 text-lg">
                  <span className="font-bold pr-[40px]"> Category:</span>
                  {getdata[1]?.category}
                </p>
                <p className="font-normal text-red-500 text-lg pl-4">
                  <span className="font-bold pr-[65px]"> Rarity:</span>
                  {
                    getdata[1]?.skinMeta.find(
                      (itemone) => itemone.key == "rarity"
                    ).value
                  }
                </p>
              </div>
              
            </div>
            <div className="w-[1000px]  h-52 bg-slate-100 rounded-lg flex mt-6">
              <img
                className=" w-[490px] h-[200px] mt-1 rounded-md ml-1"
                src={
                  getdata[4]?.skinMeta.find(
                    (itemtwo) => itemtwo.key == "thumbnailLarge"
                  ).value
                }
              />
              <div className="mt-3">
                <p className="text-lg font-normal text-red-500">
                  <span className="text-lg font-bold pl-4 pr-4">Description: </span>
                  {getdata[4]?.description}
                </p>
                <p className="text-red-500 font-normal pl-4 text-lg">
                  <span className="font-bold pr-[40px]"> Category:</span>
                  {getdata[4]?.category}
                </p>
                <p className="font-normal text-red-500 text-lg pl-4">
                  <span className="font-bold pr-[66px]"> Rarity:</span>
                  {
                    getdata[4]?.skinMeta.find(
                      (itemone) => itemone.key == "rarity"
                    ).value
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* {getdata.map((item) => {
        return (
          <div>
            <div
              className={`${
                item.skinMeta.find((itemtwo) => itemtwo.key == "rarity")
                  .value == "ULTRA"
                  ? " bg-green-700  w-44 h-32 "
                  : item.skinMeta.find((itemtwo) => itemtwo.key == "rarity")
                      .value == "DELUXE"
                  ? "bg-purple-800 w-44 h-32"
                  : item.skinMeta.find((itemtwo) => itemtwo.key == "rarity")
                      .value == "PREMIUM"
                  ? "bg-red-700 w-44 h-32"
                  : ""
              } `}
            >
              <img
                className=" w-44 h-24"
                src={
                  item.skinMeta.find(
                    (itemone) => itemone.key == "thumbnailLarge"
                  ).value
                }
              />
              <p
                className={`main-paragraph ${
                  item.skinMeta.find((itemtwo) => itemtwo.key == "rarity")
                    .value == "ULTRA"
                    ? "ULTRA"
                    : item.skinMeta.find((itemtwo) => itemtwo.key == "rarity")
                        .value == "DELUXE"
                    ? "Deluxe"
                    : item.skinMeta.find((itemtwo) => itemtwo.key == "rarity")
                        .value == "PREMIUM"
                    ? "PREMIUM"
                    : ""
                } `}
              >
                {item.skinMeta.find((itemtwo) => itemtwo.key == "rarity").value}
              </p>
            </div>
          </div>
        );
      })} */}
    </>
  );
}
// th44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444jbhb4hbbbbbjfffffffffffffffffffffn
