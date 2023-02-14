import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import CharacterCard from "./CharacterCard";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import CircleLoader  from "react-spinners/CircleLoader"
const CardContainer = () => {
  const keyId = useId()
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("");
  const [franchises, setFranchises] = useState([]);
  const [selectedFranchise, setSelectedFranchise] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const filterExist = selectedFranchise || selectedSeries || query.length > 2;

  let filteredCharacters = characters;

  if (selectedFranchise && selectedSeries) {
    filteredCharacters = filteredCharacters.filter(
      (character) =>
        character.series.toLowerCase() === selectedFranchise.toLowerCase() &&
        character.amiiboSeries.toLowerCase() === selectedSeries.toLowerCase()
    );
  } else if (selectedFranchise) {
    filteredCharacters = filteredCharacters.filter(
      (character) =>
        character.series.toLowerCase() === selectedFranchise.toLowerCase()
    );
  } else if (selectedSeries) {
    filteredCharacters = filteredCharacters.filter(
      (character) =>
        character.amiiboSeries.toLowerCase() === selectedSeries.toLowerCase()
    );
  }

  const keys = ["name", "character"];
  filteredCharacters =
    query.length > 2
      ? filteredCharacters.filter((item) => {
          return keys.some((key) =>
            item[key].toLowerCase().includes(query.toLowerCase())
          );
        })
      : filteredCharacters;

  let endOffset = itemOffset + size;

  let pageCount = Math.ceil(filteredCharacters.length / size);
  filteredCharacters = filteredCharacters.slice(itemOffset, endOffset);

  const handleSize = (size) => {
    setSize(size);
    setItemOffset(0);
    endOffset = 0 + size;
  };

  const handlePageClick = (event) => {
    let newOffset = (event.selected * size) % characters.length;

    setItemOffset(newOffset);
  };
  const resetFilters = () => {
    setItemOffset(0);
    setSize(10);
    setQuery("");
    setSelectedFranchise("");
    setSelectedSeries("");
    filteredCharacters = characters;
  };
  const getCharacters = async () => {
    try {
      const { data } = await axios.get("https://www.amiiboapi.com/api/amiibo/");
      setCharacters(
        data.amiibo.map((ami) => {
          return {
            image: ami.image,
            name: ami.name,
            amiiboSeries: ami.amiiboSeries,
            keyhead: ami.head,
            keytail: ami.tail,
            keytext: ami.head + ami.tail,
            series: ami.gameSeries,

            character: ami.character,
            release: ami.release,
          };
        })
      );
      // Fetching Series
      let fetchedSeries = data.amiibo.map((ami) => ami.amiiboSeries);

      fetchedSeries = fetchedSeries.filter((item, index) => {
        return fetchedSeries.indexOf(item) === index;
      });
      setSeries(fetchedSeries);
      // Fetching Franchises
      let fetchedFranchises = data.amiibo.map((ami) => ami.gameSeries);

      fetchedFranchises = fetchedFranchises.filter((item, index) => {
        return fetchedFranchises.indexOf(item) === index;
      });
      setFranchises(fetchedFranchises);
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);
  if (loading)
    return (
      <CircleLoader 
      color={"#ad3e79"}
        loading={loading}
        cssOverride={{textAlign:"center" ,margin :"auto" ,paddingTop:"50px"}}
        size={60}/>
    );
  return (
    <div>
      <h1 className="text-2xl m-4  py-3 md:py-5 ">COINII AMIBOO DATABASE</h1>
      <FilterBox
        series={series}
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
        franchises={franchises}
        selectedFranchise={selectedFranchise}
        setSelectedFranchise={setSelectedFranchise}
        setItemOffset={setItemOffset}
      />

      <SearchBox
        query={query}
        setQuery={setQuery}
        size={size}
        setSize={handleSize}
        resetFilters={resetFilters}
        filterExist={filterExist}
      />
      {filteredCharacters.length ? (
        <div className="grid grid-cols-2 gap-3 md:gap-6  mt-4 md:mt-10 pb-10">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.tail+keyId} character={character} />
          ))}
        </div>
      ) : (
        <h1 className="text-red-700 text-3xl text-center font-bold mx-auto mb-10 py-10">
          No Characters Found
        </h1>
      )}
{filteredCharacters.length ?
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={3}
        nextClassName={"item next "}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        nextLabel={<FaArrowRight />}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
        previousLabel={<FaArrowLeft />}
      />:null}
    </div>
  );
};

export default CardContainer;
