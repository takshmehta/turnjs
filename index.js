// on turn properties of flipbook div change using turnjs which are mention in function as:
$("#flipbook").turn({
    width: 1020,
    height: 790,
    duration:3200 //duration of page flip
});

// auto turn bottom right corner using peel effect of turnjs 
$("#flipbook").turn("peel", "br");


// developer write code when an either right or left button click is clicked 
// code orders matters in both of these function
$('.right-icon-div').click(function(){
  $('.right-icon-div').css({'right':'10rem'})
  $('.left-icon-div').css('display','block')
  $('#flipbook').turn('next');
  jQuery(document).ready(inBetweenPage);
  jQuery(document).ready(lastPage);    
})

$('.left-icon-div').click(function(){
$('.right-icon-div').css({'display':'block'})
$('#flipbook').turn('previous');
jQuery(document).ready(lastPagePaddingReduce);
jQuery(document).ready(firstPage);
})



// devloper write code  when keydown either left arrow or right arrow 
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
    { 
      $('.right-icon-div').css({'display':'block'})
      $('#flipbook').turn('previous');
      jQuery(document).ready(lastPagePaddingReduce);
      jQuery(document).ready(firstPage);
    }else if (e.keyCode==39)
      {
        $('.right-icon-div').css({'right':'10rem'})
        $('.left-icon-div').css('display','block')
        $('#flipbook').turn('next');
        jQuery(document).ready(inBetweenPage);
        jQuery(document).ready(lastPage); 
      }
  });


// developer write code when inbetween page is visible (inbetween means page2 to last page )
function inBetweenPage () {
  if($('.p2').is(':visible')){ //if the container is visible on the page
    document.querySelector('.flipbookContainer').style.paddingLeft='20rem';
    document.querySelector('body').style.overflow='hidden';
  } else  {
    setTimeout(inBetweenPage, 50); //wait 50 ms, then try again 
  }
}

 
// developer write code when last page is visible 
function lastPage () {
  if($('.p14').is(':visible')){ //if the page14 is visible on the page
    document.querySelector('.flipbookContainer').style.paddingLeft='40rem';
    document.querySelector('body').style.overflow='hidden';
    $('.right-icon-div').css({'display':'none'})
    $('.left-icon-div').css('left','38rem')
  } else  {
    setTimeout(lastPage, 50); //wait 50 ms, then try again
  }
}

// developer write code 
function lastPageForLeftButton(){
  if($('.p14').is(':visible')){ //if the container is visible on the page
    
    document.querySelector('.flipbookContainer').style.paddingLeft='0rem';
    document.querySelector('body').style.overflow='hidden';
    $('.right-icon-div').css({'display':'block'})
    $('.left-icon-div').css('left','18rem')
 
  } else  {
    setTimeout(lastPageForLeftButton, 50); //wait 50 ms, then try again
   
  }

}

// developer write code 
function lastPagePaddingReduce () {
  if($('.p13.odd').is(':visible')){ //if the container is visible on the page
    document.querySelector('.flipbookContainer').style.paddingLeft='20rem';
    document.querySelector('body').style.overflow='hidden';
    $('.right-icon-div').css({'display':'block'})
    $('.left-icon-div').css('left','18rem')
 
  } else  {
    setTimeout(lastPagePaddingReduce, 50); //wait 50 ms, then try again
   
  }
}

//developer write code
function firstPage () {
    if($('.p1').is(':visible')){ //if the container is visible on the page
     
      document.querySelector('.flipbookContainer').style.paddingLeft='0rem';
      document.querySelector('body').style.overflow='hidden';
      $('.right-icon-div').css({'right':'30rem'})
      $('.left-icon-div').css('display','none')
    } else  {
      setTimeout(firstPage, 50); //wait 50 ms, then try again
    
    }
  }


var s=true; //for toggle button of carousel

// developer write code for toggle button on botton right corner of magazine
$('.carousel-toggle-div').click(function(){
  if(s){
    $('#demo').css({"display":"block"});
    $('.carousel-toggle-div').css('top','-20rem')
      const newIcon=document.querySelector('.carousel-up').classList;
      if(newIcon.contains('fa-caret-up')){
        newIcon.remove('fa-caret-up');
      }
      newIcon.add('fa-caret-down');
    s=false;
  }else{
    $('#demo').css({"display":"none"});
    $('.carousel-toggle-div').css('top','-2rem')
    const newIcon=document.querySelector('.carousel-up').classList;
    if(newIcon.contains('fa-caret-down')){
      newIcon.remove('fa-caret-down');
    }
    newIcon.add('fa-caret-up');
    s=true;
  }
  
})


// adding a shadow on our magazine its not possible to assign directly using class that's why use this type 
const firstPageShadow=document.querySelector('.p1');
const newElement=firstPageShadow.parentElement.parentElement;
newElement.classList.add('first-page-shadow');


// ------------------------------  IN TESTING ----------------------------------------------------------------
// image store 
var imageStore = '{ "imagesHouse" : [' +
'{ "img":"https://beeimg.com/images/i26660926801.png" , "id":"1" },' +
'{ "img":"https://beeimg.com/images/d12223208083.png" , "id":"2" },' +
'{ "img":"https://beeimg.com/images/f65081686483.png" , "id":"3" } ]}';

var obj = JSON.parse(imageStore);

for(i=2;i<5;i++){
  let select="."+"p"+i+" "+"img";
  document.querySelector(select).setAttribute("src",obj.imagesHouse[i-1].img)
  console.log(document.querySelector(select));
}