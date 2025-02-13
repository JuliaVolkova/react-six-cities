import { memo } from 'react';
import { OfferType } from '../../types/offers.ts';

type FeaturesProps = {
  features: [OfferType, number, number];
};

const OfferFeatures = memo(
  ({ features: [type, bedrooms, maxAdults] }: FeaturesProps): JSX.Element => (
    <ul className='offer__features'>
      <li className='offer__feature offer__feature--entire'>
        {type.toUpperCase()}
      </li>
      <li className='offer__feature offer__feature--bedrooms'>
        {`${bedrooms} Bedrooms`}
      </li>
      <li className='offer__feature offer__feature--adults'>
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  ),
);

OfferFeatures.displayName = 'OfferFeatures';

export default OfferFeatures;
