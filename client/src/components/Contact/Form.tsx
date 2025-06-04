const Form = () => {
  return <div className="xl:w-[70%] w-full mx-auto p-8  xl:p-16">
    <form className="sm:space-y-7 space-y-5">
       <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 space-x-8 w-full">
           <div className="sm:w-1/2 w-full"> 
            <label>First Name</label>
            <input name="firstName" type="text" className="py-2 px-4 text-sm sm:text-[15px] bg-[var(--color-cards)] font-light rounded w-full mt-2" placeholder="Enter First Name" />
           </div>
           <div className="sm:w-1/2 w-full"> 
            <label>Last Name</label>
            <input name="lastName" type="text" className="py-2 px-4 text-sm sm:text-[15px] bg-[var(--color-cards)] font-light rounded w-full mt-2" placeholder="Enter Last Name" />
           </div>
       </div>

       <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 space-x-8 w-full">
           <div className="sm:w-1/2 w-full"> 
            <label>Email</label>
            <input name="firstName" type="email" className="py-2 px-4 text-sm sm:text-[15px] bg-[var(--color-cards)] font-light rounded w-full mt-2" placeholder="Enter your Email" />
           </div>
           <div className="sm:w-1/2 w-full"> 
            <label>Phone</label>
            <input name="lastName" type="number" className="py-2 px-4 text-sm sm:text-[15px] bg-[var(--color-cards)] font-light rounded w-full mt-2" placeholder="Enter Phone Number" />
           </div>
       </div>

       <div> 
            <label>Subject</label>
            <input name="lastName" type="text" className="py-2 px-4 text-sm sm:text-[15px] font-light bg-[var(--color-cards)] rounded w-full mt-2" placeholder="Enter your Subject" />
        </div>

       <div> 
            <label>Message</label>
            <textarea rows={5} className="py-2 px-4 text-sm sm:text-[15px] bg-[var(--color-cards)] font-light rounded w-full mt-2" placeholder="Enter your Message here..."/>
        </div>
    
   <div className="lg:text-center">
   <button className="bg-[var(--color-bgPrimary)] py-2 sm:py-3 px-4 font-light text-white  text-sm sm:text-[15px] rounded-[8px]">Send Your Message</button>
   </div>
    </form>
  </div>;
};

export default Form;
