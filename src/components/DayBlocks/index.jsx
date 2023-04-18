import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const dataThis = {
  "date": "2020-01-01",
  "tags": [
    {
      "name": "tag1",
      "detail": "Tag 1",
      "color": "#000000",
      "timeStamps": [
        "2020-01-01T00:00:00.000Z",
      ]
    },
  ]
}

// init color dict 
const colorDict = {
  "red": "text-white bg-red-400 m-1 h-6",
  "gray": "text-white bg-gray-400 m-1 h-6",
  "blue": "text-white bg-blue-400 m-1 h-6",
  "green": "text-white bg-green-400 m-1 h-6",
  "cyan": "text-white bg-cyan-400 m-1 h-6",
  "purple": "text-white bg-purple-400 m-1 h-6",
}

function DayBlocks({color, colorList, setColorList}) {

  // init time list key array 
  const timeList = [];
  const length = 24;
  for(var i = 0; i < length; i++) {
    timeList.push(i);
  }

  // init color list
  // setColorList(newColorList);
  // console.log(colorList);

  const handleClick = (value) => () => {
    const newList = colorList.map((item, i) => {
      if (i === Number(value)) {
        if (item === color) {
          return "gray";
        } else {
          return color;
        }
      } else {
        return item;
      }
    });
    setColorList(newList);
  };

  return (
    <List sx={{ width: '100%', minWidth: 200, bgcolor: 'background.paper' }}>
      {timeList.map((value) => {
        const labelId = `checkbox-list-label-${value-1}`;

        return (
          <ListItem
            className={`text-white bg-${colorList[Number(value)]}-400 m-1 h-6`}
            // disablePadding
            >
              <ListItemButton role={undefined} onClick={handleClick(value)} dense >
              <ListItemText id={labelId} primary={`${value+1}:00`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default DayBlocks;