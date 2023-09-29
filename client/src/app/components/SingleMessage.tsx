interface SingleMessageProp {
    userName: string;
    displayTime: string;
    message: string;
}

function SingleMessage(props: SingleMessageProp) {
    return(
        <>
        <div className="message">
            <p className="meta">{props.userName} <span>{props.displayTime}</span></p>
            <p className="text">
                {props.message}
            </p>
        </div>
        </>
    );
}

export default SingleMessage;