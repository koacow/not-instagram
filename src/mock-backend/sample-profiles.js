const sampleProfiles = [
    {
        username: 'JohnDoe',
        fullName: 'John Doe',
        bio: 'Software Engineer | Tech Enthusiast',
        followers: 1000,
        following: 500,
        posts: [
            {
                id: 1,
                imageUrl: 'https://example.com/post1.jpg',
                caption: 'Hello, world!',
                likes: 50,
                comments: [
                    {
                        id: 1,
                        username: 'jane_smith',
                        text: 'Nice post!'
                    },
                    {
                        id: 2,
                        username: 'alex_wilson',
                        text: 'Great shot!'
                    }
                ]
            },
            {
                id: 2,
                imageUrl: 'https://example.com/post2.jpg',
                caption: 'Another post',
                likes: 30,
                comments: [
                    {
                        id: 1,
                        username: 'jane_smith',
                        text: 'Cool!'
                    },
                    {
                        id: 2,
                        username: 'alex_wilson',
                        text: 'Awesome!'
                    }
                ]
            },
            {
                id: 3,
                imageUrl: 'https://example.com/post3.jpg',
                caption: 'My latest photo',
                likes: 70,
                comments: [
                    {
                        id: 1,
                        username: 'jane_smith',
                        text: 'Beautiful!'
                    },
                    {
                        id: 2,
                        username: 'alex_wilson',
                        text: 'Stunning!'
                    }
                ]
            }
        ]
    },
    {
        username: 'EmilyJones',
        fullName: 'EmilyJones',
        bio: 'Photographer | Travel Lover',
        followers: 2000,
        following: 1000,
        posts: [
            {
                id: 1,
                imageUrl: 'https://example.com/post1.jpg',
                caption: 'Beautiful sunset!',
                likes: 100,
                comments: [
                    {
                        id: 1,
                        username: 'john_doe',
                        text: 'Amazing shot!'
                    },
                    {
                        id: 2,
                        username: 'alex_wilson',
                        text: 'I wish I was there!'
                    }
                ]
            },
            {
                id: 2,
                imageUrl: 'https://example.com/post2.jpg',
                caption: 'Exploring new places',
                likes: 80,
                comments: [
                    {
                        id: 1,
                        username: 'john_doe',
                        text: 'Looks amazing!'
                    },
                    {
                        id: 2,
                        username: 'alex_wilson',
                        text: 'I want to go there!'
                    }
                ]
            },
            {
                id: 3,
                imageUrl: 'https://example.com/post3.jpg',
                caption: 'Throwback to my favorite trip',
                likes: 120,
                comments: [
                    {
                        id: 1,
                        username: 'john_doe',
                        text: 'Memories!'
                    },
                    {
                        id: 2,
                        username: 'alex_wilson',
                        text: 'Incredible!'
                    }
                ]
            }
        ]
    },
    // Add more profiles here...
];

// Export the array for use in other files
module.exports = sampleProfiles;