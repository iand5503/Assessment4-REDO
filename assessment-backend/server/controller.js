let goals = [];



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A beautiful, smart, and loving person will fe.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A friend asks only for your time not your money."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
createGoal: (req, res) => {
    const { inputValue } = req.body
    goals.push(inputValue);
    res.status(200).send(inputValue);

},
    deleteGoal: (req, res) => {
        const {index} = req.prams;
        goals.splice(index, 1);
    res.status(200).send(goals);
},
};