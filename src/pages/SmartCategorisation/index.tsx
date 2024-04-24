import React from "react";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SmartCategorisationPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] justify-end mx-auto sm:pl-5 pl-[35px] pt-[35px] w-full">
        <div className="flex flex-col items-center md:ml-[0] ml-[41px] px-2.5 md:px-5 w-[98%] md:w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-2.5">
                <Img
                  className="h-[35px]"
                  src="images/img_group_3.svg"
                  alt="Group"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="ml-0.5 text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Products
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtGilroyMedium16"
                    >
                      Resouces
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </List>
                <Text
                  className="text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto sm:hidden md:ml-[0] ml-[385px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end md:ml-[0] ml-[41px] md:px-5 w-[98%] md:w-full">
          <div className="flex flex-col gap-[30px] justify-end w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between ml-2.5 md:ml-[0] mr-[86px] w-[93%] md:w-full">
              <Text
                className="mb-[3px] md:mt-0 mt-[15px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                size="txtGilroySemiBold28"
              >
                Categories
              </Text>
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:w-full"
                suffix={
                  inputfieldvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-5 ml-[35px] mr-3 my-4"
                      onClick={() => setInputfieldvalue("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="cursor-pointer h-5 ml-[35px] mr-3 my-4"
                      src="images/img_search_blue_A200.svg"
                      alt="search"
                    />
                  )
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-end w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex flex-col gap-6 justify-start overflow-auto w-full">
                  <div className="flex flex-col items-end justify-start ml-2.5 md:ml-[0] pl-1 py-1">
                    <a href="javascript:" className="text-base text-blue-A700">
                      <Text size="txtGilroySemiBold16">View All</Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[280px] w-full">
                      <div className="border border-blue-A700 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between pl-2.5 py-2.5 w-1/4 md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start mb-[5px] w-[97%] sm:w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover w-[250px]"
                            src="images/img_rectangle1326.png"
                            alt="Rectangle1326"
                          />
                          <Text
                            className="text-blue_gray-900 text-lg"
                            size="txtGilroyMedium18"
                          >
                            Music
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-start mb-[5px] w-[97%] sm:w-full">
                          <Img
                            className="h-[250px] md:h-auto object-cover w-[250px]"
                            src="images/img_rectangle1326_250X250.png"
                            alt="Rectangle1326 One"
                          />
                          <Text
                            className="text-blue_gray-900 text-lg"
                            size="txtGilroyMedium18"
                          >
                            Entertainment
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start ml-5 md:ml-[0] w-[23%] md:w-full">
                        <Img
                          className="h-[250px] md:h-auto object-cover w-[250px]"
                          src="images/img_rectangle1326_1.png"
                          alt="Rectangle1326 Two"
                        />
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Sports
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[30px] w-[23%] md:w-full">
                        <Img
                          className="h-[250px] md:h-auto object-cover w-[250px]"
                          src="images/img_rectangle1326_2.png"
                          alt="Rectangle1326 Three"
                        />
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Events
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[30px] w-[23%] md:w-full">
                        <Img
                          className="h-[250px] md:h-auto object-cover w-[250px]"
                          src="images/img_rectangle1326_3.png"
                          alt="Rectangle1326 Four"
                        />
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          News & Articles
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end pt-3 w-[94%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                    size="txtGilroySemiBold28"
                  >
                    <>Music &gt; Sub-Categories</>
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk.png"
                          alt="unsplashFr2iwK"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Pop Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 pop music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_50X50.png"
                          alt="unsplashFr2iwK One"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Rock Music
                            </Text>
                          </div>
                          <Text
                            className="my-[3px] text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 rock music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_1.png"
                          alt="unsplashFr2iwK Two"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Jazz Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 jazz music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[58%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_2.png"
                          alt="unsplashFr2iwK Three"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Folk Music
                            </Text>
                          </div>
                          <Text
                            className="my-[3px] text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 folk music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_3.png"
                          alt="unsplashFr2iwK Four"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="my-[5px] text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Electronic Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 electronic music of 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk.png"
                          alt="unsplashFr2iwK One"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Pop Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 pop music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_50X50.png"
                          alt="unsplashFr2iwK One One"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Rock Music
                            </Text>
                          </div>
                          <Text
                            className="my-[3px] text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 rock music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_1.png"
                          alt="unsplashFr2iwK Two One"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Jazz Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 jazz music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[58%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_2.png"
                          alt="unsplashFr2iwK Three One"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Folk Music
                            </Text>
                          </div>
                          <Text
                            className="my-[3px] text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 folk music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_3.png"
                          alt="unsplashFr2iwK Four One"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="my-[5px] text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Electronic Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 electronic music of 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk.png"
                          alt="unsplashFr2iwK Two"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Pop Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 pop music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_50X50.png"
                          alt="unsplashFr2iwK One Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Rock Music
                            </Text>
                          </div>
                          <Text
                            className="my-[3px] text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 rock music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[59%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_1.png"
                          alt="unsplashFr2iwK Two Two"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Jazz Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 jazz music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[58%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_2.png"
                          alt="unsplashFr2iwK Three Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%]">
                          <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Folk Music
                            </Text>
                          </div>
                          <Text
                            className="my-[3px] text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 folk music of 2021
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-md w-[50px]"
                          src="images/img_unsplashfr2iwk_3.png"
                          alt="unsplashFr2iwK Four Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="my-[5px] text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Electronic Music
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyRegular14"
                          >
                            Best 50 electronic music of 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartCategorisationPage;
