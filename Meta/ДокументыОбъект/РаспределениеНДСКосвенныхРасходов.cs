
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
	///Регламентная операция распеделения НДС косвенных расходов по видам реализации текущего периода
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РаспределениеНДСКосвенныхРасходов:ДокументОбъект
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Сумма выручки, полученной в рамках деятельности облагаемой ЕНВД
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(15.2)*/ ВыручкаЕНВД {get;set;}//Выручка ЕНВД
		///<summary>
		///Сумма выручки, полученной в рамках деятельности не облагаемой НДС
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(15.2)*/ ВыручкаБезНДС {get;set;}//Выручка без НДС
		///<summary>
		///Сумма выручки, полученной в рамках деятельности облагаемой НДС по ставке 0%
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.2)*/ ВыручкаНДС0 {get;set;}//Выручка НДС 0
		///<summary>
		///Сумма выручки, полученной в рамках деятельности облагаемой НДС по ставкам 18% и 10%
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(15.2)*/ ВыручкаНДС {get;set;}//Выручка НДС
		///<summary>
		///Начало налогового периода по НДС
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime НачалоПериода {get;set;}//Начало периода
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public object СчетСписанияНДС {get;set;}//Счет списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public object СубконтоСписанияНДС1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public object СубконтоСписанияНДС2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object СубконтоСписанияНДС3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object СчетСписанияНДСНУ {get;set;}//Счет списания НДС (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоСписанияНДСНУ1 {get;set;}//Субконто 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоСписанияНДСНУ2 {get;set;}//Субконто 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СубконтоСписанияНДСНУ3 {get;set;}//Субконто 3 (налоговый учет)
		[DataMember]
		[ProtoMember(25)]
		public bool ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат {get;set;}//Для списания НДС использовать счет и аналитику учета затрат
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатратСписанияНДС {get;set;}//Статья затрат списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
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
						Insert Into _Document547(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld15095RRef
						,_Fld15096RRef
						,_Fld15097
						,_Fld15098
						,_Fld15099
						,_Fld15100
						,_Fld15101
						,_Fld15102
						,_Fld15103RRef
						,_Fld15104RRef
						,_Fld15105RRef
						,_Fld15106RRef
						,_Fld15107RRef
						,_Fld15108RRef
						,_Fld15109RRef
						,_Fld15110RRef
						,_Fld15111
						,_Fld15112RRef
						,_Fld15113RRef
						,_Fld15114RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Ответственный
						,@Комментарий
						,@ВыручкаЕНВД
						,@ВыручкаБезНДС
						,@ВыручкаНДС0
						,@ВыручкаНДС
						,@НачалоПериода
						,@СчетСписанияНДС
						,@СубконтоСписанияНДС1
						,@СубконтоСписанияНДС2
						,@СубконтоСписанияНДС3
						,@СчетСписанияНДСНУ
						,@СубконтоСписанияНДСНУ1
						,@СубконтоСписанияНДСНУ2
						,@СубконтоСписанияНДСНУ3
						,@ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат
						,@НоменклатурнаяГруппа
						,@СтатьяЗатратСписанияНДС
						,@ПодразделениеОрганизации)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document547
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld15095RRef	= @Организация
						,_Fld15096RRef	= @Ответственный
						,_Fld15097	= @Комментарий
						,_Fld15098	= @ВыручкаЕНВД
						,_Fld15099	= @ВыручкаБезНДС
						,_Fld15100	= @ВыручкаНДС0
						,_Fld15101	= @ВыручкаНДС
						,_Fld15102	= @НачалоПериода
						,_Fld15103RRef	= @СчетСписанияНДС
						,_Fld15104RRef	= @СубконтоСписанияНДС1
						,_Fld15105RRef	= @СубконтоСписанияНДС2
						,_Fld15106RRef	= @СубконтоСписанияНДС3
						,_Fld15107RRef	= @СчетСписанияНДСНУ
						,_Fld15108RRef	= @СубконтоСписанияНДСНУ1
						,_Fld15109RRef	= @СубконтоСписанияНДСНУ2
						,_Fld15110RRef	= @СубконтоСписанияНДСНУ3
						,_Fld15111	= @ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат
						,_Fld15112RRef	= @НоменклатурнаяГруппа
						,_Fld15113RRef	= @СтатьяЗатратСписанияНДС
						,_Fld15114RRef	= @ПодразделениеОрганизации
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВыручкаЕНВД", ВыручкаЕНВД);
					Команда.Parameters.AddWithValue("ВыручкаБезНДС", ВыручкаБезНДС);
					Команда.Parameters.AddWithValue("ВыручкаНДС0", ВыручкаНДС0);
					Команда.Parameters.AddWithValue("ВыручкаНДС", ВыручкаНДС);
					Команда.Parameters.AddWithValue("НачалоПериода", НачалоПериода);
					Команда.Parameters.AddWithValue("СчетСписанияНДС", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДСНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат", ДляСписанияНДСиспользоватьСчетИАналитикуУчетаЗатрат);
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
					Команда.CommandText = @"Delete _Document547
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}