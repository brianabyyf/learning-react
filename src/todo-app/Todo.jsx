export default function Todo({ text, isComplited, isDeleted }) {
    // if (isDeleted) {
    //     return null
    // } else if (isComplited) {
    //     return (
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     )
    // } else {
    //     return (
    //         <li>
    //             {text}
    //         </li>
    //     )
    // }

    // using ternany operator

    // if (isDeleted) {
    //     return null
    // } else {
    //     return (
    //         <li>
    //             {isComplited ? <del>{text} '✅' </del> : text}
    //         </li>
    //     )
    // }

    // using logical and operator

    if (isDeleted) {
        return null
    } else {
        return (
            <li>
                {text} {isComplited && '✅'}
            </li>
        )
    }
}