import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Question() {
  const location = useLocation();
  console.log(location);
  const data = location.state.data.questions;

  const OptionCard = ({item}) =>{
    const [isSelected,setSelected] = useState(false)
    return (
      <>
              <div className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center">
                <input
                  type="radio"
                  name="answer"
                  id={item.option}
                  value={item.option}
                  onChange={(e)=>{
                    console.log(e.target)
                    setSelected(e.target.value)
                  }}
                  className="ml-5 dark:bg-gray-800"
                />
                {location.pathname.includes("/question/") ? (
                  <>
                    <label htmlFor={item.option} className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                      {item.option}
                    </label>
                  </>
                ) : (
                  <NavLink to="/question/1" state={{ data: item }}>
                    <label  htmlFor={item.option}  className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                      {item.option}
                    </label>
                  </NavLink>
                )}
              </div>
              {location.pathname.includes("/question/") && isSelected && 
              <div className="bg-slate-200 w-full h-52 flex justify-center items-center mb-6 p-4 sm:p-0">
                <h1 className="text-lg font-semibold">{item.suggestion}</h1>
              </div>
              }
            </>
    )
  }
  const QuestionCard = ({ data }) => {
    return (
      <div>
        <h1 className="text-3xl font-sans mt-4 md:mt-4 lg:mt-4 mb-10 font-bold text-gray-800 dark:text-gray-300 text-center">
          {data.question}
        </h1>
        {data.options.map((item) => {
          return <OptionCard item={item}/>
        })}
      </div>
    );
  };
  return (
    <div>
      <QuestionCard data={data} />
    </div>
  );
}

export default Question;
