import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import "./components/SearchBar.css";
import Card from "./components/Card";
import "./App.css";
import ios from "./ios";
import android from "./android";
import web from "./web";
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default function App() {
  const [items, setItem] = useState([]);
  const [F1, setF1] = useState(false);
  const [F2, setF2] = useState(false);

  //searching
  function search(str) {
    str = str.toLowerCase();
    const regex = /^io/;
    if (regex.test(str)) {
      setItem([]);
      ios.map((course) => {
        return setItem((previous) => {
          return [...previous, course];
        });
      });
      setItem((previousData) => {
        return previousData.filter((e) => {
          return e.title.toLowerCase().includes(str);
        });
      });
    }
    const regex2 = /^and/;
    if (regex2.test(str)) {
      setItem([]);
      android.map((course) => {
        return setItem((previous) => {
          return [...previous, course];
        });
      });
      setItem((previousData) => {
        return previousData.filter((e) => {
          return e.title.toLowerCase().includes(str);
        });
      });
    }

    const regex3 = /^we/;
    if (regex3.test(str)) {
      setItem([]);
      web.map((course) => {
        return setItem((previous) => {
          return [...previous, course];
        });
      });
      setItem((previousData) => {
        return previousData.filter((e) => {
          return e.title.toLowerCase().includes(str);
        });
      });
    }

    // else {
    //   setItem((previousData) => {
    //     return previousData.filter((e) => {
    //       return e.title.includes(str);
    //     });
    //   });
    // }
  }

  //Sorting
  function sortBy(i) {
    if (i === 1) {
      setF1(() => {
        return true;
      });
      setF2(() => {
        return false;
      });
      items.sort(function (a, b) {
        return a.rating - b.rating;
      });
      items.reverse();
      setItem((previous) => {
        return [...previous];
      });
      console.log(items);
      console.log(F1);
      console.log(F2);
    } else if (i === 2) {
      items.sort(function (a, b) {
        return a.price - b.price;
      });
      setItem((previous) => {
        return [...previous];
      });

      console.log(items);
      setF1(() => {
        return false;
      });
      setF2(() => {
        return true;
      });
      console.log(F1);
      console.log(F2);
    }
  }
  //category
  function cato(i) {
    if (i === 1) {
      setItem([]); //emptying the Array
      if (F1) {
        document.getElementById("rating").checked = false;
      } else if (F2) {
        document.getElementById("price").checked = false;
      }
      ios.map((course) => {
        return setItem((previous) => {
          return [...previous, course];
        });
      });

      // if (F1) {
      //   sortBy(1);
      // } else if (F2) {
      //   sortBy(2);
      // }
      //  else {
      //   setItem([]); //emptying the Array
      //   ios.map((course) => {
      //     return setItem((previous) => {
      //       return [...previous, course];
      //     });
      //   });
      // }
    }
    if (i === 2) {
      setItem([]); //emptying the Array
      if (F1) {
        document.getElementById("rating").checked = false;
      } else if (F2) {
        document.getElementById("price").checked = false;
      }
      android.map((course) => {
        return setItem((previous) => {
          return [...previous, course];
        });
      });

      // if (F1) {
      //   sortBy(1);
      // } else if (F2) {
      //   sortBy(2);
      // }
      //  else {
      //   setItem([]); //emptying the Array
      //   android.map((course) => {
      //     return setItem((previous) => {
      //       return [...previous, course];
      //     });
      //   });
      // }
    }
    if (i === 3) {
      setItem([]); //emptying the Array
      if (F1) {
        document.getElementById("rating").checked = false;
      } else if (F2) {
        document.getElementById("price").checked = false;
      }
      web.map((course) => {
        return setItem((previous) => {
          return [...previous, course];
        });
      });

      // if (F1) {
      //   sortBy(1);
      // } else if (F2) {
      //   sortBy(2);
      // }
      // else {
      //   setItem([]); //emptying the Array
      //   web.map((course) => {
      //     return setItem((previous) => {
      //       return [...previous, course];
      //     });
      //   });
      // }
    }
  }

  return (
    <div>
      <Navbar />
      <div class="row">
        <div class="col-3">
          <SideBar cato={cato} sortBy={sortBy} />
        </div>
        <div class="col-9">
          <SearchBar search={search} />
          {items.map((course) => {
            return (
              <Card
                img={course.img}
                url={course.url}
                desc={course.desc}
                level={course.level}
                title={course.title}
                rating={course.rating}
                price={course.price}
                disPrice={course.disPrice}
                cato={cato}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
