import NewNoteForm from "./NewNoteForm";
import { useGetUsersQuery } from "../users/usersApiSlice";
import CircleLoader from "react-spinners/CircleLoader";
import useTitle from "../../hooks/useTitle";

const NewNote = () => {
  useTitle("Create techNote");
  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users?.length) return <CircleLoader color={"#FFF"} />;

  const content = <NewNoteForm users={users} />;

  return content;
};
export default NewNote;
