//  1. Score → Grade 

const grade = (score) =>  {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 50) return "Pass";
  return "Fail";
};
console.log(grade(92)); 
console.log(grade(78)); 
console.log(grade(55)); 
console.log(grade(40)); 



// 2. Age → Access 

const checkAccess = (age) => {
  return age > 18 ? "Access Granted" : "Access Denied";
};




console.log(checkAccess(29));
console.log(checkAccess(16)); 
