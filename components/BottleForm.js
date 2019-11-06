import { useState } from 'react';

const BottleForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [dateBottled, setDateBottled] = useState('');
  const [dateChilled, setDateChilled] = useState('');
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={data => handleSubmit(data)}>
      <input name="name" value={name} onChange={setName}/>
      <input name="ingredients" value={ingredients} onChange={setIngredients}/>
      <input name="date-bottled" value={dateBottled} onChange={setDateBottled}/>
      <input name="date-chilled" value={dateChilled} onChange={setDateChilled}/>
    </form>
  );
};

export default BottleForm;
