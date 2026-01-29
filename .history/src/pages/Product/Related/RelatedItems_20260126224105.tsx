
const items = [
  {
    id: 1,
    title: 'Wooden Aesthetic Chair',
    category: 'Decoration',
    description: 'Combination of wood and wool',
    price: '$58.39',
    image: '/images/item1.jpg',
  },
  {
    id: 2,
    title: 'Plant With Clay Stand',
    category: 'Decoration',
    description: 'Combination of wood and wool',
    price: '$61.49',
    image: '/images/item2.jpg',
  },
  {
    id: 3,
    title: 'Oval Gold Mirror',
    category: 'Decoration',
    description: 'Combination of wood and wool',
    price: '$32.43',
    image: '/images/item3.jpg',
  },
  {
    id: 4,
    title: 'Wooden Mirror',
    category: 'Decoration',
    description: 'Combination of wood and wool',
    price: '$63.47',
    image: '/images/item4.jpg',
  },
];

export default function RelatedItems() {
  return (
    <section className="related">
      <h2 className="related__title">Related Items</h2>

      <div className="related__grid">
        {items.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="card__content">
              <span className="card__category">{item.category}</span>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__desc">{item.description}</p>
              <strong className="card__price">{item.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



