import "./Avatar.css";

type Props = {
  alt: string;
  src: string;
};

const Avatar = (props: Props) => {
  const { alt, src } = props;

  return (
    <div className="avatar">
      <img
        className="avatarImg"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
