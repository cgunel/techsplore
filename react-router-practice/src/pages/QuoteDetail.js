import {Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'learning is fun'},
    {id: 'q2', author: 'Maximilian', text: 'learning React is fun'},
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(q => q.id === params.quoteId);
    if (!quote) {
        return <NoQuotesFound/>;
    }
    return (
        <Fragment>
            <HighlightedQuote author={quote.author} text={quote.text}/>
            <Route path={'/quotes/' + params.quoteId + '/comments'}>
                <Comments/>
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;