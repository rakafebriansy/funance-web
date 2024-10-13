import iceCreamShopImg from "../../../assets/images/ice-cream-shop.png"
import kriboGirlImg from "../../../assets/images/kribo-girl.png"

const ChatItem = ({ isSender, children }) => {
    return (
        <div className={`rounded-xl border p-4 gap-2 flex flex-col ${isSender ? 'bg-[#F7F7F7]': 'bg-white'}`}>
            <img src={isSender ? iceCreamShopImg: kriboGirlImg} className="w-8" />
            <p>{children}</p>
        </div>
    );
};
export default ChatItem;