<script lang="ts">
	import * as Comp from './index';
</script>

<Comp.A4>
	<div class="mb-4">
		<h1 class="font-bold text-4xl text-center">Tom Tokman Chan</h1>
		<div class="flex flex-row gap-2 items-center">
			<div class="flex flex-row items-center gap-1">
				<i class="fa-solid fa-phone text-2xs" />
				<small class="text-sm">(+61) 04 3592 0637</small>
			</div>
			<div class="text-1xl">•</div>
			<div class="flex flex-row items-center gap-1">
				<i class="fa-solid fa-envelope text-2xs" />
				<small class="text-sm">tokman.chan@gmail.com</small>
			</div>
			<div class="text-1xl">•</div>
			<div class="flex flex-row items-center gap-1">
				<i class="fa-solid fa-location-pin text-2xs" />
				<small class="text-sm">SA, Australia</small>
			</div>
		</div>
	</div>
	<!-- <hr
		class="border-0 h-[2px] w-full my-2 bg-black bg-gradient-to-r from-white via-black to-white"
	/> -->
	<div class="flex flex-row w-full">
		<div class="flex flex-col items-start w-[75%]">
			<section class="mb-2">
				<h2 class="mb-1 flex items-center">
					<i class="fa-solid fa-user mr-2 text-base" />
					<span class="align-bottom font-semibold text-xl">Profile</span>
				</h2>
				<p class="leading-tight">
					A highly motivated Computer Science Graduate with professional
					experience in web and software development. I am committed to
					continuous learning and pushing beyond boundaries to achieve personal
					and professional growth. As a collaborative team player, my goal is to
					achieve the best possible outcome for the team collectively.
				</p>
			</section>
			<section class="mb-4">
				<h2 class="mb-1 flex items-center">
					<i class="fa-solid fa-graduation-cap mr-2 text-base" />
					<span class="align-bottom font-semibold text-xl">Education</span>
				</h2>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Bachelor of Computer Science | The University of Adelaide
						</h3>
						<p class="text leading-tight text-neutral-400">
							Feb 2022 - Dec 2022 • Conferred on 31/12/2022
						</p>
						<ul class="list-disc list-outside ml-4">
							<li>Major in <span class="text-blue-500">Cybersecurity</span></li>
							<li>GPA: <span class="text-blue-500">6.9 / 7.0</span></li>
							<li>
								Awards: <span class="text-blue-500"
									>The Executive Dean's Recognition of Academic Excellence</span
								>
								(2020 & 2021)
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section class="mb-4">
				<h2 class="mb-1 flex items-center">
					<i class="fa-solid fa-briefcase mr-2 text-base" />
					<span class="align-bottom font-semibold text-xl">Work Experience</span
					>
				</h2>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Software Developer | QueenyApp
						</h3>
						<p class="leading-tight text-neutral-400">Dec 2022 - Present</p>
						<p class="leading-tight text-neutral-400">
							Hong Kong • Full-Time • Hybrid Remote
						</p>
						<ul class="list-disc list-outside ml-4">
							<li>
								<span class="font-semibold text-blue-500">
									Developed Business Management System:
								</span> Worked as a full-stack developer for a medium-sized web-based
								system for managing contracts of a construction company using Angular,
								ASP.NET, and SQL Server.
							</li>
							<li>
								<span class="font-semibold text-blue-500"
									>IT Vendor for Conference:</span
								> Provide IT support such as configuring internet access and checking
								in guests for an Ophthalmology Conference held in Malaysia.
							</li>
							<li>
								<span class="font-semibold text-blue-500"
									>Designed Desktop Application:</span
								>
								Designed and developed an easy-to-use User Interface that allows
								users to conveniently upload and view presentation files on Windows
								computers using Flutter and Figma.
							</li>
							<li>
								<span class="font-semibold text-blue-500">
									Supported Legacy Purchasing System:
								</span> Provided support and updated new features such as QR code
								generation for a legacy puchasing system made using PHP and JavaScript.
							</li>
							<li>
								<span class="font-semibold text-blue-500"
									>Collaboarted In Small Team:</span
								> Maintained a good communication with team members and stackholders
								regarding issues with the software system using Jira.
							</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Account Assitant | Hong Kong Discount Hardware
						</h3>
						<p class="leading-tight text-neutral-400">Jan 2022 - Present</p>
						<p class="leading-tight text-neutral-400">
							Adelaide, South Australia, Australia • Casual • On site
						</p>
						<ul class="list-disc list-outside ml-4">
							<li>
								<span class="font-semibold text-blue-500">
									Learned New Skills:
								</span> Demonstrated ability to learn and use professional accounting
								software like MYOB from scratch.
							</li>
							<!-- <li>
								<span class="font-semibold">Resolved Client Conflicts:</span> Maintained
								a good rapport resolved misunderstandings the with suppliers regularly.
							</li> -->
						</ul>
					</div>
				</div>
			</section>
			<section>
				<h2 class="mb-1 flex items-center">
					<i class="fa-solid fa-file mr-2 text-base" />
					<span class="align-bottom font-semibold text-xl"
						>Relevant Projects</span
					>
				</h2>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Covid-19 Tracing Web Application | Group Project
						</h3>
						<p class="leading-tight">
							A fully functional web application that allows contact tracing and
							venue check-ins built using Vue, Bootrap and Express.
						</p>
					</div>
				</div>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Analysing Trend on YouTube | Individual Project
						</h3>
						<p class="leading-tight">
							Explored the mechanism behind Youtube's algorithm for choosing
							trending videos through data visualisation and analysis using
							Pandas and Matplotlib.
						</p>
					</div>
				</div>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Building AI Mailbot | Individual Project
						</h3>
						<p class="leading-tight">
							Developed a mailbot that can automatically fetch news, summarise
							the content using LLM and send to subscribed users.
						</p>
					</div>
				</div>
				<div class="flex flex-row">
					<!-- Dot line representation -->
					<div class="ml-2 mr-4 border-[1px] border-black relative">
						<div
							class="absolute w-[0.6rem] h-[0.6rem] border-[1px] border-black bg-white rounded-md -translate-x-1/2 translate-y-[0.28rem]"
						/>
					</div>
					<div class="leading-tight">
						<h3 class="text-lg font-semibold leading-tight text-blue-950">
							Miscellaneous Projects
						</h3>
						<ul class="leading-tight list-outside ml-4 list-disc">
							<li>
								Built a satellite that receives data from the NOAA weather radio
								to provide local weather forecasts using Arduino.
							</li>
							<li>
								Built a simple Multilayer Perceptron for recognising handwritten
								digits from scratch.
							</li>
							<!-- <li>
								Built an assortment of Web UIs using tailwindcss and svelte
							</li> -->
						</ul>
					</div>
				</div>
			</section>
		</div>
		<aside class="w-[25%] ml-2">
			<div class="flex flex-col items-center mb-4">
				<h2 class="mb-1 text-center text-lg font-semibold">Contact Details</h2>
				<div class="flex flex-row text-sm items-center gap-1">
					<i class="fa-brands fa-linkedin" />
					<a href="https://linkedin.com/in/tomchan629">tomchan629</a>
				</div>
				<div class="flex flex-row text-sm items-center gap-1">
					<i class="fa-brands fa-github" />
					<a href="https://github.com/tomchan123">tomchan123</a>
				</div>
				<div class="flex flex-row text-sm items-center gap-1">
					<i class="fa-solid fa-envelope" />
					<p>tokman.chan@gmail.com</p>
				</div>
				<div class="flex flex-row text-sm items-center gap-1">
					<i class="fa-solid fa-phone" />
					<p>(+61) 04 3592 0637</p>
				</div>
				<div class="flex flex-row text-sm items-center gap-1">
					<i class="fa-solid fa-location-pin" />
					<p>Wynn Vale SA, Australia</p>
				</div>
			</div>
			<div class="flex flex-col items-center mb-4">
				<h2 class="mb-1 text-center text-lg font-semibold">Skills</h2>
				<p class="text-sm text-center">
					C++/C
					<br />Python
					<br />JavaScript
					<br />C# (ASP.NET)
					<br />Flutter
					<br />Node.js (Angular, Vue)
					<br />SQL Database
					<br />Shell/Bash
				</p>
			</div>
			<div class="flex flex-col items-center mb-4">
				<h2 class="mb-1 text-center text-lg font-semibold">Languages</h2>
				<p class="text-center text-sm">English (Advanced)</p>
				<p class="text-center text-sm">Cantonese (Native)</p>
				<p class="text-center text-sm">Mandarin (Advanced)</p>
				<p class="text-center text-sm">Spanish (Beginner)</p>
			</div>
			<div class="flex flex-col items-center mb-4">
				<h2 class="mb-1 text-center text-lg font-semibold">Certifications</h2>
				<p class="text-center text-sm">Azure Fundamentals (2023)</p>
			</div>
			<div class="flex flex-col items-center mb-4">
				<h2 class="mb-1 text-center text-lg font-semibold">Memberships</h2>
				<p class="text-center text-sm">ACS (2022-2023)</p>
			</div>
			<div class="flex flex-col items-center">
				<h2 class="mb-1 text-center text-lg font-semibold">Hobbies</h2>
				<p class="text-center text-sm">Badminton</p>
				<p class="text-center text-sm">CTF Competitions</p>
				<p class="text-center text-sm">Hack the box</p>
			</div>
		</aside>
	</div>
</Comp.A4>
