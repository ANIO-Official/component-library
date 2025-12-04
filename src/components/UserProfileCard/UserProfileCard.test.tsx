import type { User } from "../../types";
import avatar1 from "../../assets/user profile pictures/woman-user-circle-black-icon.svg"
import avatar2 from "../../assets/user profile pictures/my-account-icon.svg"
//Fake Users
export const user1: User = {
  id: "user9945623",
  name: "Calli Fornia",
  email: "calli.fornia@hotmail.com",
  role: "Admin",
  avatarUrl: avatar1
};

export const user2: User = {
  id: "user7834051",
  name: "James Wu",
  email: "jameswu48@gmail.com",
  role: "User",
};
export const user3: User = {
  id: "user9957356",
  name: "Hank Roberty",
  email: "roberty.hank@yahoo.com",
  role: "Moderator",
  avatarUrl: avatar2
};