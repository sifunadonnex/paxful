'use client'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
export default function Home() {
  const [otp, setOtp] = useState('');
  return (
   //paxfull login page
    <main className="flex items-center  content-evenly ">
        <div className="flex flex-col items-start justify-center w-full max-w-md p-3  mx-auto mt-8 lg:mt-16 bg-white ">
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
                <p className="text-2xl text-black font-bold">Confirm Your Login</p>
            </div>

            <div className="flex flex-col gap-4 mt-6 justify-start w-full items-start">
                <div className="flex flex-col justify-start w-full items-start space-y-2">
                    <label className="text-sm text-black ">Enter the code we've sent to your email below.</label>
                    <a href="#" className="text-sm text-[#0052CC]">Trouble logging in?</a>
                </div>

                <div className="flex flex-col justify-start w-full items-start space-y-2">
                    <div className="flex items-center justify-start w-full">
                        <OtpInput
                        inputStyle={{
                            minWidth: '2.5rem',
                            minHeight: '2.5rem',
                            margin: '0 0.5rem',
                            fontSize: '1.5rem',
                            borderRadius: 4,
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                        }}
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType="number"
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus
                        />
                    </div>
                    <a href="#" className="text-sm text-[#0052CC]">Resend Code</a>
                </div>

                <button 
                onClick={() => window.location.href='/paxful'}
                className="w-full bg-[#ffffff] flex items-center justify-start gap-3 text-[#0052CC] rounded-sm mt-2">
                    <svg className='rotate-180 color-[#42a4d1]' width="9" height="16" stroke="#42a4d1" stroke-width="1.5" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.793997 13.292L6.086 7.99898L0.793997 2.70598C0.698487 2.61374 0.622304 2.50339 0.569895 2.38139C0.517486 2.25938 0.4899 2.12816 0.488746 1.99538C0.487592 1.8626 0.512894 1.73092 0.563175 1.60803C0.613456 1.48513 0.687709 1.37348 0.781602 1.27959C0.875495 1.18569 0.987146 1.11144 1.11004 1.06116C1.23294 1.01088 1.36462 0.985578 1.4974 0.986732C1.63018 0.987886 1.7614 1.01547 1.8834 1.06788C2.00541 1.12029 2.11575 1.19647 2.208 1.29198L8.208 7.29198C8.35276 7.43587 8.44951 7.62099 8.485 7.82198L8.5 7.93998V8.05798C8.48594 8.30241 8.38234 8.53309 8.209 8.70598L2.209 14.706C2.11675 14.8015 2.00641 14.8777 1.8844 14.9301C1.7624 14.9825 1.63118 15.0101 1.4984 15.0112C1.36562 15.0124 1.23394 14.9871 1.11104 14.9368C0.988146 14.8865 0.876495 14.8123 0.782602 14.7184C0.688709 14.6245 0.614456 14.5128 0.564175 14.3899C0.513894 14.267 0.488592 14.1354 0.489746 14.0026C0.4909 13.8698 0.518486 13.7386 0.570895 13.6166C0.623304 13.4946 0.698487 13.3842 0.793997 13.292Z" fill="white"/>
                    </svg>
                    Back to login
                </button>
                
            </div>
                    
            
        </div>
    </main>

  )
}