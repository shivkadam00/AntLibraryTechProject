import React from "react";

import Image1 from "../../aset_images/modern-design.jpg";
import Image2 from "../../aset_images/clean-design.jpg";
import Image3 from "../../aset_images/great-support.jpg";
import Image4 from "../../aset_images/easy-customise.jpg";
import Image5 from "../../aset_images/unlimited-features.jpg";
import Image6 from "../../aset_images/advanced-option.jpg";
import {Row,Col} from "antd";
import { Card } from 'antd';

const { Meta } = Card;

function AppFeature(){
    return(
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className ="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card
                            hoverable
                           
                            cover={<img alt="Mordrn Design" src={Image1}/>}
                        >
                            <Meta title="Meordrn Design"  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                           
                            cover={<img alt="clean-design" src={Image2}/>}
                        >
                            <Meta title="clean-design"  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                           
                            cover={<img alt="great-support" src={Image3}/>}
                        >
                            <Meta title="Mgreat-support"  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                           
                            cover={<img alt="easy-customise" src={Image4}/>}
                        >
                            <Meta title="easy-customise"  />
                        </Card>
                    </Col>
                    
                    <Col span={8}>
                        <Card
                            hoverable
                           
                            cover={<img alt="unlimited-features" src={Image5}/>}
                        >
                            <Meta title="unlimited-features"  />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                           
                            cover={<img alt="advanced-option" src={Image6}/>}
                        >
                            <Meta title="advanced-option"  />
                        </Card>
                    </Col>
                   
                    </Row>
            </div>
        </div>
    )
}
export default AppFeature;