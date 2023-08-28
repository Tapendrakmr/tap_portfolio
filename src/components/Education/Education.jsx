import { useState } from "react";
import FormContainer from "./FormContainer/FormContainer";
const Education = () => {
  const [formContainers, setFormContainers] = useState([]);

  const addFormContainer = () => {
    setFormContainers([
      ...formContainers,
      <FormContainer
        key={formContainers.length}
        onRemove={() => removeFormContainer(formContainers.length)}
      />,
    ]);
  };
  const removeFormContainer = (index) => {
    const updatedContainers = formContainers.filter((_, i) => i !== index);
    setFormContainers(updatedContainers);
  };

  return (
    <div>
      <div className="container">
        <button onClick={addFormContainer}>Add Form</button>
        {formContainers.map((FormContainerComponent, index) => (
          <div key={index}>{FormContainerComponent}</div>
        ))}
      </div>

      {/* <div className="submitBtn">
        <input type="submit" />
      </div> */}
    </div>
  );
};

export default Education;
