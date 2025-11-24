import React from 'react'
import './LandingPage.css'
import campusLifeImage from '../../assets/campus-life.jpg'
import schoolProgramImage from '../../assets/school-program.jpg'
import schoolSubjectsImage from '../../assets/school-subjects.jpg'
import currentStudents from '../../assets/currentStudents.jpg'
import alumni from '../../assets/alumni.jpg'
import staff from '../../assets/staff.jpg'



const LandingPage = () => {
    return (
        <div>
            <main className='grid gap-10'>
                <section >
                    <div className='landing-page-hero flex items-end justify-end'>
                        <h1 className='text-white text-7xl font-bold relative z-10 text-right '>Accra Creative Institute</h1>
                    </div>
                </section>

                <section className='about-us-container flex flex-col gap-16 items-center'>
                    <h2 className='text-gray-600 text-7xl text-left font-bold'>ABOUT US</h2>
                    <div className='about-us-texts grid grid-cols-1 gap-16'>
                        <div className='about-us max-w-xl'>
                            <p>At Accra Creative Institute, we believe every artist carries a unique vision waiting to blossom. Nestled in the vibrant cultural tapestry of Ghana's capital, our school stands as a beacon for aspiring creators, designers, and visual storytellers.Where the rhythmic pulse of the city meets timeless artistic traditions, we've crafted a sanctuary for innovation. Our studios buzz with the energy of young painters capturing Accra's colorful markets, digital artists reimagining African futures, and sculptors shaping narratives in wood and clay.</p>
                        </div>
                        <div className="about-us-list">
                            <h3 className='text-xl font-semibold'>Why CHOOSE US</h3>
                            <ul className='space-y-2'>
                                <li>Learn from master artists and industry professionals</li>
                                <li>State-of-the-art facilities with traditional and digital studios</li>
                                <li>Curriculum blending global techniques with rich Ghanaian heritage</li>
                                <li>Located in the creative epicenter of West Africa</li>
                                <li>Strong connections to Accra's thriving art galleries and design studios</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='card-list-container'>
                    <div className='mini-list'>
                        <img src={schoolProgramImage} alt="card-image" />
                        <div>
                            <h3 className='text-2xl'>Career Pathways</h3>
                            <p className='text-xl'>Preparation for diverse creative careers: gallery artist, art director, illustrator, curator, art educator, and creative entrepreneur.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div className='mini-list'>
                        <img src={campusLifeImage} alt="card-image" />
                        <div>
                            <h3 className='text-2xl'>Vibrant Campus Life</h3>
                            <p className='text-xl'>Regular art events, guest speakers, cultural festivals, and creative gatherings that keep inspiration flowing.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div className='mini-list'>
                        <img src={schoolSubjectsImage} alt="card-image" />
                        <div>
                            <h3 className='text-2xl'>Flexible Programs</h3>
                            <p className='text-xl'>Full-time, part-time, and workshop-based learning options to fit your schedule and artistic goals.</p>
                            <button>More</button>
                        </div>
                    </div>
                </section>

                <section className='programs-container'>
                    <div className='bachelorOfArt-container'>
                        <p>Bachelor of Fine Art</p>
                    </div>
                    <div className='masterOfArt-container'>
                        <p>Master of Fine Art</p>
                    </div>
                    <div className='midArt-container'>
                    </div>
                    <div className='doctorOfArt-container'>
                        <p>Doctor of Fine Art</p>
                    </div>
                    <div className='coreSubject-cotainer'>
                        <p>Core Subjects</p>
                    </div>
                </section>

                <section className='people-container flex flex-col gap-16 items-center'>
                    <h2 className='text-gray-600 text-7xl text-left font-bold'>PEOPLE</h2>
                    <div className='people-info'>
                        <p>A vibrant mix of barefoot painters and digital innovators who believe studios are for creating, not just learning. Our students range from 18-year-old fresh high school graduates to 50-year-old accountants finally pursuing their passion for sculpture.</p> <p>The faculty are all working artists—you'll find their pieces in Accra's top galleries and international exhibitions. They teach between studio sessions and exhibition openings, bringing real-world energy into every classroom. Our visiting artists fly in from Lagos, London, and Brooklyn, leaving behind techniques and perspectives that linger in the halls long after they've gone. </p> <p>The administration team are creative problem-solvers who understand that artistic breakthroughs don't follow 9-to-5 schedules. They'll help you navigate bureaucracy while protecting your creative flow.</p> <p>International students bring global perspectives that blend with local traditions in unexpected ways. You might find a Japanese calligrapher collaborating with a Ghanaian textile artist on entirely new forms.</p>  <p>Local market vendors near campus know our students by name and artistic medium. "The clay people" get different treatment from "the digital kids" when bargaining for materials.</p> <p>Graduates who return to visit now run galleries in London, teach in New York, or have their work collected by international museums—but they still critique student work with the same passion they had as freshmen. Everyone shares coffee from the same courtyard vendor, debates art theory over jollof rice, and believes Africa's creative renaissance is just beginning. The energy feels like Accra's Makola Market—chaotic, colorful, and endlessly inspiring.</p>
                    </div>
                </section>

                <section className='card-list-container'>
                    <div className='mini-list current-students'>
                        <img src={currentStudents} alt="card-image" />
                        <div>
                            <h3 className='text-2xl'>Current Students</h3>
                            <p className='text-xl'> From digital natives coding interactive installations to traditional painters preserving cultural heritage. Diverse backgrounds united by boundless creativity and the courage to redefine African art.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div className='mini-list'>
                        <img src={alumni} alt="card-image" />
                        <div>
                            <h3 className='text-2xl'>Alumni</h3>
                            <p className='text-xl'>Working artists, gallery exhibitors, and industry innovators who bridge the gap between studio practice and professional success. They've walked the path you're beginning.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div className='mini-list'>
                        <img src={staff} alt="card-image" />
                        <div>
                            <h3 className='text-2xl'>Staff</h3>
                            <p className='text-xl'>Your support system handling logistics so you can focus on creating. They believe paperwork shouldn't stifle creativity.</p>
                            <button>More</button>
                        </div>
                    </div>
                </section>

                <section className='newsletter-container'>
                    <h3 className='text-3xl font-semibold'>ACT News</h3>
                    <p className='text-xl'>Keep updating by joining our mailing list. Please enter your email to select the newsletters you would like to subscribe to:</p>
                    <form action="submit">
                        <div className='grid grid-cols-1 gap-8'>
                            <input type="text" placeholder='name' />
                            <input type="text" placeholder='Email' />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </section>
                <section className='footer-container'>
                    <div className='final-image'>

                    </div>
                    <div className='footer'>
                        <div>
                            <p>Main Campus:</p>
                            <p>47 Nii Ogbamey Street, Osu</p>
                            <p>Accra, Ghana</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Arts District Location:</p>
                            <p>Kempinski Hotel Area, Liberation Link</p>
                            <p>Airport Residential Area</p>
                            <p>Accra, Ghana</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LandingPage
