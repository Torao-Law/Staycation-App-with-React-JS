import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function DescDetailPage({ data }) {
    return (
        <main>
            <h4>About the place</h4>
            {ReactHtmlParser(data.description)}
            <div className="row" style={{ marginTop: 30 }}>
                {data.features.map( (features, index) => {
                    return (
                        <div key={`Features-${index}`} className="col-3" style={{ marginBottom: 20 }}>
                            <img width="38" className="d-block mb-2" src={features.imageUrl} alt={features.name} />{" "}
                            <span>{features.qty}</span>{" "}
                            <span className="text-gray-500 font-weight-light">{features.name}</span>
                        </div>
                    )
                } )}
            </div>
        </main>
    )
}

export default DescDetailPage
