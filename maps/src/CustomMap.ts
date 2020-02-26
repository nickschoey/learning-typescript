interface Placeable {
  location: {
    lat: number;
    lng: number;
  };
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
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: placeable.location.lat,
        lng: placeable.location.lng
      }
    });
  }
}
