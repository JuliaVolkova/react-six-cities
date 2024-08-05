import { memo } from 'react';

type FeatureProps = {
  feature: string;
};

type FeaturesProps = {
  features: string[];
};

const OfferFeature = memo(({ feature }: FeatureProps): JSX.Element => (
  <li className="offer__feature offer__feature--entire">
    {feature}
  </li>
));

OfferFeature.displayName = 'OfferFeature';

const OfferFeatures = memo(({ features }: FeaturesProps): JSX.Element => (
  <ul className="offer__features">
    {features.map((feature) => <OfferFeature feature={feature} key={feature} />)}
  </ul>
));

OfferFeatures.displayName = 'OfferFeatures';

export default OfferFeatures;
