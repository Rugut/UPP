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
        public static readonly bool АвтоЗавершение = СтрокаВБулевоПоУмолчаниюЛожь(ConfigurationManager.AppSettings["АвтоЗавершение"]);
        public static readonly string ИдентификаторБазы = ConfigurationManager.AppSettings["ИдентификаторБазы"];
        public static readonly bool ВыводитьNet = СтрокаВБулевоПоУмолчаниюЛожь(ConfigurationManager.AppSettings["ВыводитьNet"]);
        public static readonly bool Выводить1C = СтрокаВБулевоПоУмолчаниюЛожь(ConfigurationManager.AppSettings["Выводить1C"]);
        private static Dictionary<string, string> ЧитатьНастройки(string Имя)
        {
            var Настройки = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase);
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

        private static bool СтрокаВБулевоПоУмолчаниюЛожь(string стрБулево)
        {
            if (string.IsNullOrEmpty(стрБулево))
            {
                return false;
            }
            return стрБулево[0] == '1';
        }

    }
}
