function Navbar() 
{
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">MyReactApp</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">

      <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
        </li>

        <li class="nav-item active">
          <a class="nav-link" href="/Card">About Me <span class="sr-only"></span></a>
        </li>
  
        <li class="nav-item active">
          <a class="nav-link" href="/Contact">Contact <span class="sr-only"></span></a>
        </li>
  
      </div>
    </div>
  </nav>
  );
}
export default Navbar