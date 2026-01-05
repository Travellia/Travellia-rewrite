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
            <div class="grid grid-cols-2 gap-4 mb-4 w-full">
              <div className="">
                <label
                  for="firstName"
                  class="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First name..."
                  class="w-full p-5 bg-white rounded-md"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last name..."
                  class="w-full p-5 bg-white rounded-md"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4 w-full">
              <div>
                <label
                  for="email"
                  class="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@travellia.com"
                  class="w-full p-5 bg-white rounded-md"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-bold pl-5 text-gray-500 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+44 55 66 77 88"
                  class="w-full p-5 bg-white rounded-md"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                for="instructions"
                class="block text-sm font-bold pl-5 text-gray-500 mb-1"
              >
                Booking Instructions
              </label>
              <textarea
                id="instructions"
                placeholder="Booking Instructions..."
                class="w-full p-5 bg-white rounded-md h-40"
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
