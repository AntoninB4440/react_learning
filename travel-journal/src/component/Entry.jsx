import markerUrl from '../assets/marker.png'

export default function Entry(props){
    console.log(props)
    return (
        <article className="entry-container">
            <div className="entry-image-container">
                <img className="entry-image" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div className="entry-info-container">
                <img src={markerUrl} alt="Map marker icon" className="entry-marker"/>
                <span className="entry-country">{props.entry.country}</span>
                <a target="_blank" href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="entry-dates">{props.entry.dates}</p>
                <p className="entry-description">{props.entrydescription}</p>
            </div>
        </article>
    )
}