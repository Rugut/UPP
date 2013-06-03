
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СведенияОВзносахИСтраховомСтажеСПВ1:ДокументОбъект
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
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(13)]
		public bool ПринятоВПФР {get;set;}//Принято в ПФР
		[DataMember]
		[ProtoMember(14)]
		public string/*(5)*/ НомерПачки {get;set;}//Номер пачки
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.КатегорииЗастрахованныхЛицПФР КатегорияЗастрахованныхЛиц {get;set;}//Категория застрахованных лиц
		[DataMember]
		[ProtoMember(16)]
		public DateTime ОтчетныйПериод {get;set;}//Отчетный период
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ТипыСведенийСЗВ ТипСведенийСЗВ {get;set;}//Тип сведений СЗВ
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.ФорматФайлаПФР ФорматФайла {get;set;}//Формат файла
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
						Insert Into _Document581(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld16746RRef
						,_Fld16747
						,_Fld16748RRef
						,_Fld16749
						,_Fld16750
						,_Fld16751
						,_Fld16752RRef
						,_Fld16753
						,_Fld16754RRef
						,_Fld16755RRef
						,_Fld16756RRef
						,_Fld16757RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Комментарий
						,@Ответственный
						,@КраткийСоставДокумента
						,@ПринятоВПФР
						,@НомерПачки
						,@КатегорияЗастрахованныхЛиц
						,@ОтчетныйПериод
						,@ТипСведенийСЗВ
						,@Руководитель
						,@ДолжностьРуководителя
						,@ФорматФайла)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document581
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld16746RRef	= @Организация
						,_Fld16747	= @Комментарий
						,_Fld16748RRef	= @Ответственный
						,_Fld16749	= @КраткийСоставДокумента
						,_Fld16750	= @ПринятоВПФР
						,_Fld16751	= @НомерПачки
						,_Fld16752RRef	= @КатегорияЗастрахованныхЛиц
						,_Fld16753	= @ОтчетныйПериод
						,_Fld16754RRef	= @ТипСведенийСЗВ
						,_Fld16755RRef	= @Руководитель
						,_Fld16756RRef	= @ДолжностьРуководителя
						,_Fld16757RRef	= @ФорматФайла
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ПринятоВПФР", ПринятоВПФР);
					Команда.Parameters.AddWithValue("НомерПачки", НомерПачки);
					Команда.Parameters.AddWithValue("КатегорияЗастрахованныхЛиц", КатегорияЗастрахованныхЛиц.Ключ());
					Команда.Parameters.AddWithValue("ОтчетныйПериод", ОтчетныйПериод);
					Команда.Parameters.AddWithValue("ТипСведенийСЗВ", ТипСведенийСЗВ.Ключ());
					Команда.Parameters.AddWithValue("ФорматФайла", ФорматФайла.Ключ());
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
					Команда.CommandText = @"Delete _Document581
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}