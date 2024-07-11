import React from 'react'
import { useParams } from 'react-router-dom' // hook que nos permite acceder a parametros dinamicos de la web
import allUsers from "../data/allUsers.json"

function UserDetails() {

  const params = useParams()
  console.log(params)

  const usuarioConseguido = allUsers.find((eachUser) => {
    return eachUser.username === params.nombreDeUsuario
  })
  console.log(usuarioConseguido)

  return (
    <div>
      
      <h3>Detalles de un usuario</h3>

      <p>nombre: {params.nombreDeUsuario}</p>
      <p>lugar: {usuarioConseguido.city}</p>
      <p>curso: {usuarioConseguido.course}</p>

    </div>
  )
}

export default UserDetails