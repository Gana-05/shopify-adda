import React from "react";

import { Button, Img, Input, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PricingEnginePage: React.FC = () => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex flex-row items-center justify-center md:px-5 py-[22px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[89%]">
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-[56%] md:w-full">
              <Img
                className="h-[35px] md:h-auto object-cover"
                src="images/img_header_logo.png"
                alt="headerlogo_one"
              />
              <Input
                name="search"
                placeholder="Search"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex w-[70%] md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-auto"
                    src="images/img_search_outline.svg"
                    alt="search/Outline"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setSearchvalue("")}
                    style={{
                      visibility:
                        searchvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                size="xs"
              ></Input>
            </div>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[50px] w-[28%] md:w-full">
              <div className="flex flex-row gap-[19px] items-center justify-center pl-[5px] py-[5px] w-[31%]">
                <Text
                  className="text-base text-center text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Orders
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrow_down.svg"
                  alt="arrowdown_one"
                />
              </div>
              <Text
                className="text-base text-center text-gray-900"
                size="txtGilroyMedium16"
              >
                Categories
              </Text>
              <Text
                className="text-base text-center text-gray-900"
                size="txtGilroyMedium16"
              >
                More
              </Text>
            </div>
            <Img
              className="h-6 md:ml-[0] ml-[25px] w-6"
              src="images/img_arrow_down.svg"
              alt="arrowdown_three"
            />
            <Img
              className="h-14 md:ml-[0] ml-[50px] w-14"
              src="images/img_shopping_cart_outline.svg"
              alt="shoppingcart"
            />
          </div>
        </header>
        <div className="flex flex-row items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-row items-center justify-start pt-1.5 w-full">
            <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start w-full">
              <div className="flex flex-col gap-9 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtGilroySemiBold32"
                  >
                    Best Sellers in Electronics
                  </Text>
                  <Img
                    className="h-10 w-10"
                    src="images/img_arrow_circle_right_solid.svg"
                    alt="image"
                  />
                </div>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 4 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="flex flex-row w-full"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-white-A700 flex flex-col items-start justify-start mx-2.5 p-6 sm:px-5 rounded-lg shadow-bs1">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded w-full"
                          src="images/img_pngwing_1_194x248.png"
                          alt="pngwingone_one"
                        />
                        <Text
                          className="capitalize mt-[11px] text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18Bluegray400"
                        >
                          Amazone
                        </Text>
                        <Text
                          className="mt-[18px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                          size="txtGilroyMedium24"
                        >
                          boAt Airdopes 131
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-2.5 py-1 w-full">
                          <div className="flex flex-row gap-4 items-center justify-center w-[52%]">
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
                              className="line-through text-base text-blue_gray-400"
                              size="txtGilroyRegular16Bluegray400"
                            >
                              $99.99
                            </Text>
                          </div>
                          <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-center rounded-[3px] w-[14%]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_star_1.svg"
                              alt="image"
                            />
                            <Text
                              className="text-amber-500 text-right text-sm"
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
                    </React.Fragment>
                  ))}
                />
              </div>
              <div className="flex flex-col gap-9 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtGilroySemiBold32"
                  >
                    Best Sellers in Electronics
                  </Text>
                  <Img
                    className="h-10 w-10"
                    src="images/img_arrow_circle_right_solid.svg"
                    alt="image_one"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                          src="images/img_pngwing_1_194x248.png"
                          alt="amazone_one"
                        />
                        <Text
                          className="capitalize text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18Bluegray400"
                        >
                          Amazone
                        </Text>
                      </div>
                      <Text
                        className="mt-3 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        boAt Airdopes 131
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 w-full">
                        <div className="flex flex-row gap-4 items-center justify-center w-[52%]">
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
                            className="line-through text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-center p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_star_1_3.svg"
                            alt="image"
                          />
                          <Text
                            className="text-amber-500 text-right text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]"
                        size="sm"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                          src="images/img_pngwing_1_1.png"
                          alt="pngwingone_one"
                        />
                        <Text
                          className="capitalize text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18Bluegray400"
                        >
                          TataCLiQ
                        </Text>
                      </div>
                      <Text
                        className="mt-3 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        HP Envy 13 x360
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 w-full">
                        <div className="flex flex-row gap-4 items-center justify-center w-[52%]">
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
                            className="line-through text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-center p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_star_1_4.svg"
                            alt="image"
                          />
                          <Text
                            className="text-amber-500 text-right text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]"
                        size="sm"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                          src="images/img_pngwing_1_2.png"
                          alt="pngwingone_one"
                        />
                        <Text
                          className="capitalize text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18Bluegray400"
                        >
                          Amazone
                        </Text>
                      </div>
                      <Text
                        className="mt-3 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        OnePlus 10R 5G
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 w-full">
                        <div className="flex flex-row gap-4 items-center justify-center w-[52%]">
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
                            className="line-through text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-center p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_star_1_5.svg"
                            alt="image"
                          />
                          <Text
                            className="text-amber-500 text-right text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]"
                        size="sm"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                          src="images/img_pngwing_1_3.png"
                          alt="pngwingone_one"
                        />
                        <Text
                          className="capitalize text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18Bluegray400"
                        >
                          TataCLiQ
                        </Text>
                      </div>
                      <Text
                        className="mt-3 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        APPLE iPad
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-2 w-full">
                        <div className="flex flex-row gap-4 items-center justify-center w-[52%]">
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
                            className="line-through text-base text-blue_gray-400"
                            size="txtGilroyRegular16Bluegray400"
                          >
                            $99.99
                          </Text>
                        </div>
                        <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-center p-0.5 rounded-[3px] w-[14%]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_star_1_6.svg"
                            alt="image"
                          />
                          <Text
                            className="text-amber-500 text-right text-sm"
                            size="txtOpenSansMedium14"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold mt-2 text-base text-center w-[248px]"
                        size="sm"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingEnginePage;
