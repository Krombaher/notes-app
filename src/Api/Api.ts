import axios from "axios";
import {DataType} from "../App";

const instance = axios.create({
    baseURL: 'https://637bdcd96f4024eac219cbef.mockapi.io/'
})

export const productAPI = {
    getCatalog() {
        return instance.get('notes')
            .then(response => response.data)
    },

    postCatalog(obj: DataType) {
        return instance.post('notes', obj)
            .then(response => response.data)
    },

    putBodyCatalog(id: string, body:string, tags:string[]) {
        return instance.put(`notes/${id}`, { body, tags })
            .then(response => response.data)
            .catch(err => {
                console.log(err)
            })
    },

    deleteCatalog(id: string) {
        return instance.delete(`notes/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
