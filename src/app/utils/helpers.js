import {
  STATUS
} from "../data/constants";

export const pieCommute = (data) => {
  const pieData = [];

  STATUS.forEach(list => {
    let color;
    switch(list.label){
        case 'OK' :
            color = 'green';
            break;
        case 'NOK' :
            color = 'red';
            break;
        case 'CON' :
            color = 'yellow';
            break;
        default :
    }
    
    const filterData = data.filter((item) => item.status === list.name);

    if(filterData.length > 0) {
        pieData.push({
            label: list.label,
            name: list.name,
            value: filterData.length,
            color: color
        })
    }   
  });

  return pieData;
}


export const getSessionData = (key) => {
  try{
    if(typeof window !== 'undefined' && window.sessionStorage){
      const data = sessionStorage.getItem(key);
      return data;
    }
  }
  catch(err){
    console.log(err);
    return null;
  }
}