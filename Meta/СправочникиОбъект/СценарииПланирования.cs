
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
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СценарииПланирования:СправочникОбъект
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
		public V82.СправочникиСсылка.СценарииПланирования Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ДетализацияПланирования ДетализацияПланирования {get;set;}//Детализация планирования
		[DataMember]
		[ProtoMember(12)]
		public bool УчетПоСуммам {get;set;}//Учет по суммам
		[DataMember]
		[ProtoMember(13)]
		public bool УчетПоКоличеству {get;set;}//Учет по количеству
		///<summary>
		///Валюта данных сценария
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.СпособыПланирования СпособПланирования {get;set;}//Способ планирования
		///<summary>
		///Продолжительность цикла планирования по сценарию (в периодах планирования)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10)*/ ПродолжительностьЦикла {get;set;}//Продолжительность цикла
		///<summary>
		///Начало интервала планирования
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public DateTime НачалоПлана {get;set;}//Начало плана
		///<summary>
		///Конец интервала планирования
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public DateTime КонецПлана {get;set;}//Конец плана
		///<summary>
		///Годовая норма доходности для сценария
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(6.3)*/ НормаДоходности {get;set;}//Норма доходности, %
		///<summary>
		///Признак использования отдельной линейки курсов валют для сценария
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool ИспользоватьКурсыСценария {get;set;}//Использовать курсы сценария
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
						Insert Into _Reference169(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2012RRef
						,_Fld2013RRef
						,_Fld2014
						,_Fld2015
						,_Fld2016RRef
						,_Fld2017RRef
						,_Fld2018
						,_Fld2019
						,_Fld2020
						,_Fld2021
						,_Fld2022)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@Периодичность
						,@ДетализацияПланирования
						,@УчетПоСуммам
						,@УчетПоКоличеству
						,@Валюта
						,@СпособПланирования
						,@ПродолжительностьЦикла
						,@НачалоПлана
						,@КонецПлана
						,@НормаДоходности
						,@ИспользоватьКурсыСценария)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference169
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2012RRef	= @Периодичность
						,_Fld2013RRef	= @ДетализацияПланирования
						,_Fld2014	= @УчетПоСуммам
						,_Fld2015	= @УчетПоКоличеству
						,_Fld2016RRef	= @Валюта
						,_Fld2017RRef	= @СпособПланирования
						,_Fld2018	= @ПродолжительностьЦикла
						,_Fld2019	= @НачалоПлана
						,_Fld2020	= @КонецПлана
						,_Fld2021	= @НормаДоходности
						,_Fld2022	= @ИспользоватьКурсыСценария
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Периодичность", Периодичность.Ключ());
					Команда.Parameters.AddWithValue("ДетализацияПланирования", ДетализацияПланирования.Ключ());
					Команда.Parameters.AddWithValue("УчетПоСуммам", УчетПоСуммам);
					Команда.Parameters.AddWithValue("УчетПоКоличеству", УчетПоКоличеству);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("СпособПланирования", СпособПланирования.Ключ());
					Команда.Parameters.AddWithValue("ПродолжительностьЦикла", ПродолжительностьЦикла);
					Команда.Parameters.AddWithValue("НачалоПлана", НачалоПлана);
					Команда.Parameters.AddWithValue("КонецПлана", КонецПлана);
					Команда.Parameters.AddWithValue("НормаДоходности", НормаДоходности);
					Команда.Parameters.AddWithValue("ИспользоватьКурсыСценария", ИспользоватьКурсыСценария);
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
					Команда.CommandText = @"Delete _Reference169
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}