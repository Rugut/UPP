using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Reflection;
using Rest;
using ServiceStack.Text;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиТест;
using V82.УниверсальныеКоллекцииЗначений;

namespace UPP
{
    class Program
    {
        private static void Ждать(WaitHandle[] waitHandle)
        {
            if (waitHandle.Length == 0)
            {
                return;
            }
            else if (waitHandle.Length <= 64)
            {
                WaitHandle.WaitAll(waitHandle);
                return;
            }
            var waitHandles = new WaitHandle[64];
            for (var sourceIndex = 0; sourceIndex < waitHandle.Length; sourceIndex += 64)
            {
                if (waitHandle.Length - sourceIndex < 64)
                {
                    Array.Resize(ref waitHandles, waitHandle.Length - sourceIndex);
                    Array.Copy(waitHandle, sourceIndex, waitHandles, 0, waitHandle.Length - sourceIndex);
                }
                else
                {
                    Array.Copy(waitHandle, sourceIndex, waitHandles, 0, 64);
                }
                WaitHandle.WaitAll(waitHandles);
            }
        }

        private delegate void ДелегатСправочникСоздать1000(Type Справочник);

        private static void СправочникСоздать1000(Type Справочник)
        {
                var Метод = Справочник.GetMethod("Создать1000");
                if (Метод!=null)
                {
                    try
                    {
                        Метод.Invoke(null, new object[0]);
                    }
                    catch (Exception)
                    {
                    }
                }
        }

        public static void ЗаполнитьТестовыеДанные()
        {
            ДелегатСправочникСоздать1000 Делегат = СправочникСоздать1000;
            var Ожидания = new List<WaitHandle>();
            foreach (var Справочник in СправочникТест.ВсеТипы)
            {
                var iAsyncResult = Делегат.BeginInvoke(Справочник, null, null);
                Ожидания.Add(iAsyncResult.AsyncWaitHandle);

            }
            Ждать(Ожидания.ToArray());
            //Характеристики
            //V82.СправочникиТест.СпособыОтраженияЗарплатыВРеглУчете.Создать1000();
            //V82.СправочникиТест.РасходыБудущихПериодов.Создать1000();
        }

        public static void ЗапуститьRest()
        {
            //http://ru.wikipedia.org/wiki/REST
            WebHost.Запустить();
            //Может закончиться ошибкой, отказано в доступе.
            //Можно запустить проект с админскими правами, а можно студию.

        }

        public static void ТестироватьRest()
        {
            //http://ru.wikipedia.org/wiki/REST
            var ЗапросБанка = V82.Rest.СправочникиТест.Банки.НайтиПоКоду("043735824");
            if (ЗапросБанка != null)
            {
                ЗапросБанка.Наименование += "<2>";
                V82.Rest.СправочникиТест.Банки.ЗаписатьНовый(ЗапросБанка);
            }



        }
        




        static void Main(string[] args)
        {
            //ЗаполнитьТестовыеДанные();
            //ЗапуститьRest();
            //ТестироватьRest();

            //dynamic м = new Массив();
            //м.Добавить(1);


            //var Стр = new Структура("Булево,Число,Дата,Строка", false, 10, "Дата", "Привет" );

            //var p = V82.Перечисления.ABCКлассификация.AКласс;
            //var s = p.ToJson();
            //Console.WriteLine(s);

            V82.Справочники.Организации.ВыбратьПоСсылке(10, Guid.Empty,new Guid("ffffffff-ffff-ffff-ffff-ffffffffffff"));

            //Console.ReadLine();
        }
    }
}
