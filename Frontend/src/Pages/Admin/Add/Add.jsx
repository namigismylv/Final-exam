import axios from 'axios'
import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
const Add = () => {
  const {setData}=useContext(MainContext)
  return (
    <div className='formik'>
      <Helmet><title>Add</title></Helmet>
     <Formik
       initialValues={{ image: '', title: '',desc:'' }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:1000/categories",{...values}).then(res=>{
          setData(res.data)
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="image"
             placeholder='image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
             type="text"
             name="title"
             placeholder='title'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="desc"
             placeholder='description'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desc}
           />
           {errors.desc && touched.desc && errors.desc}
           <button type="submit" onClick={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add