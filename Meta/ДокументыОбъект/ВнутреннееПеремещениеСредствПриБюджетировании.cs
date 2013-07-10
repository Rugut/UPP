
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВнутреннееПеремещениеСредствПриБюджетировании:ДокументОбъект
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
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public DateTime ПериодПланирования {get;set;}//Период планирования
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьяОборотов {get;set;}//Статья оборотов
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаИзмеренияИсточник {get;set;}//Единица измерения источник
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаИзмеренияПриемник {get;set;}//Единица измерения приемник
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Подразделения ЦФОИсточник {get;set;}//ЦФО - источник
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Подразделения ЦФОПриемник {get;set;}//ЦФО - приемник
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Проекты ПроектИсточник {get;set;}//Проект - источник
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Проекты ПроектПриемник {get;set;}//Проект - приемник
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Контрагенты КонтрагентИсточник {get;set;}//Контрагент - источник
		[DataMember]
		[ProtoMember(19)]
		public object НоменклатураИсточник {get;set;}//Номенклатура - источник
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Валюты ВалютаИсточник {get;set;}//Валюта - источник
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.3)*/ КоличествоИсточник {get;set;}//Количество источник
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(15.3)*/ КоличествоПриемник {get;set;}//Количество источник
		[DataMember]
		[ProtoMember(23)]
		public decimal/*(15.2)*/ Сумма {get;set;}//Сумма (в валюте источника)
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(10.4)*/ КурсИсточник {get;set;}//Курс валюты источника
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(10)*/ КратностьИсточник {get;set;}//Кратность валюты источника
		[DataMember]
		[ProtoMember(26)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.Контрагенты КонтрагентПриемник {get;set;}//Контрагент - приемник
		[DataMember]
		[ProtoMember(30)]
		public object НоменклатураПриемник {get;set;}//Номенклатура - приемник
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.Валюты ВалютаПриемник {get;set;}//Валюта - приемник
		[DataMember]
		[ProtoMember(32)]
		public decimal/*(10.4)*/ КурсПриемник {get;set;}//Курс валюты приемника
		[DataMember]
		[ProtoMember(33)]
		public decimal/*(10)*/ КратностьПриемник {get;set;}//Кратность валюты приемника
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
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
						Insert Into _Document230(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld3489RRef
						,_Fld3490
						,_Fld3491RRef
						,_Fld3492RRef
						,_Fld3493RRef
						,_Fld3494RRef
						,_Fld3495RRef
						,_Fld3496RRef
						,_Fld3497RRef
						,_Fld3498RRef
						,_Fld3500RRef
						,_Fld3501
						,_Fld3502
						,_Fld3503
						,_Fld3504
						,_Fld3505
						,_Fld3506RRef
						,_Fld3507RRef
						,_Fld3508
						,_Fld3509RRef
						,_Fld3511RRef
						,_Fld3512
						,_Fld3513)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Сценарий
						,@ПериодПланирования
						,@СтатьяОборотов
						,@ЕдиницаИзмеренияИсточник
						,@ЕдиницаИзмеренияПриемник
						,@ЦФОИсточник
						,@ЦФОПриемник
						,@ПроектИсточник
						,@ПроектПриемник
						,@КонтрагентИсточник
						,@ВалютаИсточник
						,@КоличествоИсточник
						,@КоличествоПриемник
						,@Сумма
						,@КурсИсточник
						,@КратностьИсточник
						,@Состояние
						,@Ответственный
						,@Комментарий
						,@КонтрагентПриемник
						,@ВалютаПриемник
						,@КурсПриемник
						,@КратностьПриемник)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document230
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld3489RRef	= @Сценарий
						,_Fld3490	= @ПериодПланирования
						,_Fld3491RRef	= @СтатьяОборотов
						,_Fld3492RRef	= @ЕдиницаИзмеренияИсточник
						,_Fld3493RRef	= @ЕдиницаИзмеренияПриемник
						,_Fld3494RRef	= @ЦФОИсточник
						,_Fld3495RRef	= @ЦФОПриемник
						,_Fld3496RRef	= @ПроектИсточник
						,_Fld3497RRef	= @ПроектПриемник
						,_Fld3498RRef	= @КонтрагентИсточник
						,_Fld3500RRef	= @ВалютаИсточник
						,_Fld3501	= @КоличествоИсточник
						,_Fld3502	= @КоличествоПриемник
						,_Fld3503	= @Сумма
						,_Fld3504	= @КурсИсточник
						,_Fld3505	= @КратностьИсточник
						,_Fld3506RRef	= @Состояние
						,_Fld3507RRef	= @Ответственный
						,_Fld3508	= @Комментарий
						,_Fld3509RRef	= @КонтрагентПриемник
						,_Fld3511RRef	= @ВалютаПриемник
						,_Fld3512	= @КурсПриемник
						,_Fld3513	= @КратностьПриемник
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ПериодПланирования", ПериодПланирования);
					Команда.Parameters.AddWithValue("КоличествоИсточник", КоличествоИсточник);
					Команда.Parameters.AddWithValue("КоличествоПриемник", КоличествоПриемник);
					Команда.Parameters.AddWithValue("Сумма", Сумма);
					Команда.Parameters.AddWithValue("КурсИсточник", КурсИсточник);
					Команда.Parameters.AddWithValue("КратностьИсточник", КратностьИсточник);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КурсПриемник", КурсПриемник);
					Команда.Parameters.AddWithValue("КратностьПриемник", КратностьПриемник);
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
					Команда.CommandText = @"Delete _Document230
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}