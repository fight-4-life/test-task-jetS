import React from "react";

const useState = React.useState

export function AddBookForm(props) {
    const [author, setAuthor] = useState()
    const [title, setTitle] = useState()
    const [year, setYear] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        props.setBooks(prev => prev.concat({author, title, year, id: Date.now()}))
        setAuthor("")
        setTitle("")
        setYear("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Добавить книгу в список</legend>
                <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Автор" required={true}/>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Название книги"
                       required={true}/>
                <input value={year} onChange={e => setYear(e.target.value)} placeholder="Год"/>
                <div>
                    <button>Добавить книгу</button>
                </div>
            </fieldset>
        </form>
    )
}