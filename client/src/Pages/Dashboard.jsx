import React from 'react'
import { Link } from 'react-router-dom'


function Dashboard() {
  return (
 <div>
  
<section>
	<div class="bg-black text-blue-100 py-20">
		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 class="text-3xl md:text-9xl p-1 font-serif text-blue-800 tracking-loose">VIRTUAL DESK</h1>
				<h2 class="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">Organize Collaborate Learn Together on Virtual Desk.
				</h2>
				
				<Link
             to="/home"
					class="bg-transparent  hover:bg-blue-300 text-blue-800 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent">
					Join Now</Link>
			</div>
			{/* <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div class="h-48 flex flex-wrap content-center">
					<div>
						<img class="inline-block mt-28  xl:block" src="/Images/cls"></img></div>
						<div>
							<img class="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"></img></div>
				   			<div>
								<img class="inline-block mt-28 lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"></img></div>
							</div>
						</div> */}
					</div>
				</div>
</section>
    </div>
  )
}

export default Dashboard
