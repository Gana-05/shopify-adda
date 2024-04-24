import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const GoogleLoginPage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start mb-[18px] w-[45%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start w-full">
            <Img
              className="h-[35px] w-[32%]"
              src="images/img_group_1.svg"
              alt="Group"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Sign in to Recharge Direct
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Email
                    </Text>
                  </div>
                  <Input
                    name="email"
                    placeholder="jane@gmail.com"
                    className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium md:h-auto p-0 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Password
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-end justify-start mt-1 w-full">
                    <Input
                      name="InputField"
                      placeholder="Enter Password"
                      className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto rounded-lg w-[512px] sm:w-full"
                      type="password"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] mr-3 my-4"
                          src="images/img_eye.svg"
                          alt="eye"
                        />
                      }
                    ></Input>
                    <a href="javascript:" className="text-blue-A700 text-lg">
                      <Text size="txtGilroyMedium18BlueA700">
                        Forgot Password?
                      </Text>
                    </a>
                  </div>
                </div>
                <Button className="cursor-pointer font-medium text-base text-center w-[512px]">
                  Log in
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[29px] items-center justify-start pt-1 rounded-md w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-[78%] md:w-full">
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[33%]" />
              <a href="javascript:" className="text-base text-blue_gray-200">
                <Text size="txtGilroyRegular16">Or continue with</Text>
              </a>
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[33%]" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[512px] sm:min-w-full"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    className="h-6 ml-[35px] mr-2 my-[13px]"
                    src="images/img_google.svg"
                    alt="google"
                  />
                }
                size="md"
                variant="outline"
              >
                <div className="font-medium text-base text-left">
                  Sign in with Google
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[512px] sm:min-w-full mt-[17px]"
                leftIcon={
                  <div className="h-6 ml-[35px] mr-2 pt-1 pl-[9px] pr-[3px] w-6 bg-blue-700 rounded-[3px] my-[13px] flex justify-center items-center">
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </div>
                }
                size="md"
                variant="outline"
              >
                <div className="font-medium text-base text-left">
                  Sign in with Facebook
                </div>
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[512px] sm:min-w-full mt-[17px] text-base text-center"
                variant="outline"
              >
                Sign in with Linkedin
              </Button>
              <Text
                className="mt-[29px] text-base text-gray-900_01"
                size="txtGilroyRegular16Gray90001"
              >
                <span className="text-colors font-gilroy text-left font-normal">
                  Don’t have an account?{" "}
                </span>
                <span className="text-colors font-gilroy text-left font-bold">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-colors1 font-gilroy text-left font-bold underline"
                >
                  Sign up.
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleLoginPage;
