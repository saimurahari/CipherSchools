
const validation = (values) =>{
    let errors={};
    if(!values.fullname){
        errors.fullname="*Name is required"
    }
    if(!values.email){
        errors.email="*Email is required"
    }else if(!/\S+@\S+/.test(values.email)){
        errors.email="*Email is invalid"
    }
    if(!values.password){
        errors.password="*Password is required"
    }else if(values.password <5){
        errors.password ="*Password must be more than five digits"
    }
    return errors;
}
export default validation;