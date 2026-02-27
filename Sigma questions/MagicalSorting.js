let arr = ["Utkarsh", "Rahul", "Sam", "Yogesh Tripathi", "Filter Walt"];
function magicalSorting(arr) {
  arr.forEach((x) => {
    if (x.length < 6) {
      console.log(`${x}: Gryffindor House `);
    } else if (x.length < 8) {
      console.log(`${x}: Hufflepuff House`);
    } else if (x.length < 12) {
      console.log(`${x}: Ravenclaw House`);
    } else {
      console.log(`${x}: Slytherin  House`);
    }
  });
}
magicalSorting(arr);
