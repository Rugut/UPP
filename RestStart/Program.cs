using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Rest;

namespace RestStart
{
    class Program
    {
        public static void ЗапуститьRest()
        {
            //http://ru.wikipedia.org/wiki/REST
            WebHost.Запустить();
            //Может закончиться ошибкой, отказано в доступе.
            //Можно запустить проект с админскими правами, а можно студию.

        }



        static void Main(string[] args)
        {
            ЗапуститьRest();
            Console.ReadLine();
        }
    }
}
