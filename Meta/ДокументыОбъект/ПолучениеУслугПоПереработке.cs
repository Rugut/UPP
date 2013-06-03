
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
	public partial class ПолучениеУслугПоПереработке:ДокументОбъект
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
		///(Общ) 
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
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.ДокументыСсылка.ЗаказПоставщику Заказ {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
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
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(33)]
		public object СчетЗатрат {get;set;}//Счет затрат
		[DataMember]
		[ProtoMember(34)]
		public object СчетЗатратНУ {get;set;}//Счет затрат (НУ)
		///<summary>
		///(Регл) 
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СчетУчетаНДС {get;set;}//Счет учета НДС
		[DataMember]
		[ProtoMember(36)]
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
						Insert Into _Document525(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld13653RRef
						,_Fld13654
						,_Fld13655RRef
						,_Fld13656
						,_Fld13657RRef
						,_Fld13658
						,_Fld13659
						,_Fld13660
						,_Fld13661
						,_Fld13662RRef
						,_Fld13663RRef
						,_Fld13664
						,_Fld13665
						,_Fld13666
						,_Fld13667RRef
						,_Fld13668RRef
						,_Fld13669RRef
						,_Fld13670RRef
						,_Fld13671
						,_Fld13672
						,_Fld13673RRef
						,_Fld13674RRef
						,_Fld13675RRef
						,_Fld13676
						,_Fld13677RRef
						,_Fld13678RRef
						,_Fld13679RRef)
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
						,@НДСВключенВСтоимость
						,@НомерВходящегоДокумента
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@ПодразделениеОрганизации
						,@Заказ
						,@СтатьяЗатрат
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовСКонтрагентом
						,@ТипЦен
						,@УчитыватьНДС
						,@СчетЗатрат
						,@СчетЗатратНУ
						,@СчетУчетаНДС)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document525
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld13653RRef	= @ВалютаДокумента
						,_Fld13654	= @ДатаВходящегоДокумента
						,_Fld13655RRef	= @ДоговорКонтрагента
						,_Fld13656	= @Комментарий
						,_Fld13657RRef	= @Контрагент
						,_Fld13658	= @КратностьВзаиморасчетов
						,_Fld13659	= @КурсВзаиморасчетов
						,_Fld13660	= @НДСВключенВСтоимость
						,_Fld13661	= @НомерВходящегоДокумента
						,_Fld13662RRef	= @Организация
						,_Fld13663RRef	= @Ответственный
						,_Fld13664	= @ОтражатьВБухгалтерскомУчете
						,_Fld13665	= @ОтражатьВНалоговомУчете
						,_Fld13666	= @ОтражатьВУправленческомУчете
						,_Fld13667RRef	= @Подразделение
						,_Fld13668RRef	= @ПодразделениеОрганизации
						,_Fld13669RRef	= @Заказ
						,_Fld13670RRef	= @СтатьяЗатрат
						,_Fld13671	= @СуммаВключаетНДС
						,_Fld13672	= @СуммаДокумента
						,_Fld13673RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld13674RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld13675RRef	= @ТипЦен
						,_Fld13676	= @УчитыватьНДС
						,_Fld13677RRef	= @СчетЗатрат
						,_Fld13678RRef	= @СчетЗатратНУ
						,_Fld13679RRef	= @СчетУчетаНДС
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
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
					Команда.Parameters.AddWithValue("НомерВходящегоДокумента", НомерВходящегоДокумента);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("Заказ", Заказ.Ссылка);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("СчетЗатрат", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетЗатратНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаНДС", Guid.Empty);
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
					Команда.CommandText = @"Delete _Document525
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}