// const cardCompItem = [
//   {
//     title: 'page builder',
//     caption: 'Build your page easily',
//   },
//   {
//     title: 'customized domain',
//     caption: 'Create your beautiful domain',
//   },
//   {
//     title: 'simple main board',
//     caption: 'Make your own page with very simple main board',
//   },
//   {
//     title: 'handle your transaction payment',
//     caption: 'You can handle and customize your own transaction easily',
//   },
//   {
//     title: 'easy publish page',
//     caption: 'Easy to publish',
//   },
//   {
//     title: 'share and collaborate',
//     caption: 'Share it and collaborate with your friends',
//   },
// ];

const cardCompItem = [
  {
    icon: <BeakerIcon className="h-14 w-14 text-blue-500" />,
    title: 'page builder',
    caption: 'Build your page easily',
    url: '/pageBuilder',
  },
  {
    icon: <PencilAltIcon className="h-14 w-14 text-blue-500" />,
    title: 'customized domain',
    caption: 'Create your beautiful domain',
    url: '/customizeDomain',
  },
  {
    icon: <ClipboardListIcon className="h-14 w-14 text-blue-500" />,
    title: 'simple main board',
    caption: 'Make your own page with very simple main board',
    url: '/simpleMainBoard',
  },
  {
    icon: <CashIcon className="h-14 w-14 text-blue-500" />,
    title: 'handle your transaction payment',
    caption: 'You can handle and customize your own transaction easily',
    url: '/transaction',
  },
  {
    icon: <CloudUploadIcon className="h-14 w-14 text-blue-500" />,
    title: 'easy publish page',
    caption: 'Easy to publish',
    url: '/easyPublish',
  },
  {
    icon: <ShareIcon className="h-14 w-14 text-blue-500" />,
    title: 'share and collaborate',
    caption: 'Share it and collaborate with your friends',
    url: '/share',
  },
];

var cards = document.getElementById('card-id')