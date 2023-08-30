// eslint-disable-next-line react/prop-types
const FormContainer = ({ key2, onRemove }) => {
  return (
    <div className="achievmentForm">
      <div className="achievmentTitle">
        <label htmlFor="aTitle">Title</label>
        <input type="text" name="aTitle"></input>
      </div>
      <div className="achievmentDesc">
        <label htmlFor="aDesc">Description</label>
        <textarea name="aDesc" />
      </div>
      <button onClick={() => onRemove(key2)}>Remove Achievment</button>
    </div>
  );
};

export default FormContainer;
