
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
	public partial class ОтчетКомиссионераОПродажах:ДокументОбъект
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ) Любая дополнительная информация
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
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ) Процент от прибыли или с продаж, по которому рассчитывается сумма комиссионного вознаграждения
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(5.2)*/ ПроцентКомиссионногоВознаграждения {get;set;}//Процент комиссионного вознаграждения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаКомиссионногоВознаграждения СпособРасчетаКомиссионногоВознаграждения {get;set;}//Способ расчета комиссионного вознаграждения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.СтавкиНДС СтавкаНДСВознаграждения {get;set;}//Ставка НДС с комиссионного вознаграждения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СубконтоНУ1 {get;set;}//Субконто 1 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СубконтоНУ2 {get;set;}//Субконто 2 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СубконтоНУ3 {get;set;}//Субконто 3 (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object Субконто1 {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object Субконто2 {get;set;}//Субконто1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object Субконто3 {get;set;}//Субконто1
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма комиссионного вознаграждения в валюте взаиморасчетов (долга перед комиссионером за услугу по реализации товаров)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public decimal/*(15.2)*/ СуммаВознаграждения {get;set;}//Сумма вознаграждения 
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public decimal/*(15.2)*/ СуммаНДСВознаграждения {get;set;}//Сумма НДС вознаграждения
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public object СчетУчетаЗатрат {get;set;}//Счет учета затрат
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public object СчетУчетаЗатратНУ {get;set;}//Счет учета затрат (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public object СчетУчетаНДС {get;set;}//Счет учета НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public object СчетУчетаРасчетовЗаПосредническиеУслуги {get;set;}//Счет учета расчетов за посреднические услуги
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(44)]
		public object СчетУчетаРасчетовПоАвансамВыданным {get;set;}//Счет учета расчетов по авансам выданным
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(45)]
		public object СчетУчетаРасчетовПоАвансамПолученным {get;set;}//Счет учета расчетов по авансам полученным
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(46)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(47)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(48)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(49)]
		public object Проект {get;set;}
		[DataMember]
		[ProtoMember(50)]
		public bool УдержатьКомиссионноеВознаграждение {get;set;}//Удержать комиссионное вознаграждение
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(51)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(52)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(53)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		[DataMember]
		[ProtoMember(54)]
		public string/*(20)*/ НомерВходящегоДокументаЭлектронногоОбмена {get;set;}//Номер входящего документа электронного обмена
		[DataMember]
		[ProtoMember(55)]
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
						Insert Into _Document354(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7199RRef
						,_Fld7200
						,_Fld7201RRef
						,_Fld7202
						,_Fld7203RRef
						,_Fld7204
						,_Fld7205
						,_Fld7206RRef
						,_Fld7207
						,_Fld7208RRef
						,_Fld7209RRef
						,_Fld7210
						,_Fld7211
						,_Fld7212
						,_Fld7213RRef
						,_Fld7214RRef
						,_Fld7215
						,_Fld7217RRef
						,_Fld7218RRef
						,_Fld7219RRef
						,_Fld7220RRef
						,_Fld7221RRef
						,_Fld7222RRef
						,_Fld7223RRef
						,_Fld7224RRef
						,_Fld7225RRef
						,_Fld7226
						,_Fld7227
						,_Fld7228
						,_Fld7229
						,_Fld7230RRef
						,_Fld7231RRef
						,_Fld7232RRef
						,_Fld7233RRef
						,_Fld7234RRef
						,_Fld7235RRef
						,_Fld7236RRef
						,_Fld7237RRef
						,_Fld7238
						,_Fld7240
						,_Fld7241RRef
						,_Fld7242RRef
						,_Fld18992
						,_Fld21798
						,_Fld21799)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ДатаВходящегоДокумента
						,@ДоговорКонтрагента
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@НоменклатурнаяГруппа
						,@НомерВходящегоДокумента
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@ПодразделениеОрганизации
						,@ПроцентКомиссионногоВознаграждения
						,@СпособРасчетаКомиссионногоВознаграждения
						,@СтавкаНДСВознаграждения
						,@СтатьяЗатрат
						,@СубконтоНУ1
						,@СубконтоНУ2
						,@СубконтоНУ3
						,@Субконто1
						,@Субконто2
						,@Субконто3
						,@СуммаВключаетНДС
						,@СуммаВознаграждения
						,@СуммаНДСВознаграждения
						,@СуммаДокумента
						,@СчетУчетаЗатрат
						,@СчетУчетаЗатратНУ
						,@СчетУчетаНДС
						,@СчетУчетаРасчетовЗаПосредническиеУслуги
						,@СчетУчетаРасчетовПоАвансамВыданным
						,@СчетУчетаРасчетовПоАвансамПолученным
						,@СчетУчетаРасчетовСКонтрагентом
						,@ТипЦен
						,@УчитыватьНДС
						,@УдержатьКомиссионноеВознаграждение
						,@Грузоотправитель
						,@Грузополучатель
						,@НДСВключенВСтоимость
						,@НомерВходящегоДокументаЭлектронногоОбмена
						,@ДатаВходящегоДокументаЭлектронногоОбмена)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document354
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7199RRef	= @ВалютаДокумента
						,_Fld7200	= @ДатаВходящегоДокумента
						,_Fld7201RRef	= @ДоговорКонтрагента
						,_Fld7202	= @Комментарий
						,_Fld7203RRef	= @Контрагент
						,_Fld7204	= @КратностьВзаиморасчетов
						,_Fld7205	= @КурсВзаиморасчетов
						,_Fld7206RRef	= @НоменклатурнаяГруппа
						,_Fld7207	= @НомерВходящегоДокумента
						,_Fld7208RRef	= @Организация
						,_Fld7209RRef	= @Ответственный
						,_Fld7210	= @ОтражатьВБухгалтерскомУчете
						,_Fld7211	= @ОтражатьВНалоговомУчете
						,_Fld7212	= @ОтражатьВУправленческомУчете
						,_Fld7213RRef	= @Подразделение
						,_Fld7214RRef	= @ПодразделениеОрганизации
						,_Fld7215	= @ПроцентКомиссионногоВознаграждения
						,_Fld7217RRef	= @СпособРасчетаКомиссионногоВознаграждения
						,_Fld7218RRef	= @СтавкаНДСВознаграждения
						,_Fld7219RRef	= @СтатьяЗатрат
						,_Fld7220RRef	= @СубконтоНУ1
						,_Fld7221RRef	= @СубконтоНУ2
						,_Fld7222RRef	= @СубконтоНУ3
						,_Fld7223RRef	= @Субконто1
						,_Fld7224RRef	= @Субконто2
						,_Fld7225RRef	= @Субконто3
						,_Fld7226	= @СуммаВключаетНДС
						,_Fld7227	= @СуммаВознаграждения
						,_Fld7228	= @СуммаНДСВознаграждения
						,_Fld7229	= @СуммаДокумента
						,_Fld7230RRef	= @СчетУчетаЗатрат
						,_Fld7231RRef	= @СчетУчетаЗатратНУ
						,_Fld7232RRef	= @СчетУчетаНДС
						,_Fld7233RRef	= @СчетУчетаРасчетовЗаПосредническиеУслуги
						,_Fld7234RRef	= @СчетУчетаРасчетовПоАвансамВыданным
						,_Fld7235RRef	= @СчетУчетаРасчетовПоАвансамПолученным
						,_Fld7236RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld7237RRef	= @ТипЦен
						,_Fld7238	= @УчитыватьНДС
						,_Fld7240	= @УдержатьКомиссионноеВознаграждение
						,_Fld7241RRef	= @Грузоотправитель
						,_Fld7242RRef	= @Грузополучатель
						,_Fld18992	= @НДСВключенВСтоимость
						,_Fld21798	= @НомерВходящегоДокументаЭлектронногоОбмена
						,_Fld21799	= @ДатаВходящегоДокументаЭлектронногоОбмена
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ПроцентКомиссионногоВознаграждения", ПроцентКомиссионногоВознаграждения);
					Команда.Parameters.AddWithValue("СпособРасчетаКомиссионногоВознаграждения", СпособРасчетаКомиссионногоВознаграждения.Ключ());
					Команда.Parameters.AddWithValue("СтавкаНДСВознаграждения", СтавкаНДСВознаграждения.Ключ());
					Команда.Parameters.AddWithValue("СубконтоНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто1", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто2", Guid.Empty);
					Команда.Parameters.AddWithValue("Субконто3", Guid.Empty);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаВознаграждения", СуммаВознаграждения);
					Команда.Parameters.AddWithValue("СуммаНДСВознаграждения", СуммаНДСВознаграждения);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетУчетаЗатрат", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаЗатратНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаНДС", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовЗаПосредническиеУслуги", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансамВыданным", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансамПолученным", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("УдержатьКомиссионноеВознаграждение", УдержатьКомиссионноеВознаграждение);
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
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
					Команда.CommandText = @"Delete _Document354
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}