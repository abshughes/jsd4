//Get Template Source HTML from DOM
var gifTemplate = document.querySelector('#gif-template');

//compile the Handlebars Tempalte
var gifTemplateFn=Handlebars.compile(gifTemplate);


//const mochData={
//	pagination:{
//		total_count:37
//	}, 
//	data: [{
//		id:'op7uqYWBm3R04',
//		url:'http://giphy.com/gifs/food-krush-groove-the-fat-boys-op7uqYWBm3R04',
//		rating:'y', 
//		images:{
//			original:{
//				url:'http://media0.giphy.com/media/op7uqYWBm3R04/giphy.gif'
//			}
//		}
//	},{
//		id:'wWAIKcFASEFz2', 
//		url:"http://giphy.com/gifs/superman-santa-chandler-bing-wWAIKcFASEFz2", 
//		rating:'g'
//	}]
//};


const mockData = {
    pagination: {
        total_count: 37
    },
    data: [{
        id: "feqkVgjJpYtjy",
        url: "http://giphy.com/gifs/eyes-shocked-bird-feqkVgjJpYtjy",
        rating: "g",
        images: {
            original: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif"
            }
        }
    },{
        id: "FiGiRei2ICzzG",
        url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
        rating: "g",
        images: {
            original: {
                url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif"
            }
        }
    }]
};




