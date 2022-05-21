import Header from "~/component/Layout/Defaultlayout/Header";

function HeaderOnly({ children }) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default HeaderOnly;