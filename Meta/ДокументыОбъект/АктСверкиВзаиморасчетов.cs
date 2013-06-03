
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
	[ProtoContract]
	[DataContract]
	public partial class АктСверкиВзаиморасчетов:ДокументОбъект
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
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public object Сделка {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаНачала {get;set;}//Дата начала
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ФизическиеЛица ПредставительОрганизации {get;set;}//Представитель организации
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов ПредставительКонтрагента {get;set;}//Представитель контрагента
		///<summary>
		///(Общ) Остаток на начало 
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(15.2)*/ ОстатокНаНачало {get;set;}//Остаток на начало
		///<summary>
		///(Общ) Остаток на конец
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ Расхождение {get;set;}
		///<summary>
		///Признак согласования сверки
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool СверкаСогласована {get;set;}//Сверка согласована
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
						Insert Into _Document303(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4828RRef
						,_Fld4829RRef
						,_Fld4830RRef
						,_Fld4832
						,_Fld4833
						,_Fld4834
						,_Fld4835RRef
						,_Fld4836RRef
						,_Fld4837RRef
						,_Fld4838RRef
						,_Fld4839
						,_Fld4840
						,_Fld4841)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Контрагент
						,@ДоговорКонтрагента
						,@ДатаНачала
						,@ДатаОкончания
						,@Комментарий
						,@Ответственный
						,@ВалютаДокумента
						,@ПредставительОрганизации
						,@ПредставительКонтрагента
						,@ОстатокНаНачало
						,@Расхождение
						,@СверкаСогласована)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document303
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4828RRef	= @Организация
						,_Fld4829RRef	= @Контрагент
						,_Fld4830RRef	= @ДоговорКонтрагента
						,_Fld4832	= @ДатаНачала
						,_Fld4833	= @ДатаОкончания
						,_Fld4834	= @Комментарий
						,_Fld4835RRef	= @Ответственный
						,_Fld4836RRef	= @ВалютаДокумента
						,_Fld4837RRef	= @ПредставительОрганизации
						,_Fld4838RRef	= @ПредставительКонтрагента
						,_Fld4839	= @ОстатокНаНачало
						,_Fld4840	= @Расхождение
						,_Fld4841	= @СверкаСогласована
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОстатокНаНачало", ОстатокНаНачало);
					Команда.Parameters.AddWithValue("Расхождение", Расхождение);
					Команда.Parameters.AddWithValue("СверкаСогласована", СверкаСогласована);
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
					Команда.CommandText = @"Delete _Document303
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}