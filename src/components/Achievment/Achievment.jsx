import { useState } from "react";
import FormContainer from "./FormContainer/FormContainer";
const Achievment = () => {
  const [formContainers, setFormContainers] = useState([
    {
      id: Math.random(),
    },
  ]);
  const addFormContainer = (id) => {
    setFormContainers([
      ...formContainers,
      {
        id: id,
      },
    ]);
  };
  const removeFormContainer = (index) => {
    const updatedContainers = formContainers.filter((x) => x.id != index);

    setFormContainers(updatedContainers);
  };
  return (
    <div>
      <div className="achievmentContainer">
        {formContainers.map((FormContainerComponent, index) => (
          <div key={index}>
            {
              <FormContainer
                key={FormContainerComponent.id}
                key2={FormContainerComponent.id}
                onRemove={(id) => removeFormContainer(id)}
              />
            }
          </div>
        ))}
      </div>
      <button onClick={() => addFormContainer(Math.random())}>Add Form</button>
    </div>
  );
};

export default Achievment;
