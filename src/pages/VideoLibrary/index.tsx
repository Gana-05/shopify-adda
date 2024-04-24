import React from "react";

import { Button, Img, List, Text } from "components";

const VideoLibraryPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_7.svg"
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
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16">Sign in</Text>
              </a>
              <Button className="cursor-pointer font-medium min-w-[148px] text-base text-center">
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-[1268px] mb-[381px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtGilroySemiBold32Black900"
            >
              Videos
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[95px] rounded-lg"
              leftIcon={
                <Img
                  className="h-6 my-3 mx-2.5"
                  src="images/img_filter.svg"
                  alt="filter"
                />
              }
            >
              <div className="font-semibold text-left text-lg">Filter</div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <List
              className="flex flex-col gap-[33px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-7 items-center justify-between my-0 w-full">
                <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start md:mt-0 mt-[3px] w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[102px] h-[147px] justify-start p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790.png')",
                    }}
                  >
                    <Text
                      className="bg-red-A200 h-3.5 justify-center mr-[247px] px-1 py-0.5 rounded-[3px] text-white-A700 text-xs w-[33px]"
                      size="txtGilroyRegular12"
                    >
                      New
                    </Text>
                    <Text
                      className="bg-gradient  md:ml-[0] ml-[241px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Big Buck Buny
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-md w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_group9790_147X296.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Funny Seacat
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start mb-[3px] w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790_1.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Speed Car Racing
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start mb-[3px] w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790_2.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Skiing on the snow
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-7 items-center justify-between my-0 w-full">
                <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790_3.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Huge Aquarium
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790_4.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Rain Rain Rain
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790_5.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Into the woods
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[24%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end p-2 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9790_6.png')",
                    }}
                  >
                    <Text
                      className="bg-gradient  mt-[116px] px-1 rounded-[3px] text-white-A700 text-xs"
                      size="txtGilroyRegular12"
                    >
                      09:54
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Let’s Travel
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoLibraryPage;
