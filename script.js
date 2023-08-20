let smallNavContainer = document.getElementById('small-nav-container');
let activatedSmallNavBtb = document.getElementById('activatedSmallNavBtn');

activatedSmallNavBtb.addEventListener('click', () => {

    if (activatedSmallNavBtb.classList.contains('activated-nav')) {
        console.log(true)

        activatedSmallNavBtb.classList.add('remove-nav');

        activatedSmallNavBtb.classList.remove("activated-nav");

        smallNavContainer.style.right = "0";

        smallNavContainer.innerHTML = `
        <div class="small-nav-item">
        <ul>
            <li class="nav-item">
                <a href="#" class="nav-link">Terms</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Privacy</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Support</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
    <div class="small-nav-item">
        <ul>
            <li class="nav-item">
                <a class="nav-link" href="#">Log In</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sign In</a>
            </li>
        </ul>
    </div>`;

        document.body.classList.add('overflow');

    } else if (activatedSmallNavBtb.classList.contains('remove-nav')) {

        activatedSmallNavBtb.classList.add('activated-nav');
        activatedSmallNavBtb.classList.remove('remove-nav');

        smallNavContainer.style.right = "";

        smallNavContainer.innerHTML = ``

        document.body.classList.remove('overflow');
    }
})



let tabsContentActive = document.querySelector('.tabs-content-active');

let tabsContentText = `Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
                            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at
                            amet. Purus malesuada placerat arcu at enim elit in accumsan.`;



let research =  document.getElementById('research');
research.addEventListener('click', ()=> {
    if (research.classList.contains('activated-tabs')) {

        research.classList.add('tab-active');


        tabsContentActive.innerHTML = `Research: ${tabsContentText}`;


        if (plan.classList.contains('tab-active') || design.classList.contains('tab-active')){
            plan.classList.remove('tab-active')
            design.classList.remove('tab-active')
        }
    }

})


if (research.classList.contains('activated-tabs')) {
    tabsContentActive.innerHTML = `Research: ${tabsContentText}`;
}



let plan = document.getElementById('plan');
plan.addEventListener('click', ()=> {
    if (plan.classList.contains('activated-tabs')) {

        plan.classList.add('tab-active');
        tabsContentActive.innerHTML = `Plan: ${tabsContentText}`;

        if (research.classList.contains('tab-active') || design.classList.contains('tab-active')){
            research.classList.remove('tab-active')
                design.classList.remove('tab-active')
        }
    }
})




let design =  document.getElementById('design');
design.addEventListener('click', ()=>{

    if (design.classList.contains('activated-tabs')) {

        design.classList.add('tab-active');
        tabsContentActive.innerHTML = `Design: ${tabsContentText}`;

        if (research.classList.contains('tab-active') || plan.classList.contains('tab-active')){
            research.classList.remove('tab-active')
            plan.classList.remove('tab-active')
        }
    }
})

