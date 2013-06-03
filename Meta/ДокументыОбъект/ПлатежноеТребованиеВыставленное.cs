
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
	public partial class ПлатежноеТребованиеВыставленное:ДокументОбъект
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
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ) Банковский счет контрагента
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Счет контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаОтсылкиДокументов {get;set;}//Дата отсылки документов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПоступлениеБезналичныхДенежныхСредств ВидОперации {get;set;}//Вид операции
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ) электронно, почтой, телеграфом
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(15)*/ ВидПлатежа {get;set;}//Вид платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(1)*/ ОчередностьПлатежа {get;set;}//Очередность платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(0)*/ ТекстПлательщика {get;set;}//Текст плательщика
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ ТекстПолучателя {get;set;}//Текст получателя
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
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(3)*/ СрокДляАкцепта {get;set;}//Срок для акцепта получателем (дней)
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public V82.Перечисления/*Ссылка*/.УсловияОплатыРасчетныхДокументов УсловиеОплаты {get;set;}//Условие оплаты
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public string/*(0)*/ ОснованиеДляБезакцептногоСписания {get;set;}//Основание для безакцептного списания
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СубконтоКт1 {get;set;}//Субконто Кт1
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(общ)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public bool ЧастичнаяОплата {get;set;}//По документу происходит оплата частями
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СубконтоКт2 {get;set;}//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СубконтоКт3 {get;set;}//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public string/*(0)*/ НазначениеПлатежа {get;set;}//Назначение платежа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		[DataMember]
		[ProtoMember(44)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(45)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(46)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(47)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(48)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(49)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(50)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(51)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(52)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(53)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(54)]
		public decimal/*(1)*/ ВидАкцепта {get;set;}//Вид акцепта
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
						Insert Into _Document516(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld13225RRef
						,_Fld13226RRef
						,_Fld13227RRef
						,_Fld13228RRef
						,_Fld13229
						,_Fld13230
						,_Fld13231RRef
						,_Fld13232RRef
						,_Fld13233RRef
						,_Fld13234
						,_Fld13235
						,_Fld13236
						,_Fld13237
						,_Fld13238
						,_Fld13239
						,_Fld13240
						,_Fld13241
						,_Fld13242
						,_Fld13243
						,_Fld13244RRef
						,_Fld13245
						,_Fld13246RRef
						,_Fld13247RRef
						,_Fld13248
						,_Fld13249
						,_Fld13250RRef
						,_Fld13251RRef
						,_Fld13252RRef
						,_Fld13253
						,_Fld13254
						,_Fld13255
						,_Fld13256RRef
						,_Fld13257
						,_Fld13258
						,_Fld13259
						,_Fld13260
						,_Fld13261
						,_Fld13262
						,_Fld13263
						,_Fld13264
						,_Fld13265
						,_Fld13266
						,_Fld13267
						,_Fld13268RRef
						,_Fld13269)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@СчетОрганизации
						,@Контрагент
						,@СчетКонтрагента
						,@СуммаДокумента
						,@ДатаОтсылкиДокументов
						,@ВидОперации
						,@ДоговорКонтрагента
						,@ВалютаДокумента
						,@ВидПлатежа
						,@ОчередностьПлатежа
						,@ОтраженоВОперУчете
						,@ТекстПлательщика
						,@ТекстПолучателя
						,@ИННПлательщика
						,@КПППлательщика
						,@ИННПолучателя
						,@КПППолучателя
						,@СрокДляАкцепта
						,@УсловиеОплаты
						,@ОснованиеДляБезакцептногоСписания
						,@СчетУчетаРасчетовСКонтрагентом
						,@СубконтоКт1
						,@ДатаОплаты
						,@ЧастичнаяОплата
						,@СубконтоКт2
						,@СубконтоКт3
						,@СтатьяДвиженияДенежныхСредств
						,@ОтражатьВБухгалтерскомУчете
						,@Оплачено
						,@НазначениеПлатежа
						,@Ответственный
						,@Комментарий
						,@ОтражатьВНалоговомУчете
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
						,@ВидАкцепта)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document516
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld13225RRef	= @Организация
						,_Fld13226RRef	= @СчетОрганизации
						,_Fld13227RRef	= @Контрагент
						,_Fld13228RRef	= @СчетКонтрагента
						,_Fld13229	= @СуммаДокумента
						,_Fld13230	= @ДатаОтсылкиДокументов
						,_Fld13231RRef	= @ВидОперации
						,_Fld13232RRef	= @ДоговорКонтрагента
						,_Fld13233RRef	= @ВалютаДокумента
						,_Fld13234	= @ВидПлатежа
						,_Fld13235	= @ОчередностьПлатежа
						,_Fld13236	= @ОтраженоВОперУчете
						,_Fld13237	= @ТекстПлательщика
						,_Fld13238	= @ТекстПолучателя
						,_Fld13239	= @ИННПлательщика
						,_Fld13240	= @КПППлательщика
						,_Fld13241	= @ИННПолучателя
						,_Fld13242	= @КПППолучателя
						,_Fld13243	= @СрокДляАкцепта
						,_Fld13244RRef	= @УсловиеОплаты
						,_Fld13245	= @ОснованиеДляБезакцептногоСписания
						,_Fld13246RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld13247RRef	= @СубконтоКт1
						,_Fld13248	= @ДатаОплаты
						,_Fld13249	= @ЧастичнаяОплата
						,_Fld13250RRef	= @СубконтоКт2
						,_Fld13251RRef	= @СубконтоКт3
						,_Fld13252RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld13253	= @ОтражатьВБухгалтерскомУчете
						,_Fld13254	= @Оплачено
						,_Fld13255	= @НазначениеПлатежа
						,_Fld13256RRef	= @Ответственный
						,_Fld13257	= @Комментарий
						,_Fld13258	= @ОтражатьВНалоговомУчете
						,_Fld13259	= @Содержание_УСН
						,_Fld13260	= @Графа4_УСН
						,_Fld13261	= @Графа5_УСН
						,_Fld13262	= @Графа6_УСН
						,_Fld13263	= @Графа7_УСН
						,_Fld13264	= @ДоходыЕНВД_УСН
						,_Fld13265	= @РасходыЕНВД_УСН
						,_Fld13266	= @НДС_УСН
						,_Fld13267	= @РучнаяНастройка_УСН
						,_Fld13268RRef	= @Подразделение
						,_Fld13269	= @ВидАкцепта
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ДатаОтсылкиДокументов", ДатаОтсылкиДокументов);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ВидПлатежа", ВидПлатежа);
					Команда.Parameters.AddWithValue("ОчередностьПлатежа", ОчередностьПлатежа);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("ТекстПлательщика", ТекстПлательщика);
					Команда.Parameters.AddWithValue("ТекстПолучателя", ТекстПолучателя);
					Команда.Parameters.AddWithValue("ИННПлательщика", ИННПлательщика);
					Команда.Parameters.AddWithValue("КПППлательщика", КПППлательщика);
					Команда.Parameters.AddWithValue("ИННПолучателя", ИННПолучателя);
					Команда.Parameters.AddWithValue("КПППолучателя", КПППолучателя);
					Команда.Parameters.AddWithValue("СрокДляАкцепта", СрокДляАкцепта);
					Команда.Parameters.AddWithValue("УсловиеОплаты", УсловиеОплаты.Ключ());
					Команда.Parameters.AddWithValue("ОснованиеДляБезакцептногоСписания", ОснованиеДляБезакцептногоСписания);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт1", Guid.Empty);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ЧастичнаяОплата", ЧастичнаяОплата);
					Команда.Parameters.AddWithValue("СубконтоКт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт3", Guid.Empty);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("НазначениеПлатежа", НазначениеПлатежа);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("ВидАкцепта", ВидАкцепта);
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
					Команда.CommandText = @"Delete _Document516
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}