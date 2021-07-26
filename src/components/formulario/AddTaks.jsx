import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'

const AddTaks = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    title: '',
    responsible: '',
    description: '',
    priority: ''
  })

  const { title, responsible, description, priority } = values
  const handlNewCard = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="card container text-center">
      <h2>Agregar nueva tarea</h2>
      <form className="card-body " onSubmit={handlNewCard}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control mt-1"
            placeholder="Title"
        
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="responsible"
            className="form-control mt-1"
            placeholder="Responsible"
          
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="description"
            className="form-control mt-1"
            placeholder="Description"
          
          />
        </div>

        <div className="form-group">
          <select
            name="priority"
            className="form-control mt-1"
          
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>

        <input
          id="fileSelector"
          type="file"
          name="file"
          style={{ display: 'none' }}
         
        />
        <div>
          <input
           type="button"
            className="btn border-bottom shadow-sm"
            value="Picture"
          />
           
         
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  )
}

export default AddTaks
