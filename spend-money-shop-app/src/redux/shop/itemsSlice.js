import {createSlice, nanoid} from '@reduxjs/toolkit'


export const itemsSlice = createSlice({
    name: 'shopItems',
    initialState:{
        items: [
            {
                id:1,
                name:"Big Mac",
                img_url: "https://www.pngkey.com/png/full/168-1682325_for-a-limited-time-your-favourite-burger-the.png",
                price: 2,
                piece: 0
            },{
                id:2,
                name:"Flip Flops",
                img_url:"https://www.pngall.com/wp-content/uploads/10/Flip-Flops-PNG-Images-HD.png",
                price: 3,
                piece:0
            },{
                id:3,
                name:"iPhone 11 Case",
                img_url:"https://cdn.shopify.com/s/files/1/1228/3460/products/logiix_SiliconeCase_0004_iPhone-12--Pro-_-Midnight-Blue-copy.png?v=1610057294",
                price:20,
                piece: 0
            },{
                id:4,
                name:"Air Jordan",
                img_url:"https://www.pngmart.com/files/21/Air-Jordan-PNG-Picture.png",
                price:150,
                piece:0
            },{
                id:5,
                name:"Macbook Pro",
                img_url:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png",
                price:2000,
                piece:0
            },{
                id:6,
                name:"House",
                img_url:"https://www.pngmart.com/files/16/Contemporary-Modern-House-PNG-Clipart.png",
                price:200000,
                piece:0
            },{
                id:7,
                name:"Skyscraper",
                img_url:"https://www.pngkey.com/png/full/153-1531033_skyscraper-png-skyscraper.png",
                price:850000000,
                piece:0
            },{
                id:8,
                name:"Cruise Ship",
                img_url:"https://i.pinimg.com/originals/fc/35/72/fc357254541c2886a4a8722cbfa9631e.png",
                price:930000000,
                piece:0
            },{
                id:9,
                name:"NBA Team",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png",
                price:3000000000,
                piece:0
            }
        ],
        receiptItems:[],
        totalMoney: 100000000000,
        selectedItemID: 0
    },
    reducers:{
        setItemPiece: (state,action) => {
            const itemId = action.payload.id
            const filter = state.items.find(item => item.id === itemId)
            filter.piece = action.payload.piece
            
        },
        selectedItem: (state,action) => {
            const itemId = action.payload.id
            state.selectedItemID = itemId
        },
        addReceiptList: (state,action) => {
            const receiptID = nanoid()
            const itemId = action.payload.id
            const filter = state.items.find(item => item.id === itemId)
            const itemName = filter.name
            const itemPiece = filter.piece
            const itemPrice = filter.price
            const totalPrice = action.payload.piece * itemPrice
            state.receiptItems.push({receiptID,itemName,itemPiece,totalPrice})
        },
        setTotalMoney: (state,action) => {
            const itemId = action.payload.id
            const filter = state.items.find(item => item.id === itemId)
            if(filter.price * filter.piece > state.totalMoney){
                window.alert("You don't have enough balance.")
            }else{
                state.totalMoney = state.totalMoney - filter.price * filter.piece
            }
        },

    }
})


export const selectItems = state => state.shopItems.items

export const updatedItem = state => state.shopItems.items.find(item => item.id === state.shopItems.selectedItemID)

export const firstSelectedItemID = state => state.shopItems.selectedItemID

export const receiptList = state => state.shopItems.receiptItems

export const totalMoney = state => state.shopItems.totalMoney

export const {setItemPiece,selectedItem,addReceiptList,setTotalMoney} = itemsSlice.actions
export default itemsSlice.reducer