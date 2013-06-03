
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
	public partial class ОтражениеПоступленияТоваровИУслугНДС:ДокументОбъект
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
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(11)]
		public bool ИспользоватьДокументРасчетовКакСчетФактуру {get;set;}//Использовать документ расчетов как счет-фактуру
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Если данный флаг взведен, документ производит непосредственную запись в книгу покупок. Остальные регистры учета НДС не корректируются.
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool ПрямаяЗаписьВКнигу {get;set;}//Использовать в качестве дополнительной записи книги покупок
		[DataMember]
		[ProtoMember(19)]
		public object РасчетныйДокумент {get;set;}//Документ расчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		[DataMember]
		[ProtoMember(23)]
		public bool ФормироватьПроводки {get;set;}//Формировать проводки
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		[DataMember]
		[ProtoMember(26)]
		public bool ЗаписьДополнительногоЛиста {get;set;}//Запись дополнительного листа
		[DataMember]
		[ProtoMember(27)]
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
						Insert Into _Document471(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11289RRef
						,_Fld11290RRef
						,_Fld11291
						,_Fld11292
						,_Fld11293RRef
						,_Fld11294
						,_Fld11295
						,_Fld11296
						,_Fld11297RRef
						,_Fld11298
						,_Fld11300
						,_Fld11301
						,_Fld11302RRef
						,_Fld11303
						,_Fld11304
						,_Fld11305
						,_Fld11306
						,_Fld11307)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ДоговорКонтрагента
						,@ИспользоватьДокументРасчетовКакСчетФактуру
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@НДСВключенВСтоимость
						,@Организация
						,@ПрямаяЗаписьВКнигу
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@ТипЦен
						,@ФормироватьПроводки
						,@ДатаВходящегоДокумента
						,@НомерВходящегоДокумента
						,@ЗаписьДополнительногоЛиста
						,@КорректируемыйПериод)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document471
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11289RRef	= @ВалютаДокумента
						,_Fld11290RRef	= @ДоговорКонтрагента
						,_Fld11291	= @ИспользоватьДокументРасчетовКакСчетФактуру
						,_Fld11292	= @Комментарий
						,_Fld11293RRef	= @Контрагент
						,_Fld11294	= @КратностьВзаиморасчетов
						,_Fld11295	= @КурсВзаиморасчетов
						,_Fld11296	= @НДСВключенВСтоимость
						,_Fld11297RRef	= @Организация
						,_Fld11298	= @ПрямаяЗаписьВКнигу
						,_Fld11300	= @СуммаВключаетНДС
						,_Fld11301	= @СуммаДокумента
						,_Fld11302RRef	= @ТипЦен
						,_Fld11303	= @ФормироватьПроводки
						,_Fld11304	= @ДатаВходящегоДокумента
						,_Fld11305	= @НомерВходящегоДокумента
						,_Fld11306	= @ЗаписьДополнительногоЛиста
						,_Fld11307	= @КорректируемыйПериод
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
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
					Команда.Parameters.AddWithValue("ПрямаяЗаписьВКнигу", ПрямаяЗаписьВКнигу);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ФормироватьПроводки", ФормироватьПроводки);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
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
					Команда.CommandText = @"Delete _Document471
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}