

const DisplayMessage = () => {
    const messages = ['Message Board']

    console.log('Display message function')

    return(
        <section className="messagesWrapper">
            <h2>Message Board</h2>
            <p>{messages}</p>
        </section>
    )
}

export default DisplayMessage;
