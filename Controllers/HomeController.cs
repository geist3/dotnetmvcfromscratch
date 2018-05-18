using Microsoft.AspNetCore.Mvc;

namespace dotnetconsole {
    public class HomeController : Controller
    {
        public IActionResult Index(){
            return View();
        }
    }
}