//pick
interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(updatedProps: UpdateProps) {

}


//partial
type UpdatePropsOptional = Partial<UpdateProps>


//readonly
type Use = {
    readonly id: string,
    readonly name: string,
}

const userr: Use = {
    id: '123',
    name: 'John',
}

//userr.id = "2";  //error


//record and map
type UserRecord = Record<string, {age: number, name:string}>

const users: UserRecord = {
    '123': {age: 20, name:"nisha"},
    '234': {age: 21, name:"xyz"},
}

//map
const user1 = new Map()
user1.set('123', {age: 20, name:"nisha"})
user1.set('234', {age: 21, name:"xyz"})

const user2 = user1.get('123')
console.log(user2)


//exclude
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>

const handleEvent = (event: ExcludeEvent) => {
    console.log(`handling event: ${event}`);
}

handleEvent('click')
handleEvent('mousemove')
//handleEvent('scroll') //error


//type inference
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type finalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: finalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);