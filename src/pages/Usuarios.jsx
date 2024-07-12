import { Link } from "react-router-dom"
import allUsers from "../data/allUsers.json"

import { useSearchParams } from "react-router-dom"

function Usuarios() {

  const [ queries, setQueries ] = useSearchParams()
  const cursoQuery = queries.get("curso")
  console.log(cursoQuery)
  // const city = queries.get("city")
  // console.log(city)

  const handleChangeCourse = (event) => {
    console.log("intentando cambiar de selección", event.target.value)
    if (event.target.value === "") {
      setQueries() // la selección fue todo, value string vacio
    } else {
      setQueries( {"curso": event.target.value } )
    }
  }

  return (
    <div>

      <h3>Usuarios de nuestra plataforma</h3>

      <select onChange={ handleChangeCourse }>
        <option value="">todos</option>
        <option value="data">data</option>
        <option value="web">web</option>
        <option value="ux">ux</option>
      </select>
      
      {allUsers.filter((eachStudent) => {
        if (cursoQuery === null) {
          return true // incluyelos todos si no existe el query
        } else {
          return eachStudent.course === cursoQuery // incluir solo los del query selecionado
        }
      }).map((eachUser) => {
        return (
          <p key={eachUser.id}>
            <Link to={`/usuarios/${eachUser.id}`}>{eachUser.username}</Link>
          </p>
        )
      })}

    </div>
  )
}

export default Usuarios