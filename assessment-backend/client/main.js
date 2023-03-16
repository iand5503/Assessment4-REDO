const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.getElementById("form")
const formInput = document.getElementById("form-input")
const section = document.getElementById("section")


const getCompliment = () => 
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
    
const getFortunet = () => 
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });

    const postGoals = (e) => {
        e.preventDefault();
        const inputValue = formInput.value
        //const body = [inputValue]
        axios.post("http://localhost:4000/api/goals/", {inputValue}).then((res) => {
            res.data.forEach((element, index) =>
             charCard = document.createElement("div"),
            charCard.innerHTML = `<h3>${element}</h3>
            <button id='${index}'>Delete</button>
            `)
            section.appendChild(charCard)
            const button = document.getElementById(index);
            button.addEventListener('click', deletePost)

        });
        };

        function deletePost (index) {
            axios.delete(`http://localhost:4000/api/goals/${index}`).then(res => {
        });
    }

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune) 
form.addEventListener('submit', postGoals) 


