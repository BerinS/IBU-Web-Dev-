import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Blog.css';
import random from "random";

function Blog() {
  return (
    <Container maxWidth="lg">
      <div className="CardContainer">
        <PaperComponent />
        <PaperComponent />
        <PaperComponent />
        <PaperComponent />
        <PaperComponent />
      </div>
    </Container>
  );
}

function PaperComponent() {
  return (
    <Paper elevation={6} className="PaperComponent">
      <Box className="ImageBox">
        <img
          src={random.choice(imageUrls)}
          alt="Placeholder"
          className="PaperImage"
        />
      </Box>
      <Box className="TextBox">
        <Typography variant="h5" component="h2" gutterBottom>
          {random.choice(newsHeadings)}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {random.choice(newsSubtitles)}
        </Typography>
        <Button variant="contained" color="primary">
          Read More
        </Button>
      </Box>
    </Paper>
  );
}

const newsHeadings = [
  "Intel Unveils Next-Gen Processors: A Leap in Performance and Efficiency",
  "NVIDIA Announces Revolutionary GPU: Gaming Will Never Be the Same",
  "AMD Ryzen 7000 Series: Setting New Standards in Multithreading",
  "Apple Silicon M3 Chip: What to Expect from the Upcoming MacBook Pro",
  "Microsoft's Surface Lineup Gets a Refresh: New Features and Improvements",
  "Top 5 Gaming Laptops of 2024: Power Meets Portability",
  "Asus ROG Strix: The Ultimate Gaming Desktop Experience",
  "Corsair Releases High-Speed RAM: A Boost for Power Users",
  "Dell's UltraSharp Monitors: Crystal Clear Display for Professionals",
  "Razer's New Blade Series: Cutting-Edge Technology for Gamers",
  "HP Omen vs Alienware: Which Gaming PC Reigns Supreme?",
  "Best Budget-Friendly SSDs: Performance Without Breaking the Bank",
  "Lenovo ThinkPad X1 Carbon: Business Laptop Redefined",
  "Samsung's QLED Monitors: Perfect for Both Work and Play",
  "Gigabyte's Latest Motherboards: Enhancing Your PC Build",
  "Thermaltake's RGB Cases: Combining Style with Functionality",
  "MSI's New Gaming Laptops: Portability Meets Power",
  "Logitech's Advanced Peripherals: Elevating Your Computing Experience",
  "Intel's 13th Gen Processors: What You Need to Know",
  "Seagate vs Western Digital: Battle of the HDD Giants",
  "Acer Predator Helios 500: A Beast in the Gaming Arena",
  "HyperX's Latest Gaming Headsets: Immersive Audio for Gamers",
  "EVGA's New Power Supplies: Reliable Performance for High-End Builds",
  "NVIDIA RTX 4080: Benchmark Results and Performance Analysis",
  "Apple's Latest iMac: Powerful, Yet Sleek and Stylish",
  "Top 10 PC Cases for 2024: Design Meets Functionality",
  "Cybersecurity Trends: How Major IT Companies Are Responding",
  "Future of Quantum Computing: Insights from IBM and Google",
  "Blockchain Technology in IT: Revolutionizing Data Security",
  "Virtual Reality: How VR is Shaping the Future of Computing",
];

const imageUrls = [
  "https://fastly.picsum.photos/id/327/600/300.jpg?hmac=1J6kCDaerioDi_IuPnB45bDfjP6AFIRoieVdKeTIMjg",
  "https://fastly.picsum.photos/id/666/600/300.jpg?hmac=nRYdCXHDKMuzv1rGLf_zvfvvYiJkc8PgTtku2bDyqZg",
  "https://fastly.picsum.photos/id/253/600/300.jpg?hmac=xWSt8l8TOFqAMrdX4yStLJXCOp_PPhBGYafNnxD2cHA",
  "https://fastly.picsum.photos/id/66/600/300.jpg?hmac=9ehe6kZa8o1MPAwtbaXKBcubYtTDqVjpfi64UKfEMAI",
  "https://fastly.picsum.photos/id/386/600/300.jpg?hmac=_Jjek-MG8Wwn9y9tMMhwOtzVs-CsCOFD9RzH4OxHaVI",
  "https://fastly.picsum.photos/id/20/600/300.jpg?hmac=h9oYqivPeqqfL8YLGiJLPwQiCqrpurvUGA0SuVwOJhE",
  "https://fastly.picsum.photos/id/888/600/300.jpg?hmac=UPbyartyWDUO36KrFhn4YE1omg4h0rN6MERhe2ktgUw",
  "https://fastly.picsum.photos/id/274/600/300.jpg?hmac=xnCwOn7U3vJ-dNG-tO0IQLxnGsLTqBvMnctUE2Nx4LU",
  "https://fastly.picsum.photos/id/305/600/300.jpg?hmac=m-MA2aVDE6fluKOXiQZXotZ3wOeMgaaLrqHaZ0LzRNU"
];

const newsSubtitles = [
  "Intel's latest processors promise significant improvements in speed and power efficiency, aiming to dominate the market.",
  "NVIDIA's newest GPU offers unparalleled performance for gamers and professionals alike, setting new industry standards.",
  "The AMD Ryzen 7000 series introduces unprecedented multithreading capabilities, pushing the boundaries of what's possible.",
  "Apple's upcoming M3 chip is expected to deliver groundbreaking performance enhancements for the MacBook Pro lineup.",
  "Microsoft's latest Surface devices feature cutting-edge technology and enhanced user experience.",
  "Discover the top gaming laptops of 2024 that blend powerful performance with sleek design.",
  "Experience the ultimate gaming desktop with the Asus ROG Strix, designed for hardcore gamers.",
  "Corsair's new high-speed RAM modules are designed to meet the demands of power users and gamers.",
  "Dell's UltraSharp monitors provide stunning visuals and advanced features for professionals.",
  "Razer's new Blade series combines state-of-the-art technology with a sleek design, perfect for gamers on the go.",
  "A detailed comparison of HP Omen and Alienware gaming PCs to determine which offers the best performance.",
  "Find out which budget-friendly SSDs offer great performance without a hefty price tag.",
  "The Lenovo ThinkPad X1 Carbon redefines the business laptop with its lightweight design and powerful performance.",
  "Samsung's latest QLED monitors are ideal for both work and entertainment, offering superior picture quality.",
  "Gigabyte introduces its latest motherboards, packed with features to enhance your PC building experience.",
  "Thermaltake's new RGB cases not only look stunning but also provide excellent functionality for PC builds.",
  "MSI's latest gaming laptops deliver top-notch performance in a portable form factor, perfect for gamers on the go.",
  "Logitech's advanced peripherals are designed to elevate your computing experience with precision and comfort.",
  "Intel's 13th Gen processors bring significant advancements in performance and efficiency for modern computing needs.",
  "A comparison of Seagate and Western Digital hard drives to help you choose the best storage solution.",
  "The Acer Predator Helios 500 is a powerhouse gaming laptop designed for serious gamers.",
  "HyperX's latest gaming headsets offer immersive audio experiences for gamers of all levels.",
  "EVGA's new power supplies ensure reliable performance for high-end PC builds, providing stability and efficiency.",
  "Benchmark results and performance analysis of NVIDIA's RTX 4080 reveal its impressive capabilities.",
  "Apple's latest iMac combines powerful performance with sleek design, ideal for both professionals and creatives.",
  "Explore the top 10 PC cases of 2024 that offer both innovative design and excellent functionality.",
  "Learn about the latest trends in cybersecurity and how major IT companies are addressing new threats.",
  "IBM and Google share insights into the future of quantum computing and its potential impact on technology.",
  "Explore how blockchain technology is revolutionizing data security in the IT industry.",
  "Virtual reality is transforming the computing landscape, offering new possibilities for immersive experiences.",
];





export default Blog;
