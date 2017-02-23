﻿using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CMS.Controllers
{
    [RoutePrefix("tim-kiem")]
    public class TimKiemController : Controller
    {
        private HaiLongCatBaEntities db = new HaiLongCatBaEntities();

        [Route]
        public ActionResult Index()
        {
            return View();
        }
    }
}