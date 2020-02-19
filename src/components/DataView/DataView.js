import React, {Component} from 'react';
import {DataScroller} from 'primereact/datascroller';

export class DataScrollerDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };

        this.carTemplate = this.carTemplate.bind(this);
    }


    carTemplate(car) {
        if (!car) {
            return;
        }

        // const src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        return (
            <div className="p-grid car-item">
                <div className="p-col-12 p-md-3">
                    <img src={car.pic} alt="Car" />
                </div>
                <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-col-2 p-sm-6">Vin: </div>
                        <div className="p-col-10 p-sm-6">{car.post_name}</div>

                        <div className="p-col-2 p-sm-6">Year: </div>
                        <div className="p-col-10 p-sm-6">{car.age}</div>

                        <div className="p-col-2 p-sm-6">Brand: </div>
                        <div className="p-col-10 p-sm-6">{car.breed}</div>

                        <div className="p-col-2 p-sm-6">Color: </div>
                        <div className="p-col-10 p-sm-6">{car.org_name}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="datascroll-demo">
                {/* <DataScrollerSubmenu /> */}

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    Demo is at the bottom of this page.
                </div>

                <div className="content-section implementation">
                    <DataScroller value={this.props.cars} itemTemplate={this.carTemplate}
                            rows={10} buffer={0.4} header="List of Cars" />
                </div>

            </div>
        );
    }
}
