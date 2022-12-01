import GitHubCalendar from "react-github-calendar"
export default function Github () {
    return <GitHubCalendar 
        username="panhabot"
        blockSize={15}
        blockMargin={5}
        color="#8D7F57"
        fontSize={9}
    />
}