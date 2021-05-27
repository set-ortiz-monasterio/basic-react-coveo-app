import { useState } from "react";

function SearchForm({ onSubmit }: any) {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(text);
    };

    const [text, setText] = useState('');

    return (<form onSubmit={handleSubmit}>
        <label>
            Text to search:
          <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </label>
        <input type="submit" value="Submit" />
    </form>);
}

export default SearchForm;