import { memo } from 'react';

type DescriptionProps = {
  description: string;
}

const Description = memo(({ description }: DescriptionProps): JSX.Element => (
  <div className="offer__description">
    <p className="offer__text">{description}</p>
  </div>
));

Description.displayName = 'Description';

export default Description;
