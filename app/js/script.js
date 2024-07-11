const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");
const ratingCard = document.getElementById("rating_card");
const confirmationCard = document.getElementById("confirmation_card");
const result = document.getElementById("result");

let rating = "1";


/*
* Helper Functions
* */
const appendRatingButton = (item) => {
    const ratingButton = document.createElement("input");
    ratingButton.id = "rating_" + item;
    ratingButton.type = "button";
    ratingButton.value = item;
    ratingButton.classList.add("round_button");

    form.appendChild(ratingButton);
}


/*
* Initialize
* */
ratingCard.style.display = "flex";
confirmationCard.style.display = "none";
submitBtn.disabled = true;
for (let i = 1; i <= 5; i++) {
    appendRatingButton(i);
}


/*
* Event Listeners
* */
form.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.type !== "button") {
        return;
    }

    const oldRating = document.getElementById(`rating_${rating}`);
    rating = e.target.value;
    const newRating = document.getElementById(`rating_${rating}`);

    oldRating.classList.remove("selected");
    newRating.classList.add("selected");
    submitBtn.disabled = false;
})


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ratingCard.style.display = "none";
    confirmationCard.style.display = "flex";
    result.innerText = rating;
})