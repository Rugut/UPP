using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Gen
{
    internal class ЗагрузкаПроекта
    {
        public readonly Ожидания Ожидания = new Ожидания();
        public delegate void ОбработатьФайл(string Проект, string Каталог, string Файл, string Содержание);

        public void ВыполнитьЗапрос(ОбработатьФайл ОбработатьФайл)
        {
            using (var Подключение = new SqlConnection(ConfigurationManager.ConnectionStrings["БазаДанныхПроекта"].ConnectionString))
            {
                Подключение.Open();
                using (var Команда = Подключение.CreateCommand())
                {
                    Команда.CommandText = "Select Проект, Каталог, Вид, Код from dbo.V82КлассыNet(@ИдентификаторБазы)"; //Where Проект = 'ExtJs'"; 
                    Команда.Parameters.Add("ИдентификаторБазы",Настройки.ИдентификаторБазы);
                    using (var РезультатЗапроса = Команда.ExecuteReader())
                    {
                        while (РезультатЗапроса.Read())
                        {
                            var Строка = new object[РезультатЗапроса.FieldCount];
                            РезультатЗапроса.GetValues(Строка);
                            //ОбработатьФайл((string)Строка[0], (string)Строка[1], (string)Строка[2], (string)Строка[3]);
                            var МаркерВызоваДелегата = ОбработатьФайл.BeginInvoke((string)Строка[0], (string)Строка[1], (string)Строка[2], (string)Строка[3], null, null);
                            Ожидания.Add(МаркерВызоваДелегата.AsyncWaitHandle);
                        }
                    }
                }
            }
        }
    }

}