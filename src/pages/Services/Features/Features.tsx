import styles from './Features.module.scss';

const featuresData = [
  { id: "01", title: "Furniture", desc: "At the ultimate smart home, you're met with technology before you even step through the front door." },
  { id: "02", title: "Home Decoration", desc: "Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings." },
  { id: "03", title: "Kitchen Cabinet", desc: "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets." },
  { id: "04", title: "Interior Design", desc: "Innovative products often feature innovative designs that play with the patterns we are familiar." },
  { id: "05", title: "Exterior Design", desc: "These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces." },
  { id: "06", title: "Custom Furniture", desc: "With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs." }
];

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {featuresData.map((item) => (
          <div key={item.id} className={styles.card}>
            <span className={styles.number}>{item.id}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;