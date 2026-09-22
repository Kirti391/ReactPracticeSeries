import React from 'react'
import './App.css'
// import User from './components/User'
import Card from "./components/Card"

const App = () => {
  // const arr = [
  //   { user: "Kirti" ,
  //     age:21
  //   },
  //   { user: "Annu" , age:23},
  //   { user: "Bob", age:17 }
  // ];

  // console.log(arr);
  // arr.forEach(function (el) {
  //   console.log(el.age);
  // })

  const jobs = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer, Search",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://w7.pngwing.com/pngs/575/959/png-transparent-amazon-icon-hd-logo.png",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer II",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer 2 - Backend",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.L7J7uH7WVGPuFTecNNkjsAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Apple",
    datePosted: "3 days ago",
    post: "Software Engineer - Java, Spring Boot and Microservices",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$41/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/e0/6c/06/e06c061bc3c7558aefe2fbe49e2ca4c3.jpg",
    name: "Meta",
    datePosted: "4 days ago",
    post: "Software Engineer, Backend",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/01/nvidia-company-logo-black-bg.jpg",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "Software Engineer, AI/ML",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/salesforce-transparent-logo-115525063493207zrqpiz.png",
    name: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$39/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo-2014-2020-700x394.png",
    name: "Adobe",
    datePosted: "10 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$43/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol-700x394.png",
    name: "Oracle",
    datePosted: "2 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$37/hr",
    location: "Bengaluru, India"
  }
];

console.log(jobs);
  return (
    <div className="parent">
      {/* <User name={arr[0]}/>
      <User name={arr[1]}/>
      <User name={arr[2]}/> */}

      {/* short way to write this instead of writing like above using map method */}
      {/* {arr.map(function (ele) {
        return <Card name={ele}/>;
      })} */}

  {jobs.map(function(ele,idx){
       return <div key={idx}><Card  company={ele.name} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} date={ele.datePosted} logo={ele.brandLogo}/></div>
  })}


      {/* 
       <Card/>
        <Card/> */}

    </div>
  )
}

export default App
