
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
	public partial class СчетНаОплатуПокупателю:ДокументОбъект
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
		public object СтруктурнаяЕдиница {get;set;}//Б/счет, касса
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаОплаты {get;set;}//Дата оплаты
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ДатаОтгрузки {get;set;}//Дата отгрузки
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ИнформационныеКарты ДисконтнаяКарта {get;set;}//Дисконтная карта
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(16)]
		public V82.ДокументыСсылка.ЗаказПокупателя ЗаказПокупателя {get;set;}//Заказ покупателя
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
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		///<summary>
		///(Общ) Курс валюты взаиморасчетов по договору
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(34)]
		public object КонтактноеЛицоКонтрагента {get;set;}//Контактное лицо контрагента
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(36)]
		public string/*(0)*/ ДополнениеКАдресуДоставки {get;set;}//Дополнение к адресу доставки
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
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
						Insert Into _Document603(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17646
						,_Fld17648
						,_Fld17649
						,_Fld17650
						,_Fld17651RRef
						,_Fld17652RRef
						,_Fld17653RRef
						,_Fld17654
						,_Fld17655
						,_Fld17656RRef
						,_Fld17657
						,_Fld17659
						,_Fld17660
						,_Fld17661
						,_Fld17662RRef
						,_Fld17663RRef
						,_Fld17664RRef
						,_Fld17665RRef
						,_Fld17666
						,_Fld17667
						,_Fld17668RRef
						,_Fld17669
						,_Fld17670RRef
						,_Fld17672RRef
						,_Fld17673
						,_Fld17674RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@АдресДоставки
						,@ВремяНапоминания
						,@ДатаОплаты
						,@ДатаОтгрузки
						,@ДисконтнаяКарта
						,@ВалютаДокумента
						,@ЗаказПокупателя
						,@ИспользоватьПлановуюСебестоимость
						,@ИтогПлановаяСебестоимость
						,@ДоговорКонтрагента
						,@Комментарий
						,@КратностьВзаиморасчетов
						,@НапомнитьОСобытии
						,@КурсВзаиморасчетов
						,@Организация
						,@Подразделение
						,@Ответственный
						,@Склад
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@ТипЦен
						,@УчитыватьНДС
						,@Грузополучатель
						,@УсловиеПродаж
						,@ДополнениеКАдресуДоставки
						,@Грузоотправитель)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document603
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17646	= @АдресДоставки
						,_Fld17648	= @ВремяНапоминания
						,_Fld17649	= @ДатаОплаты
						,_Fld17650	= @ДатаОтгрузки
						,_Fld17651RRef	= @ДисконтнаяКарта
						,_Fld17652RRef	= @ВалютаДокумента
						,_Fld17653RRef	= @ЗаказПокупателя
						,_Fld17654	= @ИспользоватьПлановуюСебестоимость
						,_Fld17655	= @ИтогПлановаяСебестоимость
						,_Fld17656RRef	= @ДоговорКонтрагента
						,_Fld17657	= @Комментарий
						,_Fld17659	= @КратностьВзаиморасчетов
						,_Fld17660	= @НапомнитьОСобытии
						,_Fld17661	= @КурсВзаиморасчетов
						,_Fld17662RRef	= @Организация
						,_Fld17663RRef	= @Подразделение
						,_Fld17664RRef	= @Ответственный
						,_Fld17665RRef	= @Склад
						,_Fld17666	= @СуммаВключаетНДС
						,_Fld17667	= @СуммаДокумента
						,_Fld17668RRef	= @ТипЦен
						,_Fld17669	= @УчитыватьНДС
						,_Fld17670RRef	= @Грузополучатель
						,_Fld17672RRef	= @УсловиеПродаж
						,_Fld17673	= @ДополнениеКАдресуДоставки
						,_Fld17674RRef	= @Грузоотправитель
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("АдресДоставки", АдресДоставки);
					Команда.Parameters.AddWithValue("ВремяНапоминания", ВремяНапоминания);
					Команда.Parameters.AddWithValue("ДатаОплаты", ДатаОплаты);
					Команда.Parameters.AddWithValue("ДатаОтгрузки", ДатаОтгрузки);
					Команда.Parameters.AddWithValue("ЗаказПокупателя", ЗаказПокупателя.Ссылка);
					Команда.Parameters.AddWithValue("ИспользоватьПлановуюСебестоимость", ИспользоватьПлановуюСебестоимость);
					Команда.Parameters.AddWithValue("ИтогПлановаяСебестоимость", ИтогПлановаяСебестоимость);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("НапомнитьОСобытии", НапомнитьОСобытии);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ДополнениеКАдресуДоставки", ДополнениеКАдресуДоставки);
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
					Команда.CommandText = @"Delete _Document603
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}