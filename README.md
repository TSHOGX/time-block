# todolist + time block

## RoadMap

timeline 
- [ ] create list to represent 24 hours [x]
- [ ] click item to change color [x] 
    - check box - choose color
    - onClick of list item - change background color
    - data - update in a list  
- [ ] change view [y]
- [ ] show in week view [x]


interaction
- [ ] swipe - gesture? https://use-gesture.netlify.app/
- [ ] multi choose - search react list multi choose with shift


statistics
- [ ] count block by color ( just show those results ) [x]
- [ ] graphs ( after database )


database
- [ ] link to database ( structure, context, api )
- date, time stamp, time interval, tag, detail, color (can be mapped) 
saved in unit of day, init one day with blank / default value 
time interval set as units, 15min, 30min, 60min 


2023-04-16
- use tailwind 
- use javascript native Date function

2023-04-17
- color mark interaction 
- simple cache system
- simple pie chart for one day 
- ask user to save to cache before refresh
- better UI
- see how to handle refresh behavior for a long time, no solution yet available, may change to check on load (if have no saved data..)
- or change into auto save mode

- [ ] undo && redo
- [ ] line chart for weekly infomation
- [ ] leave window without alert
- [ ] set auto save mode
- [ ] success image stack pop mode 
- [ ] just load button (load from certain day, but if no cache found, should alert)
