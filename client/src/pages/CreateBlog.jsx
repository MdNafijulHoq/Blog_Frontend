import React from 'react';
import RootLayout from '../RootLayout/RootLayout';

const CreateBlog = () => {
    return (
        <RootLayout>
              <div className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create a New Blog
      </h2>

      <form className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            rows="6"
            placeholder="Write your blog content here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select category</option>
            <option value="tech">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Tags</label>
          <input
            type="text"
            placeholder="e.g. react, tailwind, blog"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full file:border-0 file:bg-primary file:text-white file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
          />
        </div>
       

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition duration-300 shadow-md"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
        </RootLayout>
    );
};

export default CreateBlog;