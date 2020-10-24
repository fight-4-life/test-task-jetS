import React from "react";
import {Card} from 'antd';
import {Button} from 'antd';
import book from '../assets/book.png'


export function Book(props) {
    function handleDelete() {
        props.setBooks(prev => prev.filter(b => b.id != props.id))
    }

    return (
        <Card
            hoverable
            style={{width: 250, margin: 10}}
        >
            <li>
                <img style={{width: 180}} alt="example" src={book}/>
                <div>
                    Автор книги:
                </div>
                <div>
                    {props.author}
                </div>
                <div>
                    Название книги:
                </div>
                <div>
                    {props.title}
                </div>
                <div>
                    Год:
                </div>
                <div>
                    {props.year}
                </div>
                <Button type="primary" danger onClick={handleDelete}>Удалить книгу</Button>
            </li>
        </Card>


    )
}