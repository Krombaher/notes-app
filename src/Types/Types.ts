//type

export type NotesType = {
    id: string
    title: string
    body: string
    tags: string[]
}

export type DataNotesType = {
    dataNotes: NotesType[]
    tags:string[]
}

export type DataPostType = {
    title: string
    body: string
}