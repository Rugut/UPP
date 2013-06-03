
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СчетНаОплатуПоставщика:ДокументОбъект
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(10)]
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаПоступления {get;set;}//Дата поступления
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(15)]
		public bool ИспользоватьПлановуюСебестоимость {get;set;}//Использовать плановую себестоимость
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.2)*/ ИтогПлановаяСебестоимость {get;set;}//Итоговая плановая себестоимость в валюте управленческого учета
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///Курс валюты взаиморасчетов по договору
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		[DataMember]
		[ProtoMember(21)]
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public object СтруктурнаяЕдиница {get;set;}//Б/счет, касса
		[DataMember]
		[ProtoMember(28)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		[DataMember]
		[ProtoMember(31)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(32)]
		public object ДокументОснование {get;set;}//Документ основание
		[DataMember]
		[ProtoMember(33)]
		public V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов КонтактноеЛицоКонтрагента {get;set;}//Контактное лицо контрагента
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(35)]
		public string/*(20)*/ НомерВходящегоДокументаЭлектронногоОбмена {get;set;}//Номер входящего документа электронного обмена
		[DataMember]
		[ProtoMember(36)]
		public DateTime ДатаВходящегоДокументаЭлектронногоОбмена {get;set;}//Дата входящего документа электронного обмена
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
						Insert Into _Document604(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17734RRef
						,_Fld17735
						,_Fld17736
						,_Fld17737
						,_Fld17738
						,_Fld17739RRef
						,_Fld17740
						,_Fld17741
						,_Fld17742
						,_Fld17743RRef
						,_Fld17744
						,_Fld17745
						,_Fld17746
						,_Fld17747
						,_Fld17748RRef
						,_Fld17749RRef
						,_Fld17750RRef
						,_Fld17751RRef
						,_Fld17753
						,_Fld17754
						,_Fld17755RRef
						,_Fld17756
						,_Fld17758RRef
						,_Fld17759RRef
						,_Fld17760
						,_Fld17761)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ВремяНапоминания
						,@ДатаВходящегоДокумента
						,@ДатаОплаты
						,@ДатаПоступления
						,@ДоговорКонтрагента
						,@ИспользоватьПлановуюСебестоимость
						,@ИтогПлановаяСебестоимость
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@НапомнитьОСобытии
						,@НомерВходящегоДокумента
						,@Организация
						,@Ответственный
						,@Подразделение
						,@Склад
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@ТипЦен
						,@УчитыватьНДС
						,@КонтактноеЛицоКонтрагента
						,@УсловиеПродаж
						,@НомерВходящегоДокументаЭлектронногоОбмена
						,@ДатаВходящегоДокументаЭлектронногоОбмена)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document604
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17734RRef	= @ВалютаДокумента
						,_Fld17735	= @ВремяНапоминания
						,_Fld17736	= @ДатаВходящегоДокумента
						,_Fld17737	= @ДатаОплаты
						,_Fld17738	= @ДатаПоступления
						,_Fld17739RRef	= @ДоговорКонтрагента
						,_Fld17740	= @ИспользоватьПлановуюСебестоимость
						,_Fld17741	= @ИтогПлановаяСебестоимость
						,_Fld17742	= @Комментарий
						,_Fld17743RRef	= @Контрагент
						,_Fld17744	= @КратностьВзаиморасчетов
						,_Fld17745	= @КурсВзаиморасчетов
						,_Fld17746	= @НапомнитьОСобытии
						,_Fld17747	= @НомерВходящегоДокумента
						,_Fld17748RRef	= @Организация
						,_Fld17749RRef	= @Ответственный
						,_Fld17750RRef	= @Подразделение
						,_Fld17751RRef	= @Склад
						,_Fld17753	= @СуммаВключаетНДС
						,_Fld17754	= @СуммаДокумента
						,_Fld17755RRef	= @ТипЦен
						,_Fld17756	= @УчитыватьНДС
						,_Fld17758RRef	= @КонтактноеЛицоКонтрагента
						,_Fld17759RRef	= @УсловиеПродаж
						,_Fld17760	= @НомерВходящегоДокументаЭлектронногоОбмена
						,_Fld17761	= @ДатаВходящегоДокументаЭлектронногоОбмена
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВремяНапоминания", ВремяНапоминания);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ДатаПоступления", ДатаПоступления);
					Команда.Parameters.AddWithValue("ИспользоватьПлановуюСебестоимость", ИспользоватьПлановуюСебестоимость);
					Команда.Parameters.AddWithValue("ИтогПлановаяСебестоимость", ИтогПлановаяСебестоимость);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("НапомнитьОСобытии", НапомнитьОСобытии);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("НомерВходящегоДокументаЭлектронногоОбмена", НомерВходящегоДокументаЭлектронногоОбмена);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокументаЭлектронногоОбмена", ДатаВходящегоДокументаЭлектронногоОбмена);
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
					Команда.CommandText = @"Delete _Document604
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}