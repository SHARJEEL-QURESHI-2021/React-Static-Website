import '../index.css';

function Navs(){
    return(
    <nav>
        <img src="https://i.pinimg.com/736x/5f/b2/1a/5fb21aefc0aa94d8a84531611d8fe708.jpg" alt="Logo" id='img'/>
        <h4>foodpanda</h4>
        <div>
        <button id='btn'>Log in</button>
        <button id="btns">Sign up</button>
        </div>
        <div id="nav">
        <i class="fa-solid fa-globe"> E N</i>
        <select>
            <option></option>
            <option id='option'>English</option>
        </select>
        </div>
        <i class="fa-solid fa-bag-shopping" id='i'></i>
    </nav>
    )
}

export default Navs