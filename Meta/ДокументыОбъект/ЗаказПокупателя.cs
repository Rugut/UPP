
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
	public partial class ЗаказПокупателя:ДокументОбъект
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
		public string/*(0)*/ АдресДоставки {get;set;}//Адрес доставки
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийЗаказПокупателя ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаОтгрузки {get;set;}//Дата отгрузки
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ИнформационныеКарты ДисконтнаяКарта {get;set;}//Дисконтная карта
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public bool ИспользоватьПлановуюСебестоимость {get;set;}//Использовать плановую себестоимость
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(15.2)*/ ИтогПлановаяСебестоимость {get;set;}//Итоговая плановая себестоимость в валюте управленческого учета
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
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ) Курс валюты взаиморасчетов по договору
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СтруктурнаяЕдиница {get;set;}//Банк/касса
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СкладГруппа {get;set;}//Склад-группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(36)]
		public V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов КонтактноеЛицоКонтрагента {get;set;}//Контактное лицо контрагента
		[DataMember]
		[ProtoMember(37)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(38)]
		public string/*(0)*/ ДополнениеКАдресуДоставки {get;set;}//Дополнение к адресу доставки
		[DataMember]
		[ProtoMember(39)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		[DataMember]
		[ProtoMember(41)]
		public string/*(20)*/ НомерВходящегоДокументаЭлектронногоОбмена {get;set;}//Номер входящего документа электронного обмена
		[DataMember]
		[ProtoMember(42)]
		public DateTime ДатаВходящегоДокументаЭлектронногоОбмена {get;set;}//Дата входящего документа электронного обмена
		[DataMember]
		[ProtoMember(43)]
		public string/*(30)*/ НомерПоДаннымПокупателя {get;set;}//Номер по данным покупателя
		[DataMember]
		[ProtoMember(44)]
		public DateTime ДатаПоДаннымПокупателя {get;set;}//Дата по данным покупателя
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
						Insert Into _Document362(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld6974
						,_Fld6975RRef
						,_Fld6976RRef
						,_Fld6977
						,_Fld6978
						,_Fld6979
						,_Fld6980RRef
						,_Fld6981RRef
						,_Fld6982
						,_Fld6983
						,_Fld6984
						,_Fld6985RRef
						,_Fld6986
						,_Fld6987
						,_Fld6988
						,_Fld6989RRef
						,_Fld6990RRef
						,_Fld6991
						,_Fld6992
						,_Fld6993RRef
						,_Fld6996
						,_Fld6997
						,_Fld6998RRef
						,_Fld6999
						,_Fld7000RRef
						,_Fld7001RRef
						,_Fld7002RRef
						,_Fld7003
						,_Fld7005RRef
						,_Fld7006
						,_Fld7007
						,_Fld7008
						,_Fld7009)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@АдресДоставки
						,@ВалютаДокумента
						,@ВидОперации
						,@ВремяНапоминания
						,@ДатаОплаты
						,@ДатаОтгрузки
						,@ДисконтнаяКарта
						,@ДоговорКонтрагента
						,@ИспользоватьПлановуюСебестоимость
						,@ИтогПлановаяСебестоимость
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@НапомнитьОСобытии
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Подразделение
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@ТипЦен
						,@УчитыватьНДС
						,@Грузополучатель
						,@КонтактноеЛицоКонтрагента
						,@УсловиеПродаж
						,@ДополнениеКАдресуДоставки
						,@Грузоотправитель
						,@НомерВходящегоДокументаЭлектронногоОбмена
						,@ДатаВходящегоДокументаЭлектронногоОбмена
						,@НомерПоДаннымПокупателя
						,@ДатаПоДаннымПокупателя)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document362
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld6974	= @АдресДоставки
						,_Fld6975RRef	= @ВалютаДокумента
						,_Fld6976RRef	= @ВидОперации
						,_Fld6977	= @ВремяНапоминания
						,_Fld6978	= @ДатаОплаты
						,_Fld6979	= @ДатаОтгрузки
						,_Fld6980RRef	= @ДисконтнаяКарта
						,_Fld6981RRef	= @ДоговорКонтрагента
						,_Fld6982	= @ИспользоватьПлановуюСебестоимость
						,_Fld6983	= @ИтогПлановаяСебестоимость
						,_Fld6984	= @Комментарий
						,_Fld6985RRef	= @Контрагент
						,_Fld6986	= @КратностьВзаиморасчетов
						,_Fld6987	= @КурсВзаиморасчетов
						,_Fld6988	= @НапомнитьОСобытии
						,_Fld6989RRef	= @Организация
						,_Fld6990RRef	= @Ответственный
						,_Fld6991	= @ОтражатьВБухгалтерскомУчете
						,_Fld6992	= @ОтражатьВНалоговомУчете
						,_Fld6993RRef	= @Подразделение
						,_Fld6996	= @СуммаВключаетНДС
						,_Fld6997	= @СуммаДокумента
						,_Fld6998RRef	= @ТипЦен
						,_Fld6999	= @УчитыватьНДС
						,_Fld7000RRef	= @Грузополучатель
						,_Fld7001RRef	= @КонтактноеЛицоКонтрагента
						,_Fld7002RRef	= @УсловиеПродаж
						,_Fld7003	= @ДополнениеКАдресуДоставки
						,_Fld7005RRef	= @Грузоотправитель
						,_Fld7006	= @НомерВходящегоДокументаЭлектронногоОбмена
						,_Fld7007	= @ДатаВходящегоДокументаЭлектронногоОбмена
						,_Fld7008	= @НомерПоДаннымПокупателя
						,_Fld7009	= @ДатаПоДаннымПокупателя
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("АдресДоставки", АдресДоставки);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ВремяНапоминания", ВремяНапоминания);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ДатаОтгрузки", ДатаОтгрузки);
					Команда.Parameters.AddWithValue("ИспользоватьПлановуюСебестоимость", ИспользоватьПлановуюСебестоимость);
					Команда.Parameters.AddWithValue("ИтогПлановаяСебестоимость", ИтогПлановаяСебестоимость);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("НапомнитьОСобытии", НапомнитьОСобытии);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ДополнениеКАдресуДоставки", ДополнениеКАдресуДоставки);
					Команда.Parameters.AddWithValue("НомерВходящегоДокументаЭлектронногоОбмена", НомерВходящегоДокументаЭлектронногоОбмена);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокументаЭлектронногоОбмена", ДатаВходящегоДокументаЭлектронногоОбмена);
					Команда.Parameters.AddWithValue("НомерПоДаннымПокупателя", НомерПоДаннымПокупателя);
					Команда.Parameters.AddWithValue("ДатаПоДаннымПокупателя", ДатаПоДаннымПокупателя);
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
					Команда.CommandText = @"Delete _Document362
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}