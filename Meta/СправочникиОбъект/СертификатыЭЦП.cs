
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
	public partial class СертификатыЭЦП:СправочникОбъект
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
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*(150)*/ ДолжностьПоСертификату {get;set;}//Должность по сертификату
		[DataMember]
		[ProtoMember(8)]
		public bool ЗапомнитьПарольКСертификату {get;set;}//Запомнить пароль к сертификату
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ Назначение {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public bool ОграничитьДоступКСертификату {get;set;}//Ограничить доступ к сертификату
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public bool Отозван {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public string/*(255)*/ Отпечаток {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public string/*(50)*/ ПарольПользователя {get;set;}//Пароль пользователя
		///<summary>
		///Пользователь, кому доступен сертификат подписи
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Пользователи Пользователь {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public bool ПроверятьСоставИсполнителей {get;set;}//Проверять состав исполнителей
		///<summary>
		///Двоичные данные сертификата
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public ХранилищеЗначения ФайлСертификата {get;set;}//Файл сертификата
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
						Insert Into _Reference228(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld3409
						,_Fld3410
						,_Fld3411
						,_Fld3412
						,_Fld3413RRef
						,_Fld3414
						,_Fld3415
						,_Fld3416
						,_Fld3417RRef
						,_Fld3418
						,_Fld3419)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@ДолжностьПоСертификату
						,@ЗапомнитьПарольКСертификату
						,@Назначение
						,@ОграничитьДоступКСертификату
						,@Организация
						,@Отозван
						,@Отпечаток
						,@ПарольПользователя
						,@Пользователь
						,@ПроверятьСоставИсполнителей
						,@ФайлСертификата)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference228
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld3409	= @ДолжностьПоСертификату
						,_Fld3410	= @ЗапомнитьПарольКСертификату
						,_Fld3411	= @Назначение
						,_Fld3412	= @ОграничитьДоступКСертификату
						,_Fld3413RRef	= @Организация
						,_Fld3414	= @Отозван
						,_Fld3415	= @Отпечаток
						,_Fld3416	= @ПарольПользователя
						,_Fld3417RRef	= @Пользователь
						,_Fld3418	= @ПроверятьСоставИсполнителей
						,_Fld3419	= @ФайлСертификата
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ДолжностьПоСертификату", ДолжностьПоСертификату);
					Команда.Parameters.AddWithValue("ЗапомнитьПарольКСертификату", ЗапомнитьПарольКСертификату);
					Команда.Parameters.AddWithValue("Назначение", Назначение);
					Команда.Parameters.AddWithValue("ОграничитьДоступКСертификату", ОграничитьДоступКСертификату);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Отозван", Отозван);
					Команда.Parameters.AddWithValue("Отпечаток", Отпечаток);
					Команда.Parameters.AddWithValue("ПарольПользователя", ПарольПользователя);
					Команда.Parameters.AddWithValue("Пользователь", Пользователь.Ссылка);
					Команда.Parameters.AddWithValue("ПроверятьСоставИсполнителей", ПроверятьСоставИсполнителей);
					Команда.Parameters.AddWithValue("ФайлСертификата",new byte[0]);
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
					Команда.CommandText = @"Delete _Reference228
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}