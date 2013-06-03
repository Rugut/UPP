
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
	public partial class ПлатежноеПоручениеВходящее:ДокументОбъект
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПоступлениеБезналичныхДенежныхСредств ВидОперации {get;set;}//Вид операции
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
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Плательщик
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
		public bool Оплачено {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ЧастичнаяОплата {get;set;}//По документу происходит оплата частями
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоКт1 {get;set;}//Субконто Кт1
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СубконтоКт2 {get;set;}//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СубконтоКт3 {get;set;}//Субконто Кт1
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ) Банковский счет контрагента
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Счет контрагента
		///<summary>
		///(Общ) Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		[DataMember]
		[ProtoMember(33)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(34)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(35)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(36)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(37)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(38)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(39)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(40)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(41)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(42)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public string/*(0)*/ НазначениеПлатежа {get;set;}//Назначение платежа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(44)]
		public object СчетУчетаРасчетовСКонтрагентомНУ {get;set;}//Счет учета расчетов с контрагентом НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(45)]
		public object СубконтоНУКт1 {get;set;}//Субконто НУ Кт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(46)]
		public object СубконтоНУКт2 {get;set;}//Субконто НУ Кт2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(47)]
		public object СубконтоНУКт3 {get;set;}//Субконто НУ Кт3
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(48)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(49)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(50)]
		public V82.СправочникиСсылка.Подразделения ПодразделениеЗатраты {get;set;}//Подразделение (затраты)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(51)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизацииЗатраты {get;set;}//Подразделение организации затраты
		[DataMember]
		[ProtoMember(52)]
		public decimal/*(15.2)*/ СуммаУслуг {get;set;}//Сумма услуг
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
						Insert Into _Document514(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld13038RRef
						,_Fld13039RRef
						,_Fld13040RRef
						,_Fld13042
						,_Fld13043RRef
						,_Fld13044
						,_Fld13045
						,_Fld13046
						,_Fld13047RRef
						,_Fld13048RRef
						,_Fld13049
						,_Fld13050
						,_Fld13051
						,_Fld13052
						,_Fld13053RRef
						,_Fld13054RRef
						,_Fld13055
						,_Fld13056RRef
						,_Fld13057RRef
						,_Fld13058
						,_Fld13059RRef
						,_Fld13060RRef
						,_Fld13061RRef
						,_Fld13062
						,_Fld13063
						,_Fld13064
						,_Fld13065
						,_Fld13066
						,_Fld13067
						,_Fld13068
						,_Fld13069
						,_Fld13070
						,_Fld13071RRef
						,_Fld13072
						,_Fld13073RRef
						,_Fld13074RRef
						,_Fld13075RRef
						,_Fld13076RRef
						,_Fld13077RRef
						,_Fld13078RRef
						,_Fld13079RRef
						,_Fld13080RRef
						,_Fld13081)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ВидОперации
						,@ДоговорКонтрагента
						,@Комментарий
						,@Контрагент
						,@НомерВходящегоДокумента
						,@ДатаВходящегоДокумента
						,@Оплачено
						,@Организация
						,@Ответственный
						,@ОтраженоВОперУчете
						,@ОтражатьВНалоговомУчете
						,@ДатаОплаты
						,@ЧастичнаяОплата
						,@СтатьяДвиженияДенежныхСредств
						,@СубконтоКт1
						,@ОтражатьВБухгалтерскомУчете
						,@СубконтоКт2
						,@СубконтоКт3
						,@СуммаДокумента
						,@СчетКонтрагента
						,@СчетОрганизации
						,@СчетУчетаРасчетовСКонтрагентом
						,@Содержание_УСН
						,@Графа4_УСН
						,@Графа5_УСН
						,@Графа6_УСН
						,@Графа7_УСН
						,@ДоходыЕНВД_УСН
						,@РасходыЕНВД_УСН
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@Подразделение
						,@НазначениеПлатежа
						,@СчетУчетаРасчетовСКонтрагентомНУ
						,@СубконтоНУКт1
						,@СубконтоНУКт2
						,@СубконтоНУКт3
						,@СтатьяЗатрат
						,@НоменклатурнаяГруппа
						,@ПодразделениеЗатраты
						,@ПодразделениеОрганизацииЗатраты
						,@СуммаУслуг)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document514
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld13038RRef	= @ВалютаДокумента
						,_Fld13039RRef	= @ВидОперации
						,_Fld13040RRef	= @ДоговорКонтрагента
						,_Fld13042	= @Комментарий
						,_Fld13043RRef	= @Контрагент
						,_Fld13044	= @НомерВходящегоДокумента
						,_Fld13045	= @ДатаВходящегоДокумента
						,_Fld13046	= @Оплачено
						,_Fld13047RRef	= @Организация
						,_Fld13048RRef	= @Ответственный
						,_Fld13049	= @ОтраженоВОперУчете
						,_Fld13050	= @ОтражатьВНалоговомУчете
						,_Fld13051	= @ДатаОплаты
						,_Fld13052	= @ЧастичнаяОплата
						,_Fld13053RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld13054RRef	= @СубконтоКт1
						,_Fld13055	= @ОтражатьВБухгалтерскомУчете
						,_Fld13056RRef	= @СубконтоКт2
						,_Fld13057RRef	= @СубконтоКт3
						,_Fld13058	= @СуммаДокумента
						,_Fld13059RRef	= @СчетКонтрагента
						,_Fld13060RRef	= @СчетОрганизации
						,_Fld13061RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld13062	= @Содержание_УСН
						,_Fld13063	= @Графа4_УСН
						,_Fld13064	= @Графа5_УСН
						,_Fld13065	= @Графа6_УСН
						,_Fld13066	= @Графа7_УСН
						,_Fld13067	= @ДоходыЕНВД_УСН
						,_Fld13068	= @РасходыЕНВД_УСН
						,_Fld13069	= @НДС_УСН
						,_Fld13070	= @РучнаяНастройка_УСН
						,_Fld13071RRef	= @Подразделение
						,_Fld13072	= @НазначениеПлатежа
						,_Fld13073RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld13074RRef	= @СубконтоНУКт1
						,_Fld13075RRef	= @СубконтоНУКт2
						,_Fld13076RRef	= @СубконтоНУКт3
						,_Fld13077RRef	= @СтатьяЗатрат
						,_Fld13078RRef	= @НоменклатурнаяГруппа
						,_Fld13079RRef	= @ПодразделениеЗатраты
						,_Fld13080RRef	= @ПодразделениеОрганизацииЗатраты
						,_Fld13081	= @СуммаУслуг
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ЧастичнаяОплата", ЧастичнаяОплата);
					Команда.Parameters.AddWithValue("СубконтоКт1", Guid.Empty);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("СубконтоКт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("НазначениеПлатежа", НазначениеПлатежа);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУКт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУКт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУКт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СуммаУслуг", СуммаУслуг);
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
					Команда.CommandText = @"Delete _Document514
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}