import { useState, useEffect } from 'react';

export default function Details() {
const [Message, setMessage] = useState("(Hello, this will be the details page for each Movie & TV show :)");


useEffect(() => {
    setTimeout(() => { setMessage("Coming soon! :)"); }, 3000);
});

return(
    Message
);
}