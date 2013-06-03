
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
	public partial class ПереоценкаВалютныхСредств:ДокументОбъект
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		[DataMember]
		[ProtoMember(10)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public bool ВзаиморасчетыСКонтрагентами {get;set;}//Взаиморасчеты с контрагентами
		[DataMember]
		[ProtoMember(14)]
		public bool ВзаиморасчетыСПодотчетнымиЛицами {get;set;}//Взаиморасчеты с подотчетными лицами
		[DataMember]
		[ProtoMember(15)]
		public bool ДенежныеСредстваВКассах {get;set;}//Денежные средства в кассах
		[DataMember]
		[ProtoMember(16)]
		public bool ДенежныеСредстваНаБанковскихСчетах {get;set;}//Денежные средства на банковских счетах
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл.учет)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool ПереоценкаВалютныхСредствРегл {get;set;}//Переоценка валютных средств 
		///<summary>
		///(Регл.учет)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ПереоценкаРасчетовВУсловныхЕдиницахРегл {get;set;}//Переоценка расчетов в условных единицах
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
						Insert Into _Document499(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12592
						,_Fld12593
						,_Fld12594
						,_Fld12595RRef
						,_Fld12596
						,_Fld12597
						,_Fld12598
						,_Fld12599
						,_Fld12600
						,_Fld12601RRef
						,_Fld12602RRef
						,_Fld12603
						,_Fld12604)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Организация
						,@ВзаиморасчетыСКонтрагентами
						,@ВзаиморасчетыСПодотчетнымиЛицами
						,@ДенежныеСредстваВКассах
						,@ДенежныеСредстваНаБанковскихСчетах
						,@Комментарий
						,@Ответственный
						,@Подразделение
						,@ПереоценкаВалютныхСредствРегл
						,@ПереоценкаРасчетовВУсловныхЕдиницахРегл)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document499
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12592	= @ОтражатьВУправленческомУчете
						,_Fld12593	= @ОтражатьВБухгалтерскомУчете
						,_Fld12594	= @ОтражатьВНалоговомУчете
						,_Fld12595RRef	= @Организация
						,_Fld12596	= @ВзаиморасчетыСКонтрагентами
						,_Fld12597	= @ВзаиморасчетыСПодотчетнымиЛицами
						,_Fld12598	= @ДенежныеСредстваВКассах
						,_Fld12599	= @ДенежныеСредстваНаБанковскихСчетах
						,_Fld12600	= @Комментарий
						,_Fld12601RRef	= @Ответственный
						,_Fld12602RRef	= @Подразделение
						,_Fld12603	= @ПереоценкаВалютныхСредствРегл
						,_Fld12604	= @ПереоценкаРасчетовВУсловныхЕдиницахРегл
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ВзаиморасчетыСКонтрагентами", ВзаиморасчетыСКонтрагентами);
					Команда.Parameters.AddWithValue("ВзаиморасчетыСПодотчетнымиЛицами", ВзаиморасчетыСПодотчетнымиЛицами);
					Команда.Parameters.AddWithValue("ДенежныеСредстваВКассах", ДенежныеСредстваВКассах);
					Команда.Parameters.AddWithValue("ДенежныеСредстваНаБанковскихСчетах", ДенежныеСредстваНаБанковскихСчетах);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ПереоценкаВалютныхСредствРегл", ПереоценкаВалютныхСредствРегл);
					Команда.Parameters.AddWithValue("ПереоценкаРасчетовВУсловныхЕдиницахРегл", ПереоценкаРасчетовВУсловныхЕдиницахРегл);
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
					Команда.CommandText = @"Delete _Document499
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}