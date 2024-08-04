type OfferGoodItemProps = {
  goodItem: string;
};

type OfferGoodsProps = {
  goods: string[];
};

const OfferGoodItem = ({ goodItem }: OfferGoodItemProps): JSX.Element => (
  <li className="offer__inside-item">
    {goodItem}
  </li>
);

const OfferGoods = ({ goods }: OfferGoodsProps): JSX.Element => (
  <ul className="offer__inside-list">
    {goods.map((goodItem) => <OfferGoodItem goodItem={goodItem} key={goodItem} />)}
  </ul>
);

export default OfferGoods;
