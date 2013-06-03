
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПлатежныйОрдерСписаниеДенежныхСредств:ДокументОбъект
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
		public object РасчетныйДокумент {get;set;}//Расчетный документ
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Получатель
		///<summary>
		///(Общ) Банковский счет контрагента
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Счет контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер входящего документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата входящего документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийСписаниеБезналичныхДенежныхСредств ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СубконтоДт1 {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СубконтоДт2 {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СубконтоДт3 {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		///<summary>
		///(Общ) Валюта, в которой подотчетник должен отчитаться за истраченные деньги
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.Валюты ВалютаВзаиморасчетовРаботника {get;set;}//Валюта взаиморасчетов работника
		[DataMember]
		[ProtoMember(35)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(36)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(37)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(38)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(39)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(40)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public object СчетУчетаРасчетовСКонтрагентомНУ {get;set;}//Счет учета расчетов с контрагентом НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public object СубконтоНУДт1 {get;set;}//Субконто НУ Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public object СубконтоНУДт2 {get;set;}//Субконто НУ Дт2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(44)]
		public object СубконтоНУДт3 {get;set;}//Субконто НУ Дт3
		[DataMember]
		[ProtoMember(45)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(46)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(47)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(48)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		///<summary>
		///(Упр) срок погашения аванса подотчетником
		///</summary>
		[DataMember]
		[ProtoMember(49)]
		public DateTime ДатаПогашенияАванса {get;set;}//Дата погашения аванса
		[DataMember]
		[ProtoMember(50)]
		public V82.ДокументыСсылка.АвансовыйОтчет РасчетныйДокументРаботника {get;set;}//Расчетный документ работника
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
						Insert Into _Document519(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld13457RRef
						,_Fld13458RRef
						,_Fld13459RRef
						,_Fld13460RRef
						,_Fld13461
						,_Fld13462
						,_Fld13463RRef
						,_Fld13464
						,_Fld13465
						,_Fld13466RRef
						,_Fld13467
						,_Fld13468
						,_Fld13469RRef
						,_Fld13470
						,_Fld13471RRef
						,_Fld13472RRef
						,_Fld13473RRef
						,_Fld13474RRef
						,_Fld13475
						,_Fld13476RRef
						,_Fld13477RRef
						,_Fld13478
						,_Fld13479RRef
						,_Fld13480RRef
						,_Fld13481
						,_Fld13482
						,_Fld13483
						,_Fld13484
						,_Fld13485
						,_Fld13486RRef
						,_Fld13487RRef
						,_Fld13488RRef
						,_Fld13489RRef
						,_Fld13490RRef
						,_Fld13491
						,_Fld13492
						,_Fld13493
						,_Fld13494
						,_Fld13495
						,_Fld13496RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@СчетОрганизации
						,@Контрагент
						,@СчетКонтрагента
						,@НомерВходящегоДокумента
						,@ДатаВходящегоДокумента
						,@ДоговорКонтрагента
						,@ОтраженоВОперУчете
						,@Комментарий
						,@ВалютаДокумента
						,@Оплачено
						,@ОтражатьВБухгалтерскомУчете
						,@Ответственный
						,@СуммаДокумента
						,@ВидОперации
						,@СтатьяДвиженияДенежныхСредств
						,@СчетУчетаРасчетовСКонтрагентом
						,@СубконтоДт1
						,@ДатаОплаты
						,@СубконтоДт2
						,@СубконтоДт3
						,@ОтражатьВНалоговомУчете
						,@ФизЛицо
						,@ВалютаВзаиморасчетовРаботника
						,@Содержание_УСН
						,@Графа4_УСН
						,@Графа5_УСН
						,@Графа6_УСН
						,@Графа7_УСН
						,@Подразделение
						,@СчетУчетаРасчетовСКонтрагентомНУ
						,@СубконтоНУДт1
						,@СубконтоНУДт2
						,@СубконтоНУДт3
						,@ДоходыЕНВД_УСН
						,@РасходыЕНВД_УСН
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@ДатаПогашенияАванса
						,@РасчетныйДокументРаботника)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document519
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld13457RRef	= @Организация
						,_Fld13458RRef	= @СчетОрганизации
						,_Fld13459RRef	= @Контрагент
						,_Fld13460RRef	= @СчетКонтрагента
						,_Fld13461	= @НомерВходящегоДокумента
						,_Fld13462	= @ДатаВходящегоДокумента
						,_Fld13463RRef	= @ДоговорКонтрагента
						,_Fld13464	= @ОтраженоВОперУчете
						,_Fld13465	= @Комментарий
						,_Fld13466RRef	= @ВалютаДокумента
						,_Fld13467	= @Оплачено
						,_Fld13468	= @ОтражатьВБухгалтерскомУчете
						,_Fld13469RRef	= @Ответственный
						,_Fld13470	= @СуммаДокумента
						,_Fld13471RRef	= @ВидОперации
						,_Fld13472RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld13473RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld13474RRef	= @СубконтоДт1
						,_Fld13475	= @ДатаОплаты
						,_Fld13476RRef	= @СубконтоДт2
						,_Fld13477RRef	= @СубконтоДт3
						,_Fld13478	= @ОтражатьВНалоговомУчете
						,_Fld13479RRef	= @ФизЛицо
						,_Fld13480RRef	= @ВалютаВзаиморасчетовРаботника
						,_Fld13481	= @Содержание_УСН
						,_Fld13482	= @Графа4_УСН
						,_Fld13483	= @Графа5_УСН
						,_Fld13484	= @Графа6_УСН
						,_Fld13485	= @Графа7_УСН
						,_Fld13486RRef	= @Подразделение
						,_Fld13487RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld13488RRef	= @СубконтоНУДт1
						,_Fld13489RRef	= @СубконтоНУДт2
						,_Fld13490RRef	= @СубконтоНУДт3
						,_Fld13491	= @ДоходыЕНВД_УСН
						,_Fld13492	= @РасходыЕНВД_УСН
						,_Fld13493	= @НДС_УСН
						,_Fld13494	= @РучнаяНастройка_УСН
						,_Fld13495	= @ДатаПогашенияАванса
						,_Fld13496RRef	= @РасчетныйДокументРаботника
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("ДатаПогашенияАванса", ДатаПогашенияАванса);
					Команда.Parameters.AddWithValue("РасчетныйДокументРаботника", РасчетныйДокументРаботника.Ссылка);
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
					Команда.CommandText = @"Delete _Document519
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}