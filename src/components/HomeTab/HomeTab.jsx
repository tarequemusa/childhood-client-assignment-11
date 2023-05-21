import {useEffect, useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Toy from "../Toy/Toy";

const HomeTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("princess");


    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(result => {
                setToys(result);
            });
    }, [])





    return (
        <div className="container px-12 mx-auto my-16">
            <h1 className="text-4xl my-8 font-bold border-b-4 py-5 text-pink-700">Shop by category</h1>
            <Tabs forceRenderTabPanel defaultIndex={0}>
                <TabList>
                    <Tab><span id="princess" className="font-bold">Disney Princess</span></Tab>
                    <Tab><span className="font-bold">Disney Frozen</span></Tab>
                    <Tab><span className="font-bold">Disney The Little Mermaid</span></Tab>
                </TabList>
                <TabPanel >
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
                {/* <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Homer Simpson</Tab>
                            <Tab>Marge Simpson</Tab>
                            <Tab>Bart Simpson</Tab>
                            <Tab>Lisa Simpson</Tab>
                            <Tab>Maggie Simpson</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
                        </TabPanel>
                        <TabPanel>
                            <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Philip J. Fry</Tab>
                            <Tab>Turanga Leela</Tab>
                            <Tab>Bender Bending Rodriguez</Tab>
                            <Tab>Amy Wong</Tab>
                            <Tab>Professor Hubert J. Farnsworth</Tab>
                            <Tab>Doctor John Zoidberg</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                        </TabPanel>
                        <TabPanel>
                            <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                        </TabPanel>
                        <TabPanel>
                            <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry is best friend. Built in Tijuana, Mexico, he is the Planet Express Ship is cook.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                        </TabPanel>
                        <TabPanel>
                            <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                        </TabPanel>
                        <TabPanel>
                            <p>Alien from Decapod 10. Planet Express staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                        </TabPanel>
                    </Tabs>
                </TabPanel> */}
            </Tabs>
        </div>
    );
};

export default HomeTab;
