import './landingPageStyles.css';
import BrandLogo from '../assets/logo4.png';
import GetGraduated from '../assets/GetGraduated.svg';


export default function LandingScreen(){
    return (
        <div>
            <header id='landingPageHeader'>
                <img src={BrandLogo} alt="logo"/>
                    <a href="/login" class="pre-order">Login</a>
            </header>

            <section class="container">
                <div class="info__section">
                    <h1 class="main__title">Want to go for higher studies after undergrad</h1>
                    <p class="main__info">Get help from thousands of aspirants just like you!
                        Discover courses & universities abroad and connect with students studying there!</p>
                    <div class="date__info">
                        <a href="/signup" class="pre-order__org">Get Started</a>
                    </div>
                </div>
                <div>
                    <img height={315} width={625} src={GetGraduated}/>
                </div>
            </section>

            <section class="container__stats">
                <article class="item">
                    <h2 class="article__title">Preparation material</h2>
                    <p class="article__info">Students can get materials of various entrance exam such as GMAT,GRE,CAT,GATE</p>
                </article>
                <article class="item">
                    <h2 class="article__title">University suggestion system</h2>
                    <p class="article__info">Students can get suggestion on universities based on their Profile</p>
                </article>
                <article class="item">
                    <h2 class="article__title">Suggestion/ tip system</h2>
                    <p class="article__info">Student can interact and get various suggestion and tip from their alumni who got their dream universities</p>
                </article>
            </section>

            <footer>
                <p class="footer__info">Higher Studies system 2021 <span>| All Rights reserved</span></p>
            </footer>
        </div>
    );
}