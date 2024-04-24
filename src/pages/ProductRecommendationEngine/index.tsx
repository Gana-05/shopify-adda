import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ProductRecommendationEnginePage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_1.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-end pt-[9px] w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Recommended Deals
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1.png"
                        alt="pngwingOne"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Amazone
                      </Text>
                      <Text
                        className="mt-[23px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        boAt Airdopes 131
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1.svg"
                            alt="StarOne"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1_194X248.png"
                        alt="pngwingOne One"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        TataCLiQ
                      </Text>
                      <Text
                        className="mt-[23px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        HP Envy 13 x360
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_12X12.svg"
                            alt="StarOne One"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1_1.png"
                        alt="pngwingOne Two"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Amazone
                      </Text>
                      <Text
                        className="mt-5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        OnePlus 10R 5G
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_1.svg"
                            alt="StarOne Two"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1_2.png"
                        alt="pngwingOne Three"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        TataCLiQ
                      </Text>
                      <Text
                        className="mt-5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        APPLE iPad
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_2.svg"
                            alt="StarOne Three"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1.png"
                        alt="pngwingOne Four"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Amazone
                      </Text>
                      <Text
                        className="mt-[23px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        boAt Airdopes 131
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_3.svg"
                            alt="StarOne Four"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1_194X248.png"
                        alt="pngwingOne Five"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        TataCLiQ
                      </Text>
                      <Text
                        className="mt-[23px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        HP Envy 13 x360
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_4.svg"
                            alt="StarOne Five"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1_1.png"
                        alt="pngwingOne Six"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        Amazone
                      </Text>
                      <Text
                        className="mt-5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        OnePlus 10R 5G
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_5.svg"
                            alt="StarOne Six"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-6 py-6 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-end justify-start w-full">
                    <div className="h-[194px] relative w-full">
                      <Img
                        className="absolute h-[194px] inset-y-[0] my-auto object-cover right-[0] rounded w-[92%]"
                        src="images/img_pngwing1_2.png"
                        alt="pngwingOne Seven"
                      />
                      <Button
                        className="absolute capitalize cursor-pointer font-medium leading-[normal] left-[0] min-w-[72px] text-center text-sm top-[0]"
                        shape="square"
                        color="green_600"
                        size="xs"
                      >
                        30% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                      <Text
                        className="capitalize text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18Bluegray400"
                      >
                        TataCLiQ
                      </Text>
                      <Text
                        className="mt-5 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        APPLE iPad
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                        <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            <span className="text-colors1 font-gilroy text-left font-medium">
                              $
                            </span>
                            <span className="text-colors2 font-gilroy text-left font-medium">
                              49.99
                            </span>
                          </Text>
                          <Text
                            className="line-through mt-1.5 text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 my-[3px] w-3"
                            src="images/img_star1_6.svg"
                            alt="StarOne Seven"
                          />
                          <Text
                            className="mt-0.5 text-amber-500 text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRecommendationEnginePage;
