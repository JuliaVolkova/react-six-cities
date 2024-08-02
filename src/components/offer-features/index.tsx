type FeatureProps = {
  feature: string;
};

type FeaturesProps = {
  features: string[];
};

const OfferFeature = ({ feature }: FeatureProps): JSX.Element => (
  <li className="offer__feature offer__feature--entire">
    {feature}
  </li>
);

const OfferFeatures = ({ features }: FeaturesProps): JSX.Element => (
  <ul className="offer__features">
    {features.map((feature) => <OfferFeature feature={feature} key={feature} />)}
  </ul>
);

export default OfferFeatures;
