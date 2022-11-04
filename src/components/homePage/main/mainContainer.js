import "./mainContainer.css";

function NewDeals(){
    return(
        <main className="mainContainer">
            <input className="nameOfTheCity" type="text" placeholder="Enter the city"/>
            <div className="newDeals">
                <p>OUR NEW DEALS</p>
                <div className="card">
                    <img src="../ahaha.jpg" />
                </div>
            </div>
        </main>
    );
}

export default NewDeals; 