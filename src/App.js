import React, { useState } from 'react';
import './App.css';

import movie1Img from './assets/movie1.jpg';
import movie2Img from './assets/movie2.jpg';
import movie3Img from './assets/movie3.jpg';
import movie4Img from './assets/movie4.jpg';
import movie5Img from './assets/movie5.jpg';
import movie6Img from './assets/movie6.jpg';
import upcomingImg from "./assets/upcoming3.webp";
import notificationImg from "./assets/notification.png";
import helpImg from './assets/help.png';
import profileImg from './assets/profile.jpg';
import menuImg from './assets/menu.png';

import adventureImg from './assets/adventure-upcoming.jpg';
import actionImg from './assets/action-upcoming.jpg';
import dramaImg from './assets/drama-upcoming1.jpg';
import comedyImg from './assets/comedy-upcoming.jpg';
import thrillerImg from './assets/thriller-upcoming.jpg';
import webseriesImg from './assets/webseries-upcoming.jpg';
import sciencefictionImg from './assets/sciencefiction-upcoming.jpg';
import historicalImg from './assets/historical-upcoming.jpg';
import crimeImg from './assets/crime-upcoming.jpg';
import romanticImg from './assets/romantic-upcoming.jpg';

const translations = {
  en: {
    categories: "Categories",
    language: "Language",
    time: "Time",
    morning: "Morning",
    evening: "Evening",
    upcomingMovie: "Coming Soon",
    bookNow: "Book Now",
    playTrailer: "Play Trailer",
    buyTickets: "Buy Tickets",
    screen: "Screen",
    price: "Price",
    applyFilters: "Apply Filters",
  },
  hi: {
    categories: "श्रेणियाँ",
    language: "भाषा",
    time: "समय",
    morning: "सुबह",
    evening: "शाम",
    upcomingMovie:"जल्द आ रही फ़िल्म",
    bookNow: "अभी बुक करें",
    playTrailer: "ट्रेलर चलाएँ",
    buyTickets: "टिकट खरीदें",
    screen: "स्क्रीन",
    price: "कीमत",
    applyFilters: "फ़िल्टर लागू करें",
  },
  es: {
    categories: "Categorías",
    language: "Idioma",
    time: "Hora",
    morning: "Mañana",
    evening: "Noche",
    upcomingMovie: "Próximamente",
    bookNow: "Reservar Ahora",
    playTrailer: "Reproducir Tráiler",
    buyTickets: "Comprar Boletos",
    screen: "Pantalla",
    price: "Precio",
    applyFilters: "Aplicar Filtros",
  }
};

function Sidebar({ setCategory, setTimeOfDay, setLanguage }) {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeOfDay(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);  // Set the selected language
  };

  return (
    <div className="sidebar">
      <form>
        <div className="sidebar-groups">
          <h3 className="sg-title">{translations.en.categories}</h3>
          <input type="radio" id="adventure" name="category" value="Adventure" onChange={handleCategoryChange} />
          <label htmlFor="adventure">Adventure</label><br />
          <input type="radio" id="action" name="category" value="Action" onChange={handleCategoryChange} />
          <label htmlFor="action">Action</label><br />
          <input type="radio" id="comedy" name="category" value="Comedy" onChange={handleCategoryChange} />
          <label htmlFor="comedy">Comedy</label><br />
          <input type="radio" id="drama" name="category" value="Drama" onChange={handleCategoryChange} />
          <label htmlFor="comedy">Drama</label><br />
          <input type="radio" id="thriller" name="category" value="Thriller" onChange={handleCategoryChange} />
          <label htmlFor="thriller">Thriller</label><br />
          <input type="radio" id="webseries" name="category" value="Web Series" onChange={handleCategoryChange} />
          <label htmlFor="series">Web Series</label><br />
          <input type="radio" id="sciencefiction" name="category" value="Science Fiction" onChange={handleCategoryChange} />
          <label htmlFor="sciencefiction">Science Fiction</label><br />
          <input type="radio" id="historical" name="category" value="Historical" onChange={handleCategoryChange} />
          <label htmlFor="historical">Historical</label><br />
          <input type="radio" id="crime" name="category" value="Crime" onChange={handleCategoryChange} />
          <label htmlFor="crime">Crime</label><br />
          <input type="radio" id="romantic" name="category" value="Romantic" onChange={handleCategoryChange} />
          <label htmlFor="romantic">Romantic</label><br />

        </div>

        <div className="sidebar-groups">
          <h3 className="sg-title">{translations.en.language}</h3>
          <input type="radio" id="english" name="language" value="en" onChange={handleLanguageChange} />
          <label htmlFor="english">English</label><br />
          <input type="radio" id="hindi" name="language" value="hi" onChange={handleLanguageChange} />
          <label htmlFor="hindi">Hindi</label><br />
          <input type="radio" id="spanish" name="language" value="es" onChange={handleLanguageChange} />
          <label htmlFor="spanish">Spanish</label><br />
        </div>

        <div className="sidebar-groups">
          <h3 className="sg-title">{translations.en.time}</h3>
          <input type="radio" id="morning" name="time" value="morning" onChange={handleTimeChange} />
          <label htmlFor="morning">{translations.en.morning}</label><br />
          <input type="radio" id="evening" name="time" value="evening" onChange={handleTimeChange} />
          <label htmlFor="evening">{translations.en.evening}</label><br />
        </div>

        <div className="sidebar-groups">
          <a href="#" className="btn-l btn">{translations.en.applyFilters}</a>
        </div>
      </form>
    </div>
  );
}

function UpcomingMovie({ category, language }) {
  const categoryImages = {
    Adventure: adventureImg,
    Action: actionImg,
    Comedy: comedyImg,
    Drama: dramaImg,
    Crime: crimeImg,
    Thriller: thrillerImg,
    Historical : historicalImg,
    'Science Fiction': sciencefictionImg,
    Romantic : romanticImg,
    'Web Series' : webseriesImg,

  };

  const upcomingImage = categoryImages[category] || upcomingImg;
  const translatedUpcomingMovie = translations[language].upcomingMovie;

  return (
    <div className="upcoming-img-box">
      <img src={upcomingImage} alt="Upcoming Movie" />
      <p className="upcoming-title">{category ? `${category} ${translatedUpcomingMovie}` : translatedUpcomingMovie}</p>
      <div className="buttons">
        <a href="#" className="btn">{translations[language].bookNow}</a>
        <a href="#" className="btn-alt btn">{translations[language].playTrailer}</a>
      </div>
    </div>
  );
}

function MovieCard({ movie, language }) {
  return (
    <div className="current-movie">
      <div className="cm-img-box"><img src={movie.imgSrc} alt={movie.title} /></div>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="screen-name">{translations[language].screen} : {movie.screen}</p>
      <div className="booking">
        <h2 className="price">{translations[language].price} {movie.price}</h2>
        <a href="#" className="btn">{translations[language].buyTickets}</a>
      </div>
    </div>
  );
}

function MainContainer({ timeOfDay, category, language }) {
  const morningMovies = [
    { imgSrc: movie1Img, title: "Animal", screen: "Platinum", price: "$50" },
    { imgSrc: movie2Img, title: "Money Heist", screen: "Golden", price: "$25" },
    { imgSrc: movie3Img, title: "Black Adam", screen: "Silver", price: "$20" },
  ];

  const eveningMovies = [
    { imgSrc: movie4Img, title: "The Dark Knight", screen: "Platinum", price: "$40" },
    { imgSrc: movie5Img, title: "Inception", screen: "Golden", price: "$20" },
    { imgSrc: movie6Img, title: "The Maze Runner", screen: "Silver", price: "$10" },
  ];

  const moviesToDisplay = timeOfDay === "morning" ? morningMovies : eveningMovies;

  return (
    <div className="movies-container">
      <UpcomingMovie category={category} language={language} />
      <div className="current-movies">
        {moviesToDisplay.map((movie, index) => (
          <MovieCard key={index} movie={movie} language={language} />
        ))}
      </div>
    </div>
  );
}

function TopBar() {
  const [showNewPage, setShowNewPage] = useState(false); 
  const [showMoviesPage, setShowMoviesPage] = useState(false); 
  const [name, setName] = useState(""); 
  const [ticketCount, setTicketCount] = useState(1); 
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [accountNumber, setAccountNumber] = useState(""); 
  const [paypalEmail, setPaypalEmail] = useState(""); 
  const [isBooked, setIsBooked] = useState(false); 
  const [shownotification, setShownotification] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showseriesPage, setShowseriesPage] = useState(false);
  const [showdramaPage, setShowdramaPage] = useState(false);
  const [showcartoonPage, setShowcartoonPage] = useState(false);
  const [showkidsPage, setShowkidsPage] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); 
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [showHelpMessage, setShowHelpMessage] = useState(false); 
  const [istvshowVisible, setIstvshowVisible] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermseries, setSearchTermseries] = useState("");
  const [searchTermdrama, setSearchTermdrama] = useState("");
  const [searchTermkids, setSearchTermkids] = useState("");
  const [searchTermcartoon, setSearchTermcartoon] = useState("");

  const handleTicketClick = () => {
    setShowNewPage(true); 
    setShowMoviesPage(false); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };

  const handleMoviesClick = () => {
    setShowMoviesPage(true); 
    setShowNewPage(false); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };
  const handleseriesClick = () => {
    setShowseriesPage(true); 
    setShowNewPage(false); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };
  const handleBackClick = () => {
    setShowNewPage(false); 
    setShowMoviesPage(false); 
    setShowseriesPage(false);
    setShowdramaPage(false); 
    setShowcartoonPage(false);  
    setShowkidsPage(false); 
};

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setIsBooked(true); 
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleTicketCountChange = (e) => {
    setTicketCount(e.target.value); 
  };
  const handlenotificationClick = () => {
    setShownotification(true); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };
  const handleEventClick = () => {
    setShowEvent(true); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };

  const handleClosenotification = () => {
    setShownotification(false); 
    setShowEvent(false);
  };

  const handleHelpClick = () => {
    setShowHelpMessage(true); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };

  const handleCloseHelpMessage = () => {
    setShowHelpMessage(false); 
    setIsProfileVisible(false);
    setIsMenuVisible(false);
    setIstvshowVisible(false);
  };
  
  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
    setIsMenuVisible(false); 
    setIstvshowVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); 
    setIsProfileVisible(false); 
    setIstvshowVisible(false);
  };
  
  const toggleTvshow = () => {
    setIstvshowVisible(!istvshowVisible); 
    setIsProfileVisible(false); 
    setIsMenuVisible(false); 
  };

  const handledramaClick = () => {
    setShowdramaPage(true); 
    setShowNewPage(false); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };
 
  const handlecartoonClick = () => {
    setShowcartoonPage(true); 
    setShowNewPage(false); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };

  const handlekidsClick = () => {
    setShowkidsPage(true); 
    setShowNewPage(false); 
    setIsMenuVisible(false);
    setIsProfileVisible(false);
    setIstvshowVisible(false);
  };

    const [movies] = useState([ 
        { title: "Animal", genre: "Action, Drama", date: "01-Dec-2024", day: "Monday", showtime: "10:00 AM", description: "A gripping story of a man's journey through revenge and redemption." },
        { title: "Black Adam", genre: "Action, Fantasy", date: "02-Dec-2024", day: "Tuesday", showtime: "1:00 PM", description: "The DC anti-hero's origin story filled with power and vengeance." },
        { title: "Ishq Murshad", genre: "Romance, Drama", date: "03-Dec-2024", day: "Wednesday", showtime: "4:00 PM", description: "A heartfelt tale of love, sacrifice, and dreams against odds." },
        { title: "Carry on Jatta 3", genre: "Comedy", date: "04-Dec-2024", day: "Thursday", showtime: "7:00 PM", description: "A laughter riot as characters navigate love, family, and misunderstandings." },
        { title: "Avengers: Endgame", genre: "Action, Sci-Fi", date: "05-Dec-2024", day: "Friday", showtime: "10:00 PM", description: "The epic conclusion to the Infinity Saga with Earth's mightiest heroes." },
        { title: "Frozen 2", genre: "Animation, Adventure", date: "06-Dec-2024", day: "Saturday", showtime: "12:00 AM", description: "Join Elsa and Anna as they uncover secrets about their family's past." },
        { title: "Jawan", genre: "Thriller, Crime", date: "07-Dec-2024", day: "Sunday", showtime: "2:00 AM", description: "An action-packed journey of a vigilante fighting for justice." },
        { title: "Kantara", genre: "Mystery, Action", date: "02-Dec-2024", day: "Tuesday", showtime: "6:00 AM", description: "A tale steeped in tradition, folklore, and the clash of modernity." },
        { title: "Dune", genre: "Sci-Fi, Adventure", date: "03-Dec-2024", day: "Wednesday", showtime: "8:00 AM", description: "An epic sci-fi journey exploring a battle over the desert planet Arrakis." },
        { title: "Interstellar", genre: "Sci-Fi, Drama", date: "07-Dec-2024", day: "Sunday", showtime: "3:30 PM", description: "A breathtaking space odyssey exploring love, survival, and time." },
        { title: "The Notebook", genre: "Romance, Drama", date: "01-Dec-2024", day: "Monday", showtime: "5:00 PM", description: "A timeless romantic story of enduring love against all odds." },
        { title: "The Conjuring", genre: "Horror, Thriller", date: "03-Dec-2024", day: "Wednesday", showtime: "7:30 PM", description: "A terrifying tale of paranormal investigators tackling a haunted case." },
        { title: "La La Land", genre: "Romance, Musical", date: "07-Dec-2024", day: "Sunday", showtime: "12:00 AM", description: "An enchanting story of dreams, love, and music in Los Angeles." },
        { title: "3 Idiots", genre: "Comedy, Drama", date: "06-Dec-2024", day: "Saturday", showtime: "1:30 AM", description: "A hilarious and heartwarming journey of three friends in college." },
        { title: "Inception", genre: "Sci-Fi, Thriller", date: "07-Dec-2024", day: "Sunday", showtime: "3:00 AM", description: "A mind-bending story about dreams within dreams and corporate espionage." },
      ]);

      const filteredMovies = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const [series] = useState([ 
        { title: "Money Heist", genre: "Crime, Thriller", date: "04-Dec-2024", day: "Thursday", showtime: "11:00 AM", description: "A group of robbers executes a brilliant heist under the guidance of 'The Professor'." },
        { title: "Friends", genre: "Comedy", date: "05-Dec-2024", day: "Friday", showtime: "1:00 PM", description: "The classic sitcom about six friends navigating life and relationships." },
        { title: "Stranger Things", genre: "Sci-Fi, Thriller", date: "06-Dec-2024", day: "Saturday", showtime: "9:00 PM", description: "A thrilling battle between good and evil in the mysterious 'Upside Down'." },
        { title: "Breaking Bad", genre: "Drama, Crime", date: "07-Dec-2024", day: "Sunday", showtime: "10:30 PM", description: "The gripping story of a chemistry teacher turned drug kingpin." },
        { title: "The Crown", genre: "Historical, Drama", date: "08-Dec-2024", day: "Monday", showtime: "2:00 PM", description: "A dramatized account of Queen Elizabeth II's reign and the British royal family." },
        { title: "The Witcher", genre: "Fantasy, Action", date: "09-Dec-2024", day: "Tuesday", showtime: "4:00 PM", description: "The journey of Geralt of Rivia, a monster hunter navigating a turbulent world." },
        { title: "The Mandalorian", genre: "Sci-Fi, Adventure", date: "10-Dec-2024", day: "Wednesday", showtime: "6:00 PM", description: "The adventures of a bounty hunter in the Star Wars universe." },
        { title: "Squid Game", genre: "Thriller, Drama", date: "11-Dec-2024", day: "Thursday", showtime: "8:00 PM", description: "Contestants risk their lives in a deadly game to win a fortune." },
        { title: "House of the Dragon", genre: "Fantasy, Drama", date: "12-Dec-2024", day: "Friday", showtime: "10:00 PM", description: "The story of House Targaryen set hundreds of years before Game of Thrones." },
        { title: "The Boys", genre: "Action, Dark Comedy", date: "13-Dec-2024", day: "Saturday", showtime: "12:00 PM", description: "A gritty take on superheroes and the dark truths behind their power." },
        { title: "Peaky Blinders", genre: "Drama, Crime", date: "14-Dec-2024", day: "Sunday", showtime: "3:00 PM", description: "The rise of the Shelby crime family in early 20th-century England." },
        { title: "Loki", genre: "Fantasy, Adventure", date: "15-Dec-2024", day: "Monday", showtime: "5:00 PM", description: "The God of Mischief embarks on a timeline-bending journey." },
        { title: "Dark", genre: "Sci-Fi, Mystery", date: "16-Dec-2024", day: "Tuesday", showtime: "7:00 PM", description: "A mind-bending saga of time travel, family secrets, and fate." },
        { title: "The Office", genre: "Comedy", date: "17-Dec-2024", day: "Wednesday", showtime: "9:00 PM", description: "A hilarious look at the daily lives of office employees in Scranton, PA." },
      ]);
      
    const filteredseries =series.filter(
        (series) =>
            series.title.toLowerCase().includes(searchTermseries.toLowerCase()) ||
            series.genre.toLowerCase().includes(searchTermseries.toLowerCase())
        );

    const [drama] = useState([ 
        { title: "Humsafar", genre: "Romance, Drama", date: "01-Dec-2024", day: "Monday", showtime: "10:00 PM", description: "A beautiful love story about a couple facing obstacles in their relationship." },
        { title: "Zindagi Gulzar Hai", genre: "Romance, Drama", date: "02-Dec-2024", day: "Tuesday", showtime: "11:00 PM", description: "A tale of love, class divide, and the journey of self-discovery." },
        { title: "Meri Zaat Zarra-e-Benishan", genre: "Drama, Mystery", date: "03-Dec-2024", day: "Wednesday", showtime: "9:00 PM", description: "A gripping story of betrayal, revenge, and the pursuit of truth." },
        { title: "Alif", genre: "Drama, Spiritual", date: "04-Dec-2024", day: "Thursday", showtime: "8:00 PM", description: "A profound tale about love, spirituality, and the search for one's true calling." },
        { title: "Dastaan", genre: "Drama, War", date: "05-Dec-2024", day: "Friday", showtime: "10:00 PM", description: "A heartbreaking story set against the backdrop of partition in India and Pakistan." },
        { title: "Khaani", genre: "Drama, Thriller", date: "06-Dec-2024", day: "Saturday", showtime: "9:00 PM", description: "A story of love and revenge with deep social and emotional elements." },
        { title: "Dil Ruba", genre: "Romance, Drama", date: "07-Dec-2024", day: "Sunday", showtime: "10:30 PM", description: "A romantic drama that explores love, guilt, and emotional conflict." }
      ]);

    const filtereddrama =drama.filter(
        (drama) =>
            drama.title.toLowerCase().includes(searchTermdrama.toLowerCase()) ||
           drama.genre.toLowerCase().includes(searchTermdrama.toLowerCase())
        );

    const [cartoon] = useState([ 
       { title: "Tom and Jerry", genre: "Animation, Comedy", date: "01-Dec-2024", day: "Monday", showtime: "12:00 PM", description: "The timeless rivalry between a cat and mouse that leads to endless comedy." },
       { title: "SpongeBob SquarePants", genre: "Animation, Comedy", date: "02-Dec-2024", day: "Tuesday", showtime: "3:00 PM", description: "The fun and wacky adventures of SpongeBob and his friends in Bikini Bottom." },
       { title: "The Lion King", genre: "Animation, Adventure", date: "03-Dec-2024", day: "Wednesday", showtime: "2:00 PM", description: "A young lion prince overcomes hardship and learns the true meaning of leadership." },
       { title: "Frozen", genre: "Animation, Adventure", date: "04-Dec-2024", day: "Thursday", showtime: "4:00 PM", description: "Two sisters uncover the magical secrets of their kingdom in a heartwarming tale." },
       { title: "Puss in Boots", genre: "Animation, Adventure", date: "05-Dec-2024", day: "Friday", showtime: "6:00 PM", description: "A fearless and charming cat embarks on a swashbuckling adventure to save the world." },
       { title: "Shrek", genre: "Animation, Comedy", date: "06-Dec-2024", day: "Saturday", showtime: "7:00 PM", description: "An ogre embarks on an adventure to rescue a princess and learns about friendship and love." },
       { title: "Finding Nemo", genre: "Animation, Adventure", date: "07-Dec-2024", day: "Sunday", showtime: "12:30 PM", description: "A clownfish travels across the ocean to find his son, encountering colorful characters." }
      ]);

    const filteredcartoon =cartoon.filter(
        (cartoon) =>
            cartoon.title.toLowerCase().includes(searchTermcartoon.toLowerCase()) ||
        cartoon.genre.toLowerCase().includes(searchTermcartoon.toLowerCase())
        );

    const [kids] = useState([ 
        { title: "Peppa Pig", genre: "Animation, Kids", date: "01-Dec-2024", day: "Monday", showtime: "8:00 AM", description: "Join Peppa and her family as they embark on fun adventures." },
        { title: "Paw Patrol", genre: "Animation, Kids", date: "02-Dec-2024", day: "Tuesday", showtime: "10:00 AM", description: "The heroic pups work together to protect Adventure Bay." },
        { title: "Bluey", genre: "Animation, Kids", date: "03-Dec-2024", day: "Wednesday", showtime: "11:00 AM", description: "A fun, adventurous show about a lovable dog family." },
        { title: "Mickey Mouse Clubhouse", genre: "Animation, Kids", date: "04-Dec-2024", day: "Thursday", showtime: "9:30 AM", description: "Mickey and friends solve problems using teamwork and fun tools." },
        { title: "Dora the Explorer", genre: "Animation, Kids", date: "05-Dec-2024", day: "Friday", showtime: "10:30 AM", description: "Dora embarks on adventures with her monkey Boots, solving puzzles along the way." },
        { title: "Cocomelon", genre: "Animation, Kids", date: "06-Dec-2024", day: "Saturday", showtime: "12:00 PM", description: "A musical journey of learning and fun for toddlers." },
        { title: "Octonauts", genre: "Animation, Kids", date: "07-Dec-2024", day: "Sunday", showtime: "8:00 AM", description: "The Octonauts explore the oceans, helping creatures in need." }
      ]); 

    const filteredkids =kids.filter(
        (Kids) =>
            Kids.title.toLowerCase().includes(searchTermkids.toLowerCase()) ||
        Kids.genre.toLowerCase().includes(searchTermkids.toLowerCase())
        );

  return (
    <div>
      {showNewPage ? (
        <section className="ticket-page">
          <div className="left-content">
            <h2 className="title">Cinepax Pro - Tickets</h2>
            <ul className="navigation">
              <li>
                <a href="#" onClick={handleBackClick}>Back</a>
              </li>
            </ul>
          </div>
          <div className="content">
            {isBooked ? (
              <div className="booking-confirmation">
                <h1>Booking Confirmed!</h1>
                <p>Thank you, {name}. Your tickets have been successfully booked.</p>
                <p>Number of Tickets: {ticketCount}</p>
                <p>Payment Method: {paymentMethod}</p>
              </div>
            ) : (
              <div className="booking-form">
                <h1>Ticket Booking</h1>
                <form onSubmit={handleBookingSubmit}>
                  <label htmlFor="name">Your Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />

                  <label htmlFor="ticket-count">Number of Tickets:</label>
                  <input
                    type="number"
                    id="ticket-count"
                    value={ticketCount}
                    onChange={handleTicketCountChange}
                    min="1"
                    required
                  />

                  <label htmlFor="payment-method">Select Payment Method:</label>
                  <select
                    id="payment-method"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    required
                  >
                    <option value="">--Choose Payment Method--</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                  </select>

                  {(paymentMethod === 'Debit Card' || paymentMethod === 'Credit Card') && (
                    <div>
                      <label htmlFor="account-number">Enter Card Number:</label>
                      <input
                        type="text"
                        id="account-number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                  )}

                  {paymentMethod === 'PayPal' && (
                    <div>
                      <label htmlFor="paypal-email">Enter PayPal Email:</label>
                      <input
                        type="email"
                        id="paypal-email"
                        value={paypalEmail}
                        onChange={(e) => setPaypalEmail(e.target.value)}
                        placeholder="youremail@paypal.com"
                        required
                      />
                    </div>
                  )}

                  <button type="submit">Confirm Booking</button>
                </form>
              </div>
            )}
          </div>
        </section>
      ) : showMoviesPage ? (
      <section className="movies-page">
      <div className="left-content">
        <h2 className="title">Cinepax Pro - Movie Schedule</h2>
        <ul className="navigation">
          <li>
            <a href="#" onClick={handleBackClick}>Back</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for movies or genres..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h3>Available Movies</h3>
        <ul className="movie-list">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <li key={index}>
                <h4>{movie.title}</h4>
                <p><strong>Date:</strong>{movie.date}</p>
                <p><strong>Day:</strong>{movie.day}</p>
                <p><strong>Showtime:</strong> {movie.showtime}</p>
                <p><em>Genre:</em> {movie.genre}</p>
                <p>{movie.description}</p>
                <button
                  className="buy-ticket-button"
                  onClick={handleTicketClick}> Buy Ticket</button>
              </li>
            ))
          ) : (
            <p>No movies found for your search.</p>
          )}
        </ul>
      </div>
      </section>
      ):
      showseriesPage ? (
        <section className="series-page">
        <div className="left-content">
          <h2 className="title">Cinepax Pro - Web Series Schedule</h2>
          <ul className="navigation">
            <li>
              <a href="#" onClick={handleBackClick}>Back</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for web series or genres..."
            value={searchTermseries}
            onChange={(e) => setSearchTermseries(e.target.value)}
          />
          <h3>Available Web Series</h3>
          <ul className="series-list">
            {filteredseries.length > 0 ? (
              filteredseries.map((series, index) => (
                <li key={index}>
                  <h4>{series.title}</h4>
                  <p><strong>Date:</strong>{series.date}</p>
                  <p><strong>Day:</strong>{series.day}</p>
                  <p><strong>Showtime:</strong> {series.showtime}</p>
                  <p><em>Genre:</em> {series.genre}</p>
                  <p>{series.description}</p>
                  <button
                    className="buy-ticket-button"
                    onClick={handleTicketClick}> Buy Ticket</button>
                </li>
              ))
            ) : (
              <p>No series found for your search.</p>
            )}
          </ul>
        </div>
      </section>
      ):
 showdramaPage ? (
    <section className="drama-page">
    <div className="left-content">
      <h2 className="title">Cinepax Pro - Drama Schedule</h2>
      <ul className="navigation">
        <li>
          <a href="#" onClick={handleBackClick}>Back</a>
        </li>
      </ul>
    </div>
    <div className="content">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for drama or genres..."
        value={searchTermdrama}
        onChange={(e) => setSearchTermdrama(e.target.value)}
      />
      <h3>Available Drama</h3>
      <ul className="drama-list">
        {filtereddrama.length > 0 ? (
          filtereddrama.map((drama, index) => (
            <li key={index}>
              <h4>{drama.title}</h4>
              <p><strong>Date:</strong>{drama.date}</p>
              <p><strong>Day:</strong>{drama.day}</p>
              <p><strong>Showtime:</strong> {drama.showtime}</p>
              <p><em>Genre:</em> {drama.genre}</p>
              <p>{drama.description}</p>
              <button
                className="buy-ticket-button"
                onClick={handleTicketClick}> Buy Ticket</button>
            </li>
          ))
        ) : (
          <p>No drama found for your search.</p>
        )}
      </ul>
    </div>
  </section>
    ):
    showcartoonPage ? (
       <section className="cartoon-page">
       <div className="left-content">
         <h2 className="title">Cinepax Pro - Cartoon Schedule</h2>
         <ul className="navigation">
           <li>
             <a href="#" onClick={handleBackClick}>Back</a>
           </li>
         </ul>
       </div>
       <div className="content">
         <input
           type="text"
           className="search-bar"
           placeholder="Search for cartoon or genres..."
           value={searchTermcartoon}
           onChange={(e) => setSearchTermcartoon(e.target.value)}
         />
         <h3>Available Drama</h3>
         <ul className="cartoon-list">
           {filteredcartoon.length > 0 ? (
             filteredcartoon.map((cartoon, index) => (
               <li key={index}>
                 <h4>{cartoon.title}</h4>
                 <p><strong>Date:</strong>{cartoon.date}</p>
                 <p><strong>Day:</strong>{cartoon.day}</p>
                 <p><strong>Showtime:</strong> {cartoon.showtime}</p>
                 <p><em>Genre:</em> {cartoon.genre}</p>
                 <p>{cartoon.description}</p>
                 <button
                   className="buy-ticket-button"
                   onClick={handleTicketClick}> Buy Ticket</button>
               </li>
             ))
           ) : (
             <p>No cartoon found for your search.</p>
           )}
         </ul>
       </div>
     </section>
        ):
        showkidsPage ? (
          <section className="kids-page">
          <div className="left-content">
            <h2 className="title">Cinepax Pro - kids Schedule</h2>
            <ul className="navigation">
              <li>
                <a href="#" onClick={handleBackClick}>Back</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for kids or genres..."
              value={searchTermkids}
              onChange={(e) => setSearchTermkids(e.target.value)}
            />
            <h3>Available Kids</h3>
            <ul className="kids-list">
              {filteredkids.length > 0 ? (
                filteredkids.map((kids, index) => (
                  <li key={index}>
                    <h4>{kids.title}</h4>
                    <p><strong>Date:</strong>{kids.date}</p>
                    <p><strong>Day:</strong>{kids.day}</p>
                    <p><strong>Showtime:</strong> {kids.showtime}</p>
                    <p><em>Genre:</em> {kids.genre}</p>
                    <p>{kids.description}</p>
                    <button
                      className="buy-ticket-button"
                      onClick={handleTicketClick}> Buy Ticket</button>
                  </li>
                ))
              ) : (
                <p>No kids content found for your search.</p>
              )}
            </ul>
          </div>
        </section>
      ) : (
        <section className="top-bar">
          <div className="left-content">
            <h2 className="title">Cinepax Pro</h2>
            <ul className="navigation">
              <li><a href="#" className='active'>Home</a></li>
              <li><a href="#" onClick={handleTicketClick}>Ticket</a></li>
              <li><a href="#" onClick={handleMoviesClick}>Movies</a></li>
              <li><a href="#" onClick={handleseriesClick}>Series</a></li>
              <li><a href="#" onClick={toggleTvshow}>TV Show</a></li>
            </ul>
          </div>
          <div className="right-content">
           <img src={notificationImg} alt="notification" className="notification"onClick={handlenotificationClick}/> 
            <img src={helpImg} alt="Help" className="help" onClick={handleHelpClick}/>
            <div className="profile-img-box">
              <img src={profileImg} alt="Profile" onClick={toggleProfile} />
            </div>
            <img src={menuImg} alt="Menu" className="menu"onClick={toggleMenu} />
          </div>
        </section>
      )}
        {/* Event Modal */}
        {showEvent && (
        <div className="event-modal">
          <div className="event-content">
            <h2>Important Event</h2>
            <ul>
            <li>
            Special Event<p> Free Kids Movie Screening on 10th December! Join us for fun!</p>
            </li>
            </ul>
            <button onClick={handleClosenotification}>Close</button>
          </div>
        </div>
      )}
       {/* Conditionally render the TV show */}
       {istvshowVisible && (
        <div className="tvshow-content">
          <ul>
            <li><a href="#"onClick={handleMoviesClick}>Movies</a></li>
            <li><a href="#"onClick={handledramaClick}>Dramas</a></li>
            <li><a href="#"onClick={handlecartoonClick}>Cartoon</a></li>
            <li><a href="#"onClick={handlekidsClick}>Kids</a></li>
            <li><a href="#" onClick={handleEventClick}>Event</a></li>
          </ul>
        </div>
      )}
         {/* Conditionally render the menu */}
         {isMenuVisible && (
        <div className="menu-content">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#"onClick={handleMoviesClick}>Movies</a></li>
            <li><a href="#"onClick={handleTicketClick}>Tickets</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
      )}
      {/* notification Modal */}
      {shownotification && (
        <div className="notification-modal">
          <div className="notification-content">
            <h2>Important Notification</h2>
            <p>
            "Cinepax Pro is temporarily closed in light of the ongoing PTI protests. 
            We apologize for any inconvenience and will share updates as soon as possible. 
            Thank you for your understanding.
            </p>
            <button onClick={handleClosenotification}>Close</button>
          </div>
        </div>
      )}
        {/* Help Message Section */}
        {showHelpMessage && (
        <div className="help-message">
          <div className='help-content'>
          <h2>Cinepax Pro Help</h2>
          <p>
            How can we assist you? We are here to help with bookings, movie timings, and any other queries.
            Visit our <a href="#">Help Center</a> or <a href="#">Contact Support</a> for further assistance.
          </p>
          <button onClick={handleCloseHelpMessage}>Close</button>
        </div>
        </div>
      )}
        {isProfileVisible && (
      <div className="profile-dropdown">
        <ul>
          <li>View Profile</li>
          <li>Account Settings</li>
          <li>My Bookings</li>
          <li className="logout" onClick={() => console.log('Logging out...')}>Logout</li>
        </ul>
      </div>
    )}
             
    </div>
  );
}

function Footer() {
  const [showOffers, setShowOffers] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", comment: "" });

  const offers = [
    { time: "Morning Offer", details: "Get 20% off on all morning shows!" },
    { time: "Midnight Offer", details: "Enjoy midnight shows with 30% discount." },
    { time: "Weekend Offer", details: "Special combo offers available on weekends." },
  ];

  const [reviews, setReviews] = useState([
    { name: "Moiz Ahmad", comment: "Loved the movie experience! Highly recommended." },
    { name: "Sami Ullah", comment: "The seats were comfortable, and the service was excellent." },
    { name: "Seeman Ali", comment: "Great sound quality and visuals. Will visit again!" },
  ]);

  const branches = [
    { name: "Gujrat", address: "Main G.T Road,Gujrat" },
    { name: "Gujranwalla", address: "Master City Gujranwalla,Gujranwalla" },
    { name: "Lahore", address: "Lahore Ring Road,Lahore" },
    { name: "Islamabad", address: "Inter State Bus Terminal Sector 43,Islamabad" },
    { name: "Karachi", address: "Mangla Road G-9 Markaz,Karachi " },
    { name: "Faisalabad", address: "Jhang Road Faisalabad Airport,Faisalabad" },
  ];

  const handleAddReview = () => {
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", comment: "" });
      setShowAddReview(false);
    }
  };
  const handleOffersClick = (event) => {
    event.preventDefault();
    setShowOffers(!showOffers);
    setShowReviews(false);
    setShowBranches(false);
  };

  const handleReviewsClick = (event) => {
    event.preventDefault();
    setShowReviews(!showReviews);
    setShowOffers(false);
    setShowBranches(false);
  };

  const handleBranchesClick = (event) => {
    event.preventDefault();
    setShowBranches(!showBranches);
    setShowOffers(false);
    setShowReviews(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Cinepax Pro is your ultimate destination for movie bookings,
              trailers, and showtimes. Experience the magic of cinema with us!
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li>
                <a href="#" onClick={handleBranchesClick}>Branches</a>
              </li>
              <li>
                <a href="#" onClick={handleOffersClick}>Offers</a>
              </li>
              <li>
                <a href="#" onClick={handleReviewsClick}>Reviews</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Cinepax Pro. All Rights Reserved.</p>
        </div>
      </footer>

      {showOffers && (
        <div className="offers-section">
          <h2>Available Offers</h2>
          <ul>
            {offers.map((offer, index) => (
              <li key={index}>
                <h3>{offer.time}</h3>
                <p>{offer.details}</p>
              </li>
            ))}
          </ul>
          <button onClick={() => setShowOffers(false)}>Close Offers</button>
        </div>
      )}

      {showReviews && (
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <h3>{review.name}</h3>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
          {!showAddReview && (
            <button onClick={() => setShowAddReview(true)}>Add Review</button>
          )}
          {showAddReview && (
            <div className="add-review-form">
              <h3>Add Your Review</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
              />
              <textarea
                placeholder="Your Comment"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              ></textarea>
              <button onClick={handleAddReview}>Submit Review</button>
              <button onClick={() => setShowAddReview(false)}>Cancel</button>
            </div>
          )}
          <button onClick={() => setShowReviews(false)}>Close Reviews</button>
        </div>
      )}

      {showBranches && (
        <div className="branches-section">
          <h2>Our Branches</h2>
          <ul>
            {branches.map((branch, index) => (
              <li key={index}>
                <h3>{branch.name}</h3>
                <p>{branch.address}</p>
              </li>
            ))}
            </ul> 
          <button onClick={() => setShowBranches(false)}>Close Branches</button>
        </div>
      )}
      {showOffers && (
  <div className="offers-section">
    <h2>Available Offers</h2>
    <ul>
      {offers.map((offer, index) => (
        <li key={index}>
          <h3>{offer.time}</h3>
          <p>{offer.details}</p>
          {/* Add Get Offer button next to each offer */}
          <button onClick={() => alert(`Offer Applied: ${offer.time}`)}>Get Offer</button>
        </li>
      ))}
    </ul>
    <button onClick={() => setShowOffers(false)}>Close Offers</button>
  </div>
)}
    </>
  );
}

function App() {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [category, setCategory] = useState(null); 
  const [language, setLanguage] = useState("en");


  return (
    <div>
      <TopBar />
      <section className="main-container">
        <Sidebar setCategory={setCategory} setTimeOfDay={setTimeOfDay} setLanguage={setLanguage} />
        <MainContainer timeOfDay={timeOfDay} category={category} language={language} />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
