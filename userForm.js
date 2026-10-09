const userForm = function (req, resp) {
    
    resp.write(`<form action = "/submit" method ="post">
        <input name = "name" placeholder="enter your name" >
        <input name = "email" placeholder="enter your email" >
         <button>Submit</button>
        </form>`);
    
};
module.exports = userForm;
