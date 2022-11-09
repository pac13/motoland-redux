import React, { useState, useEffect } from 'react';

const initialForm = {
  content: '',
  name: '',
  price: '',
  id: null,
}

const Crudform = ({createData, updateData, dataToEdit, setDataToEdit}) => {

  const [form, setForm] = useState(initialForm);

  useEffect(() =>{
    if(dataToEdit){
      setForm(dataToEdit);
    } else{
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.content || !form.name || !form.price) {
      alert('Datos incompletos');
      return;
    }

    if(form.id === null){
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  }

  const handleReset = (e) =>{
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
  <div className='form'>
    <h2>{dataToEdit ? 'Edit' : 'Add'}</h2>
    <form onSubmit={handleSubmit}>

      <input
      type='url'
      name='content'
      placeholder='Photo (url)'
      onChange={handleChange}
      value={form.content}/>

      <input
      type='text'
      name='name'
      placeholder='Name'
      onChange={handleChange}
      value={form.name}/>

      <input
      type='number'
      name='price'
      placeholder='Price'
      onChange={handleChange}
      value={form.price}/>

      <button>
        <input
        type='submit'
        value='Send'/>
      </button>

      <button>
        <input
        type='reset'
        value='Clear'
        onClick={handleReset}/> 
      </button>
    </form>
  </div>
  )
  
}

export default Crudform