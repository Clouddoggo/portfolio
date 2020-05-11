import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" class="media justify-content-center">
                <img class="d-flex align-self-center mr-3 rounded-circle" width="20%" height="10%" src={require("../images/no-copyright.jpg")} alt="A photo of me" />
                <div class="media-body">
                    <h3 class="mt-0">About me</h3>
                    <p>I like reading books
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo nulla ac placerat euismod. Suspendisse lobortis, neque ut sagittis faucibus, arcu libero sodales quam, sed vulputate arcu purus in dui. Fusce a purus eget neque sodales tincidunt vitae et lectus. Proin congue vitae dolor eu volutpat. Suspendisse a facilisis nulla, blandit aliquet lorem. Donec fermentum pharetra efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis, orci quis aliquam pretium, justo erat hendrerit nulla, ac gravida odio orci vitae diam.
                    Etiam efficitur purus sit amet est sollicitudin, et tincidunt velit dignissim. Nulla facilisi. Aliquam efficitur laoreet efficitur. Pellentesque dictum tristique ante sit amet mollis. Aenean ultricies purus non libero dictum finibus. Suspendisse et rhoncus nibh, eu tincidunt metus. Aliquam vehicula laoreet luctus. Phasellus at porta erat, sed maximus diam. Nullam accumsan feugiat quam, nec aliquet neque tincidunt ac. Aenean eget elit nec tortor luctus vulputate. Vestibulum quis odio fringilla, fermentum nunc sit amet, blandit ipsum.
                </p>
                </div>
            </section>

        );
    }
}

export default About;