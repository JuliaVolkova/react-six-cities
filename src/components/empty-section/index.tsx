type EmptySectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

// No places to stay available
// {`We could not find any property available at the moment in ${currentCity}`}

const EmptySection = ({ title, description, children }: EmptySectionProps) => (
  <div className="cities">
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">{title}</b>
          <p className="cities__status-description">{description}</p>
          {children}
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  </div>
);

export default EmptySection;
