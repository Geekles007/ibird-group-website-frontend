class MapBoxController {

    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    success(pos: any) {
        var crd = pos.coords;

        console.log('Votre position actuelle est :');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude : ${crd.longitude}`);
        console.log(`La précision est de ${crd.accuracy} mètres.`);
    }

    error(err: any) {
        console.warn(`ERREUR (${err.code}): ${err.message}`);
    }

    get getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        return;
    }

}

export default new MapBoxController();