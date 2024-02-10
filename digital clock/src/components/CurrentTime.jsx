let CurrentTime = () => {
    let date = new Date();

    return <p className="lead">
    Date: {date.toDateString()} and Time: {date.toLocaleTimeString()}
    </p>
}

export default CurrentTime