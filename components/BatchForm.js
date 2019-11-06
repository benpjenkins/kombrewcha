import { useState } from 'react';

const BatchForm = () => {
  const [name, setName] = useState('');
  const [teaType, setTeaType] = useState('');
  const [teaAmount, setTeaAmount] = useState('');
  const [sugarAmount, setSugarAmount] = useState('');
  //get a date library for these bottom two;
  const [dateCreated, setDateCreated] = useState('');
  const [dateBottled, setDateBottled] = useState('');

  const handleSubmit = (data) => {
    console.log(data);
  };


  return (
  <form onSubmit={data => handleSubmit(data)}>
    <input type='name' value={name} onChange={setName}/>
    <input type='tea-type' value={teaType} onChange={setTeaType}/>
    <input type='tea-amount' value={teaAmount}  onChange={setTeaAmount}/>
    <input type='sugar-amount' value={sugarAmount} onChange={setSugarAmount}/>
    <input type='date-created' value={dateCreated} onChange={setDateCreated}/>
    <input type='date-bottled' value={dateBottled} onChange={setDateBottled}/>
  </form>
  );
};

export default BatchForm;
