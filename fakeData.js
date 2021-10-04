const couses = [
    {
        courseId: 1,
        courseName: 'C Programming',
        subscriptionFee: 50,
        courseThumbnail: 'https://i.ibb.co/r5mmRYK/C-Programming.png',
        coursePicture: 'https://i.ibb.co/cvVVLj2/4-most-common-c-programming-mistakes-that-you-must-avoid.jpg',
        startDate: '1 January, 2022',
        duration: '3 Months',
        rating: '5',
        courseDescription: `C is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.
        Like most procedural languages in the ALGOL tradition, C has facilities for structured programming and allows lexical variable scope and recursion. Its static type system prevents unintended operations. In C, all executable code is contained within subroutines (also called "functions", though not strictly in the sense of functional programming). Function parameters are always passed by value (except arrays). Pass-by-reference is simulated in C by explicitly passing pointer values. C program source text is free-format, using the semicolon as a statement terminator and curly braces for grouping blocks of statements.
        `
    },
    {
        courseId: 2,
        courseName: 'Machine Learning',
        subscriptionFee: 90,
        courseThumbnail: 'https://i.ibb.co/Ypng25d/machine-learning-1.png',
        coursePicture: 'https://i.ibb.co/1M9Msn1/machine-learning-and-deep-learning-101-hero1532047284210.jpg',
        startDate: '1 January, 2018',
        duration: '3 Months',
        rating: '5',
        courseDescription: `Machine Learning (ML) has become one of most widely used AI techniques for several companies, institutions and individuals who are in the business of automation. This is because of considerable improvements in the access to data and increases in computational power, which allow practitioners to achieve meaningful results across several areas.

        Today, when it comes to image data, ML algorithms can interpret images the same way our brains do. These are used almost everywhere, right from face recognition while capturing images on our smartphones, automating tedious manual work, self-driving cars and everything in between.
        
        In this blog, we'll be deep-diving into machine learning image processing fundamentals and discuss various technologies that we could leverage to build state-of-the-art algorithms on image data.`
    },
    {
        courseId: 3,
        courseName: 'Java',
        subscriptionFee: 70,
        courseThumbnail: 'https://i.ibb.co/m6VVYgw/java-logo-640.jpg',
        coursePicture: 'https://i.ibb.co/tZQymFB/java-la-gi-tai-sao-nen-chon-javajava-la-gi-20200630045539.jpg',
        startDate: '1 Novembar, 2021',
        duration: '3 Months',
        rating: '4.5',
        courseDescription: `Hello guys, curation is one of my passion and so is reading. I read a lot, here in Medium, On Reddit, On HackerNews and in general other places on the Internet. While reading so many articles I have noticed one thing that sometimes a good article doesn’t get the exposure it deserves and when I see that I feel for them.
        It takes a lot of hard work, time, and patience to write an article and there is nothing more frustrating to find that only a handful of your friends have read it.
        Java Community has given so much love to me and I am really grateful and I felt that I should also do something for new writers and bloggers and Java developers who write and that’s why I have created this 
        Medium
         Publication, Javarevisited.
        If you follow me that you know that I solely write on my blog Javarevisited and Java67 but in this place, it’s not just me but other Java programmer and developer also gets a chance to write and share their thoughts.
        Apart from that, I have also started a series of curation articles, where I will share some worth reading Java articles from Medium so that you can read some interesting articles and those articles also get more exposure they deserve before falling on the sea.`
    },
    {
        courseId: 4,
        courseName: 'Python',
        subscriptionFee: 75,
        courseThumbnail: 'https://i.ibb.co/5cZSf7R/python-1.png',
        coursePicture: 'https://i.ibb.co/HYCKv8F/How-to-Learn-Python.jpg',
        startDate: '3 January, 2020',
        duration: '3 Months',
        rating: '4.5',
        courseDescription: `Today we have a lot of programming languages that can realize our needs, but the most important question is how to teach programming to beginner students. In this paper we suggest using Python for this purpose, because it is a programming language that has neatly organized syntax and powerful tools to solve any task. Moreover it is very close to simple math thinking. Python is chosen as a primary programming language for freshmen in most of leading universities. Writing code in python is easy. In this paper we give some examples of program codes written in Java, C++ and Python language, and we make a comparison between them. Firstly, this paper proposes advantages of Python language in relation to C++ and JAVA. Then it shows the results of a comparison of short program codes written in three different languages, followed by a discussion on how students understand programming. Finally experimental results of students' success in programming courses are shown.`
    },
    {
        courseId: 5,
        courseName: 'Video Editing',
        subscriptionFee: 65,
        courseThumbnail: 'https://i.ibb.co/ch8TZ6c/BEST-LAPTOPS-FOR-AFTER-EFFECTS-USAGE.jpg',
        coursePicture: 'https://i.ibb.co/VQj4RmB/10-Video-Editing-Tools-for-Small-Business-jpg-crop-edges-fit-crop-fm-jpg-h-1260-ixlib-php-3-3.jpg',
        startDate: '1 January, 2022',
        duration: '3 Months',
        rating: '4',
        courseDescription: `Video editing is the manipulation and arrangement of video shots. Video editing is used to structure and present all video information, including films and television shows, video advertisements and video essays. Video editing has been dramatically democratized in recent years by editing software available for personal computers. Editing video can be difficult and tedious, so several technologies have been produced to aid people in this task. Pen based video editing software was developed in order to give people a more intuitive and fast way to edit video. Video editing is the process of editing segments of motion video production footage, special effects and sound recordings in the post-production process. Motion picture film editing is a predecessor to video editing and, in several ways, video editing simulates motion picture film editing, in theory and the use of linear video editing and video editing software on non-linear editing systems (NLE). Using video, a director can communicate non-fictional and fictional events. The goal of editing is to manipulate these events to bring the communication closer to the original goal or target. It is a visual art.`
    },
    {
        courseId: 6,
        courseName: 'Digital Marketing',
        subscriptionFee: 35,
        courseThumbnail: 'https://i.ibb.co/G7WTphc/digital-marketing-strategies.jpg',
        coursePicture: 'https://i.ibb.co/hg3khsH/digital-marketing-featured-image.png',
        startDate: '1 Febuary, 2019',
        duration: '3 Months',
        rating: '5',
        courseDescription: `Basically, digital marketing refers to any online marketing efforts or assets. Email marketing, pay-per-click advertising, social media marketing and even blogging are all great examples of digital marketing—they help introduce people to your company and convince them to buy.
        To figure out what you need to spend on digital marketing, you first need to clarify what your goals are. How you approach digital marketing can vary quite a bit depending on whether your ultimate goal is to drive clicks, conversions or leads, sales, revenue or a certain return-on-investment (ROI).
        When you get right down to it, the ultimate goal of any marketing effort should be ROI. After all, if your digital marketing spend isn’t driving profitable revenue for your business, why are you marketing online?
        Clicks and even conversions are great, but your company doesn’t make money from clicks (in fact, you actually spend money on clicks) or conversions. It makes money from sales.
        With that in mind, the first thing you need to determine before you decide what your digital marketing budget should be is to decide how much revenue you want to drive. Once you know that, you can use that information to determine how much ad spend it will take to reach that revenue goal.
        `
    },
    {
        courseId: 7,
        courseName: 'Artificial Intelligence',
        subscriptionFee: 90,
        courseThumbnail: 'https://i.ibb.co/x32T42y/artificial-intelligence.jpg',
        coursePicture: 'https://i.ibb.co/tQFZQVP/Artificial-Intelligence-Trained-to-Find-New-Useful-Materials1.jpg',
        startDate: '1 January, 2021',
        duration: '3 Months',
        rating: '5',
        courseDescription: `artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experience. Since the development of the digital computer in the 1940s, it has been demonstrated that computers can be programmed to carry out very complex tasks—as, for example, discovering proofs for mathematical theorems or playing chess—with great proficiency. Still, despite continuing advances in computer processing speed and memory capacity, there are as yet no programs that can match human flexibility over wider domains or in tasks requiring much everyday knowledge. On the other hand, some programs have attained the performance levels of human experts and professionals in performing certain specific tasks, so that artificial intelligence in this limited sense is found in applications as diverse as medical diagnosis, computer search engines, and voice or handwriting recognition.`
    },
    {
        courseId: 8,
        courseName: 'Data Structure',
        subscriptionFee: 40,
        courseThumbnail: 'https://i.ibb.co/6JcY6SH/data-structure-word-cloud-concept-grey-background-90729928.jpg',
        coursePicture: 'https://i.ibb.co/sFG7WsC/Data-Structure-tutorial-MSA-Technosoft.jpg',
        startDate: '1 January, 2020',
        duration: '3 Months',
        rating: '3.5',
        courseDescription: `In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification.More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data,i.e., it is an algebraic structure about data.
        Data structures serve as the basis for abstract data types (ADT). The ADT defines the logical form of the data type. The data structure implements the physical form of the data type.
        Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. For example, relational databases commonly use B-tree indexes for data retrieval, while compiler implementations usually use hash tables to look up identifiers.
        Data structures provide a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services. Usually, efficient data structures are key to designing efficient algorithms. Some formal design methods and programming languages emphasize data structures, rather than algorithms, as the key organizing factor in software design. Data structures can be used to organize the storage and retrieval of information stored in both main memory and secondary memory.
        `
    },
];