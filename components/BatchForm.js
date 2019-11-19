import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_BATCH = gql`
  mutation addBatch($batch: BatchInput) {
    addBatch(batch: $batch) {
      _id
      name
    }
  }
`;

const BatchForm = () => {
  const [name, setName] = useState("");
  const [addBatch] = useMutation(ADD_BATCH);
  // const [teaType, setTeaType] = useState("");
  // const [teaAmount, setTeaAmount] = useState("");
  // const [sugarAmount, setSugarAmount] = useState("");
  // //get a date library for these bottom two;
  // const [dateCreated, setDateCreated] = useState("");
  // const [dateBottled, setDateBottled] = useState("");

  const handleSubmit = data => {
    console.log("in handle submit");
    console.log("name", name);
    event.preventDefault();
    addBatch({
      variables: {
        batch: {
          name: name
        }
      }
    });
  };

  return (
    <form onSubmit={data => handleSubmit(data)}>
      <input
        type="name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      {/* <input type="tea-type" value={teaType} onChange={setTeaType} />
      <input type="tea-amount" value={teaAmount} onChange={setTeaAmount} />
      <input
        type="sugar-amount"
        value={sugarAmount}
        onChange={setSugarAmount}
      />
      <input
        type="date-created"
        value={dateCreated}
        onChange={setDateCreated}
      />
      <input
        type="date-bottled"
        value={dateBottled}
        onChange={setDateBottled}
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BatchForm;
