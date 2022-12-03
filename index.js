const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function render(){

for (let post of posts)

document.getElementById("container").innerHTML+=

 `<div class= "post-container">
                    
                            <div class = "avatar">  
                               
                                 <img src="${post.avatar}" > 
                    
                                    <div class = "avatar-description">
                                <p class= "bold" >${post.name}</p>
                                
                                <p > ${post.location}</p>
                                    </div>
                                    
                                    
                            </div>
                        
                    <div class = "post">
                                <img src="${post.post}"  >
                                <div class ="icon">
                                    <i class="fa-regular fa-heart like-btn" id="${post.username}"></i>   
                              <i class="fa-regular fa-comment"></i>
                                <i class="fa-regular fa-paper-plane"></i>
                                </div>
                                <p class="bold"><span class = "likes">${post.likes}</span> Likes</p>
                    </div>
                        <p class="comment" >${post.comment}</p>
                        
                        
                    </div>
`}





render()

