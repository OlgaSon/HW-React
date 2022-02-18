const NewToDoForm = ({ value, updateText, handleClick }) => {
    return (
      <label>
        <input
          placeholer='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button onClick={handleClick}>Add ToDo</button>
      </label>
    );
  };
  
  export default NewToDoForm;