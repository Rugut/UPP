
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class ПерепискаСКонтролирующимиОрганами:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.ТипыПерепискиСКонтролирующимиОрганами Тип {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.СтатусыПисем Статус {get;set;}
		///<summary>
		///Вспомогательное поле для реализации отбора по организации
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public object Отправитель {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public object Получатель {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Содержание {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаСообщения {get;set;}//Дата сообщения
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаОтправки {get;set;}//Дата отправки
		[DataMember]
		[ProtoMember(16)]
		public string/*(36)*/ Идентификатор {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public string/*(36)*/ ИдентификаторОснования {get;set;}//Идентификатор основания
		[DataMember]
		[ProtoMember(18)]
		public bool Ретроконверсия {get;set;}
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
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