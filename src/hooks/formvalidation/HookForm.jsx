import { useForm } from "react-hook-form"

const HookForm = () => {
    const {
        register, 
        handleSubmit,
        reset,
        formState: {
            errors
        } 
    } = useForm();

    const formSubmit = () => {
        alert('success');
        reset();
    }

    return(
        <div className="">
            <form onSubmit={handleSubmit(formSubmit)}>
                <input type="text"
                    placeholder="Enter Name"
                    autoFocus
                    {...register('name', {
                        required: 'Name is mandatory'
                    })}
                /> <br />
                {errors.name && <p>{errors.name.message}</p>}

                <input type="number"
                    placeholder="Enter Age"
                    {...register('age', {
                        required: 'Age is mandatory',
                        min : {
                            value : 18,
                            message : 'Age should be at least 18'
                        }
                    })}
                /> <br />
                {errors.age && <p>{errors.age.message}</p>}

                <input type="email"
                    placeholder="Enter Email Address"
                    {...register('email', {
                        required: 'email is mandatory',
                        pattern : {
                            value : /^[A-Za-z0-9]+@gmail\.com$/,
                            message : 'mail should be valid email id'
                        }
                    })}
                /> <br />
                {errors.email && <p>{errors.email.message}</p>}

                <input type="password"
                    placeholder="Enter Password"
                    {...register('password', {
                        required: 'password is mandatory',
                        minLength : {
                            value : 8,
                            message : 'Password should contain at least 8 characters'
                        }
                    })}
                /> <br />
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HookForm
