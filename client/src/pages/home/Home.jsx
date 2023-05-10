import React from 'react'
import useFetch from '../../hooks/useFetch'
const Home = () => {
  const {data, loading, error} = useFetch("/Territories/All")
  console.log(data);
  return (
    <div className='Home'>
      {data.filter(item => item.parent == null).map((filtered)=> (
        <ul>
          <li>
          <span key ={filtered.id}>{filtered.name}</span>
          
          <ul>
            {data.filter(item=> item.parent == filtered.id).map((filter2)=> (
                  <li>
                    <span key = {filter2.id}>{filter2.name}</span>
                    <ul>
                    {data.filter(item=>item.parent == filter2.id).map((filter3)=> (
                        <li>{filter3.name}</li>
                    ))}
                     </ul>
                  </li>
            ))}
            </ul>
        </li>
        </ul>
          
      ))}
    </div>
  )
}

export default Home