import {useEffect, useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Toy from "../Toy/Toy";
import "./HomeTab.css";

const HomeTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Disney Princess");


    useEffect(() => {
        fetch(`https://childhood-server-assignment-11.vercel.app/alltoys/${ activeTab }`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);

    const result = toys?.filter(toy => toy.status == activeTab);
    console.log(result);

    const handleTabClick = (id) => {
        if(id === 0) {
            setActiveTab("Disney Princess")
        }
        else if(id === 1) {
            setActiveTab("Disney Frozen")
        }
        else if(id === 2) {
            setActiveTab("Disney The Little Mermaid")
        }
    };

    return (
        <div className="container px-12 mx-auto my-16" data-aos="fade-up"
            data-aos-duration="3000">
            <h1 className="text-4xl my-8 font-bold border-b-4 py-5 text-pink-700">Shop by category</h1>
            <Tabs forceRenderTabPanel defaultIndex={0} onSelect={(index) => handleTabClick(index)} >
                <TabList>
                    <Tab><span id="princess" className="font-bold">Disney Princess</span></Tab>
                    <Tab><span id="frozen" className="font-bold">Disney Frozen</span></Tab>
                    <Tab><span id="mermaid" className="font-bold">Disney The Little Mermaid</span></Tab>
                </TabList>
                <TabPanel className={`${ activeTab == "princess" }`}>
                    <Tabs forceRenderTabPanel>
                        <TabPanel>
                            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                                {toys?.map((toy) => (
                                    <Toy toy={toy}></Toy>
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel className={`${ activeTab == "frozen" }`} >
                    <Tabs forceRenderTabPanel>
                        <TabPanel>

                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel className={`${ activeTab == "mermaid" }`} >
                    <Tabs forceRenderTabPanel>
                        <TabPanel>

                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default HomeTab;
