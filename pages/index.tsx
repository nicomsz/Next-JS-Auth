import Link from "next/link"
import LoginPage from "./LoginPage"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page. You can view it without being logged in.</p>
     <LoginPage />
    </div>
  )
}