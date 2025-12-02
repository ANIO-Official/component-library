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
      <h2>
        {user.name} | {user.id}
      </h2>
      <p>
        <b>Email:</b> {showEmail ? user.email : "hidden ( ˘︹˘ )"}
        <br />
        <b>Role:</b> {showRole ? user.role : "hidden ( ˘︹˘ )"}
        <br />
        <button type="button" onClick={()=>onEdit}></button>
        <br />
        <b>Bio:</b>
        <br />
        {children}
      </p>
    </>
  );
}
