
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class МедицинскиеСтраховыеПолисы:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*25*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыМедицинскогоСтрахования ВидСтрахования {get;set;}//Вид страхования
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаВыдачиПолиса {get;set;}//Дата выдачи полиса
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаОкончанияПолиса {get;set;}//Дата окончания полиса
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ПрограммыМедицинскогоСтрахования ПрограммаСтрахования {get;set;}//Программа страхования
		[DataMember]
		[ProtoMember(14)]
		public bool СтрахованиеРодственника {get;set;}//Страхование родственника
		[DataMember]
		[ProtoMember(15)]
		public string/*(50)*/ Родственник {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		[DataMember]
		[ProtoMember(18)]
		public string/*(300)*/ УдостоверениеЛичности {get;set;}//Удостоверение личности
		[DataMember]
		[ProtoMember(19)]
		public string/*(100)*/ АдресФактический {get;set;}//Адрес фактический
		[DataMember]
		[ProtoMember(20)]
		public string/*(100)*/ ТелефонДомашний {get;set;}//Телефон домашний
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ДокументВид {get;set;}//Вид документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(14)*/ ДокументСерия {get;set;}//Серия документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(14)*/ ДокументНомер {get;set;}//Номер документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public DateTime ДокументДатаВыдачи {get;set;}//Дата выдачи документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(0)*/ ДокументКемВыдан {get;set;}//Кем выдан документ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public string/*(15)*/ ДокументКодПодразделения {get;set;}//Код подразделения в документе
		[DataMember]
		[ProtoMember(27)]
		public string/*(0)*/ Комментарий {get;set;}
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference136(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2539RRef
						,_Fld2540RRef
						,_Fld2541RRef
						,_Fld2542
						,_Fld2543
						,_Fld2544RRef
						,_Fld2545
						,_Fld2546
						,_Fld2547RRef
						,_Fld2548
						,_Fld2549
						,_Fld2550
						,_Fld2551
						,_Fld2552RRef
						,_Fld2553
						,_Fld2554
						,_Fld2555
						,_Fld2556
						,_Fld2557
						,_Fld2558)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Физлицо
						,@Организация
						,@ВидСтрахования
						,@ДатаВыдачиПолиса
						,@ДатаОкончанияПолиса
						,@ПрограммаСтрахования
						,@СтрахованиеРодственника
						,@Родственник
						,@Пол
						,@ДатаРождения
						,@УдостоверениеЛичности
						,@АдресФактический
						,@ТелефонДомашний
						,@ДокументВид
						,@ДокументСерия
						,@ДокументНомер
						,@ДокументДатаВыдачи
						,@ДокументКемВыдан
						,@ДокументКодПодразделения
						,@Комментарий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference136
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2539RRef	= @Физлицо
						,_Fld2540RRef	= @Организация
						,_Fld2541RRef	= @ВидСтрахования
						,_Fld2542	= @ДатаВыдачиПолиса
						,_Fld2543	= @ДатаОкончанияПолиса
						,_Fld2544RRef	= @ПрограммаСтрахования
						,_Fld2545	= @СтрахованиеРодственника
						,_Fld2546	= @Родственник
						,_Fld2547RRef	= @Пол
						,_Fld2548	= @ДатаРождения
						,_Fld2549	= @УдостоверениеЛичности
						,_Fld2550	= @АдресФактический
						,_Fld2551	= @ТелефонДомашний
						,_Fld2552RRef	= @ДокументВид
						,_Fld2553	= @ДокументСерия
						,_Fld2554	= @ДокументНомер
						,_Fld2555	= @ДокументДатаВыдачи
						,_Fld2556	= @ДокументКемВыдан
						,_Fld2557	= @ДокументКодПодразделения
						,_Fld2558	= @Комментарий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Физлицо", Физлицо.Ссылка);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("ВидСтрахования", ВидСтрахования.Ключ());
					Команда.Parameters.AddWithValue("ДатаВыдачиПолиса", ДатаВыдачиПолиса);
					Команда.Parameters.AddWithValue("ДатаОкончанияПолиса", ДатаОкончанияПолиса);
					Команда.Parameters.AddWithValue("ПрограммаСтрахования", ПрограммаСтрахования.Ссылка);
					Команда.Parameters.AddWithValue("СтрахованиеРодственника", СтрахованиеРодственника);
					Команда.Parameters.AddWithValue("Родственник", Родственник);
					Команда.Parameters.AddWithValue("Пол", Пол.Ключ());
					Команда.Parameters.AddWithValue("ДатаРождения", ДатаРождения);
					Команда.Parameters.AddWithValue("УдостоверениеЛичности", УдостоверениеЛичности);
					Команда.Parameters.AddWithValue("АдресФактический", АдресФактический);
					Команда.Parameters.AddWithValue("ТелефонДомашний", ТелефонДомашний);
					Команда.Parameters.AddWithValue("ДокументВид", ДокументВид.Ссылка);
					Команда.Parameters.AddWithValue("ДокументСерия", ДокументСерия);
					Команда.Parameters.AddWithValue("ДокументНомер", ДокументНомер);
					Команда.Parameters.AddWithValue("ДокументДатаВыдачи", ДокументДатаВыдачи);
					Команда.Parameters.AddWithValue("ДокументКемВыдан", ДокументКемВыдан);
					Команда.Parameters.AddWithValue("ДокументКодПодразделения", ДокументКодПодразделения);
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
					Команда.CommandText = @"Delete _Reference136
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}