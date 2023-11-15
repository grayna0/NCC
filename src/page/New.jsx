import React from "react";
const newsData = [
  {
    name: "Lorem ipsum dolor sit amet",
    img: "css-icon 1.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    name: "Lorem ipsum dolor sit amet",
    img: "css-icon 1.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    name: "Lorem ipsum dolor sit amet",
    img: "css-icon 1.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];
const New = () => {
  return (
    <div className="news">
      <div className="logo">
        <img src="logoNCC.png" alt="logoNCC" />
      </div>
      <div className="section-1">
        <p className="title">Lorem ipsum dolor sit asmet?</p>
        <p className="des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="section-2">
        {newsData.map((e, index) => {
          return (
            <div className="col" key={index}>
              <p className="title">{e.name}</p>
              <div className="flex">
               
                  <img className="img" src={e.img} alt="img" />
             
                <p className="des">{e.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default New;
