import React from "react"
import { List, Card } from 'antd';
import { Button } from 'antd';

const data = [
    {
        title: 'Basic',
        content: [
            {
                price: '3.4L',
                space: '1 GB of space',
                user: '1 user',
                support: '24/7 support',
                backup: 'Safe, reliable backup',
                access: 'Access from anywhere'
            }
        ]
    },
    {
        title: 'Premium',
        content: [
            {
                price: '8L',
                space: '5 GB of space',
                user: '5 users',
                support: '24/7 support',
                backup: 'Safe, reliable backup',
                access: 'Access from anywhere'
            }
        ]
    },
    {
        title: 'Enterprise',
        content: [
            {
                price: '10L',
                space: 'Unlimited space',
                user: '15 users',
                support: '24/7 support',
                backup: 'Safe, reliable backup',
                access: 'Access from anywhere'
            }
        ]
    }
];

function AppPricing() {
    return (
        <div className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Choose a plan to fit your needs</h2>
                    <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className="large">{item.content[0].price}</p>
                                <p>{item.content[0].space}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].backup}</p>
                                <p>{item.content[0].access}</p>
                                <Button type="primary" size="large"><i class="fab fa-telegram-plane"></i>Get Start </Button>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}
export default AppPricing;