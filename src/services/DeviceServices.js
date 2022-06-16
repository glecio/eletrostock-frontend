import axios from "axios";

export class DeviceService {
    static serverURL = 'http://localhost:8080/api';

    static getAllDevices() {
        let dataURL = `${this.serverURL}/devices`;
        return axios.get(dataURL);
    }

    static viewDevice(id) {
        let dataURL = `${this.serverURL}/devices/${id}`;
        return axios.get(dataURL);
    }

    static deleteDevice(id) {
        let dataURL = `${this.serverURL}/devices/${id}`;
        return axios.get(dataURL);
    }
    
    static getAllBrands() {
        let dataURL = `${this.serverURL}/brands`;
        return axios.get(dataURL);
    }
    
    static viewBrand(id) {
        let dataURL = `${this.serverURL}/brands/${id}`;
        return axios.get(dataURL);
    }


}