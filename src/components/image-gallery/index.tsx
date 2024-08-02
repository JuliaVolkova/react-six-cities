type ImageProps = {
  src: string;
}

type ImageGalleryProps = {
  images: string[];
}

const Image = ({src}: ImageProps): JSX.Element => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={src} alt="Photo studio"/>
  </div>
);

const ImageGallery = ({images}: ImageGalleryProps): JSX.Element => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {images.map((src) => <Image key={src} src={src}/>)}
    </div>
  </div>
);

export default ImageGallery;
