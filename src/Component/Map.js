
import '../Style/Maps.scss'
import { useEffect } from "react";


const Map = () => {

    const {kakao} = window;

    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            center: new window.kakao.maps.LatLng(35, 127),
            level: 13,
        };

        let map = new window.kakao.maps.Map(container, options);
    }, []);

    return(
        <div className="map-wrapper">
            <div id="map"></div>
        </div>
    );


}

export default Map;