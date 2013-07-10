
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
	public partial class ПлатежныйОрдерПоступлениеДенежныхСредств:ДокументОбъект
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
		public object РасчетныйДокумент {get;set;}//Расчетный документ
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПоступлениеБезналичныхДенежныхСредств ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер входящего документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата входящего документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Плательщик
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
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
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоКт1 {get;set;}//Субконто Кт1
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
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(41)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(42)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(43)]
		public bool ОтражатьРазницуВКурсеВСоставеОперационныхРасходов {get;set;}//Отражать разницу в курсе в составе операционных расходов
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
		public decimal/*(10.4)*/ КурсНаДатуПриобретенияРеализацииВалюты {get;set;}//Курс на дату приобретения реализации валюты
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(53)]
		public string/*(0)*/ НазначениеПлатежа {get;set;}//Назначение платежа
		[DataMember]
		[ProtoMember(54)]
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
						Insert Into _Document392(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8885RRef
						,_Fld8886RRef
						,_Fld18617
						,_Fld18618
						,_Fld8883RRef
						,_Fld8888
						,_Fld8881RRef
						,_Fld8892
						,_Fld8887
						,_Fld8879RRef
						,_Fld8889RRef
						,_Fld8890
						,_Fld8898
						,_Fld8891RRef
						,_Fld8893
						,_Fld8895RRef
						,_Fld8896RRef
						,_Fld8897RRef
						,_Fld8884
						,_Fld8882RRef
						,_Fld8880RRef
						,_Fld8894RRef
						,_Fld8899
						,_Fld8900
						,_Fld8901
						,_Fld8902
						,_Fld8903
						,_Fld8904
						,_Fld8905
						,_Fld8908RRef
						,_Fld8906
						,_Fld8907
						,_Fld8909
						,_Fld8912RRef
						,_Fld8913RRef
						,_Fld8914RRef
						,_Fld8915RRef
						,_Fld8916RRef
						,_Fld8917RRef
						,_Fld8918RRef
						,_Fld8919RRef
						,_Fld8910
						,_Fld8911
						,_Fld8920)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ВидОперации
						,@НомерВходящегоДокумента
						,@ДатаВходящегоДокумента
						,@ДоговорКонтрагента
						,@Комментарий
						,@Контрагент
						,@Оплачено
						,@ОтраженоВОперУчете
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@СтатьяДвиженияДенежныхСредств
						,@ДатаОплаты
						,@СубконтоКт1
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
						,@Подразделение
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@ОтражатьРазницуВКурсеВСоставеОперационныхРасходов
						,@СчетУчетаРасчетовСКонтрагентомНУ
						,@СубконтоНУКт1
						,@СубконтоНУКт2
						,@СубконтоНУКт3
						,@СтатьяЗатрат
						,@НоменклатурнаяГруппа
						,@ПодразделениеЗатраты
						,@ПодразделениеОрганизацииЗатраты
						,@КурсНаДатуПриобретенияРеализацииВалюты
						,@НазначениеПлатежа
						,@СуммаУслуг)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document392
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8885RRef	= @ВалютаДокумента
						,_Fld8886RRef	= @ВидОперации
						,_Fld18617	= @НомерВходящегоДокумента
						,_Fld18618	= @ДатаВходящегоДокумента
						,_Fld8883RRef	= @ДоговорКонтрагента
						,_Fld8888	= @Комментарий
						,_Fld8881RRef	= @Контрагент
						,_Fld8892	= @Оплачено
						,_Fld8887	= @ОтраженоВОперУчете
						,_Fld8879RRef	= @Организация
						,_Fld8889RRef	= @Ответственный
						,_Fld8890	= @ОтражатьВБухгалтерскомУчете
						,_Fld8898	= @ОтражатьВНалоговомУчете
						,_Fld8891RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld8893	= @ДатаОплаты
						,_Fld8895RRef	= @СубконтоКт1
						,_Fld8896RRef	= @СубконтоКт2
						,_Fld8897RRef	= @СубконтоКт3
						,_Fld8884	= @СуммаДокумента
						,_Fld8882RRef	= @СчетКонтрагента
						,_Fld8880RRef	= @СчетОрганизации
						,_Fld8894RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld8899	= @Содержание_УСН
						,_Fld8900	= @Графа4_УСН
						,_Fld8901	= @Графа5_УСН
						,_Fld8902	= @Графа6_УСН
						,_Fld8903	= @Графа7_УСН
						,_Fld8904	= @ДоходыЕНВД_УСН
						,_Fld8905	= @РасходыЕНВД_УСН
						,_Fld8908RRef	= @Подразделение
						,_Fld8906	= @НДС_УСН
						,_Fld8907	= @РучнаяНастройка_УСН
						,_Fld8909	= @ОтражатьРазницуВКурсеВСоставеОперационныхРасходов
						,_Fld8912RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld8913RRef	= @СубконтоНУКт1
						,_Fld8914RRef	= @СубконтоНУКт2
						,_Fld8915RRef	= @СубконтоНУКт3
						,_Fld8916RRef	= @СтатьяЗатрат
						,_Fld8917RRef	= @НоменклатурнаяГруппа
						,_Fld8918RRef	= @ПодразделениеЗатраты
						,_Fld8919RRef	= @ПодразделениеОрганизацииЗатраты
						,_Fld8910	= @КурсНаДатуПриобретенияРеализацииВалюты
						,_Fld8911	= @НазначениеПлатежа
						,_Fld8920	= @СуммаУслуг
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("СубконтоКт1", Guid.Empty);
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
					Команда.Parameters.AddWithValue("ОтражатьРазницуВКурсеВСоставеОперационныхРасходов", ОтражатьРазницуВКурсеВСоставеОперационныхРасходов);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУКт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУКт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУКт3", Guid.Empty);
					Команда.Parameters.AddWithValue("КурсНаДатуПриобретенияРеализацииВалюты", КурсНаДатуПриобретенияРеализацииВалюты);
					Команда.Parameters.AddWithValue("НазначениеПлатежа", НазначениеПлатежа);
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
					Команда.CommandText = @"Delete _Document392
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}