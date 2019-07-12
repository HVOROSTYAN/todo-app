import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App', 'Drink Coffee'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const SearchPanel = () => {
    return (
        <input type="text" placeholder="search"/>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
