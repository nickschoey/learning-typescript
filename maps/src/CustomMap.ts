interface Placeable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(placeable: Placeable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: placeable.location.lat,
        lng: placeable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: placeable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
