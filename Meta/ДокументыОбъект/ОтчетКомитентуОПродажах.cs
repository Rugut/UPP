
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
	public partial class ОтчетКомитентуОПродажах:ДокументОбъект
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаКомиссионногоВознаграждения СпособРасчетаКомиссионногоВознаграждения {get;set;}//Способ расчета комиссионного вознаграждения
		///<summary>
		///(Общ) Сумма комиссионного вознаграждения в валюте взаиморасчетов (долга перед комиссионером за услугу по реализации товаров)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.2)*/ СуммаВознаграждения {get;set;}//Сумма вознаграждения 
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.СтавкиНДС СтавкаНДСВознаграждения {get;set;}//Ставка НДС с комиссионного вознаграждения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ) Процент от прибыли или с продаж, по которому рассчитывается сумма комиссионного вознаграждения
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(5.2)*/ ПроцентКомиссионногоВознаграждения {get;set;}//Процент комиссионного вознаграждения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		[DataMember]
		[ProtoMember(30)]
		public bool УдержатьКомиссионноеВознаграждение {get;set;}//Удержать комиссионное вознаграждение
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.Номенклатура УслугаПоВознаграждению {get;set;}//Услуга по вознаграждению за комиссию
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетДоходовБУ {get;set;}//Счет доходов (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетДоходовНУ {get;set;}//Счет доходов (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СубконтоБУ {get;set;}//Субконто (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СубконтоНУ {get;set;}//Субконто (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СчетУчетаНДСПоРеализации {get;set;}//Счет учета НДС по реализации
		[DataMember]
		[ProtoMember(37)]
		public object Проект {get;set;}
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
						Insert Into _Document475(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11508
						,_Fld11509
						,_Fld11510
						,_Fld11511RRef
						,_Fld11512RRef
						,_Fld11513
						,_Fld11514RRef
						,_Fld11515
						,_Fld11516RRef
						,_Fld11517RRef
						,_Fld11518RRef
						,_Fld11520
						,_Fld11521RRef
						,_Fld11522
						,_Fld11523
						,_Fld11524
						,_Fld11525RRef
						,_Fld11526RRef
						,_Fld11527RRef
						,_Fld11528RRef
						,_Fld11529
						,_Fld11530RRef
						,_Fld11531RRef
						,_Fld11532RRef
						,_Fld11533RRef
						,_Fld11534RRef
						,_Fld11535RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Организация
						,@ВалютаДокумента
						,@СуммаДокумента
						,@СпособРасчетаКомиссионногоВознаграждения
						,@СуммаВознаграждения
						,@СтавкаНДСВознаграждения
						,@Контрагент
						,@ДоговорКонтрагента
						,@КурсВзаиморасчетов
						,@Подразделение
						,@Комментарий
						,@ПроцентКомиссионногоВознаграждения
						,@КратностьВзаиморасчетов
						,@ТипЦен
						,@Ответственный
						,@СчетУчетаРасчетовСКонтрагентом
						,@СчетУчетаРасчетовПоАвансам
						,@УдержатьКомиссионноеВознаграждение
						,@УслугаПоВознаграждению
						,@СчетДоходовБУ
						,@СчетДоходовНУ
						,@СубконтоБУ
						,@СубконтоНУ
						,@СчетУчетаНДСПоРеализации)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document475
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11508	= @ОтражатьВУправленческомУчете
						,_Fld11509	= @ОтражатьВБухгалтерскомУчете
						,_Fld11510	= @ОтражатьВНалоговомУчете
						,_Fld11511RRef	= @Организация
						,_Fld11512RRef	= @ВалютаДокумента
						,_Fld11513	= @СуммаДокумента
						,_Fld11514RRef	= @СпособРасчетаКомиссионногоВознаграждения
						,_Fld11515	= @СуммаВознаграждения
						,_Fld11516RRef	= @СтавкаНДСВознаграждения
						,_Fld11517RRef	= @Контрагент
						,_Fld11518RRef	= @ДоговорКонтрагента
						,_Fld11520	= @КурсВзаиморасчетов
						,_Fld11521RRef	= @Подразделение
						,_Fld11522	= @Комментарий
						,_Fld11523	= @ПроцентКомиссионногоВознаграждения
						,_Fld11524	= @КратностьВзаиморасчетов
						,_Fld11525RRef	= @ТипЦен
						,_Fld11526RRef	= @Ответственный
						,_Fld11527RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld11528RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld11529	= @УдержатьКомиссионноеВознаграждение
						,_Fld11530RRef	= @УслугаПоВознаграждению
						,_Fld11531RRef	= @СчетДоходовБУ
						,_Fld11532RRef	= @СчетДоходовНУ
						,_Fld11533RRef	= @СубконтоБУ
						,_Fld11534RRef	= @СубконтоНУ
						,_Fld11535RRef	= @СчетУчетаНДСПоРеализации
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СпособРасчетаКомиссионногоВознаграждения", СпособРасчетаКомиссионногоВознаграждения.Ключ());
					Команда.Parameters.AddWithValue("СуммаВознаграждения", СуммаВознаграждения);
					Команда.Parameters.AddWithValue("СтавкаНДСВознаграждения", СтавкаНДСВознаграждения.Ключ());
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ПроцентКомиссионногоВознаграждения", ПроцентКомиссионногоВознаграждения);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("УдержатьКомиссионноеВознаграждение", УдержатьКомиссионноеВознаграждение);
					Команда.Parameters.AddWithValue("СчетДоходовБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетДоходовНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаНДСПоРеализации", Guid.Empty);
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
					Команда.CommandText = @"Delete _Document475
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}