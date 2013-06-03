
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
						Insert Into _Document585(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld16855RRef
						,_Fld16856
						,_Fld16857RRef
						,_Fld16858
						,_Fld16859
						,_Fld16860RRef
						,_Fld16861
						,_Fld16862RRef
						,_Fld16863
						,_Fld16864
						,_Fld16865
						,_Fld16866RRef
						,_Fld16867RRef
						,_Fld16868RRef
						,_Fld16869RRef
						,_Fld16870
						,_Fld16871
						,_Fld16872
						,_Fld16873
						,_Fld16874
						,_Fld16875)
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
						Update _Document585
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld16855RRef	= @Организация
						,_Fld16856	= @Комментарий
						,_Fld16857RRef	= @Ответственный
						,_Fld16858	= @КраткийСоставДокумента
						,_Fld16859	= @ТипФормДокументов
						,_Fld16860RRef	= @КатегорияЗастрахованныхЛиц
						,_Fld16861	= @ОтчетныйПериод
						,_Fld16862RRef	= @ТипСведенийСЗВ
						,_Fld16863	= @КорректируемыйПериод
						,_Fld16864	= @НомерПачки
						,_Fld16865	= @ПринятоВПФР
						,_Fld16866RRef	= @Руководитель
						,_Fld16867RRef	= @ДолжностьРуководителя
						,_Fld16868RRef	= @ФорматФайла
						,_Fld16869RRef	= @ТерриториальныеУсловия
						,_Fld16870	= @ВидКорректировки
						,_Fld16871	= @Год
						,_Fld16872	= @УдалитьТипСведений
						,_Fld16873	= @СпециальныйДокумент2010года
						,_Fld16874	= @НеПередаватьДоуплаченныеСуммы
						,_Fld16875	= @ЗаполненПринятымиСведениями
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
					Команда.CommandText = @"Delete _Document585
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}