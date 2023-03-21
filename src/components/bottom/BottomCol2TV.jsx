export function BottomTVItem(props) {
    return (
      <div className="bottom-block-tv-item">
        <div className="time">{props.time}</div>
        <div className="show">{props.show}</div>
        <div className="channel">{props.channel}</div>
      </div>
    );
}
  
import tvData from './data/tvshows.json';

export default function BottomTV() {
    const tvItems = tvData.map((item) => {
        return <BottomTVItem time={item.time} show={item.show} channel={item.channel} />;
    });

    return (
        <div className="bottom-block-tv">
        <h4>Телепрограмма</h4>
        {tvItems}
        </div>
    );
}
  