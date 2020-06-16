import Numerot from './components/Numerot'
import Forms from './components/Forms'
import Filtering from './components/Filtering'
import Notification from './components/Notification'
import axios from 'axios'


import React, { useState, useEffect } from "react";


import personService from './services/persons'


import './index.css'

/*
"_comment": "axios.get('http://localhost:3001/person')  
npm install json-server --save 
\"server\": \"json-server -p3001 db.json\" 
npm run server",
*/



/*class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: '',
      newNumber: ''
    }*/

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
/*
this.addName = this.addName.bind(this)
this.handleNumberChange = this.handleNumberChange.bind(this)
this.handleNameChange = this.handleNameChange.bind(this)
this.removeName = this.removeName.bind(this)
*/

const [ filtering, setFiltering ] = useState('')
const [nmessage, setNmessage] = useState('')

//this.toggleImportanceOf=this.toggleImportanceOf.bind(this)

 
  //}

/*
toggleImportanceOf = (id) => {
  return () => {
    console.log('importance of '+id+' needs to be toggled')
  }
}
*/


useEffect(() => {
//componentDidMount() {
  personService
    .getAll()
    .then(response => {

      //this.setState({persons: response.data})
      if (response.status==200)
      setPersons(response.data)
    })

//}
}, []);


const removeName =(id,removedName)=>{
return ()=>{
personService.get(id).then
( (response1)=>
  {

if (response1.status==200)
    if (window.confirm(`Poistetaanko ${response1.data.name} ?`))

personService.remove(id).
then
((response)=>
{
  if (response.status==200)
    {setNmessage(`Note '${response1.data.name}' was successfully deleted`)        
setTimeout(() => {setNmessage(null)}, 5000)
personService
    .getAll()
    .then(response2 => {
      //this.setState({persons: response.data})
      if (response2.status==200)
        setPersons(response2.data)
    })}
  }
)
}
)
.catch(error => {
        setNmessage(`Note '${removedName}' was already removed from server`)        
setTimeout(() => {setNmessage(null)}, 5000)        
setPersons(persons.filter(n => n.id !== id))

      })

}
}


const addName = (event) => {
  event.preventDefault()
  const nameObject = {
    //name: this.state.newName,
    //number: this.state.newNumber,

    name: newName,
    number: newNumber,

    //date: new Date().toISOString(),
    //important: Math.random() > 0.5,
    //id: this.state.notes.length + 1
  }
  //if(this.state.persons.find(it=>it.name==this.state.newName))
  //alert(`${this.state.newName} already had added`)
    if(persons.find(it=>it.name==newName))
  {
if (window.confirm(`Update number of ${newName}?`))
  {

    let theid=persons.find(it=>it.name==newName).id
personService.update(theid,nameObject)
.then(response => {

if (response.status==200)
{
 
let newarray=[... persons.filter(it=>it.name!=newName).concat(response.data)]

newarray.sort(function (a, b) {
    if (a.id > b.id) {
        return -1;
    }
    if (b.id > a.id) {
        return 1;
    }
    return 0;
})
setPersons(newarray)
setNewName('')
setNewNumber('')

setNmessage(`Note '${newName}' was successfully updated`)        
setTimeout(() => {setNmessage(null)}, 5000)


}

}).catch(error => {
        setNmessage(`Note '${newName}' was already removed from server`)        
setTimeout(() => {setNmessage(null)}, 5000)        
setPersons(persons.filter(n => n.id !== theid))
      })

  }

  }
else
{


   //axios.post('http://localhost:3001/notes', nameObject)
   personService.create(nameObject)
    //.then(response => {
    //  console.log(response)
    //})
    .then(response => {

if (response.status==201)
{
setPersons(persons.concat(response.data))
setNewName('')
setNewNumber('')
/*      this.setState({
        persons: this.state.persons.concat(response.data),
        newName: '',
        newNumber: '',
      })
    })
*/
setNmessage(`Note '${newName}' was successfully added`)        
setTimeout(() => {setNmessage(null)}, 5000)
}
  })
}
}

const handleNameChange = (event) => {
    //console.log(event.target.value)
    //this.setState({ newName: event.target.value })
    setNewName(event.target.value)
  }

const handleNumberChange = (event) => {
    //console.log(event.target.value)
    //this.setState({ newNumber: event.target.value })
    setNewNumber(event.target.value)
  }

const handleFilterChange = (event) =>
{
//event.target.value

setFiltering(event.target.value)
}

  //  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <Filtering handleFilterChange={handleFilterChange}/>
<Notification message={nmessage} />
        <h2>add a new</h2>
        <Forms addName={addName} handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} newName={newName} 
        newNumber={newNumber} />

        <Numerot filtering={filtering} persons={persons} functions={removeName}/>
      </div>
    );
    //}
};

export default App
