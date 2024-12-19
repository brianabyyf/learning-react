import './Todo'
import Todo from './Todo'

export default function TodoList() {

    // return (
    //     <ul>
    //         <Todo isComplited={false} text={"Learn HTML"} isDeleted={true}></Todo>
    //         <Todo isComplited={true} text={"Learn CSS"}></Todo>
    //         <Todo isComplited={true} text={"Learn JavaScript"}></Todo>
    //         <Todo isComplited={false} text={"Learn ReactJs"}></Todo>
    //     </ul>
    // )

    // menggunakan array of object
    const data = [
        {
            id: 0,
            text: 'Learn HTML',
            isComplited: true
        },
        {
            id: 1,
            text: 'Learn CSS',
            isComplited: true
        },
        {
            id: 2,
            text: 'Learn JavaScript',
            isComplited: false
        },
        {
            id: 3,
            text: 'Learn ReactJs',
            isComplited: false
        },
        {
            id: 4,
            text: 'Learn ReactJs Router',
            isComplited: false
        },
    ]

    return (
        <ul>
            {
                data.map((todo) =>
                    <Todo key={todo.id} {...todo}></Todo>)
            }
        </ul>
    )
}