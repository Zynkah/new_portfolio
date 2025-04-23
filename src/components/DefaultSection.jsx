const DefaultSection = ({ title, description, footer }) => {
  return (
    <div className="SectionContainer">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{footer}</p>
    </div>
  );
};

export default DefaultSection;
