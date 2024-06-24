const blogs=[
    {
        id:100,
        title: "Introducing Our First Computer Science Challenge!",
        content:"In celebration of Pride Month, we are excited to introduce our first Computer Science Challenge in honor of Alan Turing, the brilliant gay English mathematician and crypto-analyst who is widely considered to be the Father of Computer Science. His birthday would have been on June 22, right in the middle of our challenge! So let’s celebrate. For this challenge, there is only one simple writing prompt and one winner. Our winner will receive an exclusive DEV badge of honor and a gift from the DEV Shop.Participants with a valid submission will receive a completion badge.",
        author: {
          name:  "Jess Lee",
          avatar:""
        },
        date: "June 12, 2023",
        categories: ["#devchallenge", "#cschallenge"]
    },

    {
        id:200,
        title: "5 Reasons Why You Are Losing Hackathons",
        content:"I love hackathons. Since 2020, I’ve participated in over 10 and won around $65,000 in team and solo prizes. Now that my hackathon days are winding down (I am focusing on my cloud hosting platform sliplane.io), I want to share some tips that most developers miss. Let's get you winning! Humans > TechDevelopers love to talk about tech. I get it—we can discuss tech all day long! But ultimately, we’re building solutions for humans (sorry, aliens) and need to focus on them when thinking and talking about our projects. Next time you pitch, dont start with: 'We build a prototype with Next.js ...', but instead start with: 'We want to help overworked nurses with...'. Start with the what/why, not with the how! You’re browsing the internet and see an ad for an AI Innovation Hackathon. You think: NICE, I can finally build my GPT-powered blog post platform. But hold on! Check what the hackathon description says. Any clues? What are they looking for? Do they have any specific requirements? If they give you five judging criteria, make it super easy for them to judge.",
        author: {
          name:  "Jonas Scholz",
          avatar:""
        },
        date: "June 22, 2022",
        categories: ["#hackathon","#webdev","#programming","#career"]
    },

    {
        id:300,
        title: "7 Use Cases for Javascript Proxies",
        content:"JavaScript's Proxy object is a useful tool that opens up a world of possibilities, allowing you to create some really useful behaviors in your applications. When combined with TypeScript, Proxy enhances your ability to manage and manipulate objects and functions in ways you might not have thought possible. In this article, we'll explore the incredible utility of Proxies through practical examples.A Proxy in Javascript is a wrapper around another object (target), which lets you intercept and redefine fundamental operations for that object, such as property lookup, assignment, enumeration, and function invocation. This means you can add custom logic when getting or setting properties. This is great for handling validations, notifications, or even automatic data binding. Proxies in JavaScript, especially when used with TypeScript, offer a flexible way to interact with objects. They enable things like validation, observation, and bindings. Whether you're building complex user interfaces, developing games, or working on server-side logic, understanding and utilizing Proxies can provide you with a deeper level of control and sophistication in your code. Thanks for reading and I hope you learned something new! 🎓",
        author:{
            name:  "Matt Lewandowski",
          avatar:""
        },
        date: "August 12, 2021",
        categories: ["#webdev", "#javascript", "#beginners"]
    },

    {
        id:400,
        title: "Enhancing React Apps: Server Image Preview Component",
        content:"In this blog post, we'll walk through the process of creating a custom file preview component using React. We won't rely on any third-party libraries, ensuring you gain a deeper understanding of how to handle files directly in JavaScript. By the end of this tutorial, you'll be able to preview images, text files, xlxs files, pdf files in your React application.In this blog post, we created a custom file preview component using React without relying on any third-party libraries. We learned how to read file contents, and display previews . Potential enhancements include adding support for more file types, improving the styling, and handling errors more gracefully. Happy coding!Feel free to reach out in the comments if you have any questions or suggestions!",
        author: {
          name:  "Amrita-padhy",
          avatar:""
        },
        date: "February 02, 2021",
        categories: ["#webdev", "#react","#tutorials"]
    },

    {
        id:500,
        title: "Thinking Outside the Code: Develop Creative Thinking Ability in Software Engineering",
        content:"In this digital era, creative thinking is a crucial skill, especially in fields like software engineering where innovation drives success. Let’s explore what creative thinking is, why it’s important, and how you can develop it.We first need to understand what is Creative Thinking. Creative thinking involves looking at problems or situations from a fresh perspective that suggests unorthodox solutions. I will give you an example, I know this is already common, but maybe you know this already but this is the most effective way for you to understand. What if I give you six matchsticks and ask you to create three triangles out of it. You will probably think of constructing two triangles using three matchsticks each which is technically wrong because we need to create three triangles.If you think out of the box, how about we create a pyramid that will only require us six matchsticks to build it and we now have three triangles in total coming from each side. Pretty simple right? The idea here is you have the resources the matchsticks, the number of matchsticks, and the shape. With these, you can think of many ways and patterns and all of these already exist you just need to come up with something from those resources. This demonstrates using of available resources in novel ways.Why is Creative Thinking Important? In today's fast-paced world, especially with the rise of the internet and AI, access to information and resources is unprecedented. As software engineers, our role is to innovate and create valuable products. Success in this industry, whether you're a large company or a startup, often hinges on your ability to think creatively and differentiate your offerings. We need to be a Creative thinker to be able to generate ideas and solutions that are unique. One good example is based on what the TikTok founder and CEO - Shou Zi Chew says during one of his interviews about how the TikTok idea started, with this very simple statement.",
        author: {
          name:  "Kevin Dave Gerona",
          avatar:""
        },
        date: "June 27, 2023",
        categories: ["#webdev", "#javascript", "#beginners"]
    },
]

export default blogs;