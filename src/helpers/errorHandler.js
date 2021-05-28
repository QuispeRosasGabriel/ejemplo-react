const errorHandler = (msg, hr, os) => {

    fetch('http:www.mybackend.com/errors', msg, hr, os)
    .then((res) => res.json()
    .then(console.log)
    )
};

export default errorHandler;