
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
	public partial class КорректировкаПоступления:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийИсправленияПоступленияРеализации ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор  контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.БанковскиеСчета БанковскийСчетКонтрагента {get;set;}//Банковский счет контрагента
		///<summary>
		///(Общ) Любая дополнительная информация
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
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Регл) 
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object Сделка {get;set;}
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
		public object СчетУчетаРасчетовПоТаре {get;set;}//Счет учета расчетов по таре
		///<summary>
		///(Регл) 
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(36)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(37)]
		public object Проект {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(40)]
		public string/*(20)*/ НомерВходящегоДокументаЭлектронногоОбмена {get;set;}//Номер входящего документа электронного обмена
		[DataMember]
		[ProtoMember(41)]
		public DateTime ДатаВходящегоДокументаЭлектронногоОбмена {get;set;}//Дата входящего документа электронного обмена
		[DataMember]
		[ProtoMember(42)]
		public object ДокументПоступления {get;set;}//Документ поступления
		[DataMember]
		[ProtoMember(43)]
		public bool ВосстановитьНДС {get;set;}//Восстановить НДС в книге продаж
		[DataMember]
		[ProtoMember(44)]
		public object ИсправляемыйДокументПоступления {get;set;}//Исправляемый документ поступления
		[DataMember]
		[ProtoMember(45)]
		public bool КорректироватьБУиНУ {get;set;}//Корректировать бухгалтерский и налоговый учет
		[DataMember]
		[ProtoMember(46)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовИРасходов {get;set;}//Статья прочих доходов и расходов
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
						Insert Into _Document428(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld9211RRef
						,_Fld9212RRef
						,_Fld9213
						,_Fld9214RRef
						,_Fld9215RRef
						,_Fld9216
						,_Fld9217RRef
						,_Fld9218
						,_Fld9219
						,_Fld9220
						,_Fld9221
						,_Fld9222RRef
						,_Fld9223RRef
						,_Fld9224
						,_Fld9225
						,_Fld9226
						,_Fld9227RRef
						,_Fld9228RRef
						,_Fld9230RRef
						,_Fld9231
						,_Fld9232RRef
						,_Fld9233RRef
						,_Fld9234RRef
						,_Fld9235
						,_Fld9236RRef
						,_Fld9237
						,_Fld9238RRef
						,_Fld9240RRef
						,_Fld9241RRef
						,_Fld9242
						,_Fld9243
						,_Fld9245
						,_Fld9247
						,_Fld9248RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ВидОперации
						,@ДатаВходящегоДокумента
						,@ДоговорКонтрагента
						,@БанковскийСчетКонтрагента
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@НДСВключенВСтоимость
						,@НомерВходящегоДокумента
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@ПодразделениеОрганизации
						,@Подразделение
						,@Склад
						,@СуммаВключаетНДС
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовПоТаре
						,@СчетУчетаРасчетовСКонтрагентом
						,@СуммаДокумента
						,@ТипЦен
						,@УчитыватьНДС
						,@УсловиеПродаж
						,@Грузоотправитель
						,@Грузополучатель
						,@НомерВходящегоДокументаЭлектронногоОбмена
						,@ДатаВходящегоДокументаЭлектронногоОбмена
						,@ВосстановитьНДС
						,@КорректироватьБУиНУ
						,@СтатьяПрочихДоходовИРасходов)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document428
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld9211RRef	= @ВалютаДокумента
						,_Fld9212RRef	= @ВидОперации
						,_Fld9213	= @ДатаВходящегоДокумента
						,_Fld9214RRef	= @ДоговорКонтрагента
						,_Fld9215RRef	= @БанковскийСчетКонтрагента
						,_Fld9216	= @Комментарий
						,_Fld9217RRef	= @Контрагент
						,_Fld9218	= @КратностьВзаиморасчетов
						,_Fld9219	= @КурсВзаиморасчетов
						,_Fld9220	= @НДСВключенВСтоимость
						,_Fld9221	= @НомерВходящегоДокумента
						,_Fld9222RRef	= @Организация
						,_Fld9223RRef	= @Ответственный
						,_Fld9224	= @ОтражатьВБухгалтерскомУчете
						,_Fld9225	= @ОтражатьВНалоговомУчете
						,_Fld9226	= @ОтражатьВУправленческомУчете
						,_Fld9227RRef	= @ПодразделениеОрганизации
						,_Fld9228RRef	= @Подразделение
						,_Fld9230RRef	= @Склад
						,_Fld9231	= @СуммаВключаетНДС
						,_Fld9232RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld9233RRef	= @СчетУчетаРасчетовПоТаре
						,_Fld9234RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld9235	= @СуммаДокумента
						,_Fld9236RRef	= @ТипЦен
						,_Fld9237	= @УчитыватьНДС
						,_Fld9238RRef	= @УсловиеПродаж
						,_Fld9240RRef	= @Грузоотправитель
						,_Fld9241RRef	= @Грузополучатель
						,_Fld9242	= @НомерВходящегоДокументаЭлектронногоОбмена
						,_Fld9243	= @ДатаВходящегоДокументаЭлектронногоОбмена
						,_Fld9245	= @ВосстановитьНДС
						,_Fld9247	= @КорректироватьБУиНУ
						,_Fld9248RRef	= @СтатьяПрочихДоходовИРасходов
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ДатаВходящегоДокумента", ДатаВходящегоДокумента);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоТаре", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("НомерВходящегоДокументаЭлектронногоОбмена", НомерВходящегоДокументаЭлектронногоОбмена);
					Команда.Parameters.AddWithValue("ДатаВходящегоДокументаЭлектронногоОбмена", ДатаВходящегоДокументаЭлектронногоОбмена);
					Команда.Parameters.AddWithValue("ВосстановитьНДС", ВосстановитьНДС);
					Команда.Parameters.AddWithValue("КорректироватьБУиНУ", КорректироватьБУиНУ);
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
					Команда.CommandText = @"Delete _Document428
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}