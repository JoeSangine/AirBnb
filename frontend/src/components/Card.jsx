

let Star = "./src/images/star.png"


export default function Card(props) {
    return (
        
           <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={Star} />
                <span>{props.rating}</span>
                <span>{props.reviewCount} • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.text}</p>
            <p> <span className="bold"> {props.price} </span>/ person</p>
        </div>
        
    )
} 