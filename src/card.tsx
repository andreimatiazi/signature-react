import React from "react";

type ProfileCardProps = {
  imageUrl: string;
  alt: string;
};

type ContactInfoProps = {
  iconUrl: string;
  alt: string;
  text: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, alt }) => (
  <div className="profile-card">
    <img src={imageUrl} alt={alt} className="profile-image" />
  </div>
);

const ContactInfo: React.FC<ContactInfoProps> = ({ iconUrl, alt, text }) => (
  <div className="contact-info">
    <img src={iconUrl} alt={alt} className="icon" />
    <div className="text">{text}</div>
  </div>
);

const ContactDetails: React.FC = () => {
  const contactInfos: ContactInfoProps[] = [
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/78e05bdc7c7abb9314a2eb05024f4c803ac44ae0878acd856d7b720a17aa37fd?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
      alt: "Phone",
      text: "(11) 99280-1287",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e4eea556815312d66746ab779c4b08011219105c6dcd627ae350006e2d86eaf7?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
      alt: "Landline Phone",
      text: "(11) 2359-3409",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb6046afdfc2ff3358614b01b64f1794d6929a0c8c8d0d0e8ffd03a609658c38?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&",
      alt: "Location",
      text: "Av. Jabaquara, 2958 - 10º andar CJ 101/102 - Metrô São Judas São Paulo - SP",
    },
  ];

  return (
    <>
      {contactInfos.map((info) => (
        <ContactInfo key={info.text} {...info} />
      ))}
    </>
  );
};

const PersonProfile: React.FC = () => {
  const profileUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9acd9063fcd5abdd0729cf8a569312349408f9523d461129016873ee1dfcb1e9?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&";
  const altText = "Profile Picture";

  return (
    <section>
      <header>
        <ProfileCard imageUrl={profileUrl} alt={altText} />
      </header>
      <main>
        <div className="name">Flávio de Oliveira</div>
        <div className="title">Contador/Advogado</div>
        <ContactDetails />
      </main>
      <footer>
        <div className="social-icons">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f633a673b2060167768df0916e2f09026b89c1731a0ab608006cffd54f1aa7fe?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&"
            alt="Social Icon 1"
            className="social-icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b3e52aab75088f4055f7a9bc87d5b8a14b5fa6813c9b11f172fda82fe23fd5?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&"
            alt="Social Icon 2"
            className="social-icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7fd86e82295442e28c2a159cf8e8eb1e18f70f26fc269855d2c6ad7979bb8e8?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&"
            alt="Social Icon 3"
            className="social-icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44e3d86148cad40114252a0104dcc631d6d9847b817645d5ae91f85850a6f83?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&"
            alt="Social Icon 4"
            className="social-icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b720ff2774972441f663b41cef672bc8e7dadbc04e4b8bdf8124accd7c50c169?apiKey=6ffe2db7c8b54cf799b9ea48077a57d6&"
            alt="Social Icon 5"
            className="social-icon"
          />
        </div>
      </footer>
    </section>
  );
};

export default PersonProfile;

<style>{`
  .profile-card {
    display: flex;
    justify-content: center;
    padding: 48px;
  }

  .profile-image,
  .icon {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .profile-image {
    border-radius: 50%;
  }

  .name {
    color: #ac9254;
    font-weight: 700;
    font-size: 27px;
  }

  .title {
    font-weight: 500;
    margin-top: 8px;
  }

  .contact-info {
    display: flex;
    margin-top: 23px;
    gap: 7px;
  }

  .text {
    margin: auto 0;
  }

  .social-icons {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
  }

  .social-icon {
    aspect-ratio: 1;
    width: 39px;
  }

  @media (max-width: 991px) {
    .profile-card {
      padding: 0 20px;
      margin-top: 20px;
    }
  }
`}</style>;
