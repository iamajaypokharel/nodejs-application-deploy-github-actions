import express from 'express'

const app =express()
const PORT = process.env.PORT || 8080

app.get('/', (req,res)=> {
     return res.json({msg:'hello from server V1'})
    
})
app.listen(PORT,() =>{
    console.log('SERVER IS UP AND RUNNING ON PORT'
        
    )
})