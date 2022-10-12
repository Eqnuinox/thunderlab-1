import { render } from "@testing-library/react";
import React, {useState} from "react";



export default function Header({onChange}){


    const handleSearchChange = (event) =>{
       onChange(event.target.value);
    }

    // const handleSearchClick = (event) =>{
    //    onClick(searchValue);
    // }





    // const { searchSongProps } = this.state;

    return (
      <div>
        <div>
          <input
            type=""
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <script></script>
        </div>
      </div>
    )
    }


// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchSongProps: ""
//     };
//   }

//   handleSearchChange = (event) =>
//     this.setState({ searchSongProps: event.target.value });
    
//   render() {
//     const { startSearch } = this.props;
//     const { searchSongProps } = this.state;


//   }
// }

