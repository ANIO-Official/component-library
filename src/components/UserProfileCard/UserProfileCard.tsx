import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <>
      <div className="user-pfp">
        <img src={`${user.avatarUrl}`} alt={`${user.name}'s avatar / profile picture.`} hidden={user.avatarUrl !== undefined? false:true}/>
      </div>
      <div className="user-overview">
        <h2>{user.name}</h2>
        <p>
          <b>Email:</b> {showEmail ? user.email : "hidden ( ˘︹˘ )"}
          <br />
          <b>Role:</b> {showRole ? user.role : "hidden ( ˘︹˘ )"}
          <br />
          <br />
          <button
            onClick={() =>
              onEdit !== undefined ? onEdit(user.id, user.name) : false
            }
          >
            Edit Profile
          </button>
          <br />
          <div className="user-bio">
            {children}
          </div>
        </p>
      </div>
    </>
  );
}
