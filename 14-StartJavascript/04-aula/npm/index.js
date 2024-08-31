import { z } from  "zod"

const mySchema =  z.string()

console.log(mySchema.parse("Breno"))

alert("BRENO")