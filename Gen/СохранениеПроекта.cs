using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Gen
{
    internal class СохранениеПроекта
    {
        private static readonly List<string> Директории = new List<string>();

        private static string ПолучитьИПроверитьДиректорию(string Проект, string Каталог)
        {
            var Директория = Настройки.Проекты[Проект].TrimEnd('\\') + "\\" + Каталог.TrimEnd('\\');
            if (!Директории.Contains(Директория))
            {
                if (!Directory.Exists(Директория))
                {
                    Directory.CreateDirectory(Директория);
                }
            }
            return Директория;
        }

        private static string ЗаменитьТокены(string Содержание)
        {
            foreach (var Токен in Настройки.Токены)
            {
                var Позиция = Содержание.IndexOf(Токен.Key, 0, StringComparison.OrdinalIgnoreCase);
                if (Позиция != -1)
                {
                    Содержание = Содержание.Replace(Токен.Key, Токен.Value);
                }
            }
            return Содержание;
        }

        private static Encoding ВыборКодировки(string ИмяФайла)
        {
            if (string.Compare(ИмяФайла, ИмяФайла.Length - 5, ".html", 0, 5, true) == 0)
            {
                return Encoding.GetEncoding(1251);
            }
            return Encoding.UTF8; 
        }

        public long КоличествоФайловВсего = 0;
        public long КоличествоФайловКЗаписи = 0;
        public long КоличествоФайловЗаписано = 0;
        public readonly Ожидания Ожидания = new Ожидания();

        private static byte[] СложитьДваПотока(byte[] Поток1, byte[] Поток2)
        {
            var Буфер = new byte[Поток1.Length + Поток2.Length];
            Array.Copy(Поток1, Буфер, Поток1.Length);
            Array.Copy(Поток2, 0,Буфер,  Поток1.Length, Поток2.Length);
            return Буфер;
        }

        public void СохранитьФайл(string Проект, string Каталог, string Файл, string Содержание)
        {
            Interlocked.Increment(ref КоличествоФайловВсего);
            var ИмяФайла = ПолучитьИПроверитьДиректорию(Проект, Каталог) + "\\" + Файл;
            var Кодировка = ВыборКодировки(Файл);
            var Сигнатура = Кодировка.GetPreamble();
            Содержание = ЗаменитьТокены(Содержание);

            var НовыйПоток =СложитьДваПотока(Сигнатура,Кодировка.GetBytes(Содержание));

            var СтарыйПоток = new byte[0];
            if (File.Exists(ИмяФайла))
            {
                СтарыйПоток = File.ReadAllBytes(ИмяФайла);
            }
            var ЗаписыватьФайл = НовыйПоток.Length != СтарыйПоток.Length;
            if (!ЗаписыватьФайл)
            {
                ЗаписыватьФайл = !CRC.ПотокиИдентичны(НовыйПоток, СтарыйПоток);
            }
            if (ЗаписыватьФайл)
            {
                Interlocked.Increment(ref КоличествоФайловКЗаписи);
                //File.WriteAllBytes(ИмяФайла, НовыйПоток);
                //Interlocked.Increment(ref КоличествоФайловЗаписано);
                using (var ПотокФайла = new FileStream(ИмяФайла, FileMode.Create, FileAccess.ReadWrite, FileShare.None, 4096, true))
                {
                    var МаркерВызова = ПотокФайла.BeginWrite(НовыйПоток, 0, НовыйПоток.Length, ОбратныйВызовСохраненияФайла, null);
                    Ожидания.Add(МаркерВызова.AsyncWaitHandle);
                }

            }
        }

        private void ОбратныйВызовСохраненияФайла(IAsyncResult МаркерВызова)
        {
            Interlocked.Increment(ref КоличествоФайловЗаписано);
        }
    }
}
