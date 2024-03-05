
export default function LinkPage ({href, text}) {
    return(
        <a href={href}><button className="selectPage">{text}</button></a>
    );
}