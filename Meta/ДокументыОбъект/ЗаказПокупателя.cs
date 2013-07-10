
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
						Insert Into _Document257(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4330
						,_Fld4331RRef
						,_Fld4332RRef
						,_Fld4333
						,_Fld4334
						,_Fld4335
						,_Fld4336RRef
						,_Fld4337RRef
						,_Fld4338
						,_Fld4339
						,_Fld4340
						,_Fld4341RRef
						,_Fld4342
						,_Fld4343
						,_Fld4344
						,_Fld4345RRef
						,_Fld4346RRef
						,_Fld4347
						,_Fld4348
						,_Fld4349RRef
						,_Fld4352
						,_Fld4353
						,_Fld4354RRef
						,_Fld4356
						,_Fld4357RRef
						,_Fld4358RRef
						,_Fld4359RRef
						,_Fld4360
						,_Fld18959RRef
						,_Fld21430
						,_Fld21431
						,_Fld26726
						,_Fld26727)
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
						Update _Document257
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4330	= @АдресДоставки
						,_Fld4331RRef	= @ВалютаДокумента
						,_Fld4332RRef	= @ВидОперации
						,_Fld4333	= @ВремяНапоминания
						,_Fld4334	= @ДатаОплаты
						,_Fld4335	= @ДатаОтгрузки
						,_Fld4336RRef	= @ДисконтнаяКарта
						,_Fld4337RRef	= @ДоговорКонтрагента
						,_Fld4338	= @ИспользоватьПлановуюСебестоимость
						,_Fld4339	= @ИтогПлановаяСебестоимость
						,_Fld4340	= @Комментарий
						,_Fld4341RRef	= @Контрагент
						,_Fld4342	= @КратностьВзаиморасчетов
						,_Fld4343	= @КурсВзаиморасчетов
						,_Fld4344	= @НапомнитьОСобытии
						,_Fld4345RRef	= @Организация
						,_Fld4346RRef	= @Ответственный
						,_Fld4347	= @ОтражатьВБухгалтерскомУчете
						,_Fld4348	= @ОтражатьВНалоговомУчете
						,_Fld4349RRef	= @Подразделение
						,_Fld4352	= @СуммаВключаетНДС
						,_Fld4353	= @СуммаДокумента
						,_Fld4354RRef	= @ТипЦен
						,_Fld4356	= @УчитыватьНДС
						,_Fld4357RRef	= @Грузополучатель
						,_Fld4358RRef	= @КонтактноеЛицоКонтрагента
						,_Fld4359RRef	= @УсловиеПродаж
						,_Fld4360	= @ДополнениеКАдресуДоставки
						,_Fld18959RRef	= @Грузоотправитель
						,_Fld21430	= @НомерВходящегоДокументаЭлектронногоОбмена
						,_Fld21431	= @ДатаВходящегоДокументаЭлектронногоОбмена
						,_Fld26726	= @НомерПоДаннымПокупателя
						,_Fld26727	= @ДатаПоДаннымПокупателя
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
					Команда.CommandText = @"Delete _Document257
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}