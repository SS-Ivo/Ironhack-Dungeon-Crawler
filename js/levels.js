/*
Level Coding:
1	= Wall
2	= Key
3	= Player
4	= Exit
5	= Enemy
6	= Teleport
7 = Fire Altar

0	= Path
*/

/*
Level 6 is the testing grounds for the new functionalities
*/


const drawnLevel = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

const levels = {
  0:[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1],
  [1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
  [1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1],
  [1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1],
  [1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1],
  [1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1],
  [1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1],
  [1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1],
  [1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
  1:[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,0,4,0,0,1,1,1,1,1,1,1,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1],
  [1,0,1,0,2,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1],
  [1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,2,0,1],
  [1,3,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
2: [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,2,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,2,1],
[1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1],
[1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1],
[1,5,0,0,0,0,0,1,0,0,2,0,0,0,1,0,0,0,0,0,5,1],
[1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1],
[1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
[1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1],
[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
[1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1],
[1,0,0,0,0,0,1,1,1,1,4,0,1,1,1,1,0,0,0,0,0,1],
[1,0,1,0,1,0,1,2,1,0,0,0,0,1,2,1,0,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1],
[1,0,1,0,1,0,1,0,0,0,0,0,0,0,5,1,0,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1],
[1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1],
[1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
[1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
[1,0,1,0,1,0,0,0,1,0,0,2,0,1,0,0,0,1,0,1,0,1],
[1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
[1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
3: [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,6,1,5,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,6,1],
[1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,5,1,1],
[1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1],
[1,0,1,5,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1],
[1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1],
[1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,5,1],
[1,0,0,5,0,0,0,0,0,1,0,1,0,2,0,1,1,1,1,0,1,1],
[1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,5,1],
[1,0,1,0,0,1,0,0,1,6,1,1,6,0,1,1,1,1,1,1,2,1],
[1,5,0,0,0,0,0,0,2,1,4,0,1,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],
[1,0,2,0,1,0,2,0,1,6,1,1,0,0,0,0,0,0,0,0,2,1],
[1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1],
[1,0,1,0,1,0,1,5,0,0,0,1,1,1,5,0,0,0,0,1,1,1],
[1,0,0,0,0,5,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1],
[1,0,1,0,1,0,1,0,1,1,0,1,1,5,0,0,0,0,0,0,1,1],
[1,0,1,0,1,0,1,5,0,0,0,1,1,1,1,1,0,1,1,1,1,1], 
[1,0,0,0,0,5,1,0,1,1,0,1,5,0,0,0,0,0,0,0,0,1],
[1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1],
[1,3,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,6,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
4: [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,6,1,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,6,1],
  [1,0,1,0,1,1,1,1,1,0,1,0,1,1,2,1,1,1,0,0,0,1],
  [1,0,1,5,0,0,0,1,5,0,1,0,0,0,0,0,5,1,1,1,1,1],
  [1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1],
  [1,0,1,5,0,0,0,1,5,0,1,0,0,0,0,5,1,0,1,1,1,1],
  [1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,5,1],
  [1,0,1,5,0,0,0,1,5,0,1,5,0,0,0,0,0,1,1,1,1,1],
  [1,2,1,1,1,1,0,1,1,0,1,1,1,1,1,2,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,1,6,1,1,6,0,1,1,1,1,1,1,7,1],
  [1,1,1,1,1,1,1,1,1,1,4,0,1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,5,1,0,0,0,1,1,1,1,1,1,1,1,1],
  [1,0,1,0,1,2,1,0,0,0,1,1,0,0,0,0,0,0,5,5,5,1],
  [1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,1,0,0,0,0,6,1,0,1,0,0,0,0,0,0,0,5,5,5,1],
  [1,0,1,0,1,1,1,1,1,0,1,2,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,5,0,0,0,0,0,5,1,0,0,0,0,0,0,0,5,5,5,1],
  [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,1,5,0,0,0,0,0,5,1,0,0,0,0,0,0,0,5,5,5,1],
  [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1],
  [1,3,1,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,6,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
5: [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1],
[1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1],
[1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1],
[1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1],
[1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1],
[1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1],
[1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1],
[1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1],
[1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
6:[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1],
[1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1],
[1,0,0,0,0,0,6,0,0,0,0,3,0,0,0,0,6,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
}

