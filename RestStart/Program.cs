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
            //Можно запустить проект с админскими правами, а можно студию запустить с админскими правами.

        }



        static void Main(string[] args)
        {
            try
            {
                ЗапуститьRest();
            }
            catch (Exception Исключение)
            {
                Console.WriteLine("\r\n");
                var Сообщение = (Исключение.InnerException == null) ? Исключение.Message : Исключение.InnerException.Message;
                Console.WriteLine("Ошибка запуска Rest: " + Сообщение);
            }
            Console.ReadLine();   
        }
    }
}
