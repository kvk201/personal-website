function Work(props){
    const workData = props.workData;
    return(
        <div className="work">
                {workData.map((work) => (
                    <div className="work-grid-container" key={workData.id}>
                        <div className="work-preview">{work.preview}</div>
                        <div className="work-info">
                            <div className="work-info-title">{work.title}</div>
                            <div className="work-info-description">{work.desc}</div>
                        </div>
                    </div>
                ))
                }
            
            </div>
       
    );
}
export default Work;

/*
            <div className="work-grid-container">
                <div className="work-preview">preview</div>
                <div className="work-info">
                    <div className="work-info-title">{work.title}</div>
                    <div className="work-info-description">{work.desc}</div>
                </div>
             </div>
*/ 