 var maintitle = document.getElementById("MainBroadcastTitle");
            maintitle.innerHTML = "Biafran Akụrụngwa";

			 var broadcasttitle = document.getElementById("MainTitle");
            broadcasttitle.innerHTML = "Biafran Mgbasa ozi";

			 var ourmission = document.getElementById("ourmission");
            ourmission.innerHTML = "Ihe ndi Biafra bu saiti nke eziokwu mere. Site na mgbasa ozi Nnamdi Kanu, na vidiyo banyere isiokwu metụtara Biafra na ebumnuche anyị, saịtị a nwere ya! Ihe ikwesiri ime bu ile anya.";

// 1. Find and store the element we want to listen to events on.
    var translator = document.getElementById("translationbutton");
    // 2. Define the function that will respond to the event.
    // callback 
    var onButtonClick = function() {
        clickerButton.textContent = "Translated!";
    };
    // 3. Add the event listener for the element and function
