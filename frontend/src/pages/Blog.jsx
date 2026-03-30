import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {

  const blogs = [
    {
      title: "5 Tips for a Healthy Heart",
      desc: "Regular exercise, balanced diet, and stress management help maintain heart health.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      date: "March 10, 2026",
      tag: "Health"
    },
    {
      title: "When Should You Visit a Doctor?",
      desc: "If you experience persistent symptoms like fever, fatigue, or pain, consult a doctor.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
      date: "March 5, 2026",
      tag: "Medical"
    },
    {
      title: "Importance of Regular Health Checkups",
      desc: "Routine health checkups help detect diseases early and keep your body healthy.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      date: "February 28, 2026",
      tag: "Checkup"
    },
    {
      title: "How to Boost Your Immune System",
      desc: "Eating nutritious food, sleeping well, and staying active improves immunity.",
      image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
      date: "February 20, 2026",
      tag: "Fitness"
    }
  ]

  return (
    <div className="px-6 py-12 md:px-10 lg:px-20 bg-gray-50">

      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Health <span className="text-primary">Insights</span>
        </h1>
        <p className="mt-3 text-gray-500">
          Explore expert advice, medical tips, and wellness guides.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-10 md:grid-cols-2">

        {blogs.map((blog, index) => (

          <Link to={`/blog/${index}`} key={index}>
            <div className="overflow-hidden transition duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1">

              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt=""
                  className="object-cover w-full h-56"
                />

                {/* Tag */}
                <span className="absolute px-3 py-1 text-xs text-white rounded-full top-3 left-3 bg-primary">
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-sm text-gray-400">{blog.date}</p>

                <h2 className="mt-2 text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-500">
                  {blog.desc}
                </p>

                <div className="mt-4 font-medium text-primary">
                  Read More →
                </div>

              </div>

            </div>
          </Link>

        ))}

      </div>

    </div>
  )
}

export default Blog