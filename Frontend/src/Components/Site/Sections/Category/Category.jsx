import React, { useContext } from 'react'
import Cards from '../../Cards/Cards'
import MainContext from '../../../../Context/Context'
import "./Category.css"
const Category = ({data}) => {
  const {input,setInput,sort,setSort}=useContext(MainContext)
  return (
    <section id='category'>
        <div className="category__div">
          <div className="container">
            <div className="row inputRow">
              <div className="col-6 inputCol">
                <input type="text" placeholder='Search' className='mb-4' value={input} onChange={(e)=>{setInput(e.target.value)}} />
              </div>
              <div className="col-6 sortCol">
                <div className="sort__button">
                <button className='btn btn-warning' onClick={()=>{setSort({field:"title",asc:true})}}>A-Z</button>
                <button className='btn btn-warning' onClick={()=>{setSort({field:"title",asc:false})}}>Z-A</button>
                <button className='btn btn-warning' onClick={()=>{setSort(null)}}>Default</button>
                </div>
              </div>
            </div>
          </div>
            <Cards data={data.filter(x=>x.title.toLowerCase().includes(input.toLowerCase())).sort((a,b)=>{
              if(!sort){
                return 0
              }
              else if(sort.asc==true){
                return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
              }
              else if(sort.asc==false){
               return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)
              }
            })}/>
        </div>
      </section>
  )
}

export default Category