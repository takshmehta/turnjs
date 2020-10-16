var s=false;
$("#flipbook").turn({
    width: 1020,
    height: 790,
    
});


$(window).bind('keydown', function(e){
    if (e.keyCode==37){
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
  } else  {
    setTimeout(lastPage, 50); //wait 50 ms, then try again
  }
}


function lastPagePaddingReduce () {
  if($('.p13.odd').is(':visible')){ //if the container is visible on the page
    // alert('12')
    document.querySelector('.m1').style.paddingLeft='20rem';
    document.querySelector('body').style.overflow='hidden';
  } else  {
    setTimeout(lastPagePaddingReduce, 50); //wait 50 ms, then try again
   
  }
}


function firstPage () {
    if($('.p1').is(':visible')){ //if the container is visible on the page
     
      document.querySelector('.m1').style.paddingLeft='0rem';
      document.querySelector('body').style.overflow='hidden';
    } else  {
      setTimeout(firstPage, 50); //wait 50 ms, then try again
    
    }
  }