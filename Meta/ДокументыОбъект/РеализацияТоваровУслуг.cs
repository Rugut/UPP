
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
	public partial class РеализацияТоваровУслуг:ДокументОбъект
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.ВидыПередачиТоваров ВидПередачи {get;set;}//Вид передачи
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ИнформационныеКарты ДисконтнаяКарта {get;set;}//Дисконтная карта
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ АдресДоставки {get;set;}//Адрес доставки
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public object Проект {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		[DataMember]
		[ProtoMember(32)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийРеализацияТоваров ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетУчетаДоходовПоТареБУ {get;set;}//Счет учета доходов по таре (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СчетУчетаДоходовПоТареНУ {get;set;}//Счет учета доходов по таре (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СчетУчетаРасходовПоТареБУ {get;set;}//Счет учета расходов по таре (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СчетУчетаРасходовПоТареНУ {get;set;}//Счет учета расходов по таре (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		[DataMember]
		[ProtoMember(38)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовРасходовПоТаре {get;set;}//Статья прочих доходов расходов по таре
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public object СчетУчетаРасчетовПоТаре {get;set;}//Счет учета расчетов по таре
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public V82.СправочникиСсылка.ФизическиеЛица ОтпускРазрешил {get;set;}//Отпуск товара разрешил
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(44)]
		public V82.СправочникиСсылка.ФизическиеЛица ОтпускПроизвел {get;set;}//Отпуск товара произвел
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(45)]
		public string/*(15)*/ ДоверенностьНомер {get;set;}//Номер доверенности
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(46)]
		public DateTime ДоверенностьДата {get;set;}//Дата доверенности
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(47)]
		public string/*(0)*/ ДоверенностьВыдана {get;set;}//Организация выдавшая доверенность
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(48)]
		public string/*(0)*/ ДоверенностьЧерезКого {get;set;}//Сотрудник организации на которого выдана доверенность
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(49)]
		public bool ОтключитьКонтрольВзаиморасчетов {get;set;}//Отключить контроль взаиморасчетов
		[DataMember]
		[ProtoMember(50)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(51)]
		public string/*(0)*/ ДополнениеКАдресуДоставки {get;set;}//Дополнение к адресу доставки
		[DataMember]
		[ProtoMember(52)]
		public V82.СправочникиСсылка.ФизическиеЛица ГлавныйБухгалтер {get;set;}//Главный бухгалтер
		[DataMember]
		[ProtoMember(53)]
		public string/*(50)*/ ЗаГлавногоБухгалтераПоПриказу {get;set;}//За главного бухгалтера по приказу
		[DataMember]
		[ProtoMember(54)]
		public string/*(50)*/ ЗаРуководителяПоПриказу {get;set;}//За руководителя по приказу
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
						Insert Into _Document563(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld15776RRef
						,_Fld15777RRef
						,_Fld15778RRef
						,_Fld15779RRef
						,_Fld15780RRef
						,_Fld15781RRef
						,_Fld15782RRef
						,_Fld15783RRef
						,_Fld15784RRef
						,_Fld15785
						,_Fld15786
						,_Fld15787
						,_Fld15788
						,_Fld15789
						,_Fld15790RRef
						,_Fld15791
						,_Fld15792
						,_Fld15793
						,_Fld15794RRef
						,_Fld15797RRef
						,_Fld15798
						,_Fld15799RRef
						,_Fld15800RRef
						,_Fld15801RRef
						,_Fld15802RRef
						,_Fld15803RRef
						,_Fld15804RRef
						,_Fld15805RRef
						,_Fld15806RRef
						,_Fld15807RRef
						,_Fld15808RRef
						,_Fld15809
						,_Fld15810RRef
						,_Fld15811RRef
						,_Fld15812
						,_Fld15813
						,_Fld15814
						,_Fld15815
						,_Fld15816
						,_Fld15817RRef
						,_Fld15818
						,_Fld15819RRef
						,_Fld15820
						,_Fld15821)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@БанковскийСчетОрганизации
						,@ВалютаДокумента
						,@Контрагент
						,@ВидПередачи
						,@Грузоотправитель
						,@Грузополучатель
						,@ДисконтнаяКарта
						,@ДоговорКонтрагента
						,@АдресДоставки
						,@СуммаДокумента
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@Комментарий
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@Склад
						,@СуммаВключаетНДС
						,@ВидОперации
						,@СчетУчетаДоходовПоТареБУ
						,@СчетУчетаДоходовПоТареНУ
						,@СчетУчетаРасходовПоТареБУ
						,@СчетУчетаРасходовПоТареНУ
						,@СчетУчетаРасчетовПоАвансам
						,@СтатьяПрочихДоходовРасходовПоТаре
						,@СчетУчетаРасчетовПоТаре
						,@СчетУчетаРасчетовСКонтрагентом
						,@ТипЦен
						,@УчитыватьНДС
						,@ОтпускРазрешил
						,@ОтпускПроизвел
						,@ДоверенностьНомер
						,@ДоверенностьДата
						,@ДоверенностьВыдана
						,@ДоверенностьЧерезКого
						,@ОтключитьКонтрольВзаиморасчетов
						,@УсловиеПродаж
						,@ДополнениеКАдресуДоставки
						,@ГлавныйБухгалтер
						,@ЗаГлавногоБухгалтераПоПриказу
						,@ЗаРуководителяПоПриказу)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document563
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld15776RRef	= @Организация
						,_Fld15777RRef	= @БанковскийСчетОрганизации
						,_Fld15778RRef	= @ВалютаДокумента
						,_Fld15779RRef	= @Контрагент
						,_Fld15780RRef	= @ВидПередачи
						,_Fld15781RRef	= @Грузоотправитель
						,_Fld15782RRef	= @Грузополучатель
						,_Fld15783RRef	= @ДисконтнаяКарта
						,_Fld15784RRef	= @ДоговорКонтрагента
						,_Fld15785	= @АдресДоставки
						,_Fld15786	= @СуммаДокумента
						,_Fld15787	= @КратностьВзаиморасчетов
						,_Fld15788	= @КурсВзаиморасчетов
						,_Fld15789	= @Комментарий
						,_Fld15790RRef	= @Ответственный
						,_Fld15791	= @ОтражатьВБухгалтерскомУчете
						,_Fld15792	= @ОтражатьВНалоговомУчете
						,_Fld15793	= @ОтражатьВУправленческомУчете
						,_Fld15794RRef	= @Подразделение
						,_Fld15797RRef	= @Склад
						,_Fld15798	= @СуммаВключаетНДС
						,_Fld15799RRef	= @ВидОперации
						,_Fld15800RRef	= @СчетУчетаДоходовПоТареБУ
						,_Fld15801RRef	= @СчетУчетаДоходовПоТареНУ
						,_Fld15802RRef	= @СчетУчетаРасходовПоТареБУ
						,_Fld15803RRef	= @СчетУчетаРасходовПоТареНУ
						,_Fld15804RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld15805RRef	= @СтатьяПрочихДоходовРасходовПоТаре
						,_Fld15806RRef	= @СчетУчетаРасчетовПоТаре
						,_Fld15807RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld15808RRef	= @ТипЦен
						,_Fld15809	= @УчитыватьНДС
						,_Fld15810RRef	= @ОтпускРазрешил
						,_Fld15811RRef	= @ОтпускПроизвел
						,_Fld15812	= @ДоверенностьНомер
						,_Fld15813	= @ДоверенностьДата
						,_Fld15814	= @ДоверенностьВыдана
						,_Fld15815	= @ДоверенностьЧерезКого
						,_Fld15816	= @ОтключитьКонтрольВзаиморасчетов
						,_Fld15817RRef	= @УсловиеПродаж
						,_Fld15818	= @ДополнениеКАдресуДоставки
						,_Fld15819RRef	= @ГлавныйБухгалтер
						,_Fld15820	= @ЗаГлавногоБухгалтераПоПриказу
						,_Fld15821	= @ЗаРуководителяПоПриказу
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидПередачи", ВидПередачи.Ключ());
					Команда.Parameters.AddWithValue("АдресДоставки", АдресДоставки);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаДоходовПоТареБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаДоходовПоТареНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовПоТареБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасходовПоТареНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоТаре", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ДоверенностьНомер", ДоверенностьНомер);
					Команда.Parameters.AddWithValue("ДоверенностьДата", ДоверенностьДата);
					Команда.Parameters.AddWithValue("ДоверенностьВыдана", ДоверенностьВыдана);
					Команда.Parameters.AddWithValue("ДоверенностьЧерезКого", ДоверенностьЧерезКого);
					Команда.Parameters.AddWithValue("ОтключитьКонтрольВзаиморасчетов", ОтключитьКонтрольВзаиморасчетов);
					Команда.Parameters.AddWithValue("ДополнениеКАдресуДоставки", ДополнениеКАдресуДоставки);
					Команда.Parameters.AddWithValue("ЗаГлавногоБухгалтераПоПриказу", ЗаГлавногоБухгалтераПоПриказу);
					Команда.Parameters.AddWithValue("ЗаРуководителяПоПриказу", ЗаРуководителяПоПриказу);
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
					Команда.CommandText = @"Delete _Document563
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}