import React from "react";
import Content from "./Content";

function FullStack() {
  return (
    <div>
      <Content
        imgAddress1={
          "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg"
        }
        imgAddress3={
          "https://www.bangaloretraininginstitute.com/wp-content/uploads/2021/02/fullstack_php_js.jpg"
        }
        imgAddress2={
          "https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png"
        }
        cardTitle1={"Best Books to Learn Full-Stack Development"}
        cardText1={
          "Are you interested in becoming a full-stack developer but not sure where to start? In"
        }
        cardTitle2={
          "Top 10 Product-Based Companies for Full-Stack Developers [2023]"
        }
        cardText2={
          "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,"
        }
        cardTitle3={
          "Top Ways to Assess Soft Skills in Full Stack Developers in 2023"
        }
        cardText3={
          "When you’re hiring a full-stack developer, what are the most important things you look for?"
        }
      ></Content>
    </div>
  );
}

export default FullStack;