import ComposableUser from "./ComposableUser";


const data = [
  { id: "uniq1", name: "Paul" },
  { id: "uniq2", name: "Mary" },
  { id: "uniq3", name: "Viktor" },
  { id: "uniq4", name: "Suzanna" },
  { id: "uniq5", name: "Peter" },
  { id: "uniq6", name: "Vladislav" },
  { id: "uniq7", name: "Anna" }
];


const ComposableUserList = () => {
  return (
    <div>
      {data.map((item) => (
        <ComposableUser key={item.id}>{item.name}</ComposableUser>
      ))}
    </div>
  );
};


export default ComposableUserList;