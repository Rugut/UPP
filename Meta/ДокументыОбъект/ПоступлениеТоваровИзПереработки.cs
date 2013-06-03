
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
	public partial class ПоступлениеТоваровИзПереработки:ДокументОбъект
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
		public bool АвтораспределениеМатериалов {get;set;}//Автоматически распределять материалы на продукцию
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ВводитьСтатьиЗатратПоСтрокам {get;set;}//Вводить статьи затрат по строкам
		///<summary>
		///(Общ) Вид поступления: на склад или по ордеру
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.ВидыПоступленияТоваров ВидПоступления {get;set;}//Вид поступления
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.ДокументыСсылка.ЗаказПоставщику Заказ {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ) 
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СкладОрдер {get;set;}//Склад ордер
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат по умолчанию
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СчетУчетаРасчетовПоТаре {get;set;}//Счет учета расчетов по таре
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(34)]
		public bool ИспользоватьЗаказы {get;set;}//Использовать заказы
		[DataMember]
		[ProtoMember(35)]
		public bool ИспользоватьМатериалы {get;set;}//Использовать материалы
		[DataMember]
		[ProtoMember(36)]
		public bool ИспользоватьПрочиеЗатраты {get;set;}//Использовать прочие затраты
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public bool АвтораспределениеВозвратныхОтходов {get;set;}//Автоматически распределять возвратные отходы на продукцию
		[DataMember]
		[ProtoMember(38)]
		public bool ИспользоватьВозвратныеОтходы {get;set;}//Использовать возвратные отходы
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public V82.СправочникиСсылка.Склады СкладОтходов {get;set;}//Склад отходов
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
						Insert Into _Document531(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld13978
						,_Fld13979
						,_Fld13980RRef
						,_Fld13981
						,_Fld13982RRef
						,_Fld13983RRef
						,_Fld13984RRef
						,_Fld13985
						,_Fld13986RRef
						,_Fld13987
						,_Fld13988
						,_Fld13989
						,_Fld13990RRef
						,_Fld13991RRef
						,_Fld13992
						,_Fld13993
						,_Fld13994
						,_Fld13995RRef
						,_Fld13996RRef
						,_Fld13998RRef
						,_Fld13999
						,_Fld14000RRef
						,_Fld14001RRef
						,_Fld14002
						,_Fld14003
						,_Fld14004
						,_Fld14005
						,_Fld14006
						,_Fld14007
						,_Fld14008RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@АвтораспределениеМатериалов
						,@АвтораспределениеПрочихЗатрат
						,@ВалютаДокумента
						,@ВводитьСтатьиЗатратПоСтрокам
						,@ВидПоступления
						,@ДоговорКонтрагента
						,@Заказ
						,@Комментарий
						,@Контрагент
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@НДСВключенВСтоимость
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@ПодразделениеОрганизации
						,@СтатьяЗатрат
						,@СуммаВключаетНДС
						,@СчетУчетаРасчетовПоТаре
						,@ТипЦен
						,@УчитыватьНДС
						,@ИспользоватьЗаказы
						,@ИспользоватьМатериалы
						,@ИспользоватьПрочиеЗатраты
						,@АвтораспределениеВозвратныхОтходов
						,@ИспользоватьВозвратныеОтходы
						,@СкладОтходов)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document531
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld13978	= @АвтораспределениеМатериалов
						,_Fld13979	= @АвтораспределениеПрочихЗатрат
						,_Fld13980RRef	= @ВалютаДокумента
						,_Fld13981	= @ВводитьСтатьиЗатратПоСтрокам
						,_Fld13982RRef	= @ВидПоступления
						,_Fld13983RRef	= @ДоговорКонтрагента
						,_Fld13984RRef	= @Заказ
						,_Fld13985	= @Комментарий
						,_Fld13986RRef	= @Контрагент
						,_Fld13987	= @КратностьВзаиморасчетов
						,_Fld13988	= @КурсВзаиморасчетов
						,_Fld13989	= @НДСВключенВСтоимость
						,_Fld13990RRef	= @Организация
						,_Fld13991RRef	= @Ответственный
						,_Fld13992	= @ОтражатьВБухгалтерскомУчете
						,_Fld13993	= @ОтражатьВНалоговомУчете
						,_Fld13994	= @ОтражатьВУправленческомУчете
						,_Fld13995RRef	= @Подразделение
						,_Fld13996RRef	= @ПодразделениеОрганизации
						,_Fld13998RRef	= @СтатьяЗатрат
						,_Fld13999	= @СуммаВключаетНДС
						,_Fld14000RRef	= @СчетУчетаРасчетовПоТаре
						,_Fld14001RRef	= @ТипЦен
						,_Fld14002	= @УчитыватьНДС
						,_Fld14003	= @ИспользоватьЗаказы
						,_Fld14004	= @ИспользоватьМатериалы
						,_Fld14005	= @ИспользоватьПрочиеЗатраты
						,_Fld14006	= @АвтораспределениеВозвратныхОтходов
						,_Fld14007	= @ИспользоватьВозвратныеОтходы
						,_Fld14008RRef	= @СкладОтходов
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("АвтораспределениеМатериалов", АвтораспределениеМатериалов);
					Команда.Parameters.AddWithValue("АвтораспределениеПрочихЗатрат", АвтораспределениеПрочихЗатрат);
					Команда.Parameters.AddWithValue("ВводитьСтатьиЗатратПоСтрокам", ВводитьСтатьиЗатратПоСтрокам);
					Команда.Parameters.AddWithValue("ВидПоступления", ВидПоступления.Ключ());
					Команда.Parameters.AddWithValue("Заказ", Заказ.Ссылка);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("НДСВключенВСтоимость", НДСВключенВСтоимость);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоТаре", Guid.Empty);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ИспользоватьЗаказы", ИспользоватьЗаказы);
					Команда.Parameters.AddWithValue("ИспользоватьМатериалы", ИспользоватьМатериалы);
					Команда.Parameters.AddWithValue("ИспользоватьПрочиеЗатраты", ИспользоватьПрочиеЗатраты);
					Команда.Parameters.AddWithValue("АвтораспределениеВозвратныхОтходов", АвтораспределениеВозвратныхОтходов);
					Команда.Parameters.AddWithValue("ИспользоватьВозвратныеОтходы", ИспользоватьВозвратныеОтходы);
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
					Команда.CommandText = @"Delete _Document531
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}