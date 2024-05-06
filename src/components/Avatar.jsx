import image from "../assets/images/avatar.JPG"

function Avatar() {
    return (
        <img src={image} className="w-12 h-12 rounded-full" alt="avatar"/>
    )
}

export default Avatar;