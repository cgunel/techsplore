import React, {useEffect, useState} from 'react';

// const App = props => {
//   return <Ingredients />;
// };

/*
1st practice
 */
// const App = (props) => {
//     const [counter, setCounter] = useState(0);
//     useEffect(() => {
//         console.log("hello");
//         setCounter(1);
//     }, [props.visible])
//
//     return <div>{counter}</div>
// }

/*
2nd practice
 */

// const fetchData = () => new Promise((r) => setTimeout(() => r(Date.now()), 100));
// const App = () => {
//     const [result, setResult] = useState();
//     useEffect(() => {
//         fetchData().then((value => {
//             setResult(value)
//         }));
//     }, []);
//
//     return (
//         <div>
//             {result === "data.toString()" ? (
//                 <div>hello</div>
//             ) : (
//                 <div>good bye</div>
//             )}
//         </div>
//     );
// }

/*
3rd practice
 */
// const HiderWrapper = (props) => {
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setVisible(true);
//     }, 4000);
//   }, []);
//
//   if (visible) return props.children;
//   else return null;
// }
//
// const App = (props) => {
//   return <HiderWrapper>hello world</HiderWrapper>
// }

/*
4th practice
 */

// const MyChild = (props) => {
//     return <div>My Child</div>
// }
// const MyParent = ({value}) => {
//     return <div>{value !== 3 && <MyChild/>}</div>;
// }
//
// const App = (props) => {
//     return (<MyParent value={3}>
//         <div>app div</div>
//     </MyParent>);
// }

/*
Q2
 */

// const MyComponent = ({value}) => {
//     const [counter2] = useState(value);
//     console.log(value, counter2);
//     return <span>{counter2}</span>
// }
//
// const App = () => {
//     const [counter, setCounter] = useState(0);
//     const isVisible = counter !== 1;
//     console.log('counter', counter);
//     createRef();
//     return (
//         <div>
//             <button onClick={() => setCounter(counter + 1)}>Click me!</button>
//             {isVisible && (
//                 <div>
//                     Message 1 is: <MyComponent value={counter}/> {' '}
//                 </div>
//             )}
//
//             <div style={isVisible ? {display: 'block'} : {display: 'none'}}>
//                 Message 2 is: <MyComponent value={counter}/>
//             </div>
//         </div>
//     );
// }

/*
Q6
 */

// const MyComponent = props => {
//     const ref = useRef(0);
//     useEffect(() => {
//         ref.current = 3;
//     }, []);
//
//     return <div>{ref.current}</div>
// }
//
// const App = props => {
//     return <MyComponent/>;
// }

/*
Q7
 */

// const Context = React.createContext();
// const MyChild2 = () => {
//     const test = useContext(Context);
//     return <div>{test}</div>
// }
//
// const MyChild1 = () => {
//     return <MyChild2/>;
// }
//
// const App = () => {
//     const test = 'My value';
//     return (
//         <Context.Provider value={test}>
//             <MyChild1/>
//         </Context.Provider>
//     );
// }

/*
Q8
 */
// const MyComponent = ({render}) => {
//     const [visible, setVisible] = useState(true);
//     useEffect(() => {
//         setTimeout(() => {
//             setVisible(false);
//         }, 3000);
//     }, []);
//
//     return visible ? <div>{render({msg: 'hello'})}</div> : <></>;
// }
//
// const App = () => {
//     return <MyComponent render={(props) => {
//         return <div>{props.msg}</div>
//     }}/>;
// }

/*
Q9
 */
// const MyComponent = ({render}) => {
//     return <>{render().join(',')}</>
// }
//
// const App = () => {
//     return <MyComponent render={() => ['One', 'Two']}/>
// }

/*
Q10
 */

// const Bananas = ({data, onChange}) => {
//     const remove = () => {
//         onChange(data.filter((_, i) => i < data.length - 1));
//     };
//     return (
//         <div>
//             <button onClick={remove}>Delete</button>
//             {data.map((fruit, f) => (
//                 <div key={f}>{fruit}</div>
//             ))}
//         </div>
//     );
// }
//
// const AddBanana = ({data, onChange}) => {
//     const add = () => onChange((f) => [...f, 'banana']);
//
//     return <button onClick={add}>Add ({data.length})</button>;
// }
//
// const App = () => {
//     const [fruits, setFruits] = useState([]);
//     return (
//         <>
//             <AddBanana data={fruits} onChange={setFruits}/>
//             <Bananas data={fruits} onChange={setFruits}/>
//         </>
//     )
// }

/*
Q11
 */

// const List = (props) => {
//     props.children[0].props.active = true;
//     return <ul>{props.children}</ul>;
// }
//
// List.Element = ({value, active}) => {
//     return <li style={active ? {background: 'red'} : {}}>{value}</li>;
// }
//
// const App = () => {
//     return (
//         <List>
//             <List.Element value={'Element 1'}/>
//             <List.Element value={'Element 2'}/>
//             <List.Element value={'Element 3'}/>
//         </List>
//     );
// }

/*
Q12
 */

const MyComponent = (props) => {
    useEffect(() => {
        const el = document.createElement('span');
        el.innerText = ' World';
        document.getElementById('myapp').appendChild(el);
    }, []);

    return <span>Hello</span>
}

const App = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div id='myapp'>
            <button onClick={() => setVisible(!visible)}> Click me</button>
            {visible && <MyComponent/>}
        </div>
    )
}

export default App;
