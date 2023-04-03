export type res_T={
    username:string
}


export type action_T={
    type:"input"|"select",
    name:string,
    message:string,
    options?:[]

}[]

export type scriptMeta_item_T={
    command:string,
    option?:string,
    describe:string,
    example:string,
    action:action_T,
    finallAction:Function
}
export type scriptMeta_T=scriptMeta_item_T[]