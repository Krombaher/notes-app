import axios from "axios";
import {DataPostType} from "../types/types";

export const instance = axios.create({
    baseURL: 'https://63bee855f5cfc0949b648b6f.mockapi.io/'
})

export const notesApi = {
    getNotes() {
        return instance.get('notes')
            .then(response => response.data)
    },

    addNote(obj: DataPostType) {
        return instance.post('notes', obj)
            .then(response => {
                console.log(response)
                return response.data
            })
    },

    changeBodyNote(id: string, body:string, tags:string[]) {
        return instance.put(`notes/${id}`, { body, tags })
            .then(response => response.data)
            .catch(err => {
                console.log(err)
            })
    },

    removeNote(id: string) {
        return instance.delete(`notes/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
