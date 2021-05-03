import React, { useEffect, useState } from 'react'

function Planets(props) {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [rotationPeriod, setRotationPeriod] = useState("")
    const [curid, setcurid] = useState(props.curid)
    const [apiurl, setapiurl] = useState(props.apiurl)
    useEffect(() => {
        setcurid(props.curid)
        setapiurl(props.apiurl)
        setLoading(true)
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setRotationPeriod(data.rotation_period)})
        setLoading(false)
    })
    return (
        <div>
            <h1> {loading && "Checking the API..."} </h1>
            <h3> You are currently looking at {'https://swapi.dev/api/planets/'+curid.toString()+'/'}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <p> <b>{rotationPeriod}</b> {rotationPeriod != null ? 'is the rotation period.' : "There is no rotation period at this id."}</p> 
        </div>
    )
}

export default Planets