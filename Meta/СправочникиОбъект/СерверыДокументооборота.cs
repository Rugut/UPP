
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
	public partial class СерверыДокументооборота:СправочникОбъект
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
		public string/*5*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*(255)*/ АдресЭлектроннойПочтыФНС {get;set;}//Адрес электронной почты для документооборота с ФНС
		[DataMember]
		[ProtoMember(9)]
		public decimal/*(5)*/ ДлительностьОжиданияСервера {get;set;}//Длительность ожидания сервера
		[DataMember]
		[ProtoMember(10)]
		public string/*(40)*/ Сертификат {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(255)*/ АдресЭлектроннойПочтыПФР {get;set;}//Адрес электронной почты для документооборота с ПФР
		[DataMember]
		[ProtoMember(12)]
		public string/*(255)*/ АдресЭлектроннойПочтыФСГС {get;set;}//Адрес электронной почты для документооборота с Росстатом
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
						Insert Into _Reference225(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld3392
						,_Fld3393
						,_Fld3394
						,_Fld3395
						,_Fld3396)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@АдресЭлектроннойПочтыФНС
						,@ДлительностьОжиданияСервера
						,@Сертификат
						,@АдресЭлектроннойПочтыПФР
						,@АдресЭлектроннойПочтыФСГС)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference225
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3392	= @АдресЭлектроннойПочтыФНС
						,_Fld3393	= @ДлительностьОжиданияСервера
						,_Fld3394	= @Сертификат
						,_Fld3395	= @АдресЭлектроннойПочтыПФР
						,_Fld3396	= @АдресЭлектроннойПочтыФСГС
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочтыФНС", АдресЭлектроннойПочтыФНС);
					Команда.Parameters.AddWithValue("ДлительностьОжиданияСервера", ДлительностьОжиданияСервера);
					Команда.Parameters.AddWithValue("Сертификат", Сертификат);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочтыПФР", АдресЭлектроннойПочтыПФР);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочтыФСГС", АдресЭлектроннойПочтыФСГС);
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
					Команда.CommandText = @"Delete _Reference225
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

		public void ПриЗаписи(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			if(true/*КонтекстЭДО <> Неопределено*/)
			{
				//КонтекстЭДО.ПриЗаписиОбъекта(ЭтотОбъект, Отказ);
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