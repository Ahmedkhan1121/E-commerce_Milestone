export interface Electronics{
    id:number;
    name:string;
    img:string;
    price:string;
};
export interface NavList{
    name:string;
    link:string;
}
export interface HeroRating{
    name:string;
    rate:string;
};
export const  heroRating:HeroRating[] = [
    {
        name:'Service Geographics',
        rate:'10+'
    },
    {
        name:'Fortune Clients',
        rate:'30M+'
    },
    {
        name:'Sales Per month',
        rate:'10k+'
    },
];
export const navList:NavList[] = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'product',
        link:'/product'
    },
    {
        name:'about',
        link:'/about'
    },
    {
        name:'contact',
        link:'/contact'
    },
]
export const electronicsList:Electronics[] =[
    {
        id:1,
        img:'airpods-4-anc-select-202409.png',
        name:'AirPods 4',
        price:'$170.00'
    },
    {
        id:2,
        img:'airpods-pro-2-hero-select-202409.png',
        name:'AirPods Pro 2',
        price:'$160.00'
    },
    {
        id:3,
        img:'airpods-max-select-202409-midnight.png',
        name:'AirPods Max',
        price:'$500.00'
    },
    {
        id:4,
        img:'MUWA3.png',
        name:'Apple Pencil (USB-C)',
        price:'$60.00'
    },
    {
        id:5,
        img:'MX6X3.png',
        name:'Mag Safe Charger',
        price:'$40.00'
    },
    {
        id:6,
        img:'MXK63.png',
        name:'Magic Mouse',
        price:'$99.00'
    },
    
    {
        id:7,
        img:'MXKA3.png',
        name:'Magic TrackPad',
        price:'$150.00'
    },
    {
        id:8,
        img:'MXU43.png',
        name:'Nike Sport Loop',
        price:'$50.00'
    },
    
    {
        id:9,
        img:'MY1W2.png',
        name:'30W USB-C Power Adapter',
        price:'$40.00'
    },
     {
        id:10,
        img:'airtag-single-select-202104.png',
        name:'AirTag',
        price:'$40.00'
    }
    ,
     {
        id:11,
        img:'airtag-4pack-select-202104.png',
        name:'AirTag 4 pack',
        price:'$99.00'
    }
    ,
     {
        id:12,
        img:'MA7K4.png',
        name:'AirTag FineWoven Key Ring – Blackberry',
        price:'$39.00'
    },
    {
        id:13,
        img:'homepod-mini-select-blue-202110.png',
        name:'HomePod mini',
        price:'$40.00'
    }
    ,{
        id:14,
        img:"apple-tv-4k-hero-select-202210.png",
        name:'Apple TV 4K',
        price:'$40.00'
    },
    {
        id:15,
        img:"homepod-select-midnight-202210.png",
        name:'HomePod - Midnight',
        price:'$299'
    },
    // {
    //     id:16,
    //     img:"iphone_15__buwagff0mwwi_large.png",
    //     name:'',
    //     price:'$'
    // }, {
    //     id:,
    //     img:"",
    //     name:'CRKD NEO S Controller with Charging Dock - Frost',
    //     price:'$'
    // }, {
    //     id:,
    //     img:"",
    //     name:'',
    //     price:'$'
    // }, {
    //     id:,
    //     img:"",
    //     name:'',
    //     price:'$'
    // }, {
    //     id:,
    //     img:"",
    //     name:'',
    //     price:'$'
    // },
]