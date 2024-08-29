import Logininput from "../Login/Logininput"
import Loginbutton from "../Login/Loginbutton"

const Createpostleftform = () => {
  return (
    <form action="#"  className="w-[450px]">
        <Logininput type="text" label="Title"/>
        <Logininput type="text" label="Author"/>
        <Logininput type="text" label="slug"/>
        <Logininput type="text" label="Tags"/>
        <Logininput type="file" label="Image URL"/>
        <Loginbutton text="Submit" className="w-full bg-blue-500 text-white py-2 mt-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          
      
          
            
        </form>
  )
}

export default Createpostleftform