import React from 'react';
import ReactDOM from 'react-dom';
import {AddBookForm} from "./Components/AddBookForm";
import {Book} from "./Components/Book";
import {Time} from "./Components/Time";

import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;

const useState = React.useState
const useEffect = React.useEffect


function BooksListApp() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (localStorage.getItem("bookData")) {
            setBooks(JSON.parse(localStorage.getItem("bookData")))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("bookData", JSON.stringify(books))
    }, [books])

    return (
        <>
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            Список книг
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{marginLeft: 200}}>
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{overflow: 'initial'}}>
                        <div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
                            <AddBookForm setBooks={setBooks}/>
                        </div>
                        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            {books.map(b => <Book setBooks={setBooks} id={b.id}
                                                  author={b.author} title={b.title} year={b.year} key={b.id}/>)}
                        </ul>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Test task for JetStyle. Legotin VA
                        <Time/>
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

ReactDOM.render(<BooksListApp/>, document.querySelector("#app"))
