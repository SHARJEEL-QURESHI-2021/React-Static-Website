import '../index.css';

function Header(){
    return(
        <>
        <div id="head">
        <h1 id='h1'>It's the food and groceries you love, delivered</h1>
        <div id='any'>
            <input type="text" placeholder='Enter Your Full Address'/>
            <button id='btn1'>Find Food</button>
        </div>
        </div>
        <div>
            <h1 id='h11'>You prepare the food, we handle the rest</h1>
        </div>
        <div id="heads">
            <div id="anys">
                <ul>
                    <li id='a'>List your restaurant or shop on foodpanda</li>
                    <li>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</li>
                    <li>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</li>
                    <li>Interested? Let's start our partnership today!</li>
                    <li><button id='btn1'>Find Food</button></li>
                </ul>
            </div>
        </div>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <div>
            <h1 id="h1a">Find us in these cities and many more!</h1>
        </div>
        </>
    )
}


export default Header