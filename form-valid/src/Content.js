
const Content=(values) => {
    const errors={};
    if(!values.name){
        errors.name=" Please enter the name"
    }else{
        errors.name="Completed Successfully"
    }
    if(!values.email){
        errors.email=" Please enter the email"
    }else{
        errors.email=""
    }
    if(!values.phonenumber){
        errors.phonenumber=" Please enter the Phone number"
    }else{
        errors.phonenumber=""
    }
    if(!values.password){
        errors.password=" Please enter the password"
    }else{
        errors.password=""
    }
    return errors
}
export default Content;