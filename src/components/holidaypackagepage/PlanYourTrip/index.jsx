import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import React from "react";

const Index = () => {
  return (
    <section className="bg-secondary">
      <ContentLayoutWrapper className="flex flex-col gap-5 items-center py-20">
        {/* Heading */}
        <div className="flex flex-col text-center heading-big">
          <h1 className="">PLAN YOUR TRIP</h1>
          <h1 className=" text-black pt-3">WITH US</h1>
        </div>

        {/* Form */}
        <div className="w-full">
          <form className="">
            <div className="grid grid-cols-2 gap-4 mb-4 w-full">
              <div className="">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First name..."
                  className="w-full p-5 bg-white rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last name..."
                  className="w-full p-5 bg-white rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 w-full">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@travellia.com"
                  className="w-full p-5 bg-white rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+44 55 66 77 88"
                  className="w-full p-5 bg-white rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="instructions"
                className="block text-sm font-bold pl-5 text-gray-500 mb-1"
              >
                Booking Instructions
              </label>
              <textarea
                id="instructions"
                placeholder="Booking Instructions..."
                className="w-full p-5 bg-white rounded-md h-40"
              ></textarea>
            </div>
            <div className="flex justify-center py-6">
              <Button type="submit" class="w-auto btn-main ">
                Booking Instructions
              </Button>
            </div>
          </form>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Index;
