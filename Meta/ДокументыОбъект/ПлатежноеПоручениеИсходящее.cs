
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
	public partial class ПлатежноеПоручениеИсходящее:ДокументОбъект
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
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Получатель
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
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
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ) электронно, почтой, телеграфом
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(15)*/ ВидПлатежа {get;set;}//Вид платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(1)*/ ОчередностьПлатежа {get;set;}//Очередность платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ НазначениеПлатежа {get;set;}//Назначение платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(0)*/ ТекстПлательщика {get;set;}//Текст плательщика
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
		public string/*(0)*/ ТекстПолучателя {get;set;}//Текст получателя
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(12)*/ ИННПлательщика {get;set;}//ИНН плательщика
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(9)*/ КПППлательщика {get;set;}//КПП плательщика
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public string/*(12)*/ ИННПолучателя {get;set;}//ИНН получателя
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public string/*(9)*/ КПППолучателя {get;set;}//КПП получателя
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Регл) Код бюджетной классификации доходов РФ
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public string/*(20)*/ КодБК {get;set;}//Код БК
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Регл) Код ОКАТО сборщика платежей
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public string/*(11)*/ КодОКАТО {get;set;}//Код ОКАТО
		///<summary>
		///(Регл) Дата документа - основания перечисления  налога, сбора или иного платежа
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public DateTime ПоказательДаты {get;set;}//Показатель даты
		///<summary>
		///(Регл) Номер документа - основания перечисления  налога, сбора или иного платежа
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public string/*(18)*/ ПоказательНомера {get;set;}//Показатель номера
		///<summary>
		///(Регл) Условное обозначение основания налогового платежа
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public string/*(2)*/ ПоказательОснования {get;set;}//Показатель основания
		///<summary>
		///(Регл) Условное обозначение периода, за который перечисляется налог
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public string/*(10)*/ ПоказательПериода {get;set;}//Показатель периода
		///<summary>
		///(Регл) Условное обозначение типа налогового платежа
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public string/*(2)*/ ПоказательТипа {get;set;}//Показатель типа платежа
		///<summary>
		///(Регл) Статус составителя платежного документа на перечисление налогов, сборов и иных обязательных платежей
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public string/*(2)*/ СтатусСоставителя {get;set;}//Статус составителя платежного документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийППИсходящее ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public object СубконтоДт1 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(44)]
		public object СубконтоДт2 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(45)]
		public object СубконтоДт3 {get;set;}//Субконто Дт1
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(46)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(47)]
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		///<summary>
		///(общ)
		///</summary>
		[DataMember]
		[ProtoMember(48)]
		public V82.ДокументыСсылка.ДоговорЗаймаСРаботником ДоговорЗайма {get;set;}//Договор займа
		///<summary>
		///(Общ) Валюта, в которой работник отчитывается за полученный займ
		///</summary>
		[DataMember]
		[ProtoMember(49)]
		public V82.СправочникиСсылка.Валюты ВалютаВзаиморасчетовРаботника {get;set;}//Валюта взаиморасчетов работника
		///<summary>
		///(общ)
		///</summary>
		[DataMember]
		[ProtoMember(50)]
		public bool ЧастичнаяОплата {get;set;}//По документу происходит оплата частями
		[DataMember]
		[ProtoMember(51)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(52)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(53)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(54)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(55)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(56)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(57)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(58)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(59)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(60)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(61)]
		public object СчетУчетаРасчетовСКонтрагентомНУ {get;set;}//Счет учета расчетов с контрагентом НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(62)]
		public object СубконтоНУДт1 {get;set;}//Субконто НУ Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(63)]
		public object СубконтоНУДт2 {get;set;}//Субконто НУ Дт2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(64)]
		public object СубконтоНУДт3 {get;set;}//Субконто НУ Дт3
		///<summary>
		///(Упр) срок погашения аванса подотчетником
		///</summary>
		[DataMember]
		[ProtoMember(65)]
		public DateTime ДатаПогашенияАванса {get;set;}//Дата погашения аванса
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(66)]
		public V82.ДокументыСсылка.АвансовыйОтчет РасчетныйДокументРаботника {get;set;}//Расчетный документ работника
		[DataMember]
		[ProtoMember(67)]
		public bool УдалитьПеречислениеВБюджет {get;set;}//Удалить перечисление в бюджет
		[DataMember]
		[ProtoMember(68)]
		public V82.Перечисления/*Ссылка*/.УдалитьВидыПеречисленийВБюджет УдалитьВидПеречисленияВБюджет {get;set;}//Удалить вид перечисления в бюджет
		[DataMember]
		[ProtoMember(69)]
		public bool ПеречислениеВБюджет {get;set;}//Перечисление в бюджет
		[DataMember]
		[ProtoMember(70)]
		public V82.Перечисления/*Ссылка*/.ВидыПеречисленийВБюджет ВидПеречисленияВБюджет {get;set;}//Вид перечисления в бюджет
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
						Insert Into _Document389(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8655RRef
						,_Fld8673RRef
						,_Fld8650RRef
						,_Fld8641
						,_Fld8672RRef
						,_Fld8643RRef
						,_Fld8640
						,_Fld8660
						,_Fld8653
						,_Fld8675
						,_Fld8638RRef
						,_Fld8676
						,_Fld8649
						,_Fld8654
						,_Fld8645
						,_Fld8651
						,_Fld8646
						,_Fld8652
						,_Fld8656RRef
						,_Fld8657
						,_Fld8647
						,_Fld8659
						,_Fld8648
						,_Fld8661
						,_Fld8662
						,_Fld8663
						,_Fld8664
						,_Fld8665
						,_Fld8666
						,_Fld8671
						,_Fld8639RRef
						,_Fld8667RRef
						,_Fld8674RRef
						,_Fld8668RRef
						,_Fld8669RRef
						,_Fld8670RRef
						,_Fld8658
						,_Fld8677RRef
						,_Fld8642RRef
						,_Fld8637RRef
						,_Fld8678
						,_Fld8679
						,_Fld8680
						,_Fld8681
						,_Fld8682
						,_Fld8683
						,_Fld8684
						,_Fld8685
						,_Fld8686
						,_Fld8687
						,_Fld8688RRef
						,_Fld8689RRef
						,_Fld8690RRef
						,_Fld8691RRef
						,_Fld8692RRef
						,_Fld21841
						,_Fld21842RRef
						,_Fld27234
						,_Fld27235RRef
						,_Fld27236
						,_Fld27237RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@СчетОрганизации
						,@Контрагент
						,@ДатаОплаты
						,@СчетКонтрагента
						,@ДоговорКонтрагента
						,@ВидПлатежа
						,@ОчередностьПлатежа
						,@НазначениеПлатежа
						,@ТекстПлательщика
						,@ВалютаДокумента
						,@ТекстПолучателя
						,@Комментарий
						,@Оплачено
						,@ИННПлательщика
						,@КПППлательщика
						,@ИННПолучателя
						,@КПППолучателя
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@КодБК
						,@ОтраженоВОперУчете
						,@КодОКАТО
						,@ПоказательДаты
						,@ПоказательНомера
						,@ПоказательОснования
						,@ПоказательПериода
						,@ПоказательТипа
						,@СтатусСоставителя
						,@СуммаДокумента
						,@ВидОперации
						,@СтатьяДвиженияДенежныхСредств
						,@СчетУчетаРасчетовСКонтрагентом
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@ОтражатьВНалоговомУчете
						,@ФизЛицо
						,@ДоговорЗайма
						,@ВалютаВзаиморасчетовРаботника
						,@ЧастичнаяОплата
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
						,@СчетУчетаРасчетовСКонтрагентомНУ
						,@СубконтоНУДт1
						,@СубконтоНУДт2
						,@СубконтоНУДт3
						,@ДатаПогашенияАванса
						,@РасчетныйДокументРаботника
						,@УдалитьПеречислениеВБюджет
						,@УдалитьВидПеречисленияВБюджет
						,@ПеречислениеВБюджет
						,@ВидПеречисленияВБюджет)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document389
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8655RRef	= @Организация
						,_Fld8673RRef	= @СчетОрганизации
						,_Fld8650RRef	= @Контрагент
						,_Fld8641	= @ДатаОплаты
						,_Fld8672RRef	= @СчетКонтрагента
						,_Fld8643RRef	= @ДоговорКонтрагента
						,_Fld8640	= @ВидПлатежа
						,_Fld8660	= @ОчередностьПлатежа
						,_Fld8653	= @НазначениеПлатежа
						,_Fld8675	= @ТекстПлательщика
						,_Fld8638RRef	= @ВалютаДокумента
						,_Fld8676	= @ТекстПолучателя
						,_Fld8649	= @Комментарий
						,_Fld8654	= @Оплачено
						,_Fld8645	= @ИННПлательщика
						,_Fld8651	= @КПППлательщика
						,_Fld8646	= @ИННПолучателя
						,_Fld8652	= @КПППолучателя
						,_Fld8656RRef	= @Ответственный
						,_Fld8657	= @ОтражатьВБухгалтерскомУчете
						,_Fld8647	= @КодБК
						,_Fld8659	= @ОтраженоВОперУчете
						,_Fld8648	= @КодОКАТО
						,_Fld8661	= @ПоказательДаты
						,_Fld8662	= @ПоказательНомера
						,_Fld8663	= @ПоказательОснования
						,_Fld8664	= @ПоказательПериода
						,_Fld8665	= @ПоказательТипа
						,_Fld8666	= @СтатусСоставителя
						,_Fld8671	= @СуммаДокумента
						,_Fld8639RRef	= @ВидОперации
						,_Fld8667RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld8674RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld8668RRef	= @СубконтоДт1
						,_Fld8669RRef	= @СубконтоДт2
						,_Fld8670RRef	= @СубконтоДт3
						,_Fld8658	= @ОтражатьВНалоговомУчете
						,_Fld8677RRef	= @ФизЛицо
						,_Fld8642RRef	= @ДоговорЗайма
						,_Fld8637RRef	= @ВалютаВзаиморасчетовРаботника
						,_Fld8678	= @ЧастичнаяОплата
						,_Fld8679	= @Содержание_УСН
						,_Fld8680	= @Графа4_УСН
						,_Fld8681	= @Графа5_УСН
						,_Fld8682	= @Графа6_УСН
						,_Fld8683	= @Графа7_УСН
						,_Fld8684	= @ДоходыЕНВД_УСН
						,_Fld8685	= @РасходыЕНВД_УСН
						,_Fld8686	= @НДС_УСН
						,_Fld8687	= @РучнаяНастройка_УСН
						,_Fld8688RRef	= @Подразделение
						,_Fld8689RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld8690RRef	= @СубконтоНУДт1
						,_Fld8691RRef	= @СубконтоНУДт2
						,_Fld8692RRef	= @СубконтоНУДт3
						,_Fld21841	= @ДатаПогашенияАванса
						,_Fld21842RRef	= @РасчетныйДокументРаботника
						,_Fld27234	= @УдалитьПеречислениеВБюджет
						,_Fld27235RRef	= @УдалитьВидПеречисленияВБюджет
						,_Fld27236	= @ПеречислениеВБюджет
						,_Fld27237RRef	= @ВидПеречисленияВБюджет
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ВидПлатежа", ВидПлатежа);
					Команда.Parameters.AddWithValue("ОчередностьПлатежа", ОчередностьПлатежа);
					Команда.Parameters.AddWithValue("НазначениеПлатежа", НазначениеПлатежа);
					Команда.Parameters.AddWithValue("ТекстПлательщика", ТекстПлательщика);
					Команда.Parameters.AddWithValue("ТекстПолучателя", ТекстПолучателя);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ИННПлательщика", ИННПлательщика);
					Команда.Parameters.AddWithValue("КПППлательщика", КПППлательщика);
					Команда.Parameters.AddWithValue("ИННПолучателя", ИННПолучателя);
					Команда.Parameters.AddWithValue("КПППолучателя", КПППолучателя);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("КодБК", КодБК);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("КодОКАТО", КодОКАТО);
					Команда.Parameters.AddWithValue("ПоказательДаты", ПоказательДаты);
					Команда.Parameters.AddWithValue("ПоказательНомера", ПоказательНомера);
					Команда.Parameters.AddWithValue("ПоказательОснования", ПоказательОснования);
					Команда.Parameters.AddWithValue("ПоказательПериода", ПоказательПериода);
					Команда.Parameters.AddWithValue("ПоказательТипа", ПоказательТипа);
					Команда.Parameters.AddWithValue("СтатусСоставителя", СтатусСоставителя);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ДоговорЗайма", ДоговорЗайма.Ссылка);
					Команда.Parameters.AddWithValue("ЧастичнаяОплата", ЧастичнаяОплата);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("ДатаПогашенияАванса", ДатаПогашенияАванса);
					Команда.Parameters.AddWithValue("РасчетныйДокументРаботника", РасчетныйДокументРаботника.Ссылка);
					Команда.Parameters.AddWithValue("УдалитьПеречислениеВБюджет", УдалитьПеречислениеВБюджет);
					Команда.Parameters.AddWithValue("УдалитьВидПеречисленияВБюджет", УдалитьВидПеречисленияВБюджет.Ключ());
					Команда.Parameters.AddWithValue("ПеречислениеВБюджет", ПеречислениеВБюджет);
					Команда.Parameters.AddWithValue("ВидПеречисленияВБюджет", ВидПеречисленияВБюджет.Ключ());
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
					Команда.CommandText = @"Delete _Document389
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}