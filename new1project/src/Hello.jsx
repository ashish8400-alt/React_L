function Hello(){
    let myName = 'Ashish';
    let fullName = ()=>{
        return 'Ashish Tiwari'
    }
    return <h3>{myName}  hello this is the future speaking.I am a student {fullName()}</h3>
}

export default Hello;