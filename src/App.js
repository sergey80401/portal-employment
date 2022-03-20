import React, { useContext } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Context } from "./index";
import { observer } from "mobx-react-lite";

const App = observer(() => {
   const { user } = useContext(Context);

   return (
      <div className="App">
         <BrowserRouter>
            <NavigationBar></NavigationBar>
            <AppRouter></AppRouter>
         </BrowserRouter>
      </div>
   );
});

export default App;
