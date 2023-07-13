export type Task = {  
    name: string, 
    description: string, 
    classification_id: number 
}

export type genericTask = Partial<Task>
