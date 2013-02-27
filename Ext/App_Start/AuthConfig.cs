using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Membership.OpenAuth;

namespace Ext
{
    internal static class AuthConfig
    {
        public static void RegisterOpenAuth()
        {
            // На странице http://go.microsoft.com/fwlink/?LinkId=252803 см. сведения о настройке этого приложения ASP.NET
            // с поддержкой ведения журнала во внешних службах.

            //OpenAuth.AuthenticationClients.AddTwitter(
            //    consumerKey: "ваш ключ пользователя Twitter",
            //    consumerSecret: "ваш секрет пользователя Twitter");

            //OpenAuth.AuthenticationClients.AddFacebook(
            //    appId: "ваш код приложения Facebook",
            //    appSecret: "ваш секрет приложения Facebook");

            //OpenAuth.AuthenticationClients.AddMicrosoft(
            //    clientId: "ваш клиентский ИД учетной записи Майкрософт",
            //    clientSecret: "ваш клиентский секрет учетной записи Майкрософт");

            //OpenAuth.AuthenticationClients.AddGoogle();
        }
    }
}