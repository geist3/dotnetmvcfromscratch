using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace dotnetconsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }

        public static IWebHost BuildWebHost(string[] args){return null;}
    }
}
