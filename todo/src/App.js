import React from 'react';
import logo  from './logo.svg';
import './App.css';


//Component(Class Based)
class App extends React.Component{

  //constructor
  constructor(props){
    super(props);
    this.state = {
      newItem :"",
      list: []
    }
  }
  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list, 
        newItem: ""
      });
    }
  }
  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem: input});
  }

    render(){
      return(
        <div>
          <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">React ToDo Application</h1>
        <div className="container">
          Add an Item....
          <br/>
          <input type="text" className="input-text" placeholder="Write a Todo" required value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}/>
         
          <button className ="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add TODO</button>
          <div className="list">
            <ul>
              {
                this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                    <input
                    type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={()=> {}} />
                    {item.value}
                    <button className="btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </li>
                  );
                })
              }
              <li>
                <input type="checkbox" name="" />
                Do Workout
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
</div>
        </div>
      );
    }
}

//Component (Functional based)
// function App(){
//   return (
//     <div className="App"> 
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//         <p>it is not HTML it is JSX</p>
//       </header>
//     </div>
   
//   );
// }   


export default App;  //EXporting of App function