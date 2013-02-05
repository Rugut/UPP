using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Rest;
using V82;
using V82.СправочникиТест;

namespace UPP
{
    class Program
    {
        public static void ЗаполнитьТестовыеДанные()
        {
            V82.СправочникиТест.Контрагенты.Создать1000();

        }

        public static void ЗапуститьRest()
        {
            //http://ru.wikipedia.org/wiki/REST
            WebHost.Запустить();

        }



        static void Main(string[] args)
        {
            ЗаполнитьТестовыеДанные();
            //ЗапуститьRest();

        }
    }
}
