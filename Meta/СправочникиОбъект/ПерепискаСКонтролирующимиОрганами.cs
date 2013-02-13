
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
	public partial class ПерепискаСКонтролирующимиОрганами:СправочникОбъект
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
		public V82.Перечисления/*Ссылка*/.ТипыПерепискиСКонтролирующимиОрганами Тип;
		public V82.Перечисления/*Ссылка*/.СтатусыПисем Статус;
		///<summary>
		///Вспомогательное поле для реализации отбора по организации
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		public object Отправитель;
		public object Получатель;
		public string/*(0)*/ Содержание;
		public DateTime ДатаСообщения;//Дата сообщения
		public DateTime ДатаОтправки;//Дата отправки
		public string/*(36)*/ Идентификатор;
		public string/*(36)*/ ИдентификаторОснования;//Идентификатор основания
		public bool Ретроконверсия;
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
						Insert Into _Reference189(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld3163RRef
						,_Fld3164RRef
						,_Fld3165RRef
						,_Fld3168
						,_Fld3169
						,_Fld3170
						,_Fld3171
						,_Fld3172
						,_Fld3173)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Тип
						,@Статус
						,@Организация
						,@Содержание
						,@ДатаСообщения
						,@ДатаОтправки
						,@Идентификатор
						,@ИдентификаторОснования
						,@Ретроконверсия)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference189
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3163RRef	= @Тип
						,_Fld3164RRef	= @Статус
						,_Fld3165RRef	= @Организация
						,_Fld3168	= @Содержание
						,_Fld3169	= @ДатаСообщения
						,_Fld3170	= @ДатаОтправки
						,_Fld3171	= @Идентификатор
						,_Fld3172	= @ИдентификаторОснования
						,_Fld3173	= @Ретроконверсия
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Тип", Тип.Ключ());
					Команда.Parameters.AddWithValue("Статус", Статус.Ключ());
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Содержание", Содержание);
					Команда.Parameters.AddWithValue("ДатаСообщения", ДатаСообщения);
					Команда.Parameters.AddWithValue("ДатаОтправки", ДатаОтправки);
					Команда.Parameters.AddWithValue("Идентификатор", Идентификатор);
					Команда.Parameters.AddWithValue("ИдентификаторОснования", ИдентификаторОснования);
					Команда.Parameters.AddWithValue("Ретроконверсия", Ретроконверсия);
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
					Команда.CommandText = @"Delete _Reference189
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