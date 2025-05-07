const DefaultSection = ({ title, description, footer, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{footer}</p>
    </div>
  );
};

export default DefaultSection;
