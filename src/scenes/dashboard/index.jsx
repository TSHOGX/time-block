import React, { useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import DayBlocks from "../../components/DayBlocks";
import PieChart from "../../components/PieChart";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// const h = document.body.clientHeight;

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

  const [open, setOpen] = React.useState(false);

  const [cacheList, setCacheList] = React.useState([]);

  // do something when refresh ( Q: don't save? )
  useEffect(() => {
    addDataIntoCache(date, './', colorList)  // run whatever
    // var unloadCallback = (event) => {
    //   addDataIntoCache('unsaved data', './', colorList)  // run whatever
    //   event.returnValue = ''
    //   return ''
    // };
    // window.addEventListener("beforeunload", unloadCallback);
    // return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [colorList]);

  // choose date change 
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  // color button click
  const handleClick = (e) => {
    // console.log(e.target.id);
    setColor(e.target.id);
  }

  // Snackbar close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // add data into cache
  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        setOpen(true);
      });
    }
  };

  // get data from cache
  const getCacheData = async (cacheName) => {
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
    setOpen(true);
  };

  const getCacheList = async () => {
    var names = await caches.keys()
    names = names.filter(item => item !== '')
    setCacheList(names.join(', '))
  }


  return (
    <div class="grid grid-cols-3 justify-items-stretch items-center m-5" >

      <PieChart colorList={colorList} />

      <div class="justify-self-center">
        <DayBlocks color={color} colorList={colorList} setColorList={setColorList}/>    
      </div>
      
      <div class="justify-self-center flex flex-col gap-5">
        <input type="date" onChange={handleChange} ref={dateInputRef} />

        <button onClick={handleClick} id="blue" type="button" class="w-33 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Chaos</button>
        <button onClick={handleClick} id="green" type="button" class="w-33 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Forge</button>
        <button onClick={handleClick} id="cyan" type="button" class="w-33 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Study</button>
        {/* <button onClick={handleClick} id="Teal" type="button" class="w-33 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Daily</button> */}
        {/* <button onClick={handleClick} id="Lime" type="button" class="w-33 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Relax</button> */}
        <button onClick={handleClick} id="red" type="button" class="w-33 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Relax</button>
        {/* <button onClick={handleClick} id="Pink" type="button" class="w-33 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink</button> */}
        <button onClick={handleClick} id="purple" type="button" class="w-33 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Daily</button>

        <button onClick={()=>addDataIntoCache(date, './', colorList)} class="w-33 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
          <span class="relative w-32 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Save it
          </span>
        </button>

        <button onClick={()=>getCacheData(date)} class="w-33 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
          <span class="relative w-32 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Load it
          </span>
        </button>

        <button onClick={()=>setColorList(newColorList)} class="w-33 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
          <span class="relative w-32 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Clear
          </span>
        </button>

        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}> Success! </Alert>
        </Snackbar>
      </div>

      <div>
        <button onClick={()=>getCacheList(date)}>get cache list</button>
        <div>{cacheList}</div>
      </div>
      <div></div>
      <div></div>

    </div>
  );
};

export default Dashboard;
