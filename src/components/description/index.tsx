type DescriptionProps = {
  description: string;
}

const Description = ({ description }: DescriptionProps): JSX.Element => (
  <div className="offer__description">
    <p className="offer__text">{description}</p>
  </div>
);

export default Description;
