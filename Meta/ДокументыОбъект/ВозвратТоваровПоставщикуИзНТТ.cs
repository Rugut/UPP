
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
	public partial class ВозвратТоваровПоставщикуИзНТТ:ДокументОбъект
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.БанковскиеСчета БанковскийСчетОрганизации {get;set;}//Банковский счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
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
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СчетУчетаРасчетовПоТаре {get;set;}//Счет учета расчетов по таре
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетУчетаРасчетовПоПретензиям {get;set;}//Счет учета расчетов по претензиям
		[DataMember]
		[ProtoMember(34)]
		public object СчетУчетаДоходовБУ {get;set;}//Счет учета доходов (БУ)
		[DataMember]
		[ProtoMember(35)]
		public object СчетУчетаРасходовБУ {get;set;}//Счет учета расходов (БУ)
		[DataMember]
		[ProtoMember(36)]
		public object СчетУчетаДоходовНУ {get;set;}//Счет учета доходов (НУ)
		[DataMember]
		[ProtoMember(37)]
		public object СчетУчетаРасходовНУ {get;set;}//Счет учета расходов (НУ)
		[DataMember]
		[ProtoMember(38)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяДоходовИРасходов {get;set;}//Статья доходов и расходов
		[DataMember]
		[ProtoMember(39)]
		public bool ПоставщикуВыставляетсяСчетФактураНаВозврат {get;set;}//Поставщику выставляется счет-фактура на возврат
		[DataMember]
		[ProtoMember(40)]
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
						Insert Into _Document339(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld6378RRef
						,_Fld6379RRef
						,_Fld6380
						,_Fld6381
						,_Fld6382
						,_Fld6383RRef
						,_Fld6384
						,_Fld6386RRef
						,_Fld6387RRef
						,_Fld6388RRef
						,_Fld6389RRef
						,_Fld6390RRef
						,_Fld6391
						,_Fld6392
						,_Fld6393
						,_Fld6394
						,_Fld6395
						,_Fld6396RRef
						,_Fld6397RRef
						,_Fld6398RRef
						,_Fld6399RRef
						,_Fld6400
						,_Fld6401RRef
						,_Fld6402RRef
						,_Fld6403RRef
						,_Fld6404RRef
						,_Fld6405RRef
						,_Fld6406RRef
						,_Fld6407RRef
						,_Fld6408)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@БанковскийСчетОрганизации
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Подразделение
						,@Комментарий
						,@Склад
						,@ДоговорКонтрагента
						,@Контрагент
						,@ТипЦен
						,@ВалютаДокумента
						,@УчитыватьНДС
						,@СуммаВключаетНДС
						,@КурсВзаиморасчетов
						,@СуммаДокумента
						,@КратностьВзаиморасчетов
						,@Ответственный
						,@СчетУчетаРасчетовСКонтрагентом
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовПоТаре
						,@НДСВключенВСтоимость
						,@Грузополучатель
						,@СчетУчетаРасчетовПоПретензиям
						,@СчетУчетаДоходовБУ
						,@СчетУчетаРасходовБУ
						,@СчетУчетаДоходовНУ
						,@СчетУчетаРасходовНУ
						,@СтатьяДоходовИРасходов
						,@ПоставщикуВыставляетсяСчетФактураНаВозврат)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document339
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld6378RRef	= @Организация
						,_Fld6379RRef	= @БанковскийСчетОрганизации
						,_Fld6380	= @ОтражатьВУправленческомУчете
						,_Fld6381	= @ОтражатьВБухгалтерскомУчете
						,_Fld6382	= @ОтражатьВНалоговомУчете
						,_Fld6383RRef	= @Подразделение
						,_Fld6384	= @Комментарий
						,_Fld6386RRef	= @Склад
						,_Fld6387RRef	= @ДоговорКонтрагента
						,_Fld6388RRef	= @Контрагент
						,_Fld6389RRef	= @ТипЦен
						,_Fld6390RRef	= @ВалютаДокумента
						,_Fld6391	= @УчитыватьНДС
						,_Fld6392	= @СуммаВключаетНДС
						,_Fld6393	= @КурсВзаиморасчетов
						,_Fld6394	= @СуммаДокумента
						,_Fld6395	= @КратностьВзаиморасчетов
						,_Fld6396RRef	= @Ответственный
						,_Fld6397RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld6398RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld6399RRef	= @СчетУчетаРасчетовПоТаре
						,_Fld6400	= @НДСВключенВСтоимость
						,_Fld6401RRef	= @Грузополучатель
						,_Fld6402RRef	= @СчетУчетаРасчетовПоПретензиям
						,_Fld6403RRef	= @СчетУчетаДоходовБУ
						,_Fld6404RRef	= @СчетУчетаРасходовБУ
						,_Fld6405RRef	= @СчетУчетаДоходовНУ
						,_Fld6406RRef	= @СчетУчетаРасходовНУ
						,_Fld6407RRef	= @СтатьяДоходовИРасходов
						,_Fld6408	= @ПоставщикуВыставляетсяСчетФактураНаВозврат
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоТаре", Guid.Empty);
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоПретензиям", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаДоходовБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаДоходовНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("ПоставщикуВыставляетсяСчетФактураНаВозврат", ПоставщикуВыставляетсяСчетФактураНаВозврат);
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
					Команда.CommandText = @"Delete _Document339
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}