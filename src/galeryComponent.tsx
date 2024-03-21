import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image = ({ src, alt, className }: ImageProps) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const imagesData = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ea0aa04e785485b6223784a6b21ab781525538df9044064c81633018c135f23?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
    alt: "Image description",
    className: "image",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bf1b3481b2d87e99da89d780cca35f834677989a9103039832c85a564b5bc3d?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
    alt: "Image description",
    className: "thumbnail",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa93444befe41b6a1d83fc52f887578614ec301114e8a415b0fec6bc7fee73f7?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
    alt: "Image description",
    className: "icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/39a8ee36b9885aa928b9e5dd299c88fb1ada12e4e91fd7b72696315a0169c157?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
    alt: "Image description",
    className: "icon",
  },
];

const GalleryComponent: React.FC = () => {
  return (
    <>
      <section className="gallery">
        {imagesData.map((img, index) => (
          <Image key={index} {...img} />
        ))}
      </section>
      <style>{`
        .gallery {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .gallery {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
          }
        }
        .image {
          aspect-ratio: 0.02;
          object-fit: cover;
          width: 6px;
        }
        .feature-image {
          aspect-ratio: 1.92;
          object-fit: cover;
          width: 100%;
        }
        .thumbnail {
          aspect-ratio: 1;
          object-fit: cover;
          width: 186px;
          max-width: 100%;
        }
        .icon {
          aspect-ratio: 1;
          object-fit: cover;
          width: 83px;
          &:not(:first-child) {
            margin-top: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default GalleryComponent;
