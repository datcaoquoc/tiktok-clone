import Header from "~/component/Layout/Defaultlayout/Header";
import Sidebar from "~/component/Layout/Defaultlayout/Sidebar";


function Defaultlayout({ children }) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default Defaultlayout;