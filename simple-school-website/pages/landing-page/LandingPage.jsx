import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <main>
                <section className='landing-page-hero'>
                    <h1>Accra Creative Institute</h1>
                </section>
                <section className='about-us-container'>
                    <div className='about-us'>
                        <h2>About Us</h2>
                        <p>At Accra Creative Institute, we believe every artist carries a unique vision waiting to blossom. Nestled in the vibrant cultural tapestry of Ghana's capital, our school stands as a beacon for aspiring creators, designers, and visual storytellers.Where the rhythmic pulse of the city meets timeless artistic traditions, we've crafted a sanctuary for innovation. Our studios buzz with the energy of young painters capturing Accra's colorful markets, digital artists reimagining African futures, and sculptors shaping narratives in wood and clay.</p>
                    </div>
                    <div className="about-us-list">
                        <h3>why choose us</h3>
                        <ul>
                            <li>Learn from master artists and industry professionals</li>
                            <li>State-of-the-art facilities with traditional and digital studios</li>
                            <li>Curriculum blending global techniques with rich Ghanaian heritage</li>
                            <li>Located in the creative epicenter of West Africa</li>
                            <li>Strong connections to Accra's thriving art galleries and design studios</li>
                        </ul>
                    </div>
                </section>
                <section className='card-list-container'>
                    <div>
                        <img src="" alt="card-image" />
                        <div>
                            <h3>Career Pathways</h3>
                            <p>Preparation for diverse creative careers: gallery artist, art director, illustrator, curator, art educator, and creative entrepreneur.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="card-image" />
                        <div>
                            <h3>Vibrant Campus Life</h3>
                            <p>Regular art events, guest speakers, cultural festivals, and creative gatherings that keep inspiration flowing.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="card-image" />
                        <div>
                            <h3>Flexible Programs</h3>
                            <p>Full-time, part-time, and workshop-based learning options to fit your schedule and artistic goals.</p>
                            <button>More</button>
                        </div>
                    </div>
                </section>
                <section className='programs-container'>
                    <div>
                        <p>Bachelor of Fine Art</p>
                    </div>
                    <div>
                        <p>Master of Fine Art</p>
                    </div>
                    <div>
                        //will contain only one image
                    </div>
                    <div>
                        <p>Doctor of Fine Art</p>
                    </div>
                    <div>
                        <p>Core Subjects</p>
                    </div>
                </section>
                <section className='people-container'>
                    <h2>People</h2>
                    <p>A vibrant mix of barefoot painters and digital innovators who believe studios are for creating, not just learning. Our students range from 18-year-old fresh high school graduates to 50-year-old accountants finally pursuing their passion for sculpture. The faculty are all working artists—you'll find their pieces in Accra's top galleries and international exhibitions. They teach between studio sessions and exhibition openings, bringing real-world energy into every classroom. Our visiting artists fly in from Lagos, London, and Brooklyn, leaving behind techniques and perspectives that linger in the halls long after they've gone. The security guards know art terminology better than some curators—they've absorbed years of student critiques and exhibition preparations. The administration team are creative problem-solvers who understand that artistic breakthroughs don't follow 9-to-5 schedules. They'll help you navigate bureaucracy while protecting your creative flow. International students bring global perspectives that blend with local traditions in unexpected ways. You might find a Japanese calligrapher collaborating with a Ghanaian textile artist on entirely new forms. Local market vendors near campus know our students by name and artistic medium. "The clay people" get different treatment from "the digital kids" when bargaining for materials. Graduates who return to visit now run galleries in London, teach in New York, or have their work collected by international museums—but they still critique student work with the same passion they had as freshmen. Everyone shares coffee from the same courtyard vendor, debates art theory over jollof rice, and believes Africa's creative renaissance is just beginning. The energy feels like Accra's Makola Market—chaotic, colorful, and endlessly inspiring.</p>                    <p></p>
                </section>
                <section className='card-list-container'>
                    <div>
                        <img src="" alt="card-image" />
                        <div>
                            <h3>Current Students</h3>
                            <p> From digital natives coding interactive installations to traditional painters preserving cultural heritage. Diverse backgrounds united by boundless creativity and the courage to redefine African art.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="card-image" />
                        <div>
                            <h3>Alumni</h3>
                            <p>Working artists, gallery exhibitors, and industry innovators who bridge the gap between studio practice and professional success. They've walked the path you're beginning.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="card-image" />
                        <div>
                            <h3>Staff</h3>
                            <p>Your support system handling logistics so you can focus on creating. They believe paperwork shouldn't stifle creativity.</p>
                            <button>More</button>
                        </div>
                    </div>
                </section>
                <section className='newsletter-container'>
                    <h3>ACT News</h3>
                    <p>Keep updating by joining our mailing list. Please enter your email to select the newsletters you would like to subscribe to:</p>
                    <form action="submit">
                        <input type="text" placeholder='name' />
                        <input type="text" placeholder='Email' />
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
