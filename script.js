const cardCompItem = [
  {
    icon: 'science',
    title: 'page builder',
    caption: 'Build your page easily',
  },
  {
    icon: 'edit_note',
    title: 'customized domain',
    caption: 'Create your beautiful domain',
  },
  {
    icon: 'assignment',
    title: 'simple main board',
    caption: 'Make your own page with very simple main board',
  },
  {
    icon: 'payments',
    title: 'handle your transaction payment',
    caption: 'You can handle and customize your own transaction easily',
  },
  {
    icon: 'cloud_upload',
    title: 'easy publish page',
    caption: 'Easy to publish',
  },
  {
    icon: 'share',
    title: 'share and collaborate',
    caption: 'Share it and collaborate with your friends',
  },
];

// var cardData = cardCompItem.map(x => x)
// console.log(cardData)

// for (let i = 0; i < cardCompItem.length; i++) {
//   console.log(cardCompItem[i].icon)
// }

var outputHtml = "";
// for (let i = 0; i < cardCompItem.length; i++) {
//   // console.log(cardCompItem[i].icon)
//   outputHtml += cardCompItem[i].icon
// }

// loop array here
for (let i = 0; i < cardCompItem.length; i++) {
  outputHtml += '<div class="card" >';
  outputHtml += '<div class="card-inside-feat" >';
  outputHtml += '<i class="material-icons i-style">' + cardCompItem[i].icon + '</i>';
  outputHtml += '<h1 class="no-padding-margin font-roboto">' + cardCompItem[i].title + '</h1>';
  outputHtml += '</div>';
  outputHtml += '</div>';
}

document.getElementById('boyy').innerHTML = outputHtml

// console.log(outputHtml)

// var res = cardCompItem.filter(x => { return x.title === 'easy publish page' })
// console.log(res)

// var cards = document.getElementById('card-id')