function ResultList({ results }: { results: string[] }) {
    
    return (<ul>
        {
            results.map((el, index) => <li key={index}  >{el}</li>)
        }
    </ul>);
}

export default ResultList;