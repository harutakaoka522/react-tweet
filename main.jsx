function App(){
    return (
        <div>
            <Tweet content="hello"/>
            <Tweet content="react"/>
        </div>
    );
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>,target);