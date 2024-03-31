import React, { useState } from 'react';
import Info_guide from './info_guide';
import FilterGuide from './filter-guide';
import './cards-guide.css';


// const Guides_list = [
//   {
//     "ID": 1,
//     "name": "wiam",
//     "prenom": "hd",
//     "score": 3,
//     "price": 300,
//     "job": "Teacher",
//     "ville": "tetouan",
//     "img": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1711555336~exp=1711555936~hmac=31682659ea774110bc2322127f33bc6967884f9f9a43a4fb1c5c7ee181af5d0f"
//   },
//   {
//     "ID": 2,
//     "name": "John",
//     "prenom": "Doe",
//     "score": 4,
//     "price": 250,
//     "job": "Tour Guide",
//     "ville": "Paris",
//     "img": "https://img.freepik.com/free-photo/happy-dark-skinned-girl-enjoys-every-moment-life-dances-moves-raises-arms-clenches-fists-closes-eyes-has-good-mood-wears-denim-sarafan-turtleneck-isolated-pink-wall_273609-42165.jpg?w=996&t=st=1711555597~exp=1711556197~hmac=48c232e30ee21537dbfadef8b8638bc2dbf6ef8b81ef4878181a454586bd65c0"
//   },
//   {
//     "ID": 3,
//     "name": "Alice",
//     "prenom": "Smith",
//     "score": 5,
//     "price": 400,
//     "job": "Historian",
//     "ville": "London",
//     "img": "https://img.freepik.com/free-photo/positive-bearded-man-hipster-smiles-broadly-has-pleased-expression-laughs-something-funny-closes-eyes_273609-16781.jpg?t=st=1711555336~exp=1711555936~hmac=dc0c223fa595e3f9f6b7ecff08c3256b21a954bdcb5d15f8b5be063da66d3d32"
//   },
//   {
//     "ID": 4,
//     "name": "Mohammed",
//     "prenom": "Ahmed",
//     "score": 4.5,
//     "price": 350,
//     "job": "Archaeologist",
//     "ville": "Cairo",
//     "img": "https://img.freepik.com/free-photo/happy-dark-skinned-girl-enjoys-every-moment-life-dances-moves-raises-arms-clenches-fists-closes-eyes-has-good-mood-wears-denim-sarafan-turtleneck-isolated-pink-wall_273609-42165.jpg?w=996&t=st=1711555597~exp=1711556197~hmac=48c232e30ee21537dbfadef8b8638bc2dbf6ef8b81ef4878181a454586bd65c0"
//   }
// ];


// function Guides(props) {
//   const [filterCriteria, setFilterCriteria] = useState({
//     ville: 'all',
//     priceSortOrder: 'asc',
//     score: 'all', // Changed to 'all' as default
//   });

//   const onFilterSelected = (filterValue) => {
//     setFilterCriteria(filterValue);
//   }

//   // Apply both filtering and sorting to the guides list
//   const finalSortedList = Guides_list.filter((guide) => {
//     const { ville, score } = filterCriteria;
//     return (ville === 'all' || guide.ville === ville) && (score === 'all' || guide.score >= score); // Filter by score
//   }).sort((a, b) => {
//     const { priceSortOrder } = filterCriteria;

//     // Compare price
//     if (a.price !== b.price) {
//       return priceSortOrder === 'asc' ? a.price - b.price : b.price - a.price;
//     } else {
//       return 0; // Maintain the original order for guides with the same price
//     }
//   });

//   return (
//     <div className="App">
//       <div>
//         <div>
//           <FilterGuide FilterValueSelected={onFilterSelected} />
//         </div>
//       </div>
//       <div className="container guide-component">
//         {/* Render Info_guide components based on finalSortedList */}
//         {finalSortedList.map((guide) => (
//           <Info_guide
//             key={guide.ID}
//             id={guide.ID}
//             name={guide.name}
//             prenom={guide.prenom}
//             score={guide.score}
//             price={guide.price}
//             job={guide.job}
//             ville={guide.ville}
//             img={guide.img}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Guides;
// import React, { useState, useEffect } from 'react';
// import FilterGuide from './FilterGuide';
// import Info_guide from './Info_guide';

import Guides_list from './guides.json'; // Import JSON data

function Guides(props) {
  const [filterCriteria, setFilterCriteria] = useState({
    ville: 'all',
    priceSortOrder: 'asc',
    score: 'all', // Changed to 'all' as default
  });

  const onFilterSelected = (filterValue) => {
    setFilterCriteria(filterValue);
  }

  // Apply both filtering and sorting to the guides list
  const finalSortedList = Guides_list.filter((guide) => {
    const { ville, score } = filterCriteria;
    return (ville === 'all' || guide.ville === ville) && (score === 'all' || guide.score >= score); // Filter by score
  }).sort((a, b) => {
    const { priceSortOrder } = filterCriteria;

    // Compare price
    if (a.price !== b.price) {
      return priceSortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else {
      return 0; // Maintain the original order for guides with the same price
    }
  });

  return (
    <div className="App">
      <div>
        <div>
          <FilterGuide FilterValueSelected={onFilterSelected} />
        </div>
      </div>
      <div className="container-guide guide-component">
        {/* Render Info_guide components based on finalSortedList */}
        {finalSortedList.map((guide) => (
          <Info_guide
            key={guide.ID}
            id={guide.ID}
            name={guide.name}
            prenom={guide.prenom}
            score={guide.score}
            price={guide.price}
            job={guide.job}
            ville={guide.ville}
            img={guide.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Guides;
