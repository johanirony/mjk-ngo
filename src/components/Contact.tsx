"use client";
import React from 'react';

export default function Contact() {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.8048507622359!2d72.82566716957449!3d19.054088766511114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c940f4ed9309%3A0xbf9b5394b79b5418!2s77-B%2C%20Waroda%20Rd%2C%20Ranwar%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1720526392664!5m2!1sen!2sin";

  return (
    <div className="w-full h-auto bg-[#e7f3ff] grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Section (Form) */}
      <div className="p-8 md:p-12">
        <h1 className="text-2xl md:text-4xl text-[#1C3765] font-semibold mb-4">
          Get in touch with us
        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1C3765]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#24A3BF] focus:ring-[#24A3BF]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1C3765]">Email</label>
            <input
              type="mail"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#24A3BF] focus:ring-[#24A3BF]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1C3765]">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#24A3BF] focus:ring-[#24A3BF]"
            />
          </div>
          
          {/* Repeat similar structure for email and phone inputs */}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1C3765]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#24A3BF] focus:ring-[#24A3BF]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#24A3BF] text-white rounded-md hover:bg-[#1C3765] focus:outline-none focus:ring-2 focus:ring-[#24A3BF]"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Section (Map) */}
      <div>
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0, filter:"hue-rotate(180deg) saturate(2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          
        ></iframe>
      </div>
    </div>
  );
}
