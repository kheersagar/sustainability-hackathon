import React from 'react'
import { NavLink } from 'react-router-dom'

function Rotuine() {
  const routine_data = [
    {
      id:1,
      name:'Bathing',
      imgSrc : 'https://png.pngtree.com/element_our/png_detail/20180921/kids-shower-png_105670.jpg',
      questions:{
        question : 'How do you planning to bathe today?',
        options:[
          {
            option:'Using a bucket',
            questions : {
              question : 'How many buckets of water do you typically use for a single bath?',
              options :[
                {
                  option: "Less than one bucket",
                  suggestion: "That's great! Using less than one bucket of water is a sustainable choice for bathing."
                },
                {
                  option: "One bucket",
                  suggestion: "Excellent! Using one bucket of water for bathing is a sustainable practice."
                },
                {
                  option: "More than one bucket",
                  suggestion: "Using more than one bucket of water for bathing can be excessive. Consider reducing the amount of water used to conserve resources."
                },
              ]
            }
          },
          {
            option:'Using a shower',
            questions : {
              question : 'How long do you typically spend in the shower?',
              options :[
                {
                  option: "Less than 5 minutes",
                  suggestion: "Great job! Taking short showers helps conserve water."
                },
                {
                  option: "5-10 minutes",
                  suggestion: "That's good! Consider reducing your shower time to further conserve water."
                },
                {
                  option: "10-15 minutes",
                  suggestion: "Try to shorten your shower time to save water and energy"
                },
                {
                  option: "More than 15 minutes",
                  suggestion: "Taking long showers can be wasteful. Aim to reduce your shower time for better sustainability."
                },
              ]
            }
          },
        ]
      }
    },
    {
      id:2,
      name:'Grocery Shopping',
      imgSrc : 'https://static.vecteezy.com/system/resources/previews/001/869/276/original/groceries-in-shopping-cart-free-form-style-free-vector.jpg',
      questions:{
        question : 'How do you plan to carry your groceries today?',
        options:[
          {
            option:'Plastic bags',
            questions : {
              question : "How many plastic bags do you estimate you'll use for your groceries today?",
              options :[
                {
                  option: "None",
                  suggestion: "That's great! Using no plastic bags is a sustainable choice."
                },
                {
                  option: "1-5 bags",
                  suggestion: "Consider using fewer plastic bags or switching to reusable bags for a more sustainable option.."
                },
                {
                  option: "6-10 bags",
                  suggestion: "Using a large number of plastic bags contributes to waste. Try to reduce the number of bags used or opt for reusable bags."
                },
                {
                  option: "More than 10 bags",
                  suggestion: "Using excessive plastic bags has a significant environmental impact. It's strongly recommended to switch to reusable bags to reduce plastic waste."
                },
              ]
            }
          },
          {
            option:'Reusable bags',
            questions : {
              question : 'Continue using reusable bags for grocery shopping. This is sustainable option',
              options :[ ]
            }
          },
        ]
      }
    },
    {
      id:3,
      name:'Commuting',
      imgSrc : 'https://static.vecteezy.com/system/resources/thumbnails/001/892/479/small/social-distancing-with-woman-wearing-medical-mask-in-bus-station-city-community-transport-with-diverse-commuters-together-prevention-coronavirus-covid-19-free-vector.jpg',
      questions:{
        question : 'How do you planning to commute to work/school today?',
        options:[
          {
            option:'Personal vehicle (car, motorcycle, etc.)',
            questions : {
              question : "Do you carpool or share your ride with others?",
              options :[
                {
                  option: "Yes",
                  suggestion: "Carpooling or sharing rides with others reduces the number of vehicles on the road, promoting sustainability."
                },
                {
                  option: "No",
                  suggestion: "Consider carpooling options to reduce traffic congestion and reduce carbon emissions"
                },
              ]
            }
          },
          {
            option:'Public transportation (bus, train, etc.)',
            questions : {
              question : 'Continue using Public transportation. This is sustainable option',
              options :[ ]
            }
          },
          {
            option:'Bicycle/Walking',
            questions : {
              question : 'Continue using Bicycle/Walking. This is sustainable option',
              options :[ ]
            }
          },
        ]
      }
    },
    {
      id:4,
      name:'Electric usage',
      imgSrc : 'https://img.freepik.com/free-vector/energy-plus-house-abstract-concept-vector-illustration-zero-energy-building-low-energy-passive-house-construction-industry-efficiency-plus-home-renewable-energy-sources-abstract-metaphor_335657-4249.jpg?w=2000'
    },
    {
      id:5,
      name:'Waste Management',
      imgSrc : 'https://static.vecteezy.com/system/resources/previews/005/611/514/original/colorful-trash-cans-on-a-white-background-symbols-for-containers-and-waste-separation-types-of-waste-flat-style-cartoon-illustration-free-vector.jpg'
    },
    {
      id:6,
      name:'Gardening',
      imgSrc : 'https://static.vecteezy.com/system/resources/thumbnails/021/697/180/small/summer-gardening-composition-with-wheelbarrow-pot-shovel-watering-can-illustration-vector.jpg'
    },    {
      id:7,
      name:'Laundry',
      imgSrc : 'https://img.freepik.com/free-vector/washing-machine-laundry-set-cartoon-icon-illustration-technology-fashion-icon-concept-isolated-flat-cartoon-style_138676-2150.jpg?w=2000'
    },    {
      id:8,
      name:'Meal Preparation',
      imgSrc : 'https://img.freepik.com/free-vector/hand-drawn-meal-prep-illustration_23-2149326634.jpg?w=2000'
    },    {
      id:9,
      name:'Dish Washing',
      imgSrc : 'https://previews.123rf.com/images/graphicbee/graphicbee1801/graphicbee180100083/93648040-dish-washing-vector-illustration-of-mother-holding-the-dish-washing-liquid.jpg'
    },    {
      id:10,
      name:'Personal Hygiene',
      imgSrc : 'https://img.freepik.com/free-vector/personal-hygiene-concept_1284-13564.jpg'
    },
    {
      id:11,
      name:'Vechicle Washing',
      imgSrc : 'https://img.freepik.com/free-vector/detailed-car-wash-service-concept-illustration_23-2149038677.jpg?w=2000'
    },
  ]
  const Card = ({...item}) =>{
    return (
      <NavLink to="/question" state={{data:item}}>
      <div className='cursor-pointer hover:animate-bounce'>
          <img 
          className='w-36 h-36 rounded-lg object-cover'
          src= {item.imgSrc}/>
          <h3 className='font-semibold text-center'>{item.name}</h3>
      </div>
      </NavLink>
    )
  }
  return (
  <div className="max-w-[50rem] flex justify-center items-center">
     <div className='flex flex-wrap gap-6 mt-10 justify-center'>
     { routine_data.map((item)=>{
      return <Card {...item}/>
     })}
     </div>
  </div>
  )
}

export default Rotuine