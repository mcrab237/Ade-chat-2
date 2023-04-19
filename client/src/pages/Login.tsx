import { FormEvent, useRef } from "react"
import { Navigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useAuth } from "../context/AuthContext"

export function Login() {
  const { login, user } = useAuth()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  if (user != null) return <Navigate to="/" />

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (login.isLoading) return

    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    if (username == null || username === "" ||password == null || password === "") {
      return
    }

    if(password === null || password === ""){
      alert("Please Enter Password")
    } else if(password.length < 8 ){
      alert("Password is too weak")
    }else{
      login.mutate(username)
    }

  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Input id="userName" required ref={usernameRef} />
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" ref={passwordRef} />
        <Button
          disabled={login.isLoading}
          type="submit"
          className="col-span-full"
        >
          {login.isLoading ? "Loading.." : "Log In"}
        </Button>
      </form>
    </>
  )
}