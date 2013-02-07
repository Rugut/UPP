using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack.WebHost.Endpoints;

namespace Rest
{

    public class WebHost
    {    
        public class AppHost : AppHostHttpListenerBase
        {
            public AppHost() : base("web-сервис", typeof(WebHost).Assembly) { }

            public override void Configure(Funq.Container container)
            {

            }

        }


        public static void Запустить()
        {
            const string listeningOn = "http://*:1337/";
            var appHost = new AppHost();
            appHost.Init();
            appHost.Start(listeningOn);

            Console.WriteLine("AppHost Created at {0}, listening on {1}", DateTime.Now, listeningOn);
            Console.ReadKey();
        }
    }
}
