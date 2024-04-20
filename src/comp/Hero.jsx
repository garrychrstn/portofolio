import me from '../assets/img/me.png'

const Hero = () => {
    return (
        <div class='hero'>
            <h1>
                <img src={me} height='250'/>
            </h1>
            <div class='description'>
                <p>Welcome to my space, I am </p>
                <h1>Garry Christian Whardaya</h1>
                <p>As a versatile web developer, I excel in utilizing frameworks such as Django, Laravel, and React to create robust web applications. I have extensive experience working with databases like SQLite, MySQL, and PostgreSQL for efficient data management. With proficiency in Python, JavaScript, and PHP, I can develop dynamic solutions tailored to your needs. Specializing in database design and maintenance, I build efficient and scalable databases from the ground up. My diverse skill set allows me to tackle complex projects seamlessly, delivering high-quality results.</p>
            </div>
        </div>
     );
}
 
export default Hero;
