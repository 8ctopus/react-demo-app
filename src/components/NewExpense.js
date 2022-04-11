import {useState} from "react";

export default function NewExpense(props) {
    const [description, setDescription] = useState('test');
    const [amount, setAmount] = useState('10');
    const [date, setDate] = useState('2022-04-10');

    const onChangeDescriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const onChangeAmountHandler = (event) => {
        setAmount(event.target.value);
    };

    const onChangeDateHandler = (event) => {
        setDate(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log("form clicked!");

        const expense = {
            description,
            amount,
            date: new Date(date),
        };

        props.onCreateExpense(expense);
    };

    return <div>
        <form onSubmit={onSubmitHandler} >
            <input type="text" name="description" onChange={onChangeDescriptionHandler} value={description} />
            <input type="number" name="amount" onChange={onChangeAmountHandler} value={amount} />
            <input type="date" name="date" onChange={onChangeDateHandler} value={date} />
            <button type="submit" />
        </form>
    </div>;
}
