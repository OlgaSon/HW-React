const isPalindrome = (name) => {
  let len = Math.floor(name.length / 2);
  for (let i = 0; i < len; i++) {
    if (name.toLowerCase()[i] !== name[name.length - i - 1]) return false;
    else if (i === len - 1) return true
    else continue
  };
};

const findE = (name) => {
  return name.includes('e') ? `It’s Premium User! Welcome, ${name}!` : `It's user ${name}`
};

const slice5 = (name) => {
  return name.length > 5 ? `${name.substring(0, 5)}...` : name
};

const User = ({ name }) => {
  return isPalindrome(name)
    ? (<div className="name--highlighted">{findE(slice5(name))}</div>)
    : (<div>{findE(slice5(name))}</div>)
};


//   if (name.indexOf("e") !== -1) {
//     return <div>It’s Premium User! Welcome, {name}!</div>;
//   } else if (name.length > 5) {
//     name = `${name.slice(0, 5)}...`;
//     return <div>It's user {name}</div>;
//   } else if (isPalindrome(name)) {
//     return <div className="name--highlighted">It's user {name}</div>;
//   } else {
//     return <div>It's user {name}</div>;
//   }
// };


export default User;


/* Задание 2.1
Создайте компонент UserList, а также компонент User, который будет принимать в props’ах 
name (имя пользователя) и рендерить строку в span вида `It’s user ${name}`. 
Далее Вам необходимо в компоненте UserList пройтись по массиву пользователей: [{id: "uniq1", name:"Paul"}, 
{id: "uniq2", name:"Mary"}, {id: "uniq3", name:"Viktor"}, {id: "uniq4", name:"Suzanna"}, 
{id: "uniq5", name:"Peter"}, {id: "uniq6", name:"Vladislav"}, {id: "uniq7", name:"Anna"}]
и отрендерить каждый элемент массива с помощью компонента User, 
пробросив ему нужное поле в качестве props. 

Задание 2.2
Используя массив пользователей и компоненты из предыдущего задания, реализуйте внутри компонента User следующую функциональность:
1) Если в name содержится буква `e`, то текст должен быть следующим: `It’s Premium User! Welcome, ${name}!`
2) Если name больше 5 букв, то обрезать имя до 5 букв, добавляя три точки к концу имени. Пример: Vladislav => It’s user Vladi...
3) Если имя - палиндром (без учета регистра), на элемент должен примениться класс `name--highlighted`, который применяет красный цвет к тексту элемента    */