import wish from "../images/wish.svg";
import wish2 from "../images/wish-black.svg";
import React, { useState } from "react";

const WishlistButton = ({ item, addToWish }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleWishlistClick = () => {
        setIsWishlisted(!isWishlisted); // Đảo ngược trạng thái
        addToWish(item?._id); // Gọi hàm để lưu vào wishlist
    };

    return (
        <button
            className="border-0 bg-transparent"
            style={{ width: "30px", height: "30px", padding: 0 }} // Giảm kích thước nút
            onClick={handleWishlistClick}
        >
            <img
                src={isWishlisted ? wish2 : wish} // Hiển thị icon dựa trên trạng thái
                alt="wishlist"
                style={{
                    width: "20px", // Kích thước nhỏ
                    height: "20px",
                    objectFit: "contain", // Đảm bảo hình không bị méo
                }}
            />
        </button>
    );
};

export default WishlistButton;