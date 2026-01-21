
function main(){
 //loading the world with beepers.
   beeps();
 
//pick one beeper off in the rightmost corner
//this is done to assit in the main engine when conditional beepers present is run.
   pickBeeper();
  
//re-orient Karel back to the begining facing west 
   if(frontIsBlocked()){
      turnAround();
   }
   while(frontIsClear()){
      move();
   }

 // the main engine, picking off beepers at the far ends
   while(beepersPresent()){
      pickBeeper();
      turnAround();
      move();
      while(beepersPresent()){
         move();
      }
      if(noBeepersPresent()){
         turnAround();
         move();
         turnAround();
      }
   }

 // final beeper drop off and exit to far east corner 
   turnAround();
   putBeeper();
   moveToWall();
   
}

// function for beeper fillup
function beeps(){ 
   putBeeper(); 
   while(frontIsClear()){ 
      move(); 
      putBeeper(); 
   } 
}

// function for moving to the corners
function moveToWall(){
   while(frontIsClear()){
      move();
   }
}
