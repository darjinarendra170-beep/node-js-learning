export default function login(){
    return `<form action = "/submit" method="post">
        <input type = "text" placeholder = "enter your name" />
        <input type = "text" placeholder = "enter your email" />
        <button>submit</button>
        </form>`;
}