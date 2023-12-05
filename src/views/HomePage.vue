<script setup>
import HelloWorld from "../components/HelloWorld.vue"
import Navbar from "../components/main_navbar.vue"
</script>

<template>

        <div>
        <Navbar/>
      </div>
      <!-- First Section -->
      <section>
        <div>
          <div class="bg-cover bg-center w-full py-12" style="    background-image: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://assets.nicepagecdn.com/d2cc3eaa/499805/images/group-business-people-having-meeting23.jpg');">
            <div class="flex flex-col items-center xl:px-32">          
              <img class="w-5/12 mt-20 sm:w-3/12 sm:mt-14 lg:w-2/12 xl:w-[12%]" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/logo-1.png"/> 
              <p class="text-white underline text-[5rem] leading-none p-8 text-center sm:mt-8 lg:text-8xl xl:text-6xl xl:mx-60">Reinvent What Your Business Could Be</p>
              <button class="bg-[#cbff00] text-[#111111] px-14 sm:px-16 py-4 sm:py-6 mt-8 sm:mt-12 xl:px-12 xl:py-3 xl:text-base text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest ">About Us</button>
              <span class="mt-4 text-white flex text-xl pt-4 font-semibold sm:mt-16 xl:mt-4 xl:pb-14 xl:text-base">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
            </div>
          </div>
        </div>  
      </section>
    
      <!-- second Section -->
      <section class="bg-[#cbff00] text-[#111111] pb-8">
        <div class="justify-center py-4 flex flex-col text-center sm:mx-24 lg:mx-10 xl:mx-32">
          <div class="text-4xl font-bold py-8 lg:text-6xl">What We Do</div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-4" >
           <div class="bg-white p-6 mx-8 md:mx-1 xl:mx-0 md:px-4  xl:px-2 xl:py-8 py-8  items-center flex flex-col mt-4 lg:mx-0">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20 bg-[#cbff00] rounded-full"> <img class="" src="/src/assets/1st.png"/></span>
            <span class="text-2xl font-bold lg:px-4 xl:text-xl">Research User Needs</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Discover pain points and understand user behaviour</p>
           </div>
           <div class="bg-white p-6 mx-8 md:mx-1 xl:mx-0 md:px-4  xl:px-2  xl:py-8 py-8  items-center flex flex-col mt-4 sm:mt-2 md:mt-4 lg:mx-0 ">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  bg-[#cbff00] rounded-full"> <img class="" src="src/assets/2nd.png"/></span>
            <span class="text-2xl font-bold lg:px-10 xl:px-0 xl:text-xl">Business Strategy</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Validate ideas with an interactive prototype of your vision</p>
           </div>
           <div class="bg-white p-6 mx-8 md:mx-1 md:px-4  xl:px-2 xl:py-8 py-8  items-center flex flex-col mt-4 sm:mt-2 md:mt-2 lg:mt-4 lg:mx-0 ">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  bg-[#cbff00] rounded-full"> <img class="" src="src/assets/3rd.png"/></span>
            <span class="text-2xl font-bold lg:px-10 xl:px-0 xl:text-xl ">Automation Strategy</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Launch an MVP with a best in class user experience</p>
           </div>
           <div class="bg-white p-6 mx-8 md:mx-1 md:px-4  xl:px-2 xl:py-8 py-8  items-center flex flex-col mt-4 sm:mt-2 md:mt-2 lg:mt-4 lg:mx-0 ">
            <span class=" p-4 text-center mb-6 flex justify-center w-20 h-20 lg:w-28 lg:h-28 xl:w-20 xl:h-20  bg-[#cbff00] rounded-full"> <img class="" src="src/assets/4th.png"/></span>
            <span class="text-2xl font-bold lg:px-10 xl:px-0 xl:text-xl">Marketing Strategy</span>
              <p class="pt-4 text-base font-medium px-1 lg:px-6">Become a category leader using designops and UX/UI design</p>
           </div>
          </div>
        </div>
      </section>
    
      <!-- Third Section -->
      <section class="bg-black py-4 sm:py-14 md:py-8 lg:py-16">
        <div class="sm:mx-10 md:mx-0 lg:mx-14 lg:pb-8 xl:mx-52" >
          <div class="pt-2 flex justify-end">  
            <svg class="u-svg-content fill-[#cbff00] w-5/12 absolute mt-6 md:mt-0 sm:w-3/12 md:w-2/12 xl:w-[14%] xl:pr-10" viewBox="0 0 160 160" x="0px" y="0px" id="svg-afd0" style="enable-background:new 0 0 160 160;"><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
        s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="md:ml-6 ">
              <img class="px-12 md:px-0 w-full sm:px-20 object-cover flex relative mt-24  md:mt-20 h-[30rem]" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/group-people-working-4.jpg"/>
            </div>
            <div class="bg-white mx-12 pb-8 md:pb-0 md:pb-2 sm:mx-20 md:mx-[-2rem] md:mr-16 md:relative md:mt-20 lg:px-10 lg:mr-20 xl:mr-32 xl:px-6">
              <p class="text-4xl font-bold px-4 sm:px-6 pt-10 md:pr-12 md:pt-4 md:mt-8">Diversity, Equity, And Inclusion</p>
              <p class="pt-4 pl-4 text-xl font-normal sm:px-6 pr-10  lg:pr-6">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
              <span class="mt-4 text-black flex text-lg pt-2 sm:px-6 px-4  ">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
              <span class="flex pl-4 sm:px-6 items-center">
                <button class="bg-[#cbff00] text-[#650404] px-12 xl:px-10 xl:py-3 xl:text-lg xl:mt-14 xl:text-[#111111] xl:hover:text-white xl:hover:bg-[#111111]  py-4 mt-8 text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest">Learn More</button>
              </span>
            </div>
          </div>
        </div>
      </section>
    
      <!-- fourth Section -->
      <section class="bg-[#cbff00] py-8 sm:py-12 lg:py-20">
        <div class="flex flex-col items-center px-8 text-center block">
          <p class="text-3xl font-bold sm:text-4xl sm:px-24 md:text-6xl lg:text-7xl xl:text-5xl">Our Goal Is To Create 360° Value</p>
          <span class="text-[#6c773f] text-3xl px-10 py-1 font-bold sm:text-4xl md:text-6xl sm:px-32 lg:mt-2 lg:text-7xl xl:text-5xl">For All Our Stakeholders</span>
          <button class="uppercase tracking-widest bg-[#313329] px-14 py-4 rounded-lg  text-[#cbff00] text-3xl font-bold mt-8  sm:py-4 sm:mt-10 md:px-10 md:mt-12 lg:px-16 lg:py-6 xl:text-xl xl:px-12 xl: xl:py-4 lg:mt-14 ">Contact Us</button>
        </div>
      </section>
    
      <!-- Fifth Section -->
      <section class="bg-black py-10 lg:py-32">
        <div class="pl-8 sm:pl-14 flex-col flex md:px-16 xl:mx-48">
          <span class="text-white uppercase font-normal text-lg tracking-widest lg:text-2xl lg:my-6 xl:text-xl">Our Services</span>
          <span class="text-white text-4xl font-bold pt-4 sm:text-5xl lg:mb-6 lg:text-6xl xl:text-5xl"> Learn About Our Practice Areas</span>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class=" pr-4 md:pr-8 mt-10">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Business Operation</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-4 sm:mt-0 md:mt-10">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Marketing</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2 lg:mt-10">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Product Bootcamp</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Company Transformation</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Value Matrix</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Concept Design</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Idea Sketching</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Corporate Travel</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Digital Solutions</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Experience Maps</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Consulting</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
            <div class=" pr-4 md:pr-8 mt-6 sm:mt-2">
              <p class="text-[#cbff00] text-2xl font-normal xl:text-xl"  >Technology Solutions</p>
              <hr class="h-px my-6 md:my-4 bg-gray-700 border-0 ">
            </div>
          </div>
          <span class="flex items-center">
                <button class="bg-[#cbff00] text-black px-12 py-4 mt-8 text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest">Learn More ➝</button>
              </span>
        </div>
      </section>

      <!-- Sixth Section -->
      <section class="bg-[#cbff00] py-12 sm:pb-52 md:py-16 block max-w-full  lg:py-24 xl:px-36 xl:py-8 ">
        <div>
            <div class="px-12 mb-20 sm:px-28 md:px-28 md:pl-16 lg:px-20">
                <div class="flex justify-end">
                    <svg class="u-svg-content fill-white w-4/12 md:w-3/12 absolute lg:mt-2 lg:mr-20 xl:w-2/12 xl:mr-60 xl:pr-10" viewBox="0 0 160 160" x="0px" y="0px" id="svg-e858" style="enable-background:new 0 0 160 160;"><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	                s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
                </div>
                <div class="">
                    <img class="flex relative mt-12 sm:mt-16 rounded-full xl:w-7/12 xl:ml-40" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/two-happy-men-working-together-new4.jpg" />
                </div>
                <div class="bg-white h-28 w-28 sm:w-40 sm:h-40 xl:w-44 xl:h-44 absolute rounded-full mt-[-3.9rem] sm:mt-[-9.5rem] ml-8 md:ml-2 lg:mt-[-15.5rem] xl:mt-[-10rem] xl:ml-36 lg:ml-10"></div>
            </div>
            <div class="flex md:grid-cols-3 grid md:mt[-20rem] ">
                <div class="flex justify-center mb-8 ml-10 sm:ml-32 sm:absolute sm:mt-[33rem] md:mt-[16rem] lg:mt-24 xl:mt-8 md:relative md:col-span-1">
                    <svg class="u-svg-content fill-white w-2/12 sm:w-5/12 md:w-9/12 lg:w-6/12 xl:ml-36 xl:px-4"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve"  viewBox="0 0 160 160" x="0px" y="0px" id="svg-a0bf" style="enable-background:new 0 0 160 160;"><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	                  s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
                </div>
                <div class="bg-[#1a1a1a] text-white mx-8 py-10 flex flex-col justify-end sm:mx-16 sm:ml-40 sm:py-12 md:col-span-2 md:relative md:ml-[70px] md:mt-[-260px] md:mb-[110px] xl:mb-[40px] block md:w-10/12 lg:w-9/12 lg:py-20 xl:py-8 xl:w-7/12" >
                    <p class="text-2xl font-bold pl-6 sm:pl-8 pt-2 sm:text-4xl sm:pr-20 sm:leading-relaxed md:text-6xl md:pr-16 md:pb-6 lg:pr-10 xl:text-4xl xl:pr-16 xl:pb-2">How To Get Consulting Clients</p>
                    <p class="text-lg  pl-6 sm:pl-8 pr-12 sm:pr-8 mt-8 sm:text-xl md:pr-20 md:text-2xl lg:pr-20 xl:text-lg xl:pr-24">Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
                    <span class="mt-4 text-white flex text-lg pt-2 pl-6 sm:pl-8 sm:text-2xl md:text-xl md:mt-8 xl:mt-2 xl:text-base">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
                    <span class="flex pl-6 sm:justify-start sm:pl-8 items-center sm:mt-4">
                    <button class="bg-[#cbff00] text-black px-14 py-4 xl:px-10 xl:py-3 xl:mt-4 xl:text-lg mt-8 text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest">Learn More</button>
                    </span>
                </div>  
            </div>
        </div>
      </section>

      <!-- seventh Section -->
    <section class="bg-black text-white py-10 px-12 sm:px-16 md:py-16 md:px-10 lg:px-24 xl:px-72 xl:py-14">
        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 " >
            <div>
            <div class="">
                <div class="bg-[#ccff00] h-24 w-24 sm:h-36 sm:w-36  md:h-28 md:w-28 lg:h-28 lg:w-28 xl:w-24 xl:h-24 rounded-full "></div>
            </div>
            <div class="mt-10 lg:pr-8">
                <p class="text-3xl font-bold sm:text-4xl lg:pr-20 xl:text-2xl">We Build Adjacent Businesses To Optimize Our Areas Of Expertise</p>
                <p class="text-xl pt-8 xl:pt-4 [word-spacing:5px] sm:text-2xl md:text-xl lg:pr-20 xl:text-base">Elit sed vulputate mi sit amet mauris. Arcu odio ut sem nulla pharetra. Nisi scelerisque eu ultrices vitae. Dapibus ultrices in iaculis nunc sed augue lacus. Laoreet non curabitur gravida arcu ac. Eget velit aliquet sagittis id consectetur purus ut. Sit amet luctus venenatis lectus magna fringilla urna. Dolor morbi non arcu risus quis varius quam. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
                <span class="mt-4  text-white flex text-lg pt-2 xl:pt-0 sm:text-2xl xl:text-base">Images From <p class="underline underline-offset-8 ml-1"> Freepik</p></span>
                <span class="flex justify-center sm:justify-start items-center">
                <button class="bg-[#cbff00] text-black px-10 py-4 xl:px-8 xl:text-base xl:py-3 sm:py-6  mt-8 sm:mt-12 text-2xl rounded-lg font-bold hover:bg-white hover:text-black uppercase tracking-widest">Learn More ➝</button>
                </span>
            </div>
        </div>
            <div class="flex flex-col justify-end xl:justify-self-start xl:justify-center justify-self-center xl:mt-40">
                <div class="">
                    <img class="flex relative mt-24 md:mt-4 rounded-full  w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[300px] xl:h-[300px] object-cover" src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/rtrr9.jpg" />
                </div>
                <div class="flex justify-end pt-10 md:pt-0">
                <div class="bg-[#ccff00] h-24 w-24 sm:w-36 sm:h-36 md:mt-28 md:w-28 md:h-28 xl:w-24 xl:h-24 xl:mt-16  rounded-full justify-end flex"></div>
            </div>
        </div>
            </div>
        </div>
      </section>

      <!-- Eightth Section -->
    <section class="bg-[#e5e5e5] py-8 block">
        <div>
        <div class="flex flex-col text-center justify-center px-8 py-8">
            <span class="text-3xl font-bold"> Testimonials</span>
            <p class="text-lg pt-4 font-normal sm:px-10 md:px-60">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
        </div>
            <div class="grid sm:mx-14 md:mx-32 lg:mx-24 lg:grid-cols-2 xl:mx-64">
                <div class="bg-white mx-6 px-4 py-6 md:px-8 ">
                    <div class="flex">
                    <div class="flex">
                        <span class="relative text-[#ccff00] text-9xl ">❝</span>
                        <p class="text-2xl font-bold absolute mt-8 ml-6 xl:text-xl">Celia Almeda</p>
                    </div>
                    <div class="flex justify-end w-full">
                        <img class=" rounded-full w-[80px] h-[80px] object-cover mt-4" src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/a0bcd585bf555805ae3be2fc/pexels-mark-john-hilario-12771773.jpg" />
                    </div>
                    </div>
                    <p class="text-md font-medium pr-0 text-[#111111] leading-loose px-1">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
                </div>
                <div class="bg-white mx-6 px-4 py-6 mt-4 md:px-8 lg:mt-0 lg:py-10">
                    <div class="flex">
                    <div class="flex">
                        <span class="relative text-[#ccff00] text-9xl">❝</span>
                        <p class="text-2xl font-bold absolute mt-8 ml-6 xl:text-xl">Frank Kinney</p>
                    </div>
                    <div class="flex justify-end w-full">
                        <img class="  rounded-full w-[80px] h-[80px] object-cover mt-4" src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2f248f404ef3524196fe32c4/pexels-jeandaniel-francoeur-12842811.jpg" />
                    </div>
                    </div>
                    <p class="text-md font-medium pr-0 text-[#111111] leading-loose px-1">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
                </div>
            </div>
        </div>
      </section>

        <HelloWorld />
    </template>
    
    
    
    
    
    
    
    
    
    
    
    