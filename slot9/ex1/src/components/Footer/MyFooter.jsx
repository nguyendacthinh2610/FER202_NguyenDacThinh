import  Button from "react-bootstrap/Button";
import "./Footer.css"

function MyFooter({author, email, linkGithub}) {
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email} </p>
      <p>&copy; {new Date().getFullYear()} NguyenDac Thinh.All rights reserved </p>
      <Button variant="link" href="https://github.com/nguyendacthinh2610/FER202_NguyenDacThinh" >My Link Github's project: Movies Management </Button>
    </footer>
  )
}
export default MyFooter;
