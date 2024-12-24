
const Personal = ({name,moreDetails,isLogged}) => {
    return (
        <>
        <div className='main'>My name is {name}</div>
        <p> my age is {moreDetails.age}</p>
        <p>{isLogged ? "i'm logged in" : "i'm not logged in"}</p>
        <p>my favourite programming languages</p>
        <ul style={{listStyle: 'none', backgroundColor: 'lightgreen '}}>
          <li>javaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>C++</li>
        </ul>
        </>
    )
}

export default Personal