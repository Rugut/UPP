using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Gen
{
    class Program
    {
        private static void СохранитьПроект()
        {
            var ВерсияGen = Assembly.GetExecutingAssembly().GetName().Version.ToString();
            var Старт = DateTime.Now.Ticks;
            Console.WriteLine("__________________________________________________________________________");
            Console.WriteLine("Версия Gen : " + ВерсияGen);
            Console.WriteLine("Запущено в : " + DateTime.Now.ToString("HH:mm:ss.fff"));
            Console.WriteLine("Идентификатор базы : " + Настройки.ИдентификаторБазы);
            var СохранениеПроекта = new СохранениеПроекта();
            var ЗагрузкаПроекта = new ЗагрузкаПроекта();
            //ЗагрузкаПроекта.ВыполнитьЗапрос(СохранениеПроекта.СохранитьФайл);
            ЗагрузкаПроекта.ПолучитьМодулиОбъектов(СохранениеПроекта.СохранитьФайл);
            var ВремяЗапроса = ((DateTime.Now.Ticks - Старт) / 10000);// / 1000
            Console.WriteLine("Время запроса: " + (ВремяЗапроса * .001) + " сек.");
            ЗагрузкаПроекта.Ожидания.Ждать();
            СохранениеПроекта.Ожидания.Ждать();
            var Время = ((DateTime.Now.Ticks - Старт) / 10000 );// / 1000
            Console.WriteLine("Выполнено за: " + (Время*.001)+ " сек.");
            Console.WriteLine("Файлов всего: " + СохранениеПроекта.КоличествоФайловВсего);
            Console.WriteLine("Файлов к записи: " + СохранениеПроекта.КоличествоФайловКЗаписи);
            Console.WriteLine("Файлов записано: " + СохранениеПроекта.КоличествоФайловЗаписано);
            Console.WriteLine("__________________________________________________________________________");
        }

        static void Main(string[] args)
        {
            while (true)
            {
                try
                {
                    СохранитьПроект();
                }
                catch (Exception Исключение)
                {
                    Console.WriteLine("\r\n");
                    var Сообщение = (Исключение.InnerException == null) ? Исключение.Message : Исключение.InnerException.Message;
                    Console.WriteLine("Ошибка формирования: "+Сообщение);
                }
                break;
                //Console.ReadLine();                
            }



        }
    }
}
