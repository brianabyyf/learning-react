import './TodoList.css'

export default function Container({ children }) {
    return (
        <div>
            <h1 className="title">
                Todo List
            </h1>
            {children}
            <footer>
                Brian nyobain membuat TodoList menggunakan ReactJs
            </footer>
        </div>
    )
}