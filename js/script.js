'use strict';

function fadeAnime(){
    $('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
        var elemPos = $(this).offset().top-30;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('faderight');// 画面内に入ったらfadeRightというクラス名を追記
        }else{
        $(this).removeClass('faderight');// 画面外に出たらfadeRightというクラス名を外す
        }
        });
    
    
        $('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
            var elemPos = $(this).offset().top-20;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeleft');// 画面内に入ったらfadeLeftというクラス名を追記
            }else{
            $(this).removeClass('fadeleft');// 画面外に出たらfadeLeftというクラス名を外す
            }
            });
        
      
    
    }
    
      // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
    
      // 画面が読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function(){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
    
    
    