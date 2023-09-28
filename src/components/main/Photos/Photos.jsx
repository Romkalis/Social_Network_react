// import React from "react";
// import style from "./Photos.module.css";

// const Photos = (props) => {
//   const gradientStyles = [
//     {
//       background: "linear-gradient(229.99deg, rgb(220, 166, 121), #017e8b 145%)",
//       title: "Snow in the desert",
//     },
//     {
//       background: "linear-gradient(229.99deg, rgb(70, 100, 110) -26%, #06a5b6 145%)",
//       title: "Snow in the desert",
//     },
//     {
//       background: "linear-gradient(215.32deg, rgb(207, 140, 100) -1%, #9e0706 124%)",
//       title: "Life Hutch",
//     },
//     {
//       background: "linear-gradient(221.87deg, #150336 1%, #1f0d00 128%)",
//       title: "Zima Blue",
//     },
//     {
//       background: "linear-gradient(220.16deg, #cc851b -8%, #f3cb02 138%)",
//       title: "Automated Customer Service",
//     },
//   ];

//   const images = [
//     'https://images.unsplash.com/photo-1568503445916-aad26dad82ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3397&q=80',
//     'https://images.unsplash.com/photo-1577214407836-1f3a0604ecb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2774&q=80',
//     'https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80',
//     'https://images.unsplash.com/photo-1613757874090-456665221c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3330&q=80',
//     'https://images.unsplash.com/photo-1626692880062-35c360fb6afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
//   ];

//   return (
//     <div className={style.container}>
//       <div className={style.sidebar}>
//         {gradientStyles.map((style, index) => (
//           <div key={index} style={{ background: style.background }}>
//             <h1>{style.title}</h1>
//             <p>Love, death & robots</p>
//           </div>
//         ))}
//       </div>
//       <div className={style.mainSlide}>
//         {images.map((image, index) => (
//           <div key={index} style={{ backgroundImage: `url(${image})` }}></div>
//         ))}
//       </div>
//       <div className={style.controls}>
//         <button className={style.downButton}>
//           <i className={style.arrowDown}>DWN</i>
//         </button>
//         <button className={style.upButton}>
//           <i className={style.arrowDown}>UP</i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Photos;