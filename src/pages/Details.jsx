import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import UsageTable from "../components/UsageTable";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import UsageStack from "../components/UsageStack";
const Details = () => {
  let { tail } = useParams();
  const [character, setcharacter] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [itemOffset, setItemOffset] = useState(0);
  const [size, setSize] = useState(5);

  
  let endOffset = itemOffset + size;
  let pageCount = Math.ceil(character?.usage?.length / size);
  let filteredUsage = character?.usage?.slice(itemOffset, endOffset);
  const handlePageClick = (event) => {
    let newOffset = (event.selected * size) % character.usage.length;

    setItemOffset(newOffset);
  };
  const getCharacter = async () => {
    try {
      const { data } = await axios.get(
        `https://amiiboapi.com/api/amiibo/?tail=${tail}&showusage=`
      );
      if (data) {
        console.log(data.amiibo[0]);
        setcharacter({
          ...data.amiibo[0],
          usage: [
            ...data.amiibo[0].games3DS.map((detail) => {
              return {
                gameName: detail.gameName,
                usage: detail.amiiboUsage[0].Usage,
                type: "3DS",
              };
            }),
            ...data.amiibo[0].gamesSwitch.map((detail) => {
              return {
                gameName: detail.gameName,
                usage: detail.amiiboUsage[0].Usage,
                type: "Switch",
              };
            }),
            ...data.amiibo[0].gamesWiiU.map((detail) => {
              return {
                gameName: detail.gameName,
                usage: detail.amiiboUsage[0].Usage,
                type: "WiiU",
              };
            }),
          ],
        });

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  // console.log(character.usage);
  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line
  }, []);
  if (loading)
    return (
      <CircleLoader
        color={"#ad3e79"}
        loading={loading}
        cssOverride={{
          textAlign: "center",
          margin: "auto",
          paddingTop: "50px",
        }}
        size={60}
      />
    );
  return (
    <div>
      <div
        className="rounded-md mx-auto lg:w-[90%] text-center text-white mt-10 h-full p-5 mb-5"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <label
          onClick={() => navigate("/")}
          className="flex mb-2  mr-auto text-left "
        >
          <span className="cursor-pointer flex items-center italic ">
            <FaArrowLeft className="text-lg " />
            <span className="mx-2 text-sm">Go Back</span>
          </span>
        </label>
        {character ? (
          <div className="grid grid-cols-1 lg:grid-cols-6 ">
            {/* Left */}
            <div className=" lg:w-auto sm:w-[50%] mx-auto text-center col-span-2 ">
              <h1 className="text-xl font-bold my-1">{character.name}</h1>

              <h2 className="text-xs italic">{character.amiiboSeries}</h2>

              <img
                src={character.image}
                alt="Profile Character"
                className="mb-3 w-28 h-auto my-5 mx-auto text-center"
              />
              <button className="bg-blue-600  p-2 md:p-3 rounded-2xl text-center mx-auto">
                Product Page
              </button>

              <br />
              <h3 className="my-3  text-sm md:text-lg">Release Date:</h3>
              {Object.keys(character.release).map((key) => {
                if (character.release[key]) {
                  return (
                    <div
                      key={key}
                      className="flex justify-between px-10 text-xs md:text-base"
                    >
                      <h3>{key} : </h3>
                      <h3>{character.release[key]} </h3>
                    </div>
                  );
                }
                return null;
              })}
              <br />
              <div className="flex justify-between px-10 text-xs md:text-base">
                <h3>Identifier : </h3>
                <h3>{character.tail} </h3>
              </div>
            </div>
            {/* ==================================================== */}
            {/* Right */}
            <div className="col-span-4 ">
              {/* <UsageTable usage={character.usage} />
               */}
              {filteredUsage.length && !loading ? (
                <div className="flex flex-col justify-between md:h-full">
                  <h3 className="text-xl md:text-3xl mt-7 md:mt-0">Details</h3>
                  <div className="mr-auto ml-10">
                    <FormControl
                      className="test"
                      sx={{
                        m: 1,
                        minWidth: 10,
                        padding: "0",
                        boxShadow: "0px 0px 2px  #fff",
                      }}
                      size="small"
                    >
                      <InputLabel
                        id="demo-simple-select-autowidth-label"
                        sx={{ color: "white", fontSize: "13px" }}
                      >
                        SIZE
                      </InputLabel>
                      <Select
                        disabled={filteredUsage.length <= 2}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        autoWidth
                        label="Size"
                        sx={{ color: "white", fontSize: "13px" }}
                      >
                        <MenuItem sx={{ fontSize: "13px" }} value={5}>
                          5
                        </MenuItem>
                        <MenuItem sx={{ fontSize: "13px" }} value={20}>
                          20
                        </MenuItem>
                        <MenuItem sx={{ fontSize: "13px" }} value={character.usage.length}>
                          All
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <UsageStack usage={filteredUsage} />
                {size !== character.usage.length ?  <ReactPaginate
                    activeClassName={"item active "}
                    breakClassName={"item break-me "}
                    breakLabel={"..."}
                    containerClassName={"pagination"}
                    disabledClassName={"disabled-page"}
                    marginPagesDisplayed={3}
                    nextClassName={"item next "}
                    onPageChange={handlePageClick}
                    pageLinkClassName={"item pageLink"}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    nextLabel={<FaArrowRight />}
                    pageClassName={"item pagination-page "}
                    previousClassName={"item previous"}
                    previousLabel={<FaArrowLeft />}
                  />:null}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
