import React, { useState, useEffect } from "react";
import { database } from './firebase.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { onChildAdded, ref } from "firebase/database";
import Home from "./pages/home.js";

function App() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const projectsRef = ref(database, 'projects/');

        const unsubscribe = onChildAdded(projectsRef, (data) => {
            let project = data.val();
            setProjectList(prevList => [...prevList, project]);
            console.log(project);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                {projectList.map((item) =>
                    item.pages.map((itm) => 
                        <Route key={itm.title} path={`/${item.title}/${itm.title}`} element={<div dangerouslySetInnerHTML={{__html: itm.element}}></div>}/>
                    )
                )}
            </Routes>
        </Router>
    );
}

export default App;