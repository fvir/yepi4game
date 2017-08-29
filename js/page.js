var min_width=720;
var min_height=440;
var min_dif=120;
var global_panel_left=0;
var max_game_height=$(window).height()-175;
var ad_shown=0;

function CheckCurrentPage()
{
    if (window.location.hash)
    {
        var hash=window.location.hash.replace('#', '');
        ChangePageFast(hash);
    }
}
function ResizeHome()
{
    var width=$(window).width();
    var height=$(window).height()-120;
    $("body").css("overflow-y","hidden");
    if(width<min_width)
    {
        width=min_width;
        $("body").css("overflow-x","scroll");
    } else
    {
        $("body").css("overflow-x","hidden");
    }
    if(height<min_height)
    {
        height=min_height;
    }
    $("body").css("width",width);
    var panel_height=height-150;
    var panel_width=width-230;
    
    
    var item_w=0;
    var panel_ratio=panel_width/panel_height;
    if(panel_ratio>2.5)
    {
            w_i=15;
            h_i=4;
    } else
        if(panel_ratio>1.5)
        {
            w_i=12;
            h_i=5;
        } else
        {
            w_i=10;
            h_i=6;
        }
    
    if((panel_height/h_i)>(panel_width/w_i))
    {
        item_w=(panel_width-min_dif)/w_i;
    } else
    {
        item_w=(panel_height-min_dif)/h_i;
    }
    item_w=Math.round(item_w);
    panel_width=(item_w*w_i)+(8*w_i)+20;
    panel_height=(item_w*h_i)+(8*h_i)+15;
    
    
    var panel_left=Math.round(115+((width-230-(panel_width+2))/2))
    global_panel_left=panel_left;
    $("ul.header").css("margin-right","0");
    $("ul.header").css("width",panel_width+3+'px');
    $("ul.header").css("margin-left",panel_left+'px');

    $(".center-inner .items .item").css("width",item_w+'px');
    $(".center-inner .items .item").css("height",item_w+'px');
    $(".center-inner").css("width",panel_width+'px');
    $(".center-inner").css("height",panel_height+'px');
    $(".center-outer").css("left",panel_left+'px');
    $(".item span").css("bottom",(panel_width/12)+'px');
    $(".main").css("height",panel_height+'px');
    $(".main").css("display",'block');
}
function ResizeView()
{
    var min_width=800;
    var width=$(window).width();
    var height=$(window).height();
    if(width<min_width)
    {
        width=min_width;
        $("body").css("overflow-x","scroll");
    } else
    {
        $("body").css("overflow-x","hidden");
    }
    
    if(height<min_height)
    {
        height=min_height;
    }
    var game_width=global_game_width;
    var game_width = Math.round(global_game_width/(global_game_height/max_game_height));
    var game_height=max_game_height;
    var dif_w=348+65;
    if(width<game_width+dif_w)
    {
        $(".game-advertisment-outer").css("display","none");
        dif_w=dif_w-200;
    }else
    {
        $(".game-advertisment-outer").css("display","block");
	    if(ad_shown==0) 
        {
            ad_shown=1;
        }
	
    }
    if(width<game_width+dif_w)
    {
        $(".similar-games-outer").css("display","none");
        dif_w=dif_w-148;
    } else
        $(".similar-games-outer").css("display","block");
    $("body").css("width",width);

    var panel_left=Math.round((width-dif_w-game_width)/2);
    if(panel_left<10)
        panel_left=10;
    $(".main .game-view-inner embed").attr("width",game_width+"px");
    $(".main .game-view-inner embed").attr("height",game_height+"px");
    $(".main").css("padding-left",panel_left+'px');
    $(".main").css("height",'660px');
    $(".main").css("display",'block');
    $(".main-top").css("width",width-panel_left*2+'px');
    $(".main-top").css("padding-left",panel_left+'px');
    $(".main-top .header").css("margin-left","0px");
    //$(".main-top").css("align",'center');
    //alert(width+','+panel_left);	
}
var current_page=1;
var anim1=false;
var anim2=false;
function RepairArrowLinks()
{
    var prev=current_page-1+1;
    var next=current_page+1-1;
    if(prev<=0)
        prev=max_page;
    if(next>max_page)
        next=1;
    $("#prev_arrow").attr("href","#"+prev);
    $("#next_arrow").attr("href","#"+next);
}
function PrevPage()
{
    if(anim1!==false || anim2!==false)
        return;
    anim1=true;
    anim2=true;
    var old_page=current_page;
    current_page--;
    if(current_page<=0)
        current_page=max_page;
    ChangePagePrev(old_page);
    RepairArrowLinks();
}
function NextPage()
{
    if(anim1!==false || anim2!==false)
        return;
    anim1=true;
    anim2=true;
    var old_page=current_page;
    current_page++;
    if(current_page>max_page)
        current_page=1;
    ChangePageNext(old_page);
    RepairArrowLinks();
}
function ChangePage(val)
{
    if(anim1!==false || anim2!==false || val==current_page)
        return;
    anim1=true;
    anim2=true;
    if(val>current_page)
    {
        var old_page=current_page;
        current_page=val;
        if(current_page>max_page)
            current_page=1;
        ChangePageNext(old_page);
    } else
    {
        var old_page=current_page;
        current_page=val;
        if(current_page<=0)
            current_page=max_page;
        ChangePagePrev(old_page);
    }
}
function ChangePagePrev(old_page)
{
    $("#page"+old_page).animate({
        "left":$(window).width()+100,
        "opacity":"1"
    },"slow",function() {
        anim1=false;
        $("#page"+old_page).css("display","none");
    });
    $("#page"+current_page).css("left",-($(window).width()+100)+'px');
    $("#page"+current_page).css("display","");
    $("#page"+current_page).animate({
        "left":global_panel_left,
        "opacity":"1"
    },"slow",function() {
        anim2=false;
        RepairArrowLinks();
    });  
    DrawPagination();  
}
function ChangePageNext(old_page)
{
    $("#page"+old_page).animate({
        "left":-($(window).width()+100),
        "opacity":"1"
    },"slow",function() {
        anim1=false;
        $("#page"+old_page).css("display","none");
    });
    $("#page"+current_page).css("left",$(window).width()+100+'px');
    $("#page"+current_page).css("display","");
    $("#page"+current_page).animate({
        "left":global_panel_left,
        "opacity":"1"
    },"slow",function() {
        anim2=false;
        RepairArrowLinks();
    });    
    DrawPagination();  
}
function ChangePageFast(val)
{
    if(anim1!==false || anim2!==false || val==current_page)
        return;
    if(val>current_page)
    {
        var old_page=current_page;
        current_page=val;
        if(current_page>max_page)
            current_page=1;
    } else
    {
        var old_page=current_page;
        current_page=val;
        if(current_page<=0)
            current_page=max_page;
    }
    $("#page"+old_page).css("display","none");
    $("#page"+current_page).css("display","");
    $("#page"+current_page).css("left",global_panel_left+"px");
    $("#page"+current_page).css("opacity","1");
    RepairArrowLinks();
}
function DrawPagination()
{
    for(var i=1;i<=max_page;i++)
    {
        if(i==current_page)
            $("#p"+i).addClass("active");
        else
            $("#p"+i).removeClass("active");
    }
}
function DoQuickSearch(str)
{
    var out='';
    if(str.length>0)
    {
        out=quickSearch(str);
    }
    if(out.length>0)
    {
        $(".quicksearch_container").css("display","block");
        $(".quicksearch_container").html(out);
    } else
    $(".quicksearch_container").css("display","none");
}
function quickSearch(str) {
    var output='<ul class="quicksearch">';
    var count=0;
    for (var j=0; j<games.length; j++) {
        if (games[j].toLowerCase().indexOf(str) != -1 && count<10)
        //if (games[j].match (str) && count<10)
        {
            count++;
            output+='<li><a href="'+games_link[j]+'"><img src="'+games_images[j]+'"/><div class="title">'+games[j]+'</div></a></li>';
        }
    }
    output+='<li class="clear"></li></ul>';
    if(count==0)
        output='';
    return output;
}    
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
