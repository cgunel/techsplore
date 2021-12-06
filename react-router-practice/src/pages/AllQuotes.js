import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'learning is fun'},
    {id: 'q2', author: 'Maximilian', text: 'learning React is fun'},
];
const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
}

export default AllQuotes;