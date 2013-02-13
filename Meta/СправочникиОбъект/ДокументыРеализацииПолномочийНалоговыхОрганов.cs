
using System;
using System.Data.SqlClient;
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class ДокументыРеализацииПолномочийНалоговыхОрганов:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		public Guid Ссылка;
		public long Версия;
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления;
		public bool Предопределенный;
		public Guid Владелец;
		public bool ЭтоГруппа;
		public Guid Родитель;
		public string/*9*/ Код;
		public string/*150*/ Наименование;
		public V82.СправочникиСсылка.НалоговыеОрганы НалоговыйОрган;//Налоговый орган
		public V82.СправочникиСсылка.Организации Организация;
		public string/*(150)*/ Идентификатор;
		public string/*(150)*/ ИдентификаторОснования;//Идентификатор основания
		///<summary>
		///Вид налогового документа
		///</summary>
		public object ВидДокумента;//Вид документа
		public string/*(150)*/ НомерДокумента;//Номер документа
		public DateTime ДатаДокумента;//Дата документа
		public DateTime ДатаСообщения;//Дата сообщения
		public DateTime ДатаОтправки;//Дата отправки
		public void Записать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference89(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2249RRef
						,_Fld2250RRef
						,_Fld2251
						,_Fld2252
						,_Fld2254
						,_Fld2255
						,_Fld2256
						,_Fld2257)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@НалоговыйОрган
						,@Организация
						,@Идентификатор
						,@ИдентификаторОснования
						,@НомерДокумента
						,@ДатаДокумента
						,@ДатаСообщения
						,@ДатаОтправки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference89
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2249RRef	= @НалоговыйОрган
						,_Fld2250RRef	= @Организация
						,_Fld2251	= @Идентификатор
						,_Fld2252	= @ИдентификаторОснования
						,_Fld2254	= @НомерДокумента
						,_Fld2255	= @ДатаДокумента
						,_Fld2256	= @ДатаСообщения
						,_Fld2257	= @ДатаОтправки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("НалоговыйОрган", НалоговыйОрган.Ссылка);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Идентификатор", Идентификатор);
					Команда.Parameters.AddWithValue("ИдентификаторОснования", ИдентификаторОснования);
					Команда.Parameters.AddWithValue("НомерДокумента", НомерДокумента);
					Команда.Parameters.AddWithValue("ДатаДокумента", ДатаДокумента);
					Команда.Parameters.AddWithValue("ДатаСообщения", ДатаСообщения);
					Команда.Parameters.AddWithValue("ДатаОтправки", ДатаОтправки);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference89
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			if(true/*КонтекстЭДО <> Неопределено*/)
			{
				//КонтекстЭДО.ПередЗаписьюОбъекта(ЭтотОбъект, Отказ);
			}
		}

		public void ОбработкаЗаполнения(/*СообщениеОснование*/)
		{
			if(true/*КонтекстЭДО <> Неопределено*/)
			{
				//КонтекстЭДО.ОбработкаЗаполненияОбъекта(ЭтотОбъект, СообщениеОснование);
			}
		}
	}
}