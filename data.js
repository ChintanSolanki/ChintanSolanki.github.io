const personalInfo = {
    name: "[Your Name]", // Replace with your actual name
    shortBio: "Salesforce Developer with expertise in Apex, LWC, Aura, and third-party integrations. Skilled in Salesforce CPQ fundamentals, 1GP & 2GP packaging, and building scalable CRM solutions. Strong problem-solving, communication, and teamwork abilities, with a passion for innovation and continuous learning.",
    profilePicture: "images/profile.jpg", // Replace with the URL of your profile picture
    linkedinURL: "https://www.linkedin.com/in/chintan-solanki-%E2%98%81%EF%B8%8F-b12450244/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Replace with your LinkedIn URL
    trailheadURL: "https://www.salesforce.com/trailblazer/chintansolanki", // Replace with your Trailhead URL
    emailAddress: "chintansolanki231201@gmail.com",
    skills: [
        "Apex",
        "LWC (Lightning Web Components)",
        "Aura Components",
        "Salesforce CPQ",
        "1GP & 2GP Packaging",
        "Third-party Integrations",
        "CRM Solutions",
        "Problem-solving",
        "Communication",
        "Teamwork"
    ],
    experience: `Salesforce Developer at Variance InfoTech Pvt Ltd (JAN 2023 - PRESENT)

        WhatsApp Business API Integration
        A 2GP managed package designed for seamless WhatsApp Business API integration within Salesforce, ensuring scalability, security, and smooth communication. The package enables automated messaging via Apex scheduling for policy reminders, birthdays, and templated communications. A WhatsApp web UI built with LWC supports real-time updates using Change Data Capture (CDC).
        A chatbot powered by the Drawflow library allows admins to design and automate chat flows triggered by keywords. The chatbot can search, create, and update Salesforce records while supporting a flow builder with variables for dynamic responses.
        The package also includes a WhatsApp Business account configuration feature, enabling admins to add and manage multiple business accounts within Salesforce. In the chat screen, agents can select from the configured accounts for customer interactions, with a round-robin-based integration ensuring even distribution of conversations across agents.

        Salesforce-CTI Integration App
        A 2GP managed package designed to enhance call handling in Salesforce by integrating with VICIdial, FreePBX, and custom PBX systems. It ensures seamless communication, automated call handling, and improved agent productivity.
        Key features include incoming/outgoing call pop-ups, a recent call log UI, Click-to-Call, call recordings access, and a dial pad for calling unknown numbers. CometD was integrated for call event subscriptions, ensuring compatibility across all Salesforce editions.
        This solution enhances customer service, call efficiency, and agent workflows within Salesforce.

        Custom Salesforce Reporting – ALM & TPS Reports
        Developed custom ALM and TPS reports using Aura Components and Apex to address complex reporting needs beyond standard Salesforce reports. The ALM report analyzed potential revenue year-over-year with customizable categorization, while the TPS report provided detailed insights on orders, CRM data, financial metrics, and monthly performance tracking. Ensured accuracy through comprehensive testing and successfully deployed the reports to production using change sets, enhancing client decision-making and reporting capabilities.`,
    projects: [
        {
            title: "WhatsApp Business API Integration (2GP Managed Package)",
            description: "Designed and developed a 2GP managed package for seamless WhatsApp Business API integration within Salesforce. Features include automated messaging via Apex scheduling, a WhatsApp web UI built with LWC (supporting real-time updates with CDC), an admin-configurable chatbot powered by Drawflow, and multi-account management with round-robin conversation distribution.",
            githubLink: "[GITHUB_LINK_WHATSAPP_INTEGRATION]", // Replace with your GitHub link if applicable
            demoLink: "[DEMO_LINK_WHATSAPP_INTEGRATION]" // Replace with a demo link if applicable
        },
        {
            title: "Salesforce-CTI Integration App (2GP Managed Package)",
            description: "Developed a 2GP managed package to integrate Salesforce with VICIdial, FreePBX, and custom PBX systems, enhancing call handling and agent productivity. Key features include call pop-ups, recent call logs, Click-to-Call, call recording access, and a dial pad. Integrated CometD for cross-edition call event subscriptions.",
            githubLink: "[GITHUB_LINK_CTI_INTEGRATION]", // Replace with your GitHub link if applicable
            demoLink: "[DEMO_LINK_CTI_INTEGRATION]" // Replace with a demo link if applicable
        },
        {
            title: "Custom Salesforce Reporting – ALM & TPS Reports",
            description: "Developed custom ALM and TPS reports using Aura Components and Apex to meet complex reporting needs. The ALM report analyzed potential revenue year-over-year with customizable categorization, and the TPS report provided detailed insights on orders, CRM data, financial metrics, and monthly performance tracking. Deployed to production using change sets.",
            githubLink: "[GITHUB_LINK_CUSTOM_REPORTS]", // Replace with your GitHub link if applicable
            demoLink: "[DEMO_LINK_CUSTOM_REPORTS]" // Replace with a demo link if applicable
        }
    ],
    copyrightYear: new Date().getFullYear()
};