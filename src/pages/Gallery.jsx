import React from "react";
import "./Gallery.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    title: "Live Music Night",
    category: "Music",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    title: "Music Festival",
    category: "Music",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    title: "Royal Wedding",
    category: "Wedding",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    title: "Wedding Celebration",
    category: "Wedding",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    title: "Birthday Celebration",
    category: "Birthday Party",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464047736614-af63643285bf?auto=format&fit=crop&w=800&q=80",
    title: "Birthday Party",
    category: "Birthday Party",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    title: "College Event",
    category: "College",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    title: "Technology Workshop",
    category: "Workshop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    title: "Educational Seminar",
    category: "Seminar",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
    title: "Modern Art Exhibition",
    category: "Exhibition",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    title: "Business Conference",
    category: "Conference",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=800&q=80",
    title: "Anniversary Celebration",
    category: "Anniversary",
  },
];

function Gallery() {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Event Gallery</h1>
        <p>
          Explore memorable moments from our amazing events and celebrations.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;