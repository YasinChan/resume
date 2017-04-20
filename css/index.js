import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'a': {
    'textDecoration': 'none'
  },
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'font': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'arial,' }, { 'unit': 'string', 'value': '"Microsoft' }, { 'unit': 'string', 'value': 'Yahei",' }, { 'unit': 'string', 'value': '"微软雅黑",' }, { 'unit': 'string', 'value': 'STXihei,' }, { 'unit': 'string', 'value': '"华文细黑",' }, { 'unit': 'string', 'value': 'sans-serif' }]
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'font': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'arial,' }, { 'unit': 'string', 'value': '"Microsoft' }, { 'unit': 'string', 'value': 'Yahei",' }, { 'unit': 'string', 'value': '"微软雅黑",' }, { 'unit': 'string', 'value': 'STXihei,' }, { 'unit': 'string', 'value': '"华文细黑",' }, { 'unit': 'string', 'value': 'sans-serif' }]
  },
  'li': {
    'listStyle': 'none'
  },
  'clearfix': {
    'content': '''',
    'display': 'block',
    'clear': 'both'
  },
  'tabs': {
    'display': 'none'
  },
  'tab-wrap>tab-active': {
    'display': 'block'
  },
  '::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 10 }]
  },
  '::-webkit-scrollbar-track': {
    'backgroundColor': '#bee1eb'
  },
  '::-webkit-scrollbar-thumb': {
    'backgroundColor': 'rgba(0, 175, 240, 0.8)',
    'borderRadius': '5px',
    'transition': 'all 0.2s'
  },
  // 以下为aside
  'content': {
    'paddingLeft': [{ 'unit': 'px', 'value': 300 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ct': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'float': 'left',
    'backgroundColor': '#BEE1EB',
    'overflow': 'auto',
    'zIndex': '-20'
  },
  'aside': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'marginLeft': [{ 'unit': '%H', 'value': -1 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -300 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'backgroundColor': '#00AFF0',
    'float': 'left'
  },
  'photo-name': {
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'photo img': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '50px'
  },
  'photo-name p': {
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 35 }],
    'color': 'aliceblue',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'photo-name cy': {
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': 'aliceblue',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'contact': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  'contact>ul li': {
    'paddingTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'contact>ul li': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': 'aliceblue'
  },
  'contact>ul li i': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'aside>ul': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'aside>ul hr': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'aside>ul li': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'aside>ul li a': {
    'color': 'aliceblue',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'transition': 'all 0.2s'
  },
  'aside>ul li a:hover': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'aside social': {
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'aside social>div': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'aside social>div i': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': 'azure',
    'transition': 'all 0.3s'
  },
  'aside social>div:hover i': {
    'color': 'aqua'
  },
  'aside footer': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'color': 'azure',
    'opacity': '0.8'
  },
  'modal-main': {
    'position': 'relative',
    'display': 'none'
  },
  'cover': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#165EA8',
    'opacity': '0.4',
    'zIndex': '1'
  },
  'modal_ct': {
    'position': 'fixed',
    'borderRadius': '10px',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'WebkitTransform': 'translate(-50%, -50%)',
    'width': [{ 'unit': 'px', 'value': 600 }],
    'background': '#fff',
    'zIndex': '100'
  },
  'header': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'h3': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'close': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'rqcode': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }]
  },
  // 以下是ct
  'ct': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'program-wrap': {
    'width': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'program-wrap a': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 360 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'borderRadius': '10px',
    'marginLeft': [{ 'unit': 'px', 'value': 18 }],
    'background': 'rgba(0, 175, 240, 0.5)',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'position': 'relative',
    'transition': 'all .3s',
    'overflow': 'hidden'
  },
  'program-wrap a h1': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'position': 'absolute',
    'color': '#20A0FF',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'transition': 'all .3s'
  },
  'program-wrap a img': {
    'height': [{ 'unit': 'px', 'value': 80 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'opacity': '0',
    'transition': 'all .3s'
  },
  'program-wrap a p': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'position': 'absolute',
    'color': '#BEE1EB',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'opacity': '0',
    'transition': 'all .3s'
  },
  'program-wrap a:hover': {
    'background': 'rgba(0, 175, 240, 0.8)'
  },
  'program-wrap a:hover img': {
    'transform': 'translate(-50%, -100%)',
    'opacity': '1'
  },
  'program-wrap a:hover p': {
    'transform': 'translate(-50%, 0)',
    'opacity': '1'
  },
  'program-wrap a:hover h1': {
    'color': 'rgba(32, 160, 255, 0.5)'
  },
  'comp': {
    'width': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'comp a': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'borderRadius': '5px',
    'color': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'fontWeight': '700',
    'textDecoration': 'none',
    'transition': 'all .3s linear'
  },
  'comp a:hover': {
    'color': '#ABA9A9',
    'transform': 'scale(1.06)'
  },
  'comp a:active': {
    'color': '#333'
  },
  // @media screen and (max-width: 768px) {
  // #main {
  // width: 90%;
  // margin: 130px auto 0
  // }
  // }
  'threed': {
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'animation': '4s three infinite linear',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'color': 'yellow'
  },
  'head': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'height': [{ 'unit': 'px', 'value': 260 }],
    'width': [{ 'unit': 'px', 'value': 280 }],
    'borderRadius': '140px/130px',
    'position': 'relative',
    'background': '#09B2DF',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'eyes-left': {
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '25px/30px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'left': [{ 'unit': 'px', 'value': 90 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'background': '#fff',
    'zIndex': '10'
  },
  'eyes-left dot': {
    'height': [{ 'unit': 'px', 'value': 16 }],
    'width': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '5px/8px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 18 }],
    'left': [{ 'unit': 'px', 'value': 33 }],
    'background': 'black'
  },
  'eyes-right': {
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '25px/30px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'left': [{ 'unit': 'px', 'value': 140 }],
    'top': [{ 'unit': 'px', 'value': 24 }],
    'background': '#fff',
    'zIndex': '10'
  },
  'eyes-right dot': {
    'height': [{ 'unit': 'px', 'value': 16 }],
    'width': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '5px/8px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 18 }],
    'left': [{ 'unit': 'px', 'value': 5 }],
    'background': 'black'
  },
  'face': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 53 }],
    'left': [{ 'unit': 'px', 'value': 24 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'height': [{ 'unit': 'px', 'value': 210 }],
    'width': [{ 'unit': 'px', 'value': 230 }],
    'borderRadius': '115px/105px',
    'background': '#fff'
  },
  'nose': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'borderRadius': '10px',
    'background': 'red',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 17 }],
    'left': [{ 'unit': 'px', 'value': 105 }]
  },
  'beard-left': {
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 65 }],
    'backgroundColor': '#000',
    'top': [{ 'unit': 'px', 'value': 73 }],
    'left': [{ 'unit': 'px', 'value': 30 }]
  },
  'beard-left:after': {
    'content': '''',
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 65 }],
    'backgroundColor': '#000',
    'top': [{ 'unit': 'px', 'value': -20 }],
    'transform': 'rotate(10deg)'
  },
  'beard-left:before': {
    'content': '''',
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 65 }],
    'backgroundColor': '#000',
    'top': [{ 'unit': 'px', 'value': 20 }],
    'transform': 'rotate(-10deg)'
  },
  'beard-mid': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'width': [{ 'unit': 'px', 'value': 2 }],
    'position': 'absolute',
    'backgroundColor': '#000',
    'left': [{ 'unit': 'px', 'value': 114 }],
    'top': [{ 'unit': 'px', 'value': 37 }]
  },
  'beard-right': {
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 65 }],
    'backgroundColor': '#000',
    'top': [{ 'unit': 'px', 'value': 73 }],
    'left': [{ 'unit': 'px', 'value': 136 }]
  },
  'beard-right:after': {
    'content': '''',
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 65 }],
    'backgroundColor': '#000',
    'top': [{ 'unit': 'px', 'value': -20 }],
    'transform': 'rotate(-10deg)'
  },
  'beard-right:before': {
    'content': '''',
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 65 }],
    'backgroundColor': '#000',
    'top': [{ 'unit': 'px', 'value': 20 }],
    'transform': 'rotate(10deg)'
  },
  'mouse': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'width': [{ 'unit': 'px', 'value': 160 }],
    'borderRadius': '0 0 75px 75px',
    'background': 'red',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 106 }],
    'left': [{ 'unit': 'px', 'value': 35 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }]
  },
  'tough': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '0 0 0 40px',
    'background': 'orange',
    'transform': 'rotate(-45deg)',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 35 }],
    'left': [{ 'unit': 'px', 'value': 60 }]
  },
  'tough:after': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '20px 20px 0 0',
    'background': 'orange',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -19 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'tough:before': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '20px 20px 0 0',
    'transform': 'rotate(90deg)',
    'background': 'orange',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 28 }]
  },
  'body': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 160 }],
    'top': [{ 'unit': 'px', 'value': -25 }],
    'background': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'red': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 166 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'background': 'red',
    'left': [{ 'unit': 'px', 'value': -3 }],
    'top': [{ 'unit': 'px', 'value': -2 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '6px',
    'zIndex': '3'
  },
  'ring': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '20px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'background': 'yellow',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 62 }],
    'top': [{ 'unit': 'px', 'value': 5 }],
    'zIndex': '10'
  },
  'ring:before': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': 'px', 'value': 8 }],
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 17 }],
    'left': [{ 'unit': 'px', 'value': 13 }]
  },
  'ring:after': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 2 }],
    'background': '#000',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 27 }],
    'left': [{ 'unit': 'px', 'value': 17 }]
  },
  'ring-r': {
    'height': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': -2 }],
    'borderRadius': '5px',
    'background': 'yellow'
  },
  'bodys': {
    'height': [{ 'unit': 'px', 'value': 120 }],
    'width': [{ 'unit': 'px', 'value': 161 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'background': '#09B2DF'
  },
  'white': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 90 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '0 0 75px 75px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -1 }],
    'left': [{ 'unit': 'px', 'value': 4 }],
    'background': '#fff',
    'zIndex': '2'
  },
  'pocker': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '0 0 40px 40px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 35 }],
    'left': [{ 'unit': 'px', 'value': 35 }]
  },
  'hand': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#09B2DF' }],
    'borderRight': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#09B2DF' }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 165 }],
    'top': [{ 'unit': 'px', 'value': -215 }]
  },
  'hand-left-arm': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'background': '#09B2DF',
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -25 }],
    'left': [{ 'unit': 'px', 'value': -84 }],
    'transform': 'rotate(30deg)',
    'zIndex': '0'
  },
  'hand-left-r': {
    'height': [{ 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': 'px', 'value': 60 }],
    'borderRadius': '30px',
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -60 }],
    'left': [{ 'unit': 'px', 'value': -105 }]
  },
  'hand-right-arm': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'background': '#09B2DF',
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -25 }],
    'left': [{ 'unit': 'px', 'value': 140 }],
    'transform': 'rotate(150deg)',
    'zIndex': '0'
  },
  'hand-right-r': {
    'height': [{ 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': 'px', 'value': 60 }],
    'borderRadius': '30px',
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -60 }],
    'left': [{ 'unit': 'px', 'value': 205 }]
  },
  'foot': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -128 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 225 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'background': '#BEE1EB'
  },
  'foot:before': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'borderRadius': '10px 10px 0 0',
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'background': '#BEE1EB',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -15 }],
    'left': [{ 'unit': 'px', 'value': 103 }]
  },
  'foot-left': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 90 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderTopLeftRadius': '20px',
    'borderTopRightRadius': '10px',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 18 }],
    'top': [{ 'unit': 'px', 'value': -1 }],
    'background': '#fff'
  },
  'foot-right': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 90 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'borderTopLeftRadius': '10px',
    'borderTopRightRadius': '20px',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 117 }],
    'top': [{ 'unit': 'px', 'value': -1 }],
    'background': '#fff'
  },
  'zhu': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'left': [{ 'unit': 'px', 'value': 70 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#00AFF0'
  },
  'thanks': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#00AFF0'
  },
  'about': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }],
    'color': '#165EA8'
  },
  'about hr': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 850 }]
  },
  'about h2': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'about res': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'about page': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'about dev': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }]
  }
});
