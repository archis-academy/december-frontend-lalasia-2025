import React from "react";
import "./TopHeadlines.scss";

type NewsItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    category: "Design Inspiration",
    title: "Bedroom Design is the Most Personal...",
    description:
      "Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person...",
    author: "Jenny Agnes",
    date: "Tuesday, 21 May 2022",
    image: "/images/bedroom.jpg",
  },
  {
    id: 2,
    category: "Tips and Trick",
    title: "Create a non-monotonous and dynamic...",
    description:
      "Quoted from The Healthy Home Economist, a study in 1932 stated that color doesn't really have to be visible to have an effect.",
    author: "Juliana Athorn",
    date: "Wednesday, 22 January 2022",
    image: "/images/livingroom.jpg",
  },
];

const TopHeadlines: React.FC = () => {
  return (
    <section className="top-headlines">
      <h2 className="section-title">Today top headlines</h2>

      <div className="cards">
        {newsData.map((item) => (
          <article key={item.id} className="card">
            <img src={item.image} alt={item.title} />

            <div className="content">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>

              <div className="meta">
                <span className="author">By {item.author}</span>
                <span className="date">{item.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopHeadlines;
