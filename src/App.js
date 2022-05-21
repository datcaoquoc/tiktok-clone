import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Following from "~/page/Following";
import Home from "~/page/Home";
import { publicRoute } from "~/route";
import Defaultlayout from "~/component/Layout/Defaultlayout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            
            const Page = route.component;

            let Layout = Defaultlayout;

            if(route.layout){
              Layout = route.layout
            }else if (route.layout === null ){
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
