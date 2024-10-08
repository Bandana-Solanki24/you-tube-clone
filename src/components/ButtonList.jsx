import Button from "./Button"
const buttonList = [
    "All", "Gaming", "News", "Gaming", "Food", "Entertainment", "Song"
]

const ButtonList = () => {
    return (
        <div className="flex gap-5">
            {buttonList.map((button) => {
                return (
                    <Button key={button} name={`${button}`} />
                )
            })}


        </div>
    )
}

export default ButtonList
