$(document).ready(()=>{
  /*
  $('body').on('scroll', ()=>{
    const top = document.getElementById('top');
    if (top.scrollTop >= 500){
      $('#top').removeClass('hide');
    } else {
      top.style.display='none';
    }
  })

  $('#top').removeClass('hide')
  */
/*
  $('#Introduction').on('mouseover', ()=>{
    $('#top').css({display: 'flex'});
    //  document.getElementById('top').style.display='flex';
  });
*/
  $('.out-of-screen').on('mouseenter', ()=>{
    $('#top').css({display: 'flex'});
    //  document.getElementById('top').style.display='none';
  }).on('mouseleave', ()=>{
    $('#top').css({display: 'none'});
    //  document.getElementById('top').style.display='none';
  });

  $('.player-btn').on('click', (e)=>{
    $(e.currentTarget).toggleClass('blue');
  }).on('mouseenter', function(e){
    $(e.currentTarget).toggleClass('grey');
  }).on('mouseleave', function(e){
    $(e.currentTarget).toggleClass('grey');
  })

  $('#judge-btn').on('click', ()=>{
    $('#judge').toggle(800);
  })

  $('#didi-btn').on('click', ()=>{
    $('#didi').toggle(800);
  })

  $('#gary-btn').on('click', ()=>{
    $('#gary').toggle(800);
  })

  $('#stanton-btn').on('click', ()=>{
    $('#stanton').toggle(800);
  })

  
})
