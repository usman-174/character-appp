const search = (query,selectedFranchise,selectedSeries,characters,setItemOffset,itemOffset) => {
    let result = [];
    if (query.length > 2 && selectedFranchise && selectedSeries) {
        setItemOffset(0)
     
      result = characters.filter((item) => {
        return (
          (item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.character.toLowerCase().includes(query.toLowerCase())) &&
          item.amiiboSeries.toLowerCase() === selectedSeries.toLowerCase() &&
          item.series.toLowerCase() === selectedFranchise.toLowerCase()
        );
      });
      // return filteredData;
    } else if (selectedFranchise && selectedSeries) {

      result = characters.filter(
        (character) =>
          character.series.toLowerCase() === selectedFranchise.toLowerCase() &&
          character.amiiboSeries.toLowerCase() === selectedSeries.toLowerCase()
      );
    } else if (selectedFranchise && query.length > 2) {
    

      result = characters.filter(
        (character) =>
          character.series.toLowerCase() === selectedFranchise.toLowerCase() &&
          (character.name.toLowerCase().includes(query.toLowerCase()) ||
            character.character.toLowerCase().includes(query.toLowerCase()))
      );
    } else if (selectedSeries && query.length > 2) {
      


      result = characters.filter(
        (character) =>
          character.amiiboSeries.toLowerCase() ===
            selectedSeries.toLowerCase() &&
          (character.name.toLowerCase().includes(query.toLowerCase()) ||
            character.character.toLowerCase().includes(query.toLowerCase()))
      );
    } else if (selectedFranchise) {

      result = characters.filter(
        (character) =>
          character.series.toLowerCase() === selectedFranchise.toLowerCase()
      );
    } else if (selectedSeries) {

      result = characters.filter(
        (character) =>
          character.amiiboSeries.toLowerCase() === selectedSeries.toLowerCase()
      );
    } else if (query.length > 2) {

      result = characters.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.character.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {

      result = characters;
    }
    if(result.length < itemOffset){
        setItemOffset(0)
    }
    return result;
  };

  export {
    search
  }