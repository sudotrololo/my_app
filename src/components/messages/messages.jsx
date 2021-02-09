import css from "./messages.module.css"
import messages_data from "../../data/messages_data";
import Message from "./message";




const Messages = () => {
    let all_messages = messages_data.map(message => <Message text={message.text}/>);

    return (
        <div className={`${css.messages} content`}>
            {all_messages}
        </div>
    )
}

export default Messages