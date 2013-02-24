
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
	public partial class ОтправкиФСС:СправочникОбъект
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
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public object ОтчетСсылка {get;set;}//Ссылка на регламентированный отчет
		[DataMember]
		[ProtoMember(9)]
		public string/*(100)*/ ИдентификаторОтправкиНаСервере {get;set;}//Идентификатор отправки на сервере
		[DataMember]
		[ProtoMember(10)]
		public ХранилищеЗначения ЗашифрованныйПакет {get;set;}//Зашифрованный пакет выгрузки
		///<summary>
		///Имя файла зашифрованного пакета выгрузки
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(100)*/ ИмяФайлаПакета {get;set;}//Имя файла пакета
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.СтатусыОтправки СтатусОтправки {get;set;}//Статус отправки
		///<summary>
		///Протокол обработки
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public ХранилищеЗначения Протокол {get;set;}//Протокол обработки
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОтправки {get;set;}//Дата отправки
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаПолученияРезультата {get;set;}//Дата получения результата
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public string/*(4)*/ КодОрганаФСС {get;set;}//Код органа ФСС
		///<summary>
		///Квитанция успеха
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public ХранилищеЗначения Квитанция {get;set;}
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
						Insert Into _Reference184(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld3133
						,_Fld3134
						,_Fld3135
						,_Fld3136RRef
						,_Fld3137
						,_Fld3138
						,_Fld3139
						,_Fld3140RRef
						,_Fld3141
						,_Fld3142)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@ИдентификаторОтправкиНаСервере
						,@ЗашифрованныйПакет
						,@ИмяФайлаПакета
						,@СтатусОтправки
						,@Протокол
						,@ДатаОтправки
						,@ДатаПолученияРезультата
						,@Организация
						,@КодОрганаФСС
						,@Квитанция)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference184
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3133	= @ИдентификаторОтправкиНаСервере
						,_Fld3134	= @ЗашифрованныйПакет
						,_Fld3135	= @ИмяФайлаПакета
						,_Fld3136RRef	= @СтатусОтправки
						,_Fld3137	= @Протокол
						,_Fld3138	= @ДатаОтправки
						,_Fld3139	= @ДатаПолученияРезультата
						,_Fld3140RRef	= @Организация
						,_Fld3141	= @КодОрганаФСС
						,_Fld3142	= @Квитанция
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ИдентификаторОтправкиНаСервере", ИдентификаторОтправкиНаСервере);
					Команда.Parameters.AddWithValue("ЗашифрованныйПакет",new byte[0]);
					Команда.Parameters.AddWithValue("ИмяФайлаПакета", ИмяФайлаПакета);
					Команда.Parameters.AddWithValue("СтатусОтправки", СтатусОтправки.Ключ());
					Команда.Parameters.AddWithValue("Протокол",new byte[0]);
					Команда.Parameters.AddWithValue("ДатаОтправки", ДатаОтправки);
					Команда.Parameters.AddWithValue("ДатаПолученияРезультата", ДатаПолученияРезультата);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("КодОрганаФСС", КодОрганаФСС);
					Команда.Parameters.AddWithValue("Квитанция",new byte[0]);
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
					Команда.CommandText = @"Delete _Reference184
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПриЗаписи(/**/)
		{
			//Оповестить("Изменение статуса отправки регламентированного отчета", СтатусОтправки, ОтчетСсылка);
		}
	}
}