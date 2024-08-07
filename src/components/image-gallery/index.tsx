import { memo } from 'react';

type ImageProps = {
  src: string;
};

type ImageGalleryProps = {
  images: string[];
};

const Image = memo(
  ({ src }: ImageProps): JSX.Element => (
    <div className='offer__image-wrapper'>
      <img
        className='offer__image'
        src={src}
        alt='Photo studio'
      />
    </div>
  )
);

Image.displayName = 'Image';

const ImageGallery = memo(
  ({ images }: ImageGalleryProps): JSX.Element => (
    <div className='offer__gallery-container container'>
      <div className='offer__gallery'>
        {images.map((src) => (
          <Image
            key={src}
            src={src}
          />
        ))}
      </div>
    </div>
  )
);

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;
