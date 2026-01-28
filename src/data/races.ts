export const races = {
    'distance-l': {
        title: "Distance L",
        subtitle: "The Legend",
        description: "1.9km Swim | 80km Bike | 20km Run. Conquer the Grand Ballon and Markstein.",
        longDescription: "Challenge yourself on the legendary 'Distance L'. Starting with a swim in the Ensisheim lake, you'll tackle a bike course that leads you through the Alsace plain before climbing the mythical Grand Ballon and Markstein passes. The run takes you through the vineyards to the finish line in Guebwiller.",
        swim: "1.9km",
        bike: "80.3km",
        run: "20km",
        price: "150€",
        color: "from-red-500 to-orange-500",
        map: true,
        schedule: [
            { time: "06:45", event: "Bike Park Open (Ensisheim)" },
            { time: "07:30", event: "Bike Park Close" },
            { time: "07:45", event: "Briefing (Ensisheim)" },
            { time: "08:00", event: "START" },
            { time: "09:20", event: "Swim Cut-off / Bike Start Limit" },
            { time: "14:20", event: "Run Start Cut-off" },
            { time: "15:00", event: "Bike Pickup (Guebwiller)" },
            { time: "16:00", event: "Awards" }
        ],
        gpx: {
            swim: "#",
            bike: "#",
            run: "#" // Add actual links if found
        },
        rules: [
            "Wetsuit rules apply (FFTri)",
            "Drafting Forbidden (12m rule)",
            "Cut-off Swim: 1h10",
            "Cut-off Bike: 12:15pm",
            "Cut-off Run: 2:15pm"
        ]
    },
    'distance-m': {
        title: "Distance M",
        subtitle: "The Classic",
        description: "1.5km Swim | 40km Bike | 10km Run. A true test of endurance on a beautiful course.",
        longDescription: "The classic Olympic distance. Swim in Ensisheim, ride a challenging course towards Guebwiller, and finish with a trail-style run through the vineyards.",
        swim: "1.5km",
        bike: "39.6km",
        run: "10km",
        price: "85€",
        color: "from-blue-500 to-cyan-500",
        map: true,
        schedule: [
            { time: "10:00", event: "Bike Park Open (Ensisheim)" },
            { time: "10:45", event: "Bike Park Close" },
            { time: "11:00", event: "Briefing" },
            { time: "11:15", event: "START" },
            { time: "12:15", event: "Bike Start Limit" },
            { time: "14:15", event: "Run Start Limit" },
            { time: "15:00", event: "Bike Pickup" },
            { time: "16:00", event: "Awards" }
        ],
        rules: [
            "Wetsuit rules apply (FFTri)",
            "Drafting Forbidden (7m rule)",
            "Cut-off Swim: 50min",
            "Run is 75% trail - choose shoes wisely"
        ]
    },
    'distance-s': {
        title: "Distance S",
        subtitle: "The Discovery",
        description: "750m Swim | 24km Bike | 5km Run. Perfect for speedsters and beginners alike.",
        longDescription: "A sprint format perfect for discovering triathlon or pushing your limits for speed. Part of the departmental championship.",
        swim: "750m",
        bike: "23.9km",
        run: "5.2km",
        price: "50€",
        color: "from-green-500 to-emerald-500",
        map: false,
        gpx: {
            swim: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/92dadc_60c7aaf48c254ce1b25d4ecfb330d5a0.gpx?dn=S_Elsassman_Nat.gpx",
            bike: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/422c49_d22ddac58cad4c64ac750de1b6fda4ad.gpx?dn=COURSES_97343455.gpx",
            run: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/92dadc_4a6f9adc0955462ca8102fd5fac1de55.gpx?dn=S_Elsassman_CAP.gpx"
        },
        schedule: [
            { time: "09:15", event: "Bike Park Open" },
            { time: "10:00", event: "Bike Park Close" },
            { time: "10:15", event: "Briefing" },
            { time: "10:30", event: "START (Rolling)" },
            { time: "13:00", event: "Awards" }
        ],
        rules: [
            "Wetsuit rules apply (FFTri)",
            "Drafting Forbidden",
            "No headphones allowed"
        ]
    },
    'avenir-1': {
        title: "Avenir 1",
        subtitle: "Future Champions (6-9yo)",
        description: "100m Swim | 2km Bike | 1km Run. For Mini-Poussins and Poussins.",
        longDescription: "A safe and fun race for the youngest triathletes. Requires knowing how to swim 250m.",
        swim: "100m",
        bike: "2km (VTT)",
        run: "1km",
        price: "10€",
        color: "from-yellow-400 to-orange-400",
        map: false,
        gpx: {
            swim: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/92dadc_613d7475508c463a999a2c2c4472d04e.gpx?dn=Av1_Elsassman_Nat.gpx",
            bike: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/422c49_84902dcd014640b881a4be46d7dfee95.gpx?dn=Elsassman%20avenir%201%20VTT%20trace.gpx",
            run: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/422c49_1451a34496b44a69a9bd736c4a656637.gpx?dn=Elsassman%20avenir%201%20CAP%20trace.gpx"
        },
        schedule: [
            { time: "14:00", event: "Bike Park Open" },
            { time: "14:35", event: "Briefing" },
            { time: "14:45", event: "START" },
            { time: "16:30", event: "Awards" }
        ],
        rules: [
            "Mountain bike mandatory",
            "Helmet mandatory",
            "Must be able to swim 250m"
        ]
    },
    'avenir-2': {
        title: "Avenir 2",
        subtitle: "Rising Stars (10-13yo)",
        description: "200m Swim | 4.2km Bike | 1.6km Run. For Pupilles and Benjamins.",
        longDescription: "For older kids ready for a slightly bigger challenge.",
        swim: "200m",
        bike: "4.21km (VTT)",
        run: "1.62km",
        price: "10€",
        color: "from-orange-400 to-red-400",
        map: false,
        gpx: {
            swim: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/92dadc_2991d697c14b4b94ab3bd7d4f1d949af.gpx?dn=Av2_Elsassman_NAT.gpx",
            bike: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/422c49_bdba28987fff4e88a653e48c1db9266b.gpx?dn=Elsassman%20avenir%202%20VTT%20trace.gpx",
            run: "https://65ca2bdb-f8d2-4861-bed0-3203a189ac79.filesusr.com/ugd/422c49_ba152d0247ed4b6db61e80fdcd8e7c33.gpx?dn=Elsassman%20avenir%202%20CAP%20trace.gpx"
        },
        schedule: [
            { time: "14:00", event: "Bike Park Open" },
            { time: "15:20", event: "Briefing" },
            { time: "15:30", event: "START" },
            { time: "16:30", event: "Awards" }
        ],
        rules: [
            "Mountain bike mandatory",
            "Helmet mandatory"
        ]
    }
};
