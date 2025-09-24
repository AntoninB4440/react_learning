import markerUrl from '../assets/marker.png'

export default function Entry(props){
    return (
        <article className="entry-container">
            <div className="entry-image-container">
                <img className="entry-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="entry-info-container">
                <img src={markerUrl} alt="Map marker icon" className="entry-marker"/>
                <span className="entry-country">{props.country}</span>
                <a target="_blank" href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className="entry-description">{props.description}</p>
            </div>
        </article>
    )
}