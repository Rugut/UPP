
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
	public partial class ЗапросВПФРОЗаработкеСотрудника:ДокументОбъект
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
		public V82.СправочникиСсылка.Работодатели Страхователь {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(4)*/ ГодС {get;set;}//Год С
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(4)*/ ГодПо {get;set;}//Год по
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		[DataMember]
		[ProtoMember(17)]
		public string/*(100)*/ НаименованиеТерриториальногоОрганаПФР {get;set;}//Наименование территориального органа ПФР
		[DataMember]
		[ProtoMember(18)]
		public string/*(240)*/ АдресОрганизации {get;set;}//Адрес организации
		[DataMember]
		[ProtoMember(19)]
		public string/*(240)*/ ТелефонОрганизации {get;set;}//Телефон организации
		[DataMember]
		[ProtoMember(20)]
		public string/*(14)*/ СтраховойНомерПФР {get;set;}//Страховой номер ПФР
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(40)*/ Фамилия {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(40)*/ Имя {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(40)*/ Отчество {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public string/*(240)*/ Адрес {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ВидДокумента {get;set;}//Вид документа
		[DataMember]
		[ProtoMember(27)]
		public string/*(14)*/ СерияДокумента {get;set;}//Серия документа
		[DataMember]
		[ProtoMember(28)]
		public string/*(14)*/ НомерДокумента {get;set;}//Номер документа
		[DataMember]
		[ProtoMember(29)]
		public DateTime ДатаВыдачиДокумента {get;set;}//Дата выдачи документа
		[DataMember]
		[ProtoMember(30)]
		public string/*(0)*/ КемВыданДокумент {get;set;}//Кем выдан документ
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
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
						Insert Into _Document373(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7349RRef
						,_Fld7350RRef
						,_Fld7351RRef
						,_Fld7352RRef
						,_Fld7353
						,_Fld7354
						,_Fld7355RRef
						,_Fld7356RRef
						,_Fld7357
						,_Fld7358
						,_Fld7359
						,_Fld7360
						,_Fld7361
						,_Fld7362
						,_Fld7363
						,_Fld7364
						,_Fld7365
						,_Fld7366RRef
						,_Fld7367
						,_Fld7368
						,_Fld7369
						,_Fld7370
						,_Fld7371
						,_Fld7372RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Сотрудник
						,@ФизЛицо
						,@Страхователь
						,@ГодС
						,@ГодПо
						,@Руководитель
						,@ДолжностьРуководителя
						,@НаименованиеТерриториальногоОрганаПФР
						,@АдресОрганизации
						,@ТелефонОрганизации
						,@СтраховойНомерПФР
						,@ДатаРождения
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
						Update _Document373
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7349RRef	= @Организация
						,_Fld7350RRef	= @Сотрудник
						,_Fld7351RRef	= @ФизЛицо
						,_Fld7352RRef	= @Страхователь
						,_Fld7353	= @ГодС
						,_Fld7354	= @ГодПо
						,_Fld7355RRef	= @Руководитель
						,_Fld7356RRef	= @ДолжностьРуководителя
						,_Fld7357	= @НаименованиеТерриториальногоОрганаПФР
						,_Fld7358	= @АдресОрганизации
						,_Fld7359	= @ТелефонОрганизации
						,_Fld7360	= @СтраховойНомерПФР
						,_Fld7361	= @ДатаРождения
						,_Fld7362	= @Фамилия
						,_Fld7363	= @Имя
						,_Fld7364	= @Отчество
						,_Fld7365	= @Адрес
						,_Fld7366RRef	= @ВидДокумента
						,_Fld7367	= @СерияДокумента
						,_Fld7368	= @НомерДокумента
						,_Fld7369	= @ДатаВыдачиДокумента
						,_Fld7370	= @КемВыданДокумент
						,_Fld7371	= @Комментарий
						,_Fld7372RRef	= @Ответственный
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ГодС", ГодС);
					Команда.Parameters.AddWithValue("ГодПо", ГодПо);
					Команда.Parameters.AddWithValue("НаименованиеТерриториальногоОрганаПФР", НаименованиеТерриториальногоОрганаПФР);
					Команда.Parameters.AddWithValue("АдресОрганизации", АдресОрганизации);
					Команда.Parameters.AddWithValue("ТелефонОрганизации", ТелефонОрганизации);
					Команда.Parameters.AddWithValue("СтраховойНомерПФР", СтраховойНомерПФР);
					Команда.Parameters.AddWithValue("ДатаРождения", ДатаРождения);
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
					Команда.CommandText = @"Delete _Document373
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}