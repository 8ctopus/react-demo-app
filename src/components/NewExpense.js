export default function NewExpense() {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("form clicked!", event);
    };

    return <div>
        <form onSubmit={onSubmitHandler} >
            <input type="text" name="description" defaultValue="test" />
            <input type="number" name="amount" defaultValue="10" />
            <input type="date" name="date" defaultValue="2022-04-10" />
            <button type="submit" />
        </form>
    </div>;
}
