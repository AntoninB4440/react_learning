export default function Entry(){
    return (
        <article className="entry-container">
            <div className="entry-image-container">
                <img className="entry-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
            </div>
            <div className="entry-info-container">
                <img src="./src/assets/marker.png" alt="Map marker icon" className="entry-marker"/>
                <span className="entry-country">Japan</span>
                <a target="_blank" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                <h2 className="entry-title">Mont Fuji</h2>
                <p className="entry-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}