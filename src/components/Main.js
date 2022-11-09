import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createAction, deleteAction, noAction, readAllAction, updateAction } from '../actions/crudActions';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';
import '../Styles/Main.scss';

const Main = () => {

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const {cart} = state.shopping;

  const {db} = state.crud;

  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/motos';

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch(readAllAction(res))
          setError(null);
        } else {
          dispatch(noAction());
          setError(res);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createAction(res))
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      dispatch (deleteAction(id))
    } else {
      return;
    }
  };

  return (
    <div>
      <h1>Choose the motorcycle of your dreams</h1>
      
      <div className='main'>
        {loading && <Loader /> }
        {error && <Message msg={`Error ${error.status}:${error.statusText}`} />}
      </div>
      
      {db && <CrudTable
      data={db}
      setDataToEdit={setDataToEdit}
      deleteData={deleteData} 
      state={state}
      dispatch={dispatch} 
      cart={cart} />}

      <CrudForm
      createData={createData}
      updateData={updateData}
      dataToEdit={dataToEdit}
      setDataToEdit={setDataToEdit} />


    </div>
  )
}

export default Main;