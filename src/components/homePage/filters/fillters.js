import "./filters.css";

function Filters(){
    return(
        <main className="filter">
            <p>Filters</p>
            <p>Price: <input type="number" placeholder="min" min={0} max={1000}/><input type="number" placeholder="max" min={0} max={1000}/></p>
            <p>Where are we looking?</p>
            
        </main>
    );
}

export default Filters; 