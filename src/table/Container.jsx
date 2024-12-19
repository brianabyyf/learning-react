import './Table.css'

export default function Container({ children }) {
    return (
        <div>
            <h1 className="title">
                Table
            </h1>
            {children}
            <footer>
                Brian nyobain membuat Table menggunakan ReactJs
            </footer>
        </div>
    )
}