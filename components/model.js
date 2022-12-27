import React from "react";
export default function model({ setCardmodel, getid }) {
  console.log("Selected Item Data", getid.category);
  return (
    <>
      <div
        className="relative z-20 w-full bg-zinc-500"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-white bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  ">
            <div className="w-full max-w-[920px] transform overflow-hidden rounded-lg bg-white shadow-xl transition-all ">
              <div className="relative ">
                <div className=" w-full h-full">
                  <div className="w-full h-[590px]  flex justify-center rounded-md">
                    <img
                      className={`${
                        getid?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          .value
                          ? "w-[1190px] h-[250px] rounded-t-md"
                          : "vkldnkj"
                        // getid?.skinMeta.find((e) => e.key == "thumbnailLarge")
                        // .skinId == 75
                        // ? "w-[490px] h-[200px]"
                        // : "gdjnjkd"
                      }`}
                      src={
                        getid?.skinMeta.find((e) => e.key == "thumbnailLarge")
                          .value
                      }
                    />
                    <p
                      className={`${
                        getid?.skinMeta.find((e) => e.key == "rarity").value ==
                          "DELUXE" && getid.category == "Anime"
                          ? " font-bold text-blue-500 pt-32 text-4xl shadow-lg absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "DELUXE" && getid.category == "Nature"
                          ? " font-bold text-red-600 pt-32 text-4xl shadow-lg absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "ULTRA" && getid.category == "Anime"
                          ? " font-bold text-green-400 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "ULTRA" &&
                            getid.category == "Movies & TV"
                          ? "font-bold text-blue-400 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "STANDARD" &&
                            getid.category == "Movies & TV"
                          ? "font-bold text-blue-400 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "LEGENDARY" &&
                            getid.category == "Movies & TV"
                          ? "font-bold text-red-600 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "LEGENDARY" &&
                            getid.category == "Nature"
                          ? "font-bold text-yellow-600 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "ULTRA" && getid.category == "Nature"
                          ? "font-bold text-pink-400 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "STANDARD" && getid.category == "Nature"
                          ? "font-bold text-blue-400 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "PREMIUM" && getid.category == "Nature"
                          ? "font-bold text-yellow-600 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : getid?.skinMeta.find((e) => e.key == "rarity")
                              .value == "PREMIUM" && getid.category == "Anime"
                          ? "font-bold text-red-600 pt-32 text-4xl shadow-2xl absolute model-background-color rounded-b-md "
                          : "foidgub"
                      }`}
                    >
                      {getid?.skinMeta.find((e) => e.key == "rarity").value}
                    </p>
                    <p className="font-bold text-black text-4xl  pt-72 absolute ">
                      {getid.description}
                    </p>
                  </div>
                  <div className="mb-6 mt-6">
                    <button
                      onClick={() => setCardmodel(false)}
                      className="border-2 text-2xl w-32 h-12 border-black font-thin rounded-md text-black"
                    >
                      Canel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
