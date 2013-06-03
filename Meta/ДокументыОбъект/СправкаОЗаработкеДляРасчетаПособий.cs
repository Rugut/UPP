
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
	public partial class СправкаОЗаработкеДляРасчетаПособий:ДокументОбъект
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
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(4)*/ ГодС {get;set;}//Год С
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(4)*/ ГодПо {get;set;}//Год по
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ФизическиеЛица ГлавныйБухгалтер {get;set;}//Главный бухгалтер
		[DataMember]
		[ProtoMember(17)]
		public string/*(240)*/ ТелефонОрганизации {get;set;}//Телефон организации
		[DataMember]
		[ProtoMember(18)]
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		[DataMember]
		[ProtoMember(19)]
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		[DataMember]
		[ProtoMember(20)]
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС
		[DataMember]
		[ProtoMember(21)]
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		[DataMember]
		[ProtoMember(22)]
		public DateTime ПериодРаботыС {get;set;}//Период работы С
		[DataMember]
		[ProtoMember(23)]
		public DateTime ПериодРаботыПо {get;set;}//Период работы по
		[DataMember]
		[ProtoMember(24)]
		public string/*(14)*/ СтраховойНомерПФР {get;set;}//Страховой номер ПФР
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(40)*/ Фамилия {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public string/*(40)*/ Имя {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public string/*(40)*/ Отчество {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public string/*(240)*/ Адрес {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ВидДокумента {get;set;}//Вид документа
		[DataMember]
		[ProtoMember(30)]
		public string/*(14)*/ СерияДокумента {get;set;}//Серия документа
		[DataMember]
		[ProtoMember(31)]
		public string/*(14)*/ НомерДокумента {get;set;}//Номер документа
		[DataMember]
		[ProtoMember(32)]
		public DateTime ДатаВыдачиДокумента {get;set;}//Дата выдачи документа
		[DataMember]
		[ProtoMember(33)]
		public string/*(0)*/ КемВыданДокумент {get;set;}//Кем выдан документ
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
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
						Insert Into _Document599(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17477RRef
						,_Fld17478RRef
						,_Fld17479RRef
						,_Fld17480
						,_Fld17481
						,_Fld17482RRef
						,_Fld17483RRef
						,_Fld17484RRef
						,_Fld17485
						,_Fld17486
						,_Fld17487
						,_Fld17488
						,_Fld17489
						,_Fld17490
						,_Fld17491
						,_Fld17492
						,_Fld17493
						,_Fld17494
						,_Fld17495
						,_Fld17496
						,_Fld17497RRef
						,_Fld17498
						,_Fld17499
						,_Fld17500
						,_Fld17501
						,_Fld17502
						,_Fld17503RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Сотрудник
						,@ФизЛицо
						,@ГодС
						,@ГодПо
						,@Руководитель
						,@ДолжностьРуководителя
						,@ГлавныйБухгалтер
						,@ТелефонОрганизации
						,@РегистрационныйНомерФСС
						,@ДополнительныйКодФСС
						,@КодПодчиненностиФСС
						,@НаименованиеТерриториальногоОрганаФСС
						,@ПериодРаботыС
						,@ПериодРаботыПо
						,@СтраховойНомерПФР
						,@Фамилия
						,@Имя
						,@Отчество
						,@Адрес
						,@ВидДокумента
						,@СерияДокумента
						,@НомерДокумента
						,@ДатаВыдачиДокумента
						,@КемВыданДокумент
						,@Комментарий
						,@Ответственный)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document599
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17477RRef	= @Организация
						,_Fld17478RRef	= @Сотрудник
						,_Fld17479RRef	= @ФизЛицо
						,_Fld17480	= @ГодС
						,_Fld17481	= @ГодПо
						,_Fld17482RRef	= @Руководитель
						,_Fld17483RRef	= @ДолжностьРуководителя
						,_Fld17484RRef	= @ГлавныйБухгалтер
						,_Fld17485	= @ТелефонОрганизации
						,_Fld17486	= @РегистрационныйНомерФСС
						,_Fld17487	= @ДополнительныйКодФСС
						,_Fld17488	= @КодПодчиненностиФСС
						,_Fld17489	= @НаименованиеТерриториальногоОрганаФСС
						,_Fld17490	= @ПериодРаботыС
						,_Fld17491	= @ПериодРаботыПо
						,_Fld17492	= @СтраховойНомерПФР
						,_Fld17493	= @Фамилия
						,_Fld17494	= @Имя
						,_Fld17495	= @Отчество
						,_Fld17496	= @Адрес
						,_Fld17497RRef	= @ВидДокумента
						,_Fld17498	= @СерияДокумента
						,_Fld17499	= @НомерДокумента
						,_Fld17500	= @ДатаВыдачиДокумента
						,_Fld17501	= @КемВыданДокумент
						,_Fld17502	= @Комментарий
						,_Fld17503RRef	= @Ответственный
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ГодС", ГодС);
					Команда.Parameters.AddWithValue("ГодПо", ГодПо);
					Команда.Parameters.AddWithValue("ТелефонОрганизации", ТелефонОрганизации);
					Команда.Parameters.AddWithValue("РегистрационныйНомерФСС", РегистрационныйНомерФСС);
					Команда.Parameters.AddWithValue("ДополнительныйКодФСС", ДополнительныйКодФСС);
					Команда.Parameters.AddWithValue("КодПодчиненностиФСС", КодПодчиненностиФСС);
					Команда.Parameters.AddWithValue("НаименованиеТерриториальногоОрганаФСС", НаименованиеТерриториальногоОрганаФСС);
					Команда.Parameters.AddWithValue("ПериодРаботыС", ПериодРаботыС);
					Команда.Parameters.AddWithValue("ПериодРаботыПо", ПериодРаботыПо);
					Команда.Parameters.AddWithValue("СтраховойНомерПФР", СтраховойНомерПФР);
					Команда.Parameters.AddWithValue("Фамилия", Фамилия);
					Команда.Parameters.AddWithValue("Имя", Имя);
					Команда.Parameters.AddWithValue("Отчество", Отчество);
					Команда.Parameters.AddWithValue("Адрес", Адрес);
					Команда.Parameters.AddWithValue("СерияДокумента", СерияДокумента);
					Команда.Parameters.AddWithValue("НомерДокумента", НомерДокумента);
					Команда.Parameters.AddWithValue("ДатаВыдачиДокумента", ДатаВыдачиДокумента);
					Команда.Parameters.AddWithValue("КемВыданДокумент", КемВыданДокумент);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document599
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}