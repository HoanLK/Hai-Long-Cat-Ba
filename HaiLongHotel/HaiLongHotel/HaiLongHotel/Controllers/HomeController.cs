using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HaiLongHotel.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult PhongNghi()
        {
            return View();
        }
        public ActionResult NhaHangSuKien()
        {
            return View();
        }
        public ActionResult DichVu()
        {
            return View();
        }
        public ActionResult BaiViet()
        {
            return View();
        }
    }
}