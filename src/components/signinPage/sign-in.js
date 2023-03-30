import React, { Fragment } from "react";

class Signin extends React.Component {
        render() {
            return (

                <a href="/sign-in">зарегистрироваться</a>
                
             )
        }
}
const Link = () => (
    
        <Fragment>
        <h1>зарегистрироваться</h1>
        <LoremText />
        </Fragment>
    
  );

  const LoremText = () => (
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
export default Signin
// class Signin extends React.Component {
//     render() {
//         return (
//         <form class="form-signin">
//             <img class="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
//             <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
//             <label for="inputEmail" class="sr-only">Email address</label>
//             <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
//             <label for="inputPassword" class="sr-only">Password</label>
//             <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
//             <div class="checkbox mb-3">
//                 <label>
//                 <input type="checkbox" value="remember-me"> Remember me</input>
//                 </label>
//             </div>
//             <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//             <p class="mt-5 mb-3 text-muted">&copy; 2022 - 2023 </p>
//         </form>
//         )
//     }
// }

// export default Signin