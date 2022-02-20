import './App.css';
import Header from "./components/Header";
import NoteList from "./Note/NoteList";
import NoteContextProvider from "./Note/NoteContext";
import AddNote from "./Note/AddNote";
import {Redirect, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SearchList from "./SearchComponents/SearchList";

function App() {
  return (
      <NoteContextProvider>
           <div className={'page'}>
               <Header/>
               <div className={"container"}>
                   <Route path={'/'} exact>
                       <Redirect to={'/welcome'}/>
                   </Route>
                   <Route path={"/welcome"}>
                       <Welcome/>
                   </Route>
                   <Route path={"/note-list"}>
                       <NoteList/>
                   </Route>
                   <Route path={"/search-history"}>
                       <SearchList/>
                   </Route>
                   <Route path={"/add-note"}>
                       <AddNote/>
                   </Route>
               </div>
           </div>

      </NoteContextProvider>
  );
}

export default App;
