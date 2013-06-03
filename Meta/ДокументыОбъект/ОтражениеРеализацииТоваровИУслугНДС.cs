
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
	[ProtoContract]
	[DataContract]
	public partial class ОтражениеРеализацииТоваровИУслугНДС:ДокументОбъект
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Не используется
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(13)]
		public bool ИспользоватьДокументРасчетовКакСчетФактуру {get;set;}//Использовать документ расчетов как счет-фактуру
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Если данный флаг взведен, документ производит непосредственную запись в книгу продаж. Остальные регистры учета НДС не корректируются.
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool ПрямаяЗаписьВКнигу {get;set;}//Использовать в качестве дополнительной записи книги продаж
		[DataMember]
		[ProtoMember(20)]
		public object РасчетныйДокумент {get;set;}//Документ расчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		[DataMember]
		[ProtoMember(24)]
		public bool ФормироватьПроводки {get;set;}//Формировать проводки
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		[DataMember]
		[ProtoMember(27)]
		public bool ФормироватьСторнирующиеЗаписиДопЛистовВручную {get;set;}//Формировать сторнирующие записи доп. листов вручную
		[DataMember]
		[ProtoMember(28)]
		public bool ЗаписьДополнительногоЛиста {get;set;}//Запись дополнительного листа
		[DataMember]
		[ProtoMember(29)]
		public DateTime КорректируемыйПериод {get;set;}//Корректируемый период
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
						Insert Into _Document472(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11337RRef
						,_Fld11338RRef
						,_Fld11339RRef
						,_Fld11340RRef
						,_Fld11341
						,_Fld11342
						,_Fld11343RRef
						,_Fld11344
						,_Fld11345
						,_Fld11346RRef
						,_Fld11347
						,_Fld11349
						,_Fld11350
						,_Fld11351RRef
						,_Fld11352
						,_Fld11353
						,_Fld11354
						,_Fld11355
						,_Fld11356
						,_Fld11357)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@Грузоотправитель
						,@Грузополучатель
						,@ДоговорКонтрагента
						,@ИспользоватьДокументРасчетовКакСчетФактуру
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@Организация
						,@ПрямаяЗаписьВКнигу
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@ТипЦен
						,@ФормироватьПроводки
						,@ДатаВходящегоДокумента
						,@НомерВходящегоДокумента
						,@ФормироватьСторнирующиеЗаписиДопЛистовВручную
						,@ЗаписьДополнительногоЛиста
						,@КорректируемыйПериод)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document472
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11337RRef	= @ВалютаДокумента
						,_Fld11338RRef	= @Грузоотправитель
						,_Fld11339RRef	= @Грузополучатель
						,_Fld11340RRef	= @ДоговорКонтрагента
						,_Fld11341	= @ИспользоватьДокументРасчетовКакСчетФактуру
						,_Fld11342	= @Комментарий
						,_Fld11343RRef	= @Контрагент
						,_Fld11344	= @КратностьВзаиморасчетов
						,_Fld11345	= @КурсВзаиморасчетов
						,_Fld11346RRef	= @Организация
						,_Fld11347	= @ПрямаяЗаписьВКнигу
						,_Fld11349	= @СуммаВключаетНДС
						,_Fld11350	= @СуммаДокумента
						,_Fld11351RRef	= @ТипЦен
						,_Fld11352	= @ФормироватьПроводки
						,_Fld11353	= @ДатаВходящегоДокумента
						,_Fld11354	= @НомерВходящегоДокумента
						,_Fld11355	= @ФормироватьСторнирующиеЗаписиДопЛистовВручную
						,_Fld11356	= @ЗаписьДополнительногоЛиста
						,_Fld11357	= @КорректируемыйПериод
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ИспользоватьДокументРасчетовКакСчетФактуру", ИспользоватьДокументРасчетовКакСчетФактуру);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("ПрямаяЗаписьВКнигу", ПрямаяЗаписьВКнигу);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ФормироватьПроводки", ФормироватьПроводки);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ФормироватьСторнирующиеЗаписиДопЛистовВручную", ФормироватьСторнирующиеЗаписиДопЛистовВручную);
					Команда.Parameters.AddWithValue("ЗаписьДополнительногоЛиста", ЗаписьДополнительногоЛиста);
					Команда.Parameters.AddWithValue("КорректируемыйПериод", КорректируемыйПериод);
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
					Команда.CommandText = @"Delete _Document472
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}