import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

function page() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-lemon-900">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-8 rounded-md  w-full md:max-w-md">
          <h1 className="text-4xl text-center font-extrabold mb-6 text-white">
            Get in Touch
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-300 block mx-auto w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
