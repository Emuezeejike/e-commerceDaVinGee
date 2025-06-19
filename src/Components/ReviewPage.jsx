import React, { useState } from "react";

// A simple Customer Review Component
const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Brian Tosin",
      rating: 5,
      comment:
        "This is my third pair from [Your Brand Name], and every purchase has been worth it. Excellent customer service, fast shipping, and quality you can feel. Highly recommend!",
      date: "2025-06-18",
    },
    {
      id: 2,
      name: "Olushegun Matthew",
      rating: 4,
      comment:
        "I’m always skeptical about buying shoes online, but these fit perfectly and exceeded my expectations. The sole is sturdy, and the insole is super cushioned. Amazing value for the price!",
      date: "2025-06-17",
    },
    {
      id: 3,
      name: "Uzor Wisdom",
      rating: 5,
      comment:
        "I’ve tried so many brands, but these sneakers from [Your Brand Name] are on another level. Super lightweight, breathable, and perfect for walking or casual wear. I wear them all day and my feet never feel tired!",
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
