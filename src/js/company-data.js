// Mock data for company section
const companyData = {
    // Company basic info
    info: {
        name: "arxis",
        tagline: "Transforming Ideas into Digital Reality",
        founded: 2015,
        employees: 248,
        locations: "San Francisco, London, Singapore",
        logo: "public/arxis.svg",
        banner: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },

    // Company stats
    stats: [
        {
            icon: "fas fa-users",
            value: "248",
            label: "Employees",
            growth: "+12% this year",
            isPositive: true
        },
        {
            icon: "fas fa-map-marker-alt",
            value: "8",
            label: "Office Locations",
            growth: "+2 this year",
            isPositive: true
        },
        {
            icon: "fas fa-building",
            value: "9",
            label: "Years in Business",
            growth: "",
            isPositive: true
        },
        {
            icon: "fas fa-star",
            value: "96%",
            label: "Client Satisfaction",
            growth: "+4% from last year",
            isPositive: true
        }
    ],

    // Mission & Vision
    mission: "At arxis, our mission is to empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in an ever-evolving technological landscape.",

    vision: "To be the global leader in digital transformation, recognized for our cutting-edge solutions, exceptional talent, and unwavering commitment to client success.",

    // Core values
    values: [
        {
            icon: "fas fa-lightbulb",
            name: "Innovation",
            description: "We embrace creativity and forward-thinking to solve complex challenges."
        },
        {
            icon: "fas fa-handshake",
            name: "Integrity",
            description: "We uphold the highest ethical standards in all our interactions."
        },
        {
            icon: "fas fa-users",
            name: "Collaboration",
            description: "We believe great ideas emerge from diverse teams working together."
        },
        {
            icon: "fas fa-rocket",
            name: "Excellence",
            description: "We strive for exceptional quality in everything we do."
        },
        {
            icon: "fas fa-heart",
            name: "Empathy",
            description: "We understand our clients' needs and put people first."
        },
        {
            icon: "fas fa-globe",
            name: "Sustainability",
            description: "We create solutions with long-term environmental impact in mind."
        },
        {
            icon: "fas fa-shield-alt",
            name: "Security",
            description: "We prioritize data protection and privacy in all our products."
        },
        {
            icon: "fas fa-balance-scale",
            name: "Diversity",
            description: "We celebrate differences and create an inclusive workplace."
        }
    ],

    // Company highlights
    highlights: [
        {
            title: "New Singapore Office Opening",
            date: "October 2023",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "Expanding our presence in Asia with a new state-of-the-art office in Singapore's Central Business District."
        },
        {
            title: "Innovation Award 2023",
            date: "July 2023",
            image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "Recognized for our groundbreaking AI-driven analytics platform at the Global Tech Summit."
        },
        {
            title: "250 Employees Milestone",
            date: "May 2023",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "Celebrating our growing team of talented professionals from around the world."
        },
        {
            title: "Quantum Computing Initiative",
            date: "February 2023",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "Launched our new research division focused on quantum computing applications for business."
        }
    ],

    // Leadership team
    leadership: [
        {
            name: "Sarah Johnson",
            title: "Chief Executive Officer",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            name: "Michael Chen",
            title: "Chief Technology Officer",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            name: "Elena Rodriguez",
            title: "Chief Operating Officer",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
            name: "David Okafor",
            title: "Chief Financial Officer",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ],

    // Company timeline
    timeline: [
        {
            year: 2015,
            title: "Company Founded",
            description: "arxis was founded in San Francisco with a team of 5 engineers focused on web development solutions."
        },
        {
            year: 2017,
            title: "Series A Funding",
            description: "Secured $8 million in Series A funding to expand product offerings and grow the team."
        },
        {
            year: 2018,
            title: "London Office",
            description: "Opened our first international office in London to serve European clients."
        },
        {
            year: 2020,
            title: "AI Platform Launch",
            description: "Launched our flagship AI-driven analytics platform, transforming how businesses use data."
        },
        {
            year: 2021,
            title: "100 Employee Milestone",
            description: "Celebrated reaching 100 employees across three global offices."
        },
        {
            year: 2022,
            title: "Series B Funding",
            description: "Secured $25 million in Series B funding to accelerate growth and international expansion."
        },
        {
            year: 2023,
            title: "Singapore Expansion",
            description: "Opened new APAC headquarters in Singapore to support growing client base in Asia."
        }
    ],

    // News & Updates
    news: {
        // Featured news (most important/recent)
        featured: {
            id: "news-001",
            title: "arxis Expands to New European Markets",
            excerpt: "We're thrilled to announce our expansion into three new European markets, with new offices opening in Berlin, Paris, and Amsterdam. This strategic growth allows us to better serve our European clients and tap into the region's rich tech talent pool.",
            content: "We're thrilled to announce our expansion into three new European markets, with new offices opening in Berlin, Paris, and Amsterdam. This strategic growth allows us to better serve our European clients and tap into the region's rich tech talent pool. The expansion comes after exceeding our growth targets by 40% in the last fiscal year.\n\nOur CEO, Sarah Johnson, shared her excitement: \"This European expansion marks a pivotal moment in arxis's global journey. We've seen tremendous demand for our solutions across Europe, and establishing a stronger physical presence allows us to collaborate more closely with our clients and partners in these key markets.\"\n\nThe new offices will be fully operational by Q3 2024, creating over 120 new jobs across the three locations. Each hub will focus on regional client services while also developing specialized expertise: Berlin for AI research, Paris for UX/UI innovation, and Amsterdam for sustainable tech solutions.",
            image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            category: "Major Announcement",
            categoryColor: "#4A90E2",
            author: "Sarah Johnson",
            authorAvatar: "https://randomuser.me/api/portraits/women/23.jpg",
            date: "May 15, 2024",
            readTime: "4 min read",
            views: 1248,
            comments: 42
        },

        // Recent news items
        recent: [
            {
                id: "news-002",
                title: "Q4 2024 Company Performance Highlights",
                excerpt: "Our Q4 results show record-breaking growth with revenue up 32% year-over-year and client retention at an all-time high of 96%.",
                content: "Our Q4 results show record-breaking growth with revenue up 32% year-over-year and client retention at an all-time high of 96%. The company has exceeded all major KPIs for the fiscal year, positioning us strongly for continued expansion in 2025.\n\nKey highlights include:\n- 32% increase in year-over-year revenue\n- 96% client retention rate\n- 28% growth in new client acquisition\n- 45% increase in enterprise-level partnerships\n- Successful launch of 3 major product updates\n\nThe board has approved an ambitious growth plan for the coming year, including significant investments in R&D and talent acquisition across all major offices.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Company Announcements",
                categoryColor: "#10B981",
                author: "David Okafor",
                authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
                date: "May 10, 2024",
                readTime: "3 min read",
                views: 986,
                comments: 27
            },
            {
                id: "news-003",
                title: "New Office Opening in Singapore",
                excerpt: "Our new Singapore office is now officially open, serving as our APAC headquarters and innovation hub for the region.",
                content: "Our new Singapore office is now officially open, serving as our APAC headquarters and innovation hub for the region. Located in the heart of Singapore's Central Business District, the 15,000 square foot space will house up to 120 employees.\n\nThe state-of-the-art facility features collaborative workspaces, cutting-edge meeting technology, wellness areas, and a dedicated client experience center. The office was designed with sustainability in mind, earning a Green Mark Platinum certification.\n\nThis expansion strengthens our presence in the fast-growing APAC market and enables us to provide enhanced support to our regional clients. The Singapore team will focus on developing tailored solutions for Asian markets while contributing to our global product development initiatives.",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Company Announcements",
                categoryColor: "#10B981",
                author: "Elena Rodriguez",
                authorAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
                date: "May 5, 2024",
                readTime: "2 min read",
                views: 754,
                comments: 18
            },
            {
                id: "news-004",
                title: "Leadership Team Changes Announced",
                excerpt: "We're pleased to announce key leadership appointments as part of our strategic reorganization to support global growth.",
                content: "We're pleased to announce key leadership appointments as part of our strategic reorganization to support global growth. These changes will take effect on June 1, 2024.\n\nJennifer Liu has been promoted to Chief Product Officer, bringing over 15 years of product leadership experience from her previous roles at major tech companies. Jennifer has been instrumental in our product strategy since joining arxis three years ago.\n\nRobert Keller joins us as our new Chief Marketing Officer from his previous role as Global Marketing Director at TechVision. Robert brings extensive experience in B2B marketing and will lead our global marketing initiatives.\n\nAdditionally, Thomas Wright has been appointed as our first Chief Sustainability Officer, reflecting our commitment to environmental responsibility and sustainable business practices.\n\nThese leadership changes position us strongly for our next phase of growth while reinforcing our commitment to innovation, market expansion, and sustainability.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Company Announcements",
                categoryColor: "#10B981",
                author: "Sarah Johnson",
                authorAvatar: "https://randomuser.me/api/portraits/women/23.jpg",
                date: "April 28, 2024",
                readTime: "3 min read",
                views: 892,
                comments: 31
            },
            {
                id: "news-005",
                title: "arxis Wins 'Best Workplace Innovation' Award 2024",
                excerpt: "We're honored to receive the prestigious 'Best Workplace Innovation' award at this year's Global Tech Excellence Awards.",
                content: "We're honored to receive the prestigious 'Best Workplace Innovation' award at this year's Global Tech Excellence Awards. This recognition celebrates our commitment to creating a forward-thinking work environment that fosters creativity, collaboration, and employee wellbeing.\n\nThe award specifically highlighted our 'Flex-Forward' program, which reimagines traditional work arrangements by combining flexible scheduling, personalized workspace options, and technology-enabled collaboration. The judges were particularly impressed by the program's positive impact on employee satisfaction and productivity metrics.\n\n\"This award belongs to every arxis team member who has embraced and contributed to our innovative workplace culture,\" said Lisa Thompson, our Chief Human Resources Officer. \"We believe that by creating an environment where people can do their best work in ways that work best for them, we unlock extraordinary potential.\"\n\nThe Global Tech Excellence Awards are among the most respected in the industry, with over 500 companies competing across various categories this year.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Press Releases",
                categoryColor: "#8B5CF6",
                author: "Lisa Thompson",
                authorAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
                date: "April 20, 2024",
                readTime: "2 min read",
                views: 723,
                comments: 24
            },
            {
                id: "news-006",
                title: "Partnership Announcement with Global Tech Leader",
                excerpt: "arxis and TechGiant announce strategic partnership to deliver integrated AI solutions for enterprise clients worldwide.",
                content: "arxis and TechGiant announce strategic partnership to deliver integrated AI solutions for enterprise clients worldwide. This collaboration combines arxis's innovative analytics platform with TechGiant's industry-leading cloud infrastructure to create powerful, scalable solutions for large organizations.\n\nThe partnership will initially focus on three key areas:\n\n1. Developing industry-specific AI solutions for healthcare, finance, and manufacturing sectors\n2. Creating seamless integration between both companies' platforms for enhanced data processing capabilities\n3. Establishing a joint innovation lab to explore emerging technologies and use cases\n\n\"This partnership represents a significant milestone in our growth strategy,\" said Michael Chen, CTO of arxis. \"By combining our strengths with TechGiant's robust infrastructure, we can deliver unprecedented value to enterprise clients navigating complex digital transformation journeys.\"\n\nThe first integrated solutions are expected to launch in Q3 2024, with joint go-to-market activities beginning immediately.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Press Releases",
                categoryColor: "#8B5CF6",
                author: "Michael Chen",
                authorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
                date: "April 15, 2024",
                readTime: "3 min read",
                views: 645,
                comments: 19
            },
            {
                id: "news-007",
                title: "Company Achieves Carbon Neutral Certification",
                excerpt: "arxis is proud to announce we've achieved carbon neutrality across all global operations, an important milestone in our sustainability journey.",
                content: "arxis is proud to announce we've achieved carbon neutrality across all global operations, an important milestone in our sustainability journey. This certification, granted by ClimateForward, recognizes our comprehensive efforts to measure, reduce, and offset our carbon footprint.\n\nOver the past two years, we've implemented numerous initiatives to reduce our environmental impact:\n\n- Transitioning to 100% renewable energy in all office locations\n- Implementing a sustainable travel policy that reduced business flight emissions by 40%\n- Redesigning our data center strategy to improve energy efficiency by 35%\n- Launching an employee-led sustainability committee with representatives from each office\n\nFor emissions we couldn't eliminate, we invested in high-quality carbon offset projects, including reforestation in Indonesia, renewable energy in India, and methane capture in Brazil.\n\n\"This certification is not the end of our sustainability journey, but an important milestone,\" said Thomas Wright, our Chief Sustainability Officer. \"We're committed to continually reducing our environmental impact while helping our clients do the same through our technology solutions.\"",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Press Releases",
                categoryColor: "#8B5CF6",
                author: "Thomas Wright",
                authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
                date: "April 5, 2024",
                readTime: "4 min read",
                views: 589,
                comments: 27
            },
            {
                id: "news-008",
                title: "New Employee Benefits Package Launched",
                excerpt: "We're excited to announce our enhanced benefits package, designed to support wellbeing, growth, and work-life balance for all team members.",
                content: "We're excited to announce our enhanced benefits package, designed to support wellbeing, growth, and work-life balance for all team members. These updates reflect feedback from our annual employee survey and benchmark against top employers in our industry.\n\nKey enhancements include:\n\n- Expanded mental health resources, including unlimited therapy sessions through our new provider network\n- Increased learning and development budget from $2,000 to $3,500 annually per employee\n- New sabbatical program offering 4-week paid breaks after 5 years of service\n- Enhanced parental leave policy with 16 weeks fully paid for all parents\n- Flexible work arrangement policy formalizing hybrid and remote options\n- New financial wellness program including retirement planning and student loan assistance\n\n\"Our people are our greatest asset, and these enhanced benefits reflect our commitment to supporting them both professionally and personally,\" said Lisa Thompson, CHRO. \"We believe that when our team members thrive, our company thrives.\"\n\nThe new benefits package takes effect June 1, 2024. HR representatives will host information sessions throughout May to answer questions and help team members maximize these new offerings.",
                image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Internal Updates",
                categoryColor: "#F59E0B",
                author: "Lisa Thompson",
                authorAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
                date: "March 28, 2024",
                readTime: "3 min read",
                views: 1254,
                comments: 76
            },
            {
                id: "news-009",
                title: "Updated Remote Work Policy Guidelines",
                excerpt: "Our new remote work policy formalizes flexible arrangements while maintaining our collaborative culture and operational effectiveness.",
                content: "Our new remote work policy formalizes flexible arrangements while maintaining our collaborative culture and operational effectiveness. After extensive feedback and a successful pilot program, we're implementing the following framework:\n\n- Hybrid-First Approach: Most roles will follow a hybrid model with 2-3 days in-office per week, with teams determining their specific in-office days for maximum collaboration\n- Fully Remote Option: Certain roles qualify for fully remote arrangements based on job function and performance criteria\n- Quarterly Connection Weeks: All employees, including remote workers, will gather in-person quarterly for collaboration, planning, and team building\n- Global Mobility Program: Employees can work from different company locations for 2-4 week periods to encourage cross-office collaboration\n- Technology Stipend: All employees receive $500 annually to enhance their home office setup\n\nDepartment heads will work with team members to implement these guidelines in ways that balance individual flexibility with team effectiveness. The policy will be reviewed and refined quarterly based on feedback and operational metrics.\n\nPlease review the complete policy document in the HR portal and attend one of the upcoming information sessions for more details.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Internal Updates",
                categoryColor: "#F59E0B",
                author: "Lisa Thompson",
                authorAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
                date: "March 20, 2024",
                readTime: "4 min read",
                views: 1187,
                comments: 64
            },
            {
                id: "news-010",
                title: "Updated Data Privacy and Security Protocols",
                excerpt: "Important updates to our data handling procedures and security protocols to enhance protection of company and client information.",
                content: "Important updates to our data handling procedures and security protocols to enhance protection of company and client information. These changes align with evolving regulatory requirements and industry best practices.\n\nKey updates include:\n\n- Enhanced encryption requirements for all client data, both in transit and at rest\n- New classification system for internal documents with corresponding handling procedures\n- Updated access control protocols with expanded multi-factor authentication requirements\n- Revised incident response plan with clearer roles and communication protocols\n- New guidelines for secure collaboration with external partners and vendors\n\nAll employees must complete the updated security training course in the learning portal by April 30, 2024. Department-specific training sessions will be scheduled throughout April to address unique requirements for different teams.\n\n\"These updates strengthen our security posture while maintaining operational efficiency,\" said James Wilson, Chief Information Security Officer. \"Protecting our data and our clients' trust remains a top priority as we continue to grow.\"\n\nPlease review the complete updated security handbook in the company portal and direct any questions to the security team.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Policy Changes",
                categoryColor: "#EF4444",
                author: "James Wilson",
                authorAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
                date: "March 15, 2024",
                readTime: "5 min read",
                views: 1043,
                comments: 38
            },
            {
                id: "news-011",
                title: "New Travel and Expense Policy",
                excerpt: "Updates to our travel and expense policies to streamline reimbursement processes and align with our sustainability goals.",
                content: "Updates to our travel and expense policies to streamline reimbursement processes and align with our sustainability goals. These changes take effect on April 1, 2024.\n\nKey updates include:\n\n- New digital expense management system replacing manual submission processes\n- Updated per diem rates for different global locations\n- Revised air travel guidelines encouraging direct flights and economy class for flights under 8 hours\n- Carbon offset program for all business travel\n- Expanded options for sustainable transportation reimbursement\n- Simplified approval workflows for expenses under $500\n\nThe Finance team will host training sessions on the new expense management system throughout March. All employees should register for a session through the learning portal.\n\n\"These updates make expense reporting easier while supporting our sustainability commitments,\" said David Okafor, CFO. \"The new system will reduce processing time by approximately 65% and provide better visibility into spending patterns.\"\n\nPlease review the complete policy document in the Finance portal and direct any questions to the expense management team.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Policy Changes",
                categoryColor: "#EF4444",
                author: "David Okafor",
                authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
                date: "March 10, 2024",
                readTime: "3 min read",
                views: 876,
                comments: 29
            },
            {
                id: "news-012",
                title: "Flexible Working Hours Implementation",
                excerpt: "New flexible working hours program launching next month to support work-life balance and accommodate diverse working styles.",
                content: "New flexible working hours program launching next month to support work-life balance and accommodate diverse working styles. After a successful pilot with three departments, we're expanding the program company-wide.\n\nThe flexible hours program includes:\n\n- Core collaboration hours (11am-3pm local time) when all team members should be available for meetings and collaboration\n- Flexible start times between 6am-11am and end times between 3pm-8pm\n- Option to split workday with extended breaks for personal commitments\n- Special arrangements available for caregivers and those with specific needs\n- Team-level agreements to ensure coverage and collaboration\n\nThis program complements our hybrid work model and reinforces our commitment to creating a workplace that respects individual needs while maintaining team effectiveness.\n\n\"Our pilot showed that flexible hours increased both productivity and employee satisfaction,\" said Lisa Thompson, CHRO. \"Team members appreciated the autonomy to work when they're most effective while still maintaining strong collaboration.\"\n\nDepartment heads will discuss implementation with their teams in the coming weeks. The full policy document is available in the HR portal.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                category: "Policy Changes",
                categoryColor: "#EF4444",
                author: "Lisa Thompson",
                authorAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
                date: "March 5, 2024",
                readTime: "2 min read",
                views: 792,
                comments: 41
            }
        ]
    },

    // Department structure data
    departments: {
        // Executive Leadership
        executive: {
            name: "Executive Leadership",
            description: "Strategic leadership and company direction",
            icon: "fas fa-chess-king",
            color: "#4A90E2",
            totalEmployees: 15,
            growth: "+2 this year",
            categories: [
                {
                    name: "CEO Office",
                    employeeCount: 3,
                    head: {
                        name: "Sarah Johnson",
                        title: "Chief Executive Officer",
                        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
                        email: "sarah.johnson@arxis.com",
                        extension: "1001"
                    },
                    description: "Executive leadership and strategic decision-making",
                    location: "Headquarters",
                    openPositions: 0
                },
                {
                    name: "Board of Directors",
                    employeeCount: 7,
                    head: {
                        name: "Robert Chen",
                        title: "Board Chairman",
                        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                        email: "robert.chen@arxis.com",
                        extension: "1002"
                    },
                    description: "Corporate governance and strategic oversight",
                    location: "Global",
                    openPositions: 0
                },
                {
                    name: "Strategic Planning",
                    employeeCount: 5,
                    head: {
                        name: "Maria Garcia",
                        title: "Head of Strategy",
                        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                        email: "maria.garcia@arxis.com",
                        extension: "1003"
                    },
                    description: "Long-term planning and strategic initiatives",
                    location: "Headquarters",
                    openPositions: 1
                }
            ]
        },

        // Technology Division
        technology: {
            name: "Technology Division",
            description: "Product development and technical innovation",
            icon: "fas fa-microchip",
            color: "#10B981",
            totalEmployees: 59,
            growth: "+15 this year",
            categories: [
                {
                    name: "Software Development",
                    employeeCount: 24,
                    head: {
                        name: "Michael Chen",
                        title: "Chief Technology Officer",
                        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                        email: "michael.chen@arxis.com",
                        extension: "2001"
                    },
                    description: "Core product development and engineering",
                    location: "Multiple Offices",
                    openPositions: 3,
                    skills: ["React", "Node.js", "Python", "Java", "Cloud technologies"]
                },
                {
                    name: "DevOps & Infrastructure",
                    employeeCount: 8,
                    head: {
                        name: "James Wilson",
                        title: "Head of DevOps",
                        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                        email: "james.wilson@arxis.com",
                        extension: "2002"
                    },
                    description: "Infrastructure management and deployment automation",
                    location: "San Francisco",
                    openPositions: 2
                },
                {
                    name: "Quality Assurance",
                    employeeCount: 12,
                    head: {
                        name: "Emily Zhang",
                        title: "QA Director",
                        avatar: "https://randomuser.me/api/portraits/women/56.jpg",
                        email: "emily.zhang@arxis.com",
                        extension: "2003"
                    },
                    description: "Product quality and testing",
                    location: "Multiple Offices",
                    openPositions: 1
                },
                {
                    name: "Product Management",
                    employeeCount: 6,
                    head: {
                        name: "David Kim",
                        title: "Head of Product",
                        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
                        email: "david.kim@arxis.com",
                        extension: "2004"
                    },
                    description: "Product strategy and roadmap",
                    location: "San Francisco",
                    openPositions: 1
                },
                {
                    name: "UI/UX Design",
                    employeeCount: 9,
                    head: {
                        name: "Sophie Anderson",
                        title: "Design Director",
                        avatar: "https://randomuser.me/api/portraits/women/89.jpg",
                        email: "sophie.anderson@arxis.com",
                        extension: "2005"
                    },
                    description: "User interface and experience design",
                    location: "London",
                    openPositions: 2
                }
            ]
        },

        // Operations
        operations: {
            name: "Operations",
            description: "Business operations and support functions",
            icon: "fas fa-cogs",
            color: "#8B5CF6",
            totalEmployees: 28,
            growth: "+5 this year",
            categories: [
                {
                    name: "Human Resources",
                    employeeCount: 7,
                    head: {
                        name: "Lisa Thompson",
                        title: "Chief HR Officer",
                        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
                        email: "lisa.thompson@arxis.com",
                        extension: "3001"
                    },
                    description: "Employee management and development",
                    location: "Multiple Offices",
                    openPositions: 1
                },
                {
                    name: "Finance & Accounting",
                    employeeCount: 11,
                    head: {
                        name: "David Okafor",
                        title: "Chief Financial Officer",
                        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                        email: "david.okafor@arxis.com",
                        extension: "3002"
                    },
                    description: "Financial management and reporting",
                    location: "London",
                    openPositions: 0
                },
                {
                    name: "Legal & Compliance",
                    employeeCount: 4,
                    head: {
                        name: "Jennifer Liu",
                        title: "General Counsel",
                        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
                        email: "jennifer.liu@arxis.com",
                        extension: "3003"
                    },
                    description: "Legal affairs and compliance",
                    location: "San Francisco",
                    openPositions: 1
                },
                {
                    name: "Facilities Management",
                    employeeCount: 6,
                    head: {
                        name: "Marcus Brown",
                        title: "Facilities Director",
                        avatar: "https://randomuser.me/api/portraits/men/82.jpg",
                        email: "marcus.brown@arxis.com",
                        extension: "3004"
                    },
                    description: "Office management and facilities",
                    location: "Multiple Offices",
                    openPositions: 0
                }
            ]
        },

        // Business Development
        business: {
            name: "Business Development",
            description: "Sales, marketing, and customer success",
            icon: "fas fa-chart-line",
            color: "#F59E0B",
            totalEmployees: 43,
            growth: "+8 this year",
            categories: [
                {
                    name: "Sales",
                    employeeCount: 16,
                    head: {
                        name: "Thomas Wright",
                        title: "Sales Director",
                        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                        email: "thomas.wright@arxis.com",
                        extension: "4001"
                    },
                    description: "Global sales and revenue generation",
                    location: "Multiple Offices",
                    openPositions: 2
                },
                {
                    name: "Marketing",
                    employeeCount: 13,
                    head: {
                        name: "Emma Martinez",
                        title: "Marketing Director",
                        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
                        email: "emma.martinez@arxis.com",
                        extension: "4002"
                    },
                    description: "Brand management and marketing strategies",
                    location: "London",
                    openPositions: 1
                },
                {
                    name: "Customer Success",
                    employeeCount: 9,
                    head: {
                        name: "Ryan Taylor",
                        title: "Customer Success Director",
                        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
                        email: "ryan.taylor@arxis.com",
                        extension: "4003"
                    },
                    description: "Customer support and satisfaction",
                    location: "Multiple Offices",
                    openPositions: 2
                },
                {
                    name: "Business Development",
                    employeeCount: 5,
                    head: {
                        name: "Sarah Lee",
                        title: "Head of Business Development",
                        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
                        email: "sarah.lee@arxis.com",
                        extension: "4004"
                    },
                    description: "Partnership and growth opportunities",
                    location: "Singapore",
                    openPositions: 1
                }
            ]
        },

        // Support Services
        support: {
            name: "Support Services",
            description: "Technical support and internal services",
            icon: "fas fa-headset",
            color: "#EF4444",
            totalEmployees: 17,
            growth: "+3 this year",
            categories: [
                {
                    name: "IT Support",
                    employeeCount: 8,
                    head: {
                        name: "Alex Kumar",
                        title: "IT Support Manager",
                        avatar: "https://randomuser.me/api/portraits/men/92.jpg",
                        email: "alex.kumar@arxis.com",
                        extension: "5001"
                    },
                    description: "Internal IT support and infrastructure",
                    location: "Multiple Offices",
                    openPositions: 1
                },
                {
                    name: "Administrative Services",
                    employeeCount: 5,
                    head: {
                        name: "Rachel Green",
                        title: "Admin Services Manager",
                        avatar: "https://randomuser.me/api/portraits/women/82.jpg",
                        email: "rachel.green@arxis.com",
                        extension: "5002"
                    },
                    description: "Administrative support and coordination",
                    location: "San Francisco",
                    openPositions: 0
                },
                {
                    name: "Security",
                    employeeCount: 4,
                    head: {
                        name: "John Martinez",
                        title: "Security Manager",
                        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
                        email: "john.martinez@arxis.com",
                        extension: "5003"
                    },
                    description: "Physical and digital security",
                    location: "Multiple Offices",
                    openPositions: 1
                }
            ]
        }
    },

    // Cross-department collaboration data
    collaborationMatrix: {
        executive: {
            technology: "high",
            operations: "high",
            business: "high",
            support: "medium"
        },
        technology: {
            executive: "high",
            operations: "medium",
            business: "high",
            support: "high"
        },
        operations: {
            executive: "high",
            technology: "medium",
            business: "medium",
            support: "high"
        },
        business: {
            executive: "high",
            technology: "high",
            operations: "medium",
            support: "low"
        },
        support: {
            executive: "medium",
            technology: "high",
            operations: "high",
            business: "low"
        }
    },

    // Joint projects data
    jointProjects: [
        {
            name: "Digital Transformation Initiative",
            departments: ["technology", "business"],
            status: "In Progress",
            completion: 75,
            startDate: "2024-01-15",
            endDate: "2024-06-30"
        },
        {
            name: "Employee Experience Platform",
            departments: ["operations", "technology"],
            status: "In Progress",
            completion: 40,
            startDate: "2024-02-01",
            endDate: "2024-08-31"
        },
        {
            name: "Global Security Enhancement",
            departments: ["support", "technology"],
            status: "Planning",
            completion: 15,
            startDate: "2024-04-01",
            endDate: "2024-12-31"
        },
        {
            name: "Customer Success Program",
            departments: ["business", "operations"],
            status: "In Progress",
            completion: 60,
            startDate: "2024-01-01",
            endDate: "2024-05-31"
        }
    ],

    // Achievements data
    achievements: {
        featured: {
            title: "Best Workplace Innovation Award 2024",
            organization: "Tech Innovation Council",
            date: "March 2024",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "Recognized for our innovative workplace practices and employee-centric culture.",
            impact: "Improved employee satisfaction by 25% and productivity by 30%",
            category: "Awards",
            categoryColor: "#4A90E2"
        },

        categories: {
            awards: {
                name: "Awards & Recognition",
                icon: "fas fa-trophy",
                color: "#4A90E2",
                items: [
                    {
                        title: "Best Workplace Innovation Award 2024",
                        organization: "Tech Innovation Council",
                        date: "March 2024",
                        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Recognized for our innovative workplace practices and employee-centric culture.",
                        impact: "Improved employee satisfaction by 25% and productivity by 30%"
                    },
                    {
                        title: "Top Employer of the Year 2023",
                        organization: "Industry Leadership Awards",
                        date: "December 2023",
                        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Awarded for exceptional employee development and workplace culture.",
                        impact: "90% employee retention rate and 85% employee satisfaction score"
                    },
                    {
                        title: "Excellence in Customer Service",
                        organization: "Customer Experience Awards",
                        date: "November 2023",
                        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Recognized for outstanding customer service and support.",
                        impact: "96% customer satisfaction rate and 45% reduction in response time"
                    },
                    {
                        title: "Green Business Certification",
                        organization: "Environmental Standards Board",
                        date: "October 2023",
                        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Certified for sustainable business practices and environmental responsibility.",
                        impact: "40% reduction in carbon footprint and 60% waste reduction"
                    },
                    {
                        title: "Diversity & Inclusion Champion",
                        organization: "Equality in Workplace Foundation",
                        date: "September 2023",
                        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Recognized for promoting diversity and inclusive workplace practices.",
                        impact: "50% increase in diverse hiring and 100% pay equity achievement"
                    }
                ]
            },

            certifications: {
                name: "Industry Certifications",
                icon: "fas fa-certificate",
                color: "#10B981",
                items: [
                    {
                        title: "ISO 9001:2015 Quality Management",
                        organization: "International Standards Organization",
                        date: "February 2024",
                        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Certified for meeting international quality management standards.",
                        impact: "35% improvement in process efficiency"
                    },
                    {
                        title: "ISO 27001:2013 Information Security",
                        organization: "International Standards Organization",
                        date: "January 2024",
                        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Certified for information security management system.",
                        impact: "Zero security breaches in the past year"
                    },
                    {
                        title: "SOC 2 Type II Compliance",
                        organization: "AICPA",
                        date: "December 2023",
                        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Achieved compliance with SOC 2 Type II security standards.",
                        impact: "Enhanced data protection and client trust"
                    },
                    {
                        title: "GDPR Compliance Certification",
                        organization: "EU Data Protection Board",
                        date: "November 2023",
                        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Certified for compliance with EU data protection regulations.",
                        impact: "100% compliance with EU data protection standards"
                    },
                    {
                        title: "Carbon Neutral Certification",
                        organization: "Climate Action Organization",
                        date: "October 2023",
                        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Achieved carbon neutrality in operations.",
                        impact: "Net-zero carbon emissions achieved"
                    }
                ]
            },

            milestones: {
                name: "Business Milestones",
                icon: "fas fa-flag",
                color: "#8B5CF6",
                items: [
                    {
                        title: "1 Million Users Reached",
                        date: "March 2024",
                        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Achieved significant user base milestone.",
                        impact: "25% year-over-year user growth"
                    },
                    {
                        title: "10th Anniversary Celebration",
                        date: "January 2024",
                        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Celebrated 10 years of innovation and growth.",
                        impact: "10 years of continuous business growth"
                    },
                    {
                        title: "$100M Revenue Milestone",
                        date: "December 2023",
                        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Reached significant revenue milestone.",
                        impact: "40% revenue growth from previous year"
                    },
                    {
                        title: "500th Employee Hired",
                        date: "October 2023",
                        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Growing team milestone achievement.",
                        impact: "50% team growth in one year"
                    },
                    {
                        title: "Global Expansion to 15 Countries",
                        date: "August 2023",
                        image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Expanded operations to 15 countries worldwide.",
                        impact: "300% increase in global market presence"
                    }
                ]
            },

            recognition: {
                name: "Client Recognition",
                icon: "fas fa-star",
                color: "#F59E0B",
                items: [
                    {
                        title: "Enterprise Client Success Story",
                        client: "Global Tech Solutions",
                        date: "February 2024",
                        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Successful digital transformation project.",
                        impact: "45% improvement in client's operational efficiency"
                    },
                    {
                        title: "Innovation Partnership Award",
                        client: "FinTech Leaders",
                        date: "January 2024",
                        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Recognized for innovative fintech solutions.",
                        impact: "60% reduction in processing time"
                    },
                    {
                        title: "Customer Success Story",
                        client: "Healthcare Solutions Inc",
                        date: "December 2023",
                        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "Healthcare system modernization project.",
                        impact: "30% improvement in patient care efficiency"
                    },
                    {
                        title: "Long-term Partnership Achievement",
                        client: "Retail Giants Co",
                        date: "November 2023",
                        image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                        description: "5 years of successful partnership.",
                        impact: "200% ROI for client over 5 years"
                    }
                ]
            }
        },

        statistics: {
            total_awards: 15,
            total_certifications: 8,
            client_satisfaction: 96,
            employee_retention: 92,
            industry_ranking: 3,
            year_over_year_growth: 40
        },

        timeline: [
            {
                year: 2024,
                quarter: "Q1",
                achievements: [
                    "Best Workplace Innovation Award",
                    "ISO 9001:2015 Certification",
                    "1 Million Users Milestone"
                ]
            },
            {
                year: 2023,
                quarter: "Q4",
                achievements: [
                    "Top Employer Award",
                    "SOC 2 Type II Compliance",
                    "$100M Revenue Milestone"
                ]
            },
            {
                year: 2023,
                quarter: "Q3",
                achievements: [
                    "Global Expansion Milestone",
                    "Green Business Certification",
                    "500th Employee Milestone"
                ]
            },
            {
                year: 2023,
                quarter: "Q2",
                achievements: [
                    "Customer Experience Award",
                    "GDPR Compliance",
                    "Innovation Partnership Award"
                ]
            }
        ]
    },

    // Team Directory data
    teamDirectory: {
        // Employee data
        employees: [
            // Executive Team
            {
                id: "emp001",
                name: "Sarah Johnson",
                preferredName: "Sarah",
                title: "Chief Executive Officer",
                department: "Executive",
                location: "San Francisco",
                photo: "https://randomuser.me/api/portraits/women/23.jpg",
                contact: {
                    email: "sarah.johnson@arxis.com",
                    phone: "+1 (555) 123-4567",
                    slack: "@sarah",
                    extension: "1001"
                },
                bio: "20+ years of experience in technology leadership, driving innovation and growth in enterprise software.",
                skills: ["Strategic Leadership", "Business Development", "Technology Innovation"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/sarah-johnson",
                    twitter: "https://twitter.com/sarahjohnson"
                },
                status: "available",
                startDate: "2015-01-01",
                reportsTo: null,
                directReports: ["emp002", "emp003", "emp004", "emp005"]
            },
            {
                id: "emp002",
                name: "Michael Chen",
                preferredName: "Mike",
                title: "Chief Technology Officer",
                department: "Technology",
                location: "San Francisco",
                photo: "https://randomuser.me/api/portraits/men/45.jpg",
                contact: {
                    email: "michael.chen@arxis.com",
                    phone: "+1 (555) 123-4568",
                    slack: "@mike",
                    extension: "2001"
                },
                bio: "Former Google engineer with expertise in AI and cloud infrastructure.",
                skills: ["Cloud Architecture", "AI/ML", "System Design", "Team Leadership"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/michael-chen",
                    github: "https://github.com/mikechen"
                },
                status: "in_meeting",
                startDate: "2015-03-15",
                reportsTo: "emp001",
                directReports: ["emp006", "emp007", "emp008"]
            },
            {
                id: "emp003",
                name: "Elena Rodriguez",
                preferredName: "Elena",
                title: "Chief Operating Officer",
                department: "Operations",
                location: "London",
                photo: "https://randomuser.me/api/portraits/women/28.jpg",
                contact: {
                    email: "elena.rodriguez@arxis.com",
                    phone: "+44 20 7123 4569",
                    slack: "@elena",
                    extension: "3001"
                },
                bio: "Operations expert with focus on scaling global teams and processes.",
                skills: ["Operations Management", "Process Optimization", "Team Building"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/elena-rodriguez"
                },
                status: "available",
                startDate: "2016-02-01",
                reportsTo: "emp001",
                directReports: ["emp009", "emp010"]
            },
            {
                id: "emp004",
                name: "David Okafor",
                preferredName: "David",
                title: "Chief Financial Officer",
                department: "Finance",
                location: "London",
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                contact: {
                    email: "david.okafor@arxis.com",
                    phone: "+44 20 7123 4570",
                    slack: "@david",
                    extension: "4001"
                },
                bio: "Financial strategist with expertise in global markets and M&A.",
                skills: ["Financial Planning", "Risk Management", "Investment Strategy"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/david-okafor"
                },
                status: "busy",
                startDate: "2016-06-15",
                reportsTo: "emp001",
                directReports: ["emp011", "emp012"]
            },
            {
                id: "emp005",
                name: "Lisa Thompson",
                preferredName: "Lisa",
                title: "Chief Human Resources Officer",
                department: "HR",
                location: "San Francisco",
                photo: "https://randomuser.me/api/portraits/women/45.jpg",
                contact: {
                    email: "lisa.thompson@arxis.com",
                    phone: "+1 (555) 123-4571",
                    slack: "@lisa",
                    extension: "5001"
                },
                bio: "HR leader focused on building inclusive and high-performing teams.",
                skills: ["Talent Management", "Organizational Development", "Employee Relations"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/lisa-thompson"
                },
                status: "available",
                startDate: "2017-01-15",
                reportsTo: "emp001",
                directReports: ["emp013", "emp014"]
            },

            // Technology Team
            {
                id: "emp006",
                name: "James Wilson",
                preferredName: "James",
                title: "Head of DevOps",
                department: "Technology",
                location: "San Francisco",
                photo: "https://randomuser.me/api/portraits/men/52.jpg",
                contact: {
                    email: "james.wilson@arxis.com",
                    phone: "+1 (555) 123-4572",
                    slack: "@james",
                    extension: "2002"
                },
                bio: "Infrastructure and automation expert with focus on cloud technologies.",
                skills: ["AWS", "Kubernetes", "CI/CD", "Infrastructure as Code"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/james-wilson",
                    github: "https://github.com/jameswilson"
                },
                status: "away",
                startDate: "2017-03-01",
                reportsTo: "emp002",
                directReports: []
            },
            {
                id: "emp007",
                name: "Emily Zhang",
                preferredName: "Emily",
                title: "QA Director",
                department: "Technology",
                location: "Singapore",
                photo: "https://randomuser.me/api/portraits/women/56.jpg",
                contact: {
                    email: "emily.zhang@arxis.com",
                    phone: "+65 6789 0123",
                    slack: "@emily",
                    extension: "2003"
                },
                bio: "Quality assurance professional with expertise in automated testing.",
                skills: ["Test Automation", "Quality Processes", "Performance Testing"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/emily-zhang"
                },
                status: "available",
                startDate: "2018-01-15",
                reportsTo: "emp002",
                directReports: []
            },
            {
                id: "emp008",
                name: "Alex Kumar",
                preferredName: "Alex",
                title: "IT Support Manager",
                department: "Technology",
                location: "London",
                photo: "https://randomuser.me/api/portraits/men/92.jpg",
                contact: {
                    email: "alex.kumar@arxis.com",
                    phone: "+44 20 7123 4573",
                    slack: "@alex",
                    extension: "2004"
                },
                bio: "IT professional specializing in enterprise support and security.",
                skills: ["IT Support", "Security", "Network Management"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/alex-kumar"
                },
                status: "busy",
                startDate: "2018-06-01",
                reportsTo: "emp002",
                directReports: []
            },

            // Operations Team
            {
                id: "emp009",
                name: "Sophie Anderson",
                preferredName: "Sophie",
                title: "Operations Manager",
                department: "Operations",
                location: "London",
                photo: "https://randomuser.me/api/portraits/women/89.jpg",
                contact: {
                    email: "sophie.anderson@arxis.com",
                    phone: "+44 20 7123 4574",
                    slack: "@sophie",
                    extension: "3002"
                },
                bio: "Operations specialist with focus on process improvement.",
                skills: ["Process Management", "Team Leadership", "Project Management"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/sophie-anderson"
                },
                status: "available",
                startDate: "2019-01-15",
                reportsTo: "emp003",
                directReports: []
            },
            {
                id: "emp010",
                name: "Marcus Brown",
                preferredName: "Marcus",
                title: "Facilities Director",
                department: "Operations",
                location: "San Francisco",
                photo: "https://randomuser.me/api/portraits/men/82.jpg",
                contact: {
                    email: "marcus.brown@arxis.com",
                    phone: "+1 (555) 123-4575",
                    slack: "@marcus",
                    extension: "3003"
                },
                bio: "Facilities management expert with focus on workplace experience.",
                skills: ["Facilities Management", "Vendor Management", "Workplace Safety"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/marcus-brown"
                },
                status: "in_meeting",
                startDate: "2019-03-01",
                reportsTo: "emp003",
                directReports: []
            },

            // Finance Team
            {
                id: "emp011",
                name: "Jennifer Liu",
                preferredName: "Jen",
                title: "Financial Controller",
                department: "Finance",
                location: "Singapore",
                photo: "https://randomuser.me/api/portraits/women/72.jpg",
                contact: {
                    email: "jennifer.liu@arxis.com",
                    phone: "+65 6789 0124",
                    slack: "@jen",
                    extension: "4002"
                },
                bio: "Financial expert with focus on international accounting standards.",
                skills: ["Financial Control", "Accounting", "Compliance"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/jennifer-liu"
                },
                status: "available",
                startDate: "2019-06-15",
                reportsTo: "emp004",
                directReports: []
            },
            {
                id: "emp012",
                name: "Thomas Wright",
                preferredName: "Tom",
                title: "Investment Manager",
                department: "Finance",
                location: "London",
                photo: "https://randomuser.me/api/portraits/men/22.jpg",
                contact: {
                    email: "thomas.wright@arxis.com",
                    phone: "+44 20 7123 4576",
                    slack: "@tom",
                    extension: "4003"
                },
                bio: "Investment professional with expertise in tech sector analysis.",
                skills: ["Investment Analysis", "Portfolio Management", "Market Research"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/thomas-wright"
                },
                status: "away",
                startDate: "2020-01-15",
                reportsTo: "emp004",
                directReports: []
            },

            // HR Team
            {
                id: "emp013",
                name: "Rachel Green",
                preferredName: "Rachel",
                title: "Talent Acquisition Manager",
                department: "HR",
                location: "San Francisco",
                photo: "https://randomuser.me/api/portraits/women/82.jpg",
                contact: {
                    email: "rachel.green@arxis.com",
                    phone: "+1 (555) 123-4577",
                    slack: "@rachel",
                    extension: "5002"
                },
                bio: "Recruitment specialist with focus on tech talent acquisition.",
                skills: ["Recruitment", "Employer Branding", "Talent Assessment"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/rachel-green"
                },
                status: "available",
                startDate: "2020-03-01",
                reportsTo: "emp005",
                directReports: []
            },
            {
                id: "emp014",
                name: "John Martinez",
                preferredName: "John",
                title: "Employee Relations Manager",
                department: "HR",
                location: "London",
                photo: "https://randomuser.me/api/portraits/men/72.jpg",
                contact: {
                    email: "john.martinez@arxis.com",
                    phone: "+44 20 7123 4578",
                    slack: "@john",
                    extension: "5003"
                },
                bio: "HR professional specializing in employee relations and engagement.",
                skills: ["Employee Relations", "Conflict Resolution", "Policy Development"],
                socialLinks: {
                    linkedin: "https://linkedin.com/in/john-martinez"
                },
                status: "in_meeting",
                startDate: "2020-06-15",
                reportsTo: "emp005",
                directReports: []
            }
        ],

        // Department structure
        departments: [
            {
                id: "dept001",
                name: "Executive",
                description: "Company leadership and strategic direction",
                color: "#4A90E2",
                icon: "fas fa-chess-king"
            },
            {
                id: "dept002",
                name: "Technology",
                description: "Product development and technical operations",
                color: "#10B981",
                icon: "fas fa-microchip"
            },
            {
                id: "dept003",
                name: "Operations",
                description: "Business operations and support functions",
                color: "#8B5CF6",
                icon: "fas fa-cogs"
            },
            {
                id: "dept004",
                name: "Finance",
                description: "Financial management and planning",
                color: "#F59E0B",
                icon: "fas fa-chart-line"
            },
            {
                id: "dept005",
                name: "HR",
                description: "Human resources and talent management",
                color: "#EF4444",
                icon: "fas fa-users"
            }
        ],

        // Office locations
        locations: [
            {
                id: "loc001",
                name: "San Francisco",
                country: "United States",
                timezone: "America/Los_Angeles",
                employeeCount: 95
            },
            {
                id: "loc002",
                name: "London",
                country: "United Kingdom",
                timezone: "Europe/London",
                employeeCount: 85
            },
            {
                id: "loc003",
                name: "Singapore",
                country: "Singapore",
                timezone: "Asia/Singapore",
                employeeCount: 68
            }
        ],

        // Job levels for filtering
        jobLevels: [
            {
                id: "level001",
                name: "Executive",
                roles: ["Chief Executive Officer", "Chief Technology Officer", "Chief Operating Officer", "Chief Financial Officer", "Chief Human Resources Officer"]
            },
            {
                id: "level002",
                name: "Senior",
                roles: ["Head of DevOps", "QA Director", "Operations Manager", "Financial Controller", "Talent Acquisition Manager"]
            },
            {
                id: "level003",
                name: "Mid-level",
                roles: ["IT Support Manager", "Facilities Director", "Investment Manager", "Employee Relations Manager"]
            }
        ],

        // Skills taxonomy
        skillCategories: [
            {
                name: "Leadership",
                skills: ["Strategic Leadership", "Team Leadership", "Business Development", "Change Management"]
            },
            {
                name: "Technical",
                skills: ["Cloud Architecture", "AI/ML", "System Design", "Infrastructure as Code", "Test Automation"]
            },
            {
                name: "Operations",
                skills: ["Process Management", "Project Management", "Vendor Management", "Facilities Management"]
            },
            {
                name: "Finance",
                skills: ["Financial Planning", "Risk Management", "Investment Analysis", "Accounting"]
            },
            {
                name: "HR",
                skills: ["Talent Management", "Employee Relations", "Recruitment", "Policy Development"]
            }
        ]
    }
};