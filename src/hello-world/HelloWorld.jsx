import './HelloWorld.css'

export default function HelloWorld() {
    const props = {
        text: "HelloWorld dari spread syntax"
    }
    return (
        <div>
            {/* <HeaderHelloWorld text="Hello World"></HeaderHelloWorld> */}
            <HeaderHelloWorld {...props}></HeaderHelloWorld>
            <ParagraphHelloWorld></ParagraphHelloWorld>
        </div>
    )
}

function HeaderHelloWorld({ text = "Ups, bray kamu lupa nambahin teks!" }) {
    return (
        // <h1 style={{
        //     color: "blue",
        //     backgroundColor: 'yellow'
        // }}>{text.toUpperCase()}</h1>
        <h1 className='title'>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belajar ReactJS Bray. You can do it!!";
    // const style = {
    //     color: "red",
    //     backgroundColor: "green"
    // };
    // return (
    //     <p style={style}>
    //         {text}
    //     </p>
    // )
    return (
        <p className='content'>
            {text}
        </p>
    )
}