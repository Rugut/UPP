
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
	public partial class ЗаявкаНаРасходованиеСредств:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийЗаявкиНаРасходование ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаРасхода {get;set;}//Дата расхода
		///<summary>
		///Подотчетник, касса ККМ
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public object Получатель {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public object ДокументОснование {get;set;}//Документ основание
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств ФормаОплаты {get;set;}//Форма оплаты
		///<summary>
		///Р/с, касса 
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public object БанковскийСчетКасса {get;set;}//Банковский счет касса
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		///<summary>
		///Валюта, в которой подотчетник должен отчитаться за истраченные деньги
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Валюты ВалютаВзаиморасчетовПодотчетника {get;set;}//Валюта взаиморасчетов подотчетника
		[DataMember]
		[ProtoMember(19)]
		public object РасчетныйДокумент {get;set;}//Расчетный документ
		///<summary>
		///(Упр) срок погашения аванса подотчетником
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public DateTime ДатаПогашенияАванса {get;set;}//Дата погашения аванса
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьяОборотов {get;set;}//Статья оборотов
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public object Номенклатура {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		[DataMember]
		[ProtoMember(28)]
		public string/*(0)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public bool АвтоРезервированиеПоЗаявке {get;set;}//Авторезервирование денежных средств
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public bool АвтоРазмещениеПоЗаявке {get;set;}//Авторазмещение по заявке
		[DataMember]
		[ProtoMember(34)]
		public bool ВключатьВПлатежныйКалендарь {get;set;}//Включать в платежный календарь
		[DataMember]
		[ProtoMember(35)]
		public V82.Перечисления/*Ссылка*/.ВидВыдачиДенежныхСредств ВидВыдачиДенежныхСредств {get;set;}//Вид выдачи денежных средств
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
						Insert Into _Document380(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7535RRef
						,_Fld7536
						,_Fld7539RRef
						,_Fld7541RRef
						,_Fld7542
						,_Fld7543
						,_Fld7544RRef
						,_Fld7546
						,_Fld7547
						,_Fld7548RRef
						,_Fld7549RRef
						,_Fld7550RRef
						,_Fld7551RRef
						,_Fld7553RRef
						,_Fld7554
						,_Fld7555RRef
						,_Fld7556
						,_Fld7557RRef
						,_Fld7558
						,_Fld7559
						,_Fld7560
						,_Fld7561RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@ДатаРасхода
						,@ФормаОплаты
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@ВалютаВзаиморасчетовПодотчетника
						,@ДатаПогашенияАванса
						,@СуммаДокумента
						,@Сценарий
						,@СтатьяОборотов
						,@ЦФО
						,@Контрагент
						,@Состояние
						,@Описание
						,@Ответственный
						,@Комментарий
						,@Организация
						,@АвтоРезервированиеПоЗаявке
						,@АвтоРазмещениеПоЗаявке
						,@ВключатьВПлатежныйКалендарь
						,@ВидВыдачиДенежныхСредств)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document380
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7535RRef	= @ВидОперации
						,_Fld7536	= @ДатаРасхода
						,_Fld7539RRef	= @ФормаОплаты
						,_Fld7541RRef	= @ВалютаДокумента
						,_Fld7542	= @КурсДокумента
						,_Fld7543	= @КратностьДокумента
						,_Fld7544RRef	= @ВалютаВзаиморасчетовПодотчетника
						,_Fld7546	= @ДатаПогашенияАванса
						,_Fld7547	= @СуммаДокумента
						,_Fld7548RRef	= @Сценарий
						,_Fld7549RRef	= @СтатьяОборотов
						,_Fld7550RRef	= @ЦФО
						,_Fld7551RRef	= @Контрагент
						,_Fld7553RRef	= @Состояние
						,_Fld7554	= @Описание
						,_Fld7555RRef	= @Ответственный
						,_Fld7556	= @Комментарий
						,_Fld7557RRef	= @Организация
						,_Fld7558	= @АвтоРезервированиеПоЗаявке
						,_Fld7559	= @АвтоРазмещениеПоЗаявке
						,_Fld7560	= @ВключатьВПлатежныйКалендарь
						,_Fld7561RRef	= @ВидВыдачиДенежныхСредств
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ДатаРасхода", ДатаРасхода);
					Команда.Parameters.AddWithValue("ФормаОплаты", ФормаОплаты.Ключ());
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("ДатаПогашенияАванса", ДатаПогашенияАванса);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("АвтоРезервированиеПоЗаявке", АвтоРезервированиеПоЗаявке);
					Команда.Parameters.AddWithValue("АвтоРазмещениеПоЗаявке", АвтоРазмещениеПоЗаявке);
					Команда.Parameters.AddWithValue("ВключатьВПлатежныйКалендарь", ВключатьВПлатежныйКалендарь);
					Команда.Parameters.AddWithValue("ВидВыдачиДенежныхСредств", ВидВыдачиДенежныхСредств.Ключ());
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
					Команда.CommandText = @"Delete _Document380
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}