import React, { useEffect, useState } from 'react'
import { Alert, Table } from 'react-bootstrap'
export default function Users () {
  const [data, setData] = useState([])
  const [ mode, setMode] = useState('online')

  useEffect(() => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const promise = fetch(URL)

    promise
      .then(response => response.json())
      .then(json => {
        console.warn(json)
        setData(json)
        localStorage.setItem("users", JSON.stringify(json))
      })
      .catch(error => {
        let _users = localStorage.getItem("users")
        setData(JSON.parse(_users));
        setMode('offline')
      })
  }, [])

  return (
    <div>
      <h1>Users Component</h1>
      <div>
        { mode === 'offline' ? (<Alert variant="secondary">Vous êtes en mode déconnecté ou il y a un problème de connexion</Alert>): false}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          { data.map((user, i) => (
            <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
