import { memo } from 'react';

type OfferGoodItemProps = {
  goodItem: string;
};

type OfferGoodsProps = {
  goods: string[];
};

const OfferGoodItem = memo(
  ({ goodItem }: OfferGoodItemProps): JSX.Element => (
    <li className='offer__inside-item'>{goodItem}</li>
  )
);

OfferGoodItem.displayName = 'OfferGoodItem';

const OfferGoods = memo(
  ({ goods }: OfferGoodsProps): JSX.Element => (
    <ul className='offer__inside-list'>
      {goods.map((goodItem) => (
        <OfferGoodItem
          goodItem={goodItem}
          key={goodItem}
        />
      ))}
    </ul>
  )
);

OfferGoods.displayName = 'OfferGoods';

export default OfferGoods;
