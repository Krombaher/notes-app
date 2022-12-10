import React from "react";

export type TagsPropsTYpe = {
    tags: string
}

export const Tags = (props: TagsPropsTYpe) => {
    return (
        <span>{props.tags}</span>
    )
}