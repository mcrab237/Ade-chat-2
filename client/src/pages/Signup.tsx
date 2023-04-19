import { FormEvent, useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useAuth } from "../context/AuthContext"

export function Signup() {
  const { signup } = useAuth()
  const usernameRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const imageUrlRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (signup.isLoading) return

    const username = usernameRef.current?.value
    const name = nameRef.current?.value
    const imageUrl = imageUrlRef.current?.value
    const password = passwordRef.current?.value
    if (username == null || username === "" || name == null || name === "" || password == null || password === "") {
      return
    }

    if(password === null || password === ""){
      alert("Please Enter Password")
    } else if(password.length < 8 ){
      alert("Password is too weak")
    }else{
      signup.mutate({ id: username, name, image: imageUrl })
    }

  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S*" required ref={usernameRef} />
        <label htmlFor="name">Name</label>
        <Input id="name" required ref={nameRef} />
        <label htmlFor="imageUrl">Image Url</label>
        <Input id="imageUrl" type="url" ref={imageUrlRef} />
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" ref={passwordRef} />
        <Button
          disabled={signup.isLoading}
          type="submit"
          className="col-span-full"
        >
          {signup.isLoading ? "Loading.." : "Sign Up"}
        </Button>
      </form>
    </>
  )
}