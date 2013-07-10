
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
	public partial class СведенияОТрудовомСтажеИЗаработкеСЗВ4:ДокументОбъект
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
		public string/*(7)*/ ТипФормДокументов {get;set;}//Тип форм документов
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.КатегорииЗастрахованныхЛицПФР КатегорияЗастрахованныхЛиц {get;set;}//Категория застрахованных лиц
		[DataMember]
		[ProtoMember(15)]
		public DateTime ОтчетныйПериод {get;set;}//Отчетный период
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ТипыСведенийСЗВ ТипСведенийСЗВ {get;set;}//Тип сведений СЗВ
		[DataMember]
		[ProtoMember(17)]
		public DateTime КорректируемыйПериод {get;set;}//Корректируемый период
		[DataMember]
		[ProtoMember(18)]
		public string/*(5)*/ НомерПачки {get;set;}//Номер пачки
		[DataMember]
		[ProtoMember(19)]
		public bool ПринятоВПФР {get;set;}//Принято в ПФР
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		[DataMember]
		[ProtoMember(22)]
		public V82.Перечисления/*Ссылка*/.ФорматФайлаПФР ФорматФайла {get;set;}//Формат файла
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.ТерриториальныеУсловия ТерриториальныеУсловия {get;set;}//Территориальные условия
		[DataMember]
		[ProtoMember(24)]
		public string/*(4)*/ ВидКорректировки {get;set;}//Вид корректировки
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(4)*/ Год {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(4)*/ УдалитьТипСведений {get;set;}//Удалить тип сведений
		///<summary>
		///Ведет себя по правилам 2009 года.
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public bool СпециальныйДокумент2010года {get;set;}//Специальный документ 2010 года
		[DataMember]
		[ProtoMember(28)]
		public bool НеПередаватьДоуплаченныеСуммы {get;set;}//Не передавать доуплаченные суммы
		///<summary>
		///Такие документы создает обработка загрузки из принятых ПФРом файлов
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public bool ЗаполненПринятымиСведениями {get;set;}//Заполнен принятыми сведениями
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
						Insert Into _Document449(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11415RRef
						,_Fld11420
						,_Fld11421RRef
						,_Fld11423
						,_Fld11418
						,_Fld27293RRef
						,_Fld27294
						,_Fld27295RRef
						,_Fld27296
						,_Fld27297
						,_Fld27298
						,_Fld27299RRef
						,_Fld27300RRef
						,_Fld22036RRef
						,_Fld11422RRef
						,_Fld11419
						,_Fld11416
						,_Fld11417
						,_Fld27301
						,_Fld27302
						,_Fld27303)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Комментарий
						,@Ответственный
						,@КраткийСоставДокумента
						,@ТипФормДокументов
						,@КатегорияЗастрахованныхЛиц
						,@ОтчетныйПериод
						,@ТипСведенийСЗВ
						,@КорректируемыйПериод
						,@НомерПачки
						,@ПринятоВПФР
						,@Руководитель
						,@ДолжностьРуководителя
						,@ФорматФайла
						,@ТерриториальныеУсловия
						,@ВидКорректировки
						,@Год
						,@УдалитьТипСведений
						,@СпециальныйДокумент2010года
						,@НеПередаватьДоуплаченныеСуммы
						,@ЗаполненПринятымиСведениями)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document449
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11415RRef	= @Организация
						,_Fld11420	= @Комментарий
						,_Fld11421RRef	= @Ответственный
						,_Fld11423	= @КраткийСоставДокумента
						,_Fld11418	= @ТипФормДокументов
						,_Fld27293RRef	= @КатегорияЗастрахованныхЛиц
						,_Fld27294	= @ОтчетныйПериод
						,_Fld27295RRef	= @ТипСведенийСЗВ
						,_Fld27296	= @КорректируемыйПериод
						,_Fld27297	= @НомерПачки
						,_Fld27298	= @ПринятоВПФР
						,_Fld27299RRef	= @Руководитель
						,_Fld27300RRef	= @ДолжностьРуководителя
						,_Fld22036RRef	= @ФорматФайла
						,_Fld11422RRef	= @ТерриториальныеУсловия
						,_Fld11419	= @ВидКорректировки
						,_Fld11416	= @Год
						,_Fld11417	= @УдалитьТипСведений
						,_Fld27301	= @СпециальныйДокумент2010года
						,_Fld27302	= @НеПередаватьДоуплаченныеСуммы
						,_Fld27303	= @ЗаполненПринятымиСведениями
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ТипФормДокументов", ТипФормДокументов);
					Команда.Parameters.AddWithValue("КатегорияЗастрахованныхЛиц", КатегорияЗастрахованныхЛиц.Ключ());
					Команда.Parameters.AddWithValue("ОтчетныйПериод", ОтчетныйПериод);
					Команда.Parameters.AddWithValue("ТипСведенийСЗВ", ТипСведенийСЗВ.Ключ());
					Команда.Parameters.AddWithValue("КорректируемыйПериод", КорректируемыйПериод);
					Команда.Parameters.AddWithValue("НомерПачки", НомерПачки);
					Команда.Parameters.AddWithValue("ПринятоВПФР", ПринятоВПФР);
					Команда.Parameters.AddWithValue("ФорматФайла", ФорматФайла.Ключ());
					Команда.Parameters.AddWithValue("ВидКорректировки", ВидКорректировки);
					Команда.Parameters.AddWithValue("Год", Год);
					Команда.Parameters.AddWithValue("УдалитьТипСведений", УдалитьТипСведений);
					Команда.Parameters.AddWithValue("СпециальныйДокумент2010года", СпециальныйДокумент2010года);
					Команда.Parameters.AddWithValue("НеПередаватьДоуплаченныеСуммы", НеПередаватьДоуплаченныеСуммы);
					Команда.Parameters.AddWithValue("ЗаполненПринятымиСведениями", ЗаполненПринятымиСведениями);
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
					Команда.CommandText = @"Delete _Document449
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}