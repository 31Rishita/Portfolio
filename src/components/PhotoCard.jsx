import photo from "../assets/Photo.jpeg";

export default function PhotoCard() {
  return (
    <div className="photo-circle">
      <img
        src={photo}
        alt="Rishita"
        className="profile-img"
      />
    </div>
  );
}