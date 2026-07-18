import { useState } from 'react'

function App() {
  const PasswordErrorMessage = () => {
    return (
      <p className="my-3 text-red-500">Password should have at least 8 characters</p>
    )
  }

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("");

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  }

  const getIsFormValid = () => {
    return (
      firstName !== "" &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      (role === "individual" || role === "business")
    );
  }

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setPassword({
      value: "",
      isTouched: false,
    })
    setEmail("")
    setRole("")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="border-0">
          <h1 className='text-center my-6 text-white'>Sign Up Form</h1>
          <div className='border rounded-lg p-8 max-w-md mx-auto shadow-2xl bg-gray-800'>
            {/* Added: border, rounded-lg, shadow-2xl, bg-gray-800, max-w-md, mx-auto, p-8 */}
            
            <div className='my-5'>
              <label className='text-gray-300'>First Name <sup className='text-red-500'>*</sup> </label>
              <input 
                className='bg-white rounded text-black px-3 py-2 w-full border-2 border-gray-400 shadow-md focus:border-blue-500 focus:shadow-lg transition-all'
                type="text"
                placeholder='Enter Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className='my-6'>
              <label className='text-gray-300'>Last Name </label>
              <input 
                className='bg-white rounded text-black px-3 py-2 w-full border-2 border-gray-400 shadow-md focus:border-blue-500 focus:shadow-lg transition-all'
                type="text"
                placeholder='Enter Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className='my-6'>
              <label className='text-gray-300'>Email address <sup className='text-red-500'>*</sup></label>
              <input 
                className='bg-white rounded text-black px-3 py-2 w-full border-2 border-gray-400 shadow-md focus:border-blue-500 focus:shadow-lg transition-all'
                type='email'
                placeholder='Enter Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='my-6'>
              <label className='text-gray-300'>Password <sup className='text-red-500'>*</sup></label>
              <input 
                className='bg-white rounded text-black px-3 py-2 w-full border-2 border-gray-400 shadow-md focus:border-blue-500 focus:shadow-lg transition-all'
                type="password"
                placeholder='Enter Password'
                required
                value={password.value}
                onChange={(e) => setPassword({
                  ...password,
                  value: e.target.value,
                })}
                onBlur={() => 
                  setPassword({
                    ...password,
                    isTouched: true,
                  })
                }
              />
              {password.isTouched && password.value.length < 8 && (
                <PasswordErrorMessage />
              )}
            </div>

            <div className='my-6 text-center'>
              <label className='m-5 text-gray-300'>Role <sup className='text-red-500'>*</sup></label>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className='bg-white text-black rounded px-3 py-2 w-full border-2 border-gray-400 shadow-md focus:border-blue-500 focus:shadow-lg transition-all'
              >
                <option value="" disabled>Select Role</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
              </select>
            </div> 

            <div className='mt-8'>
              <button 
                type='submit'
                className='bg-cyan-400 text-amber-950 rounded px-6 py-3 w-full font-semibold cursor-pointer hover:bg-cyan-500 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={!getIsFormValid()}
              >
                Create Account
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default App