
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
	public partial class ВозвратТоваровПоставщику:ДокументОбъект
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийВозвратТоваровПоставщику ВидОперации {get;set;}//Вид операции
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
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.ВидыПередачиТоваров ВидПередачи {get;set;}//Вид передачи
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СчетУчетаРасчетовПоПретензиям {get;set;}//Счет учета расчетов по претензиям
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетУчетаРасчетовПоТаре {get;set;}//Счет учета расчетов по таре
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.БанковскиеСчета БанковскийСчетОрганизации {get;set;}//Банковский счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		[DataMember]
		[ProtoMember(36)]
		public object Проект {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(38)]
		public object СчетУчетаДоходовБУ {get;set;}//Счет учета доходов (БУ)
		[DataMember]
		[ProtoMember(39)]
		public object СчетУчетаРасходовБУ {get;set;}//Счет учета расходов (БУ)
		[DataMember]
		[ProtoMember(40)]
		public object СчетУчетаДоходовНУ {get;set;}//Счет учета доходов (НУ)
		[DataMember]
		[ProtoMember(41)]
		public object СчетУчетаРасходовНУ {get;set;}//Счет учета расходов (НУ)
		[DataMember]
		[ProtoMember(42)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяДоходовИРасходов {get;set;}//Статья доходов и расходов
		[DataMember]
		[ProtoMember(43)]
		public bool ПоставщикуВыставляетсяСчетФактураНаВозврат {get;set;}//Поставщику выставляется счет-фактура на возврат
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
						Insert Into _Document338(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld6271RRef
						,_Fld6272
						,_Fld6273
						,_Fld6274
						,_Fld6275RRef
						,_Fld6276RRef
						,_Fld6277
						,_Fld6279RRef
						,_Fld6280RRef
						,_Fld6281RRef
						,_Fld6282RRef
						,_Fld6283RRef
						,_Fld6284
						,_Fld6285
						,_Fld6286
						,_Fld6287
						,_Fld6288
						,_Fld6289RRef
						,_Fld6290RRef
						,_Fld6291RRef
						,_Fld6292RRef
						,_Fld6293RRef
						,_Fld6294RRef
						,_Fld6295
						,_Fld6296RRef
						,_Fld6297RRef
						,_Fld6299RRef
						,_Fld6300RRef
						,_Fld6301RRef
						,_Fld6302RRef
						,_Fld6303RRef
						,_Fld6304RRef
						,_Fld6305)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@Подразделение
						,@ВидОперации
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
						,@ВидПередачи
						,@СчетУчетаРасчетовСКонтрагентом
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовПоПретензиям
						,@СчетУчетаРасчетовПоТаре
						,@НДСВключенВСтоимость
						,@БанковскийСчетОрганизации
						,@Грузоотправитель
						,@Грузополучатель
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
						Update _Document338
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld6271RRef	= @Организация
						,_Fld6272	= @ОтражатьВУправленческомУчете
						,_Fld6273	= @ОтражатьВБухгалтерскомУчете
						,_Fld6274	= @ОтражатьВНалоговомУчете
						,_Fld6275RRef	= @Подразделение
						,_Fld6276RRef	= @ВидОперации
						,_Fld6277	= @Комментарий
						,_Fld6279RRef	= @Склад
						,_Fld6280RRef	= @ДоговорКонтрагента
						,_Fld6281RRef	= @Контрагент
						,_Fld6282RRef	= @ТипЦен
						,_Fld6283RRef	= @ВалютаДокумента
						,_Fld6284	= @УчитыватьНДС
						,_Fld6285	= @СуммаВключаетНДС
						,_Fld6286	= @КурсВзаиморасчетов
						,_Fld6287	= @СуммаДокумента
						,_Fld6288	= @КратностьВзаиморасчетов
						,_Fld6289RRef	= @Ответственный
						,_Fld6290RRef	= @ВидПередачи
						,_Fld6291RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld6292RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld6293RRef	= @СчетУчетаРасчетовПоПретензиям
						,_Fld6294RRef	= @СчетУчетаРасчетовПоТаре
						,_Fld6295	= @НДСВключенВСтоимость
						,_Fld6296RRef	= @БанковскийСчетОрганизации
						,_Fld6297RRef	= @Грузоотправитель
						,_Fld6299RRef	= @Грузополучатель
						,_Fld6300RRef	= @СчетУчетаДоходовБУ
						,_Fld6301RRef	= @СчетУчетаРасходовБУ
						,_Fld6302RRef	= @СчетУчетаДоходовНУ
						,_Fld6303RRef	= @СчетУчетаРасходовНУ
						,_Fld6304RRef	= @СтатьяДоходовИРасходов
						,_Fld6305	= @ПоставщикуВыставляетсяСчетФактураНаВозврат
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("ВидПередачи", ВидПередачи.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоПретензиям", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоТаре", Guid.Empty);
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
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
					Команда.CommandText = @"Delete _Document338
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}