import { useState } from "react";
// import logo from './logo.svg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { PiArrowElbowDownRightLight } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import { CiCircleMinus } from "react-icons/ci";
import { VscSparkleFilled } from "react-icons/vsc";
import { PiBinocularsFill } from "react-icons/pi";
import './App.css';

function App() {
	const [isCompleteScreen, setIsCompleteScreen] = useState(true);
	const [isScreen, setIsScreen] = useState(true);
	const [isExpanded, setIsExpanded] = useState(true);


	return (
		<div className='flex'>
			<div className='sidebar'></div>
			<div className='container'>
				{isCompleteScreen ? (
					<div className='mainBox'>
						<div className='header'>
							<div>STEP 1/3</div>
							<div>4 Prompts | 5 mins</div>
						</div>
						<div className='content'>
							<div className='cost'>
								<div className='costOne'>Cost Identification</div>
								<div className='costTwo'>Identify and categorize the various costs influencing margins.</div>
							</div>
							<button type="button" className='btn' onClick={() => setIsCompleteScreen(false)}>
								<div className="get">Get Started</div>
								<MdKeyboardArrowRight className="arrow"/>
							</button>
						</div>
					</div>
				): (
					<div className="mainBoxOne">
						{isScreen ? (
							<div className="divOne">
								<div className="divTwo">							
									<div className="divThree">
										<div className="headerOne">Step 1</div>
										<IoIosArrowDropupCircle 
											className="upArrow"
											onClick={() => setIsCompleteScreen(true)}
										/>
									</div>
									<div className="costA">Cost Identification</div>
									<div className="viewMore">
										<div className="more">
											Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).									
										</div>
									</div>
								</div>
								<div className="divFour">
									<div className="quest">
										<div className="question">Question 1 out of 3</div>
										<button
											type="button"
											onClick={() => setIsScreen(false)}
											className="plus"
										>
											<FaPlus className="plus"/>
										</button>							
									</div>	
									<div className="questionOne">
										What are the primary components of variable & semi-variable costs imapacting gross margins?
									</div>								
								</div>
							</div>
						) : (
							<div className="divOne">
								<div className="divTwo">							
									<div className="divThree">
										<div className="headerOne">Step 1</div>
										<IoIosArrowDropupCircle 
											className="upArrow"
											onClick={() => setIsCompleteScreen(true)}
										/>
									</div>
									<div className="costA">Cost Identification</div>
									<div className="viewMore">
										<div className="more">
											Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).									
										</div>
									</div>
								</div>
								<div className="divFour">
									<div className="quest">
										<div className="question">Question 1 out of 3</div>
										<button
											type="button"
											onClick={() => setIsScreen(true)}
											className="plus"
										>
											<FiMinus className="plus"/>
										</button>							
									</div>	
									<div className="questionOne">
										What are the primary components of variable & semi-variable costs imapacting gross margins?
									</div>	
									{isExpanded ? (
										<div className="flex">
											<div className="littleBlue">
												<div className="addHover">
													<div className="need">
														<PiArrowElbowDownRightLight className="returnArrow" />
														Need more clarification on the section?
													</div>
													<GoPlusCircle 
														className="circle"
														onClick={() => setIsExpanded(false)}
													/>
												</div>
											</div>
											<div className="littleBlueOne">
												<div className="addHover">
													<div className="need">
														<VscSparkleFilled className="spark"/>
														Need more clarification on the section?
													</div>
													<GoPlusCircle 
														className="circle"
														onClick={() => setIsExpanded(false)}
													/>
												</div>
											</div>
										</div>
									) : (
										<div className="flex">
											<div className="bigBlue">
												<div className="addHover">
													<div className="needOne">
														<PiArrowElbowDownRightLight className="returnArrow" />
														Need more clarification on the section?
													</div>
													<CiCircleMinus  
														className="circleOne" 
														onClick={() => setIsExpanded(true)}
													/>
												</div>
												<div className="contextAndIcon">
													<div className="context">
														<PiBinocularsFill className="icon"/>

														How do I connect this to my business context?
													</div>
													
												</div>
											</div>
											{/* <div className="bigBlue">
												<div className="addHover">
													<div className="need">
														<PiArrowElbowDownRightLight className="returnArrow" />
														Need more clarification on the section?
													</div>
													<FiMinus 
														className="circle" 
														onClick={() => setIsExpanded(true)}
													/>
												</div>
											</div> */}
										</div>										
									)
									}							
								</div>
							</div>
						)
					}						
					</div>
				)
				}
			</div>		
		</div>
	);
}

export default App;
