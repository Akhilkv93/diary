const array = [
    {
      year: 2024,
      month: 'January',
      id: 1,
      heading: 'New Year Resolutions',
      content: 'This year I will focus on my health and career goals...'
    },
    {
      year: 2024,
      month: 'February',
      id: 2,
      heading: 'Valentine’s Day',
      content: 'Spent a wonderful day with my loved ones...'
    },
    {
      year: 2024,
      month: 'March',
      id: 3,
      heading: 'Spring Break',
      content: 'Went on a trip to the mountains with friends...'
    },
    {
      year: 2024,
      month: 'April',
      id: 4,
      heading: 'Easter Celebration',
      content: 'Had an amazing Easter with family, lots of fun and food...'
    },
    {
      year: 2024,
      month: 'May',
      id: 5,
      heading: 'Work Milestone',
      content: 'Achieved a major milestone at work, feeling proud...'
    },
    {
      year: 2024,
      month: 'June',
      id: 6,
      heading: 'Summer Vacation',
      content: 'Visited the beach and enjoyed a relaxing vacation...'
    },
    {
      year: 2024,
      month: 'July',
      id: 7,
      heading: 'Independence Day',
      content: 'Celebrated Independence Day with fireworks and BBQ...'
    },
    {
      year: 2024,
      month: 'August',
      id: 8,
      heading: 'Back to School',
      content: 'Kids are back to school, busy with preparations...'
    },
    {
      year: 2024,
      month: 'September',
      id: 9,
      heading: 'Autumn Begins',
      content: 'Started to feel the crisp autumn air, enjoying the change...'
    },
    {
      year: 2024,
      month: 'October',
      id: 10,
      heading: 'Halloween',
      content: 'Had a spooky Halloween party with friends...'
    }
  ];
  let diaries=document.querySelector(".diaries")
  let container=document.querySelector(".container")
  let btns=document.querySelectorAll(".btn")
  let image=document.querySelector(".img")
  let newButton=document.querySelector(".button")

//dom content loaded
  window.addEventListener("DOMContentLoaded",()=>{
    image.style.background=`url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    image.style.backgroundSize="cover"
            image.style.backgroundPosition="top"
    createDiary()
  })
  
 //theam button 
  btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log(btn.classList);
       
        if(btn.classList[1]==="btn1"){
            console.log("btn1");
            btn.classList.toggle("active")
            container.style.backgroundColor="#51a0cb"
            image.style.background=`url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
            
        }else if(btn.classList[1]==="btn2"){
            btn.classList.toggle("active")
            container.style.backgroundColor="rgb(189, 95, 110)"
            image.style.background=`url('https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbmslMjBza3l8ZW58MHx8MHx8fDA%3D')`
            image.style.backgroundSize="cover"
            image.style.backgroundPosition="center"
        
        }else{
            btn.classList.toggle("active")
            container.style.backgroundColor="gray"
            image.style.background=`url('https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXklMjBza3l8ZW58MHx8MHx8fDA%3D')`
            image.style.backgroundSize="cover"
            image.style.backgroundPosition="top"
        }
    })
  })
  //new button
  newButton.addEventListener("click",()=>{
    let textareaContainer = document.createElement('div');
        textareaContainer.classList.add("textarea-container");
    console.log("clicked")
    newButton.style.opacity=0
    let textarea=document.createElement('textarea')
    textarea.classList.add("textarea")
    textarea.placeholder="start typing"
    let close=document.createElement("button")
    close.innerText='x'
    close.classList.add("close")
    let save=document.createElement('button')
    save.innerText="SAVE"
save.classList.add("save")
container.append(textareaContainer)
textareaContainer.append(textarea)
    textareaContainer.append(close)
    textareaContainer.append(textarea)
    textareaContainer.append(save)
    //close 

      let closeButton=document.querySelector(".close")
  console.log(closeButton);
  closeButton.addEventListener("click",()=>{
    console.log("close")
    textareaContainer.style.display="none"
    newButton.style.opacity=1
  })
  let saveButton=document.querySelector(".save");
  saveButton.addEventListener("click",()=>{
    console.log("save")
    let heading="new data added";
    let content=textarea.value;
    let year=2024;
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
      ];
      
    let month=months[new Date().getMonth()]
    let obj={
        year: 2024,
        month: month,
        id: 6,
        heading: heading,
        content: content
    }
    array.push(obj);
    createDiary()
     textareaContainer.style.display="none"
     newButton.style.opacity=1
  })
  })
  

function createDiary(){
    let childContent=array.map((item)=>{
        return(` <div class="diary">
        <div class="date">
            <h2>${item.year} <span>${item.month}</span></h2>
        </div>
        <div class="content">
            <h3>${item.heading}</h3>
            <p>${item.content}</p>
        </div>
    </div>`)
   
    })
     diaries.innerHTML=childContent
}