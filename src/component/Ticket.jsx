import  { useState } from 'react';

function Ticket() {
    
    const [ticketNumber, setTicketNumber] = useState({
        Namest: '',
        email: '',
        number: '',
        num_of_ticket: ''
    });
    const [showMessage, setShowMessage] = useState(false);

    let Price = 100;

    const handleOnChange = (e) => {
        const Name = e.target.name;
        const value = e.target.value;
        setTicketNumber((pre) =>   { console.log(pre)
             return  { ...ticketNumber, [Name]: value} });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(ticketNumber.Namest);
        setShowMessage(true); // Set showMessage to true when the button is clicked
    };

    return (
        <div>
            <h1>Book your Ticket</h1>
            <form>
                <label>Name</label>
                <input type="text" name="Namest" onChange={handleOnChange} />
                <label>Email</label>
                <input type="email" name="email" onChange={handleOnChange}/>
                <label>Phone Number</label>
                <input type="number" name="number" onChange={handleOnChange} />
                <label>Ticket Number</label>
                <input type="number" name="num_of_ticket" onChange={handleOnChange} />
                <button onClick={submit}>Book</button>
            </form>

            {showMessage && ( // Only display the message when showMessage is true
               <div>
                <p>hiiii {ticketNumber.Namest}</p>
                <p>email : {ticketNumber.email}</p>
                <p>number: {ticketNumber.number}</p>
                <p>total price {(ticketNumber.num_of_ticket)*Price}</p>
                </div>
            )}

            
        </div>
    );
}

export default Ticket;
