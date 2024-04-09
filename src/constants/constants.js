const API='https://evgeny-yn.ru/api';

const SORT={
    sortAZ:(arr,propertySort)=>{
        arr.sort((a, b) => {
          const headerA = a[propertySort].toLowerCase();
          const headerB = b[propertySort].toLowerCase();
        
          if (headerA < headerB) {
            return -1;
          }
          if (headerA > headerB) {
            return 1;
          }
          return 0;
        });
        return arr;
      },
      
      sortZA:(arr, propertySort)=> {
        arr.sort((a, b) => {
          const propA = a[propertySort].toLowerCase();
          const propB = b[propertySort].toLowerCase();
      
          if (propA > propB) {
            return -1;
          }
          if (propA < propB) {
            return 1;
          }
          return 0;
        });
        return arr
      },
      
      
      sortMinMax:(arr, propertySort)=> {
        return arr.sort((a, b) => a[propertySort] - b[propertySort]);
      },
      
      sortMaxMin:(arr, propertySort)=>{
        return arr.sort((a, b) => b[propertySort] - a[propertySort]);
      }
}

export{SORT,API}