function isPalindrome({ children }) {
  let len = Math.floor(children.length / 2);
  for (let i = 0; i < len; i++)
    if (children.toLowerCase()[i] !== children[children.length - i - 1]) return false;
    else return true;
}

const ComposableUser = ({ children }) => {
  if (children.indexOf("e") !== -1) {
    return <div>It’s Premium User! Welcome, {children}!</div>;
  } else if (children.length > 5) {
    children = `${children.slice(0, 5)}...`;
    return <div>It's user {children}</div>;
  } else if (isPalindrome({ children })) {
    return <div className="name--highlighted">It's user {children}</div>;
  } else {
    return <div>It's user {children}</div>;
  }
}


export default ComposableUser;


/* Задание 3
Реализуйте компонент ComposableUser, который бы соответствовал всем требованиям задач 1 и 2, 
только чтобы компонент User свойство name получал не через props.name, а через children:
Было: <User name=”Viktor” />
Должно стать: <ComposableUser>Viktor</ComposableUser> */
