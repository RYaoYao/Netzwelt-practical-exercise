
import useFetch from '../../hooks/useFetch'
import Navbar from '../../components/navbar/navbar'
const Home = () => {
  const {data, loading, error} = useFetch("/Territories/All")
  //console.log(data);
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hContainer">
        {data.filter(item => item.parent == null).map((filtered)=> (
        <ul>
          <li key ={filtered.id}>{filtered.name}
          <ul>
            {data.filter(item=> item.parent === filtered.id).map((filter2)=> (
                  <li  key = {filter2.id}>{filter2.name}
                    <ul>
                    {data.filter(item=>item.parent === filter2.id).map((filter3)=> (
                        <li key ={filter3.id}>{filter3.name}</li>
                    ))}
                     </ul>
                  </li>
            ))}
            </ul>
        </li>
        </ul>
          
      ))}
      </div>
    </div>
  )
}

export default Home