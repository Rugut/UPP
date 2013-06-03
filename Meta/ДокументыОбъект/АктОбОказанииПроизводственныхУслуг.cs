
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
	public partial class АктОбОказанииПроизводственныхУслуг:ДокументОбъект
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
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public bool АвтораспределениеПрочихЗатрат {get;set;}//Автоматически распределять прочие затраты на продукцию
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool АвтораспределениеМатериалов {get;set;}//Автоматически распределять материалы на продукцию
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
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
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
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
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public bool РаспределятьПропорциональноКоличеству {get;set;}//Распределять пропорционально количеству
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(32)]
		public object Проект {get;set;}
		[DataMember]
		[ProtoMember(33)]
		public bool ИспользоватьМатериалы {get;set;}//Использовать материалы
		[DataMember]
		[ProtoMember(34)]
		public bool ИспользоватьПрочиеЗатраты {get;set;}//Использовать прочие затраты
		[DataMember]
		[ProtoMember(35)]
		public bool ИспользоватьЗаказы {get;set;}//Использовать заказы
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(37)]
		public string/*(0)*/ АдресДоставки {get;set;}//Адрес доставки
		[DataMember]
		[ProtoMember(38)]
		public string/*(0)*/ ДополнениеКАдресуДоставки {get;set;}//Дополнение к адресу доставки
		[DataMember]
		[ProtoMember(39)]
		public V82.СправочникиСсылка.ФизическиеЛица Исполнитель {get;set;}
		[DataMember]
		[ProtoMember(40)]
		public string/*(50)*/ ИсполнительПоПриказу {get;set;}//Исполнитель по приказу
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
						Insert Into _Document301(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4672
						,_Fld4673
						,_Fld4674
						,_Fld4675RRef
						,_Fld4676RRef
						,_Fld4677RRef
						,_Fld4678RRef
						,_Fld4679RRef
						,_Fld4681
						,_Fld4682
						,_Fld4683
						,_Fld4684
						,_Fld4685
						,_Fld4686RRef
						,_Fld4687RRef
						,_Fld4688
						,_Fld4689
						,_Fld4690
						,_Fld4691RRef
						,_Fld4692RRef
						,_Fld4693RRef
						,_Fld4694
						,_Fld4696
						,_Fld4697
						,_Fld4698
						,_Fld4699RRef
						,_Fld4700
						,_Fld4701
						,_Fld4702RRef
						,_Fld4703)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ОтражатьВНалоговомУчете
						,@АвтораспределениеПрочихЗатрат
						,@АвтораспределениеМатериалов
						,@Организация
						,@ПодразделениеОрганизации
						,@Контрагент
						,@ДоговорКонтрагента
						,@ВалютаДокумента
						,@Комментарий
						,@КратностьВзаиморасчетов
						,@ОтражатьВБухгалтерскомУчете
						,@КурсВзаиморасчетов
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@Ответственный
						,@РаспределятьПропорциональноКоличеству
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовСКонтрагентом
						,@ТипЦен
						,@УчитыватьНДС
						,@ИспользоватьМатериалы
						,@ИспользоватьПрочиеЗатраты
						,@ИспользоватьЗаказы
						,@Грузополучатель
						,@АдресДоставки
						,@ДополнениеКАдресуДоставки
						,@Исполнитель
						,@ИсполнительПоПриказу)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document301
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4672	= @ОтражатьВНалоговомУчете
						,_Fld4673	= @АвтораспределениеПрочихЗатрат
						,_Fld4674	= @АвтораспределениеМатериалов
						,_Fld4675RRef	= @Организация
						,_Fld4676RRef	= @ПодразделениеОрганизации
						,_Fld4677RRef	= @Контрагент
						,_Fld4678RRef	= @ДоговорКонтрагента
						,_Fld4679RRef	= @ВалютаДокумента
						,_Fld4681	= @Комментарий
						,_Fld4682	= @КратностьВзаиморасчетов
						,_Fld4683	= @ОтражатьВБухгалтерскомУчете
						,_Fld4684	= @КурсВзаиморасчетов
						,_Fld4685	= @ОтражатьВУправленческомУчете
						,_Fld4686RRef	= @Подразделение
						,_Fld4687RRef	= @Ответственный
						,_Fld4688	= @РаспределятьПропорциональноКоличеству
						,_Fld4689	= @СуммаВключаетНДС
						,_Fld4690	= @СуммаДокумента
						,_Fld4691RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld4692RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld4693RRef	= @ТипЦен
						,_Fld4694	= @УчитыватьНДС
						,_Fld4696	= @ИспользоватьМатериалы
						,_Fld4697	= @ИспользоватьПрочиеЗатраты
						,_Fld4698	= @ИспользоватьЗаказы
						,_Fld4699RRef	= @Грузополучатель
						,_Fld4700	= @АдресДоставки
						,_Fld4701	= @ДополнениеКАдресуДоставки
						,_Fld4702RRef	= @Исполнитель
						,_Fld4703	= @ИсполнительПоПриказу
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("АвтораспределениеПрочихЗатрат", АвтораспределениеПрочихЗатрат);
					Команда.Parameters.AddWithValue("АвтораспределениеМатериалов", АвтораспределениеМатериалов);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("РаспределятьПропорциональноКоличеству", РаспределятьПропорциональноКоличеству);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ИспользоватьМатериалы", ИспользоватьМатериалы);
					Команда.Parameters.AddWithValue("ИспользоватьПрочиеЗатраты", ИспользоватьПрочиеЗатраты);
					Команда.Parameters.AddWithValue("ИспользоватьЗаказы", ИспользоватьЗаказы);
					Команда.Parameters.AddWithValue("АдресДоставки", АдресДоставки);
					Команда.Parameters.AddWithValue("ДополнениеКАдресуДоставки", ДополнениеКАдресуДоставки);
					Команда.Parameters.AddWithValue("ИсполнительПоПриказу", ИсполнительПоПриказу);
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
					Команда.CommandText = @"Delete _Document301
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}