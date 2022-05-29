// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  

  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  console.log('here is mockupstrand: ' + mockUpStrand());
  

  const pAequorFactory = (specimenNum, dna) => {
      return{
      specimenNum,
      dna,
      mutate() {
  const randDnaBase = returnRandBase();e
    const randBaseIndex = this.dna.indexOf(randDnaBase); 
  var newRandBase;
  do {
    newRandBase = returnRandBase();
  console.log('The first newRandBase : ' + newRandBase);
  } while (newRandBase === randDnaBase);
   console.log(' The second newRandBase : ' + newRandBase);
  if (randBaseIndex !== -1) {
      this.dna[randBaseIndex] = newRandBase;
  } 
      return this.dna; // returns the new dna array
      },
      

      compareDNA(pAequorObject){
        for (i=0; i<this.dna.length; i++){
          let count = 0;
          if (this.dna[i] === pAequorObject.dna[i]){ 
            count++; 
          }
        }
      let commonDna = ((count/pAequorObject.dna.length)*100).toFixed(2); //calculates the percentage of common dna between the two object arrays
      return console.log('Specimen #' + this.specimenNum + ' and specimen #' + pAequorObject.specimenNum + ' have ' + commonDna + '% DNA in common.');
     }, 
  
     willLikelySurvive(){
      let cBaseCount = 0;
       let gBaseCount = 0;
       for (i=0; i<this.dna.length; i++){
         if (this.dna[i] === 'C'){
           cBaseCount++;
         }
         if (this.dna[i] === 'G'){
           gBaseCount++;
         }
       }
      const survivalPercentage = (((cBaseCount + gBaseCount)/this.dna.length) * 100).toFixed(2);
      if (survivalPercentage >= 60){
        return true;
        
      } else {
        return false;
     
    }
     } 
    }; 
  }; 
  
  const survivingPAequor = [];
    let objectNum = 1;
    while (survivingPAequor.length < 30) {
    let newObject = pAequorFactory(objectNum, mockUpStrand());
    if (newObject.willLikelySurvive() === true){
  survivingPAequor.push(newObject);
  
    }
  objectNum++;
  }
  console.log('pAequors that will likely survive: ');
  console.log(survivingPAequor);