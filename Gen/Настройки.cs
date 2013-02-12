using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gen
{
    internal class Настройки
    {
        public static readonly Dictionary<string,string> Проекты = ПолучитьКаталоги(); 
        public static readonly Dictionary<string,string> Токены = ПолучитьТокены();

        private static Dictionary<string, string> ЧитатьНастройки(string Имя)
        {
            var Настройки = new Dictionary<string, string>();
            var НомерКлюча = 0;
            foreach (var КлючПараметра in ConfigurationManager.AppSettings.AllKeys)
            {
                if (string.Compare(Имя + ".", 0, КлючПараметра,  0, Имя.Length + 1, true) == 0)
                {
                    Настройки.Add(КлючПараметра.Substring(Имя.Length + 1), ConfigurationManager.AppSettings[НомерКлюча]);
                }
                НомерКлюча++;
            }
            return Настройки;
        }

        private static Dictionary<string, string> ПолучитьКаталоги()
        {
            return ЧитатьНастройки("Проект");
        }

        private static Dictionary<string, string> ПолучитьТокены()
        {
            return ЧитатьНастройки("Токен");
        }
    }
}
