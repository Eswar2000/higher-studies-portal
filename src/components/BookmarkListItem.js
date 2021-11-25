export default function BookmarkListItem({coverURL, resourceTitle}){
    return (
            <div className="bmRow">
                <div id="coverCol">
                    <img alt={resourceTitle+"Image"} height='50' width='50' src={coverURL} />
                </div>
                <div id="detailCol">
                    <span id="titleText">{resourceTitle}</span>
                </div>
            </div>
    );
}