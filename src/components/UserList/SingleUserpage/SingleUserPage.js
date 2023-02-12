import { useParams } from "react-router-dom";
import { UserListData } from "../UserListData";
import "./SingleUserPage.css";

function SingleUserPage() {
  const { userId } = useParams();
  const user = UserListData.find((user) => user.id == userId);
  const { img, firstname, lastname, city, country, email } = user;
  console.log(user);
  return <div>SingleUserPage</div>;
}

export default SingleUserPage;
