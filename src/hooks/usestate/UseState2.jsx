import { useState } from "react";

const useState2 =() =>{
  const[brand, setBrand] = useState("Mercedes");
  return (
    <div><h2>{brand}is the best {country}manufacture</h2>
    <button onClick={() => setBrand("BMV")}>chnage Brand</button>
    </div>
  )
}
export default useState2



// import React, { useState } from 'react'

// const UseState2 = () => {
//   const [brand, setBrand] = useState("Mercedes");
//   const [country, setCountry] = useState("German");

//   return (
//     <div>
//       <h2>{brand} is the best {country} manufacturer</h2>
//       <button onClick={() => setBrand("BMV")}>Change Brand</button>
//     </div>
//   )
// }

// export default UseState2






// import React, { useState } from 'react'

// const UseState2 = () => {
//   const [brand, setBrand] = useState("Mercedes");
//   const [country, setCountry] = useState("German");
//   const [liked, setLiked] = useState(false);

//   return (
//     <div>
//       <h2>{brand} is the best {country} manufacturer</h2>
//       <button onClick={() => setBrand("BMW")}>Change Brand</button>

//       <br />
//       <br />

//       <button onClick={() => setLiked(!liked)}>
//         {liked ? "❤️ Liked" : "🤍 Like"}
//       </button>
//     </div>
//   )
// }

// export default UseState2
// // import React, { useState } from 'react'

// // const UseState2 = () => {
// //   const [liked, setLiked] = useState(false);

// //   return (
// //     <button onClick={() => setLiked(!liked)}>
// //       {liked ? "❤️ Liked" : "🤍 Like"}
// //     </button>
// //   )
// // }

// // export default UseState2





