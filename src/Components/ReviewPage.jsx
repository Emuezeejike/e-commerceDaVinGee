import React, { useState } from "react";

// A simple Customer Review Component
const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Yusuf Akande",
      rating: 5,
      comment:
        "I was completely overwhelmed with the college application process, but Rich Wisdom Global Limited made everything clear and manageable. From helping me shortlist universities to refining my statement of purpose, their advice was spot-on. I got accepted into three of my top choices, and I could not have done it without them!",
      date: "2025-06-18",
    },
    {
      id: 2,
      name: "Olushegun Bukola",
      rating: 4,
      comment:
        "As a parent, I wanted the best for my son but had no idea where to begin with international universities. The team walked us through the entire process—from course selection to visa assistance. Their professionalism and care gave us total peace of mind.",
      date: "2025-06-17",
    },
    {
      id: 3,
      name: "Mark Nelson",
      rating: 5,
      comment:
        "I was not only accepted into my dream university in the UK but also received a partial scholarship—thanks to the detailed guidance on my essay and application. I felt supported and valued throughout the process.",
      date: "2025-06-17",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    setReviews([
      {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().toISOString().split("T")[0],
      },
      ...reviews,
    ]);
    setNewReview({ name: "", rating: 5, comment: "" });
  };

  const renderStars = (num) => {
    return (
      <span>
        {Array.from({ length: 5 }).map((_, i) => (i < num ? "★" : "☆"))}
      </span>
    );
  };

  return (
    <div className="bg-amber-100">
      <div className="lg: w-[90%] m-auto md:w-[70%] sd:w-[60%]" >
        <h2 className="font-bold text-2xl text-center my-4 font-croissant">Reviews/Testimonies</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {reviews.map((rev) => (
            <li
              key={rev.id}
              style={{
                marginBottom: 20,
                borderBottom: "1px solid #eee",
                paddingBottom: 10,
              }}
            >
              <div>
                <strong>{rev.name}</strong>{" "}
                <span style={{ color: "#f5b50a" }}>
                  {renderStars(rev.rating)}
                </span>
              </div>
              <div style={{ fontSize: 14, color: "#666" }}>{rev.date}</div>
              <div className="text-justify" style={{ marginTop: 4 }}>{rev.comment}</div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleInputChange}
              style={{ marginRight: 8 }}
              required
            />
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              style={{ marginRight: 8 }}
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              name="comment"
              placeholder="Write your review..."
              value={newReview.comment}
              onChange={handleInputChange}
              rows={3}
              style={{ width: "100%", marginTop: 8 }}
              required
            />
          </div>
          <button
            className="bg-gray-500 hover:cursor-pointer hover:bg-gray-800 text-white p-2 rounded-lg"
            type="submit"
            style={{ marginTop: 8 }}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
