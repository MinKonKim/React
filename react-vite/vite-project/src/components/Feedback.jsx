import React from "react";

const Feedback = () => {
  const image = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc";
  return (
    <section
      name="testimonials"
      className="w-full my-24 text-white bg-slate-700"
    >
      <div className="max-w-6xl px-5 mx-auto text-center py-12">
        <h2 className="text-4xl font-bold text-center">Testimonials</h2>
        <p className="py-8 text-2xl text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold text-slate-700"> Young sacura</h5>
            <p className="text-sm text-slate-700">
              “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.”
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold text-slate-700"> Young sacura</h5>
            <p className="text-sm text-slate-700">
              “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.”
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold text-slate-700"> Young sacura</h5>
            <p className="text-sm text-slate-700">
              “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.”
            </p>
          </div>
        </div>

        <button className="px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Feedback;
