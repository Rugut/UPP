
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
						Insert Into _Document23173(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld25419RRef
						,_Fld25420RRef
						,_Fld25421RRef
						,_Fld25422
						,_Fld25423
						,_Fld25424RRef
						,_Fld25425RRef
						,_Fld25426RRef
						,_Fld25427
						,_Fld25428
						,_Fld25429
						,_Fld25430
						,_Fld25431
						,_Fld25432
						,_Fld25433
						,_Fld25434
						,_Fld25435
						,_Fld25436
						,_Fld25437
						,_Fld25438
						,_Fld25439RRef
						,_Fld25440
						,_Fld25441
						,_Fld25442
						,_Fld25443
						,_Fld25444
						,_Fld25445RRef)
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
						Update _Document23173
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld25419RRef	= @Организация
						,_Fld25420RRef	= @Сотрудник
						,_Fld25421RRef	= @ФизЛицо
						,_Fld25422	= @ГодС
						,_Fld25423	= @ГодПо
						,_Fld25424RRef	= @Руководитель
						,_Fld25425RRef	= @ДолжностьРуководителя
						,_Fld25426RRef	= @ГлавныйБухгалтер
						,_Fld25427	= @ТелефонОрганизации
						,_Fld25428	= @РегистрационныйНомерФСС
						,_Fld25429	= @ДополнительныйКодФСС
						,_Fld25430	= @КодПодчиненностиФСС
						,_Fld25431	= @НаименованиеТерриториальногоОрганаФСС
						,_Fld25432	= @ПериодРаботыС
						,_Fld25433	= @ПериодРаботыПо
						,_Fld25434	= @СтраховойНомерПФР
						,_Fld25435	= @Фамилия
						,_Fld25436	= @Имя
						,_Fld25437	= @Отчество
						,_Fld25438	= @Адрес
						,_Fld25439RRef	= @ВидДокумента
						,_Fld25440	= @СерияДокумента
						,_Fld25441	= @НомерДокумента
						,_Fld25442	= @ДатаВыдачиДокумента
						,_Fld25443	= @КемВыданДокумент
						,_Fld25444	= @Комментарий
						,_Fld25445RRef	= @Ответственный
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
					Команда.CommandText = @"Delete _Document23173
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}