function List(props){
   
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Alphabetical
    // fruits.sort((a,b)=>a.calories - b.calories) //Numerical
    const category = props.category;
    const itemList = props.items;

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 80);
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li> )
    return (<> 
                <h3>{category}</h3> 
                <ol>{listItems}</ol>
            </> );
}

export default List