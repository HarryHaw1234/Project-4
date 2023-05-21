export default function Die(props) {
    const styles = {
        backgroundColor: (props.valueChosen === props.value && props.isHeld) ? "#59E391" : "white"
    }
    return (
        <div className= "die" style={styles}  onClick={() => props.toggle(props.value, props.id)}>
            <h2>{props.value}</h2>
        </div>
    )
}