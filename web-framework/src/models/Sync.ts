import axios, { AxiosResponse } from 'axios';

export class Sync {
  fetch(): void {
    const url = 'http://localhost:3000/users';
    const id = this.get('id');
    axios.get(`${url}/${id}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get('id');
    const url = 'http://localhost:3000/users';
    if (id) {
      axios.put(`${url}/${id}`, this.data);
    } else {
      axios.post(url, this.data);
    }
  }
}
