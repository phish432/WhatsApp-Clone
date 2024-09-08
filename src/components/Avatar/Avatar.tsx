import "./Avatar.css";

type Props = {
  src: string;
  alt: string;
};

const Avatar = (props: Props) => {
  return (
    <div className="avatar">
      <img className="avatarImg" src={props.src} alt={props.alt} />
    </div>
  );
};

export default Avatar;
