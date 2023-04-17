import React, { useEffect } from "react";
import DayBlocks from "../../components/DayBlocks";

// const h = document.body.clientHeight;

// init color array 
const newColorList = [];
for(var i = 0; i < 24; i++) {
  newColorList.push("gray");
}

const Dashboard = () => {
  const [date, setDate] = React.useState('');
  const dateInputRef = React.useRef(null);

  const [color, setColor] = React.useState('');
  const [colorList, setColorList] = React.useState(newColorList);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleClick = (e) => {
    // console.log(e.target.id);
    setColor(e.target.id);
  }

  // Function to add our give data into cache
  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        alert('Data Added into cache!')
      });
    }
  };

  const getAllCacheData = async (cacheName) => {
    var url = './'
    // List of all caches present in browser
    var name = cacheName
    var cacheDataArray = []

    // Opening that particular cache
    const cacheStorage = await caches.open(name);
    // Fetching that particular cache data
    const cachedResponse = await cacheStorage.match(url);
    var data = await cachedResponse.json()
    // Pushing fetched data into our cacheDataArray
    cacheDataArray.push(data)
    setColorList(data);
  };


  return (
    <div class="grid grid-cols-4 justify-items-stretch items-center m-5" >
      <div></div>
      
      <div class="justify-self-center">
        <DayBlocks color={color} colorList={colorList} setColorList={setColorList}/>    
      </div>

      <div class="justify-self-center flex flex-col gap-5">
        <input type="date" onChange={handleChange} ref={dateInputRef} />

        <button onClick={handleClick} id="blue" type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Chaos</button>
        <button onClick={handleClick} id="green" type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Forge</button>
        <button onClick={handleClick} id="cyan" type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Study</button>
        {/* <button onClick={handleClick} id="Teal" type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Daily</button> */}
        {/* <button onClick={handleClick} id="Lime" type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Relax</button> */}
        <button onClick={handleClick} id="red" type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Relax</button>
        {/* <button onClick={handleClick} id="Pink" type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink</button> */}
        <button onClick={handleClick} id="purple" type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Daily</button>

        <button onClick={()=>addDataIntoCache(date, './', colorList)} >
          Add Data Into Cache</button>

        <button onClick={()=>getAllCacheData(date)} >
          Load Data From Cache</button>
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
