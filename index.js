var s=true;
$("#flipbook").turn({
    width: 1020,
    height: 790,
    duration:800
});

// auto turn bottom right corner using peel effect of turnjs 
$("#flipbook").turn("peel", "br");

$(window).bind('keydown', function(e){
    if (e.keyCode==37){
      console.log('key 37')
    $('#flipbook').turn('previous');
   
     jQuery(document).ready(lastPagePaddingReduce);
     jQuery(document).ready(firstPage);


}
    else if (e.keyCode==39)
    $('#flipbook').turn('next');
  
     jQuery(document).ready(inBetweenPage);
 
     jQuery(document).ready(lastPage);
     

    }
    );







   // jQuery(document).ready(lastPagePaddingReduce);

function inBetweenPage () {
  if($('.p2').is(':visible')){ //if the container is visible on the page
    document.querySelector('.m1').style.paddingLeft='20rem';
    document.querySelector('body').style.overflow='hidden';
  } else  {
    setTimeout(inBetweenPage, 50); //wait 50 ms, then try again
   
  }
}

 
function lastPage () {
  if($('.p14').is(':visible')){ //if the container is visible on the page
    //alert('ready')  //Adds a grid to the html
    document.querySelector('.m1').style.paddingLeft='40rem';
    document.querySelector('body').style.overflow='hidden';
    $('.right-icon-div').css({'display':'none'})
    $('.left-icon-div').css('left','38rem')
  } else  {
    setTimeout(lastPage, 50); //wait 50 ms, then try again
  }
}


function lastPagePaddingReduce () {
  if($('.p13.odd').is(':visible')){ //if the container is visible on the page
    // alert('12')
    document.querySelector('.m1').style.paddingLeft='20rem';
    document.querySelector('body').style.overflow='hidden';
    $('.right-icon-div').css({'display':'block'})
    $('.left-icon-div').css('left','16rem')
 
  } else  {
    setTimeout(lastPagePaddingReduce, 50); //wait 50 ms, then try again
   
  }
}


function firstPage () {
    if($('.p1').is(':visible')){ //if the container is visible on the page
     
      document.querySelector('.m1').style.paddingLeft='0rem';
      document.querySelector('body').style.overflow='hidden';
      $('.right-icon-div').css({'right':'29rem'})
      $('.left-icon-div').css('display','none')
    } else  {
      setTimeout(firstPage, 50); //wait 50 ms, then try again
    
    }
  }

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


// icon click events

$('.right-icon-div').click(function(){
  $('.right-icon-div').css({'right':'10rem'})
  $('.left-icon-div').css('display','block')
  console.log('right icon')
  $('#flipbook').turn('next');
     jQuery(document).ready(inBetweenPage);
     jQuery(document).ready(lastPage);
     
})


$('.left-icon-div').click(function(){
  console.log('left icon')
  $('.right-icon-div').css({'display':'block'})
 
  $('#flipbook').turn('previous');
  jQuery(document).ready(lastPagePaddingReduce);
  jQuery(document).ready(firstPage);


})



