import Createpostcontent from "./Createpostcontent"
import Createpostleftform from "./Createpostleftform"


const Createpost = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Create a Blog Post</h2>
     <div className="createpost flex p-4 gap-8 justify-center items-center">
      <Createpostleftform />
      <Createpostcontent />
     </div>
    </div>

  )
}

export default Createpost
