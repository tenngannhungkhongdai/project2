let banco=[
    ['a1','b1','c1','d1','e1','f1','g1','h1'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['a3','b3','c3','d3','e3','f3','g3','h3'],
    ['a4','b4','c4','d4','e4','f4','g4','h4'],
    ['a5','b5','c5','d5','e5','f5','g5','h5'],
    ['a6','b6','c6','d6','e6','f6','g6','h6'],
    ['a7','b7','c7','d7','e7','f7','g7','h7'],
    ['a8','b8','c8','d8','e8','f8','g8','h8']
]
var o=document.getElementsByClassName('square')
var otrang=['b1','d1','f1','h1','a2','c2','e2','g2','b3','d3','f3','h3','a4','c4','e4','g4','b5','d5','f5','h5','a6','c6','e6','g6','b7','d7','f7','h7','a8','c8','e8','g8']
var oden=['a1','c1','e1','g1','b2','d2','f2','h2','a3','c3','e3','g3','b4','d4','f4','h4','a5','c5','e5','g5','b6','d6','f6','h6','a7','c7','e7','g7','b8','d8','f8','h8']
var b151={
    position: banco[7][0]
}
var b131=banco[7][1]
var b141=banco[7][2]
var b191=banco[7][3]
var b101=banco[7][4]
var b142=banco[7][5]
var b132=banco[7][6]
var b152=banco[7][7]
var b111=banco[6][0]
var b112=banco[6][1]
var b113=banco[6][2]
var b114=banco[6][3]
var b115=banco[6][4]
var b116=banco[6][5]
var b117=banco[6][6]
var b118=banco[6][7]
var w051=banco[0][0]
var w031=banco[0][1]
var w041=banco[0][2]
var w091=banco[0][3]
var w001=banco[0][4]
var w042=banco[0][5]
var w032=banco[0][6]
var w052=banco[0][7]
var w011=banco[1][0]
var w012=banco[1][1]
var w013=banco[1][2]
var w014=banco[1][3]
var w015=banco[1][4]
var w016=banco[1][5]
var w017=banco[1][6]
var w018=banco[1][7]
let wpiece=[w001,w011,w012,w013,w014,w015,w016,w017,w018,w031,w032,w041,w042,w051,w052,w091]
let bpiece=[b101,b111,b112,b113,b114,b115,b116,b117,b118,b131,b132,b141,b142,b151,b152,b191]
let quanco=[
    [
        ['w001'],
        ['w091'],
        ['w051','w052'],
        ['w041','w042'],
        ['w031','w032'],
        ['w011','w012','w013','w014','w015','w016','w017','w018']
    ],
    [
        ['b101'],
        ['b191'],
        ['b151','b152'],
        ['b141','b142'],
        ['b131','b132'],
        ['b111','b112','b113','b114','b115','b116','b117','b118']
    ]
]
// function xepbanco(){
//     for(i=0;i<32;i++){
//         document.getElementById(otrang[i]).style.backgroundColor='rgb(155,155,155)'
//         document.getElementById(oden[i]).style.backgroundColor='rgb(100,100,100)'
//     }
//     for(i=0;i<o.length;i++){
//         if(o[i].id==b151){o[i].innerHTML='<span class="bpiece" id="b151">&#9820;</span>'}
//         else if(o[i].id==b152){o[i].innerHTML='<span class="bpiece" id="b152">&#9820;</span>'}
//         else if(o[i].id==b131){o[i].innerHTML='<span class="bpiece" id="b131">&#9822;</span>'}
//         else if(o[i].id==b132){o[i].innerHTML='<span class="bpiece" id="b132">&#9822;</span>'}
//         else if(o[i].id==b141){o[i].innerHTML='<span class="bpiece" id="b141">&#9821;</span>'}
//         else if(o[i].id==b142){o[i].innerHTML='<span class="bpiece" id="b142">&#9821;</span>'}
//         else if(o[i].id==b191){o[i].innerHTML='<span class="bpiece" id="b191">&#9819;</span>'}
//         else if(o[i].id==b101){o[i].innerHTML='<span class="bpiece" id="b101">&#9818;</span>'}
//         else if(o[i].id==b111){o[i].innerHTML='<span class="bpiece" id="b111">&#9823;</span>'}
//         else if(o[i].id==b112){o[i].innerHTML='<span class="bpiece" id="b112">&#9823;</span>'}
//         else if(o[i].id==b113){o[i].innerHTML='<span class="bpiece" id="b113">&#9823;</span>'}
//         else if(o[i].id==b114){o[i].innerHTML='<span class="bpiece" id="b114">&#9823;</span>'}
//         else if(o[i].id==b115){o[i].innerHTML='<span class="bpiece" id="b115">&#9823;</span>'}
//         else if(o[i].id==b116){o[i].innerHTML='<span class="bpiece" id="b116">&#9823;</span>'}
//         else if(o[i].id==b117){o[i].innerHTML='<span class="bpiece" id="b117">&#9823;</span>'}
//         else if(o[i].id==b118){o[i].innerHTML='<span class="bpiece" id="b118">&#9823;</span>'}
//         else if(o[i].id==w051){o[i].innerHTML='<span class="wpiece" id="w051">&#9814;</span>'}
//         else if(o[i].id==w052){o[i].innerHTML='<span class="wpiece" id="w052">&#9814;</span>'}
//         else if(o[i].id==w031){o[i].innerHTML='<span class="wpiece" id="w031">&#9816;</span>'}
//         else if(o[i].id==w032){o[i].innerHTML='<span class="wpiece" id="w032">&#9816;</span>'}
//         else if(o[i].id==w041){o[i].innerHTML='<span class="wpiece" id="w041">&#9821;</span>'}
//         else if(o[i].id==w042){o[i].innerHTML='<span class="wpiece" id="w042">&#9821;</span>'}
//         else if(o[i].id==w091){o[i].innerHTML='<span class="wpiece" id="w091">&#9819;</span>'}
//         else if(o[i].id==w001){o[i].innerHTML='<span class="wpiece" id="w001">&#9812;</span>'}
//         else if(o[i].id==w011){o[i].innerHTML='<span class="wpiece" id="w011">&#9823;</span>'}
//         else if(o[i].id==w012){o[i].innerHTML='<span class="wpiece" id="w012">&#9823;</span>'}
//         else if(o[i].id==w013){o[i].innerHTML='<span class="wpiece" id="w013">&#9823;</span>'}
//         else if(o[i].id==w014){o[i].innerHTML='<span class="wpiece" id="w014">&#9823;</span>'}
//         else if(o[i].id==w015){o[i].innerHTML='<span class="wpiece" id="w015">&#9823;</span>'}
//         else if(o[i].id==w016){o[i].innerHTML='<span class="wpiece" id="w016">&#9823;</span>'}
//         else if(o[i].id==w017){o[i].innerHTML='<span class="wpiece" id="w017">&#9823;</span>'}
//         else if(o[i].id==w018){o[i].innerHTML='<span class="wpiece" id="w018">&#9823;</span>'}
//         else{o[i].innerHTML=''}
//     }
// }
// xepbanco()
