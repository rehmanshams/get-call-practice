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
        <div
          className={`${
            getid?.skinMeta.find((e) => e.key == "rarity").value == "DELUXE" &&
            getid.category == "Anime"
              ? "bg-pink-200 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "PREMIUM" && getid.category == "Anime"
              ? "bg-red-300 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "ULTRA" && getid.category == "Anime"
              ? "bg-green-200 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "LEGENDARY" && getid.category == "Movies & TV"
              ? "bg-red-300 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "LEGENDARY" && getid.category == "Nature"
              ? "bg-yellow-200 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "PREMIUM" && getid.category == "Nature"
              ? "bg-yellow-300 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "ULTRA" && getid.category == "Nature"
              ? "bg-pink-300 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "DELUXE" && getid.category == "Nature"
              ? "bg-red-300 fixed inset-0  bg-opacity-70 transition-opacity"
              : getid?.skinMeta.find((e) => e.key == "rarity").value ==
                  "STANDARD" 
              ? "bg-blue-300 fixed inset-0  bg-opacity-70 transition-opacity"
              : "vkldnkj"
          }`}
        ></div>
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
                      className={`
                        ${
                          getid?.skinMeta.find(
                            (newitem) => newitem.key == "rarity"
                          ).value == "DELUXE" && getid.category == "Anime"
                            ? "border-blue-400 text-blue-400"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "PREMIUM" && getid.category == "Anime"
                            ? "border-red-600 text-red-600"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "ULTRA" && getid.category == "Anime"
                            ? "border-green-500 text-green-500"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "LEGENDARY" &&
                              getid.category == "Movies & TV"
                            ? "border-red-600 text-red-600"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "STANDARD"
                            ? "border-blue-500 text-blue-500"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "ULTRA" &&
                              getid.category == "Movies & TV"
                            ? "border-blue-600 text-blue-600"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "LEGENDARY" &&
                              getid.category == "Nature"
                            ? "border-yellow-600 text-yellow-600"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "PREMIUM" && getid.category == "Nature"
                            ? "border-yellow-600 text-yellow-600"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "ULTRA" && getid.category == "Nature"
                            ? "border-pink-400 text-pink-400"
                            : getid?.skinMeta.find(
                                (newitem) => newitem.key == "rarity"
                              ).value == "DELUXE" && getid.category == "Nature"
                            ? "border-red-600 text-red-600"
                            : "udjnvjdb"
                        }
                        border-2 text-2xl w-32 h-12  font-thin rounded-md `}
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
