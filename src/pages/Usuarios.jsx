import { Link } from "react-router-dom"
import allUsers from "../data/allUsers.json"

function Usuarios() {
  return (
    <div>

      <h3>Usuarios de nuestra plataforma</h3>
      
      {allUsers.map((eachUser) => {
        return (
          <p key={eachUser.id}>
            <Link to={`/usuarios/${eachUser.username}`}>{eachUser.username}</Link>
          </p>
        )
      })}

    </div>
  )
}

export default Usuarios