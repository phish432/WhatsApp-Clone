import "./Avatar.css";

type Props = {
  src: string;
  alt: string;
};

const Avatar = (props: Props) => {
  const { src, alt } = props;

  return (
    <div className="avatar">
      <img className="avatarImg" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
