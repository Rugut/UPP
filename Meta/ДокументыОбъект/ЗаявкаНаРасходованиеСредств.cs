
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
						Insert Into _Document271(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4734RRef
						,_Fld4735
						,_Fld4738RRef
						,_Fld4740RRef
						,_Fld4741
						,_Fld4742
						,_Fld4743RRef
						,_Fld4745
						,_Fld4746
						,_Fld4747RRef
						,_Fld4748RRef
						,_Fld4749RRef
						,_Fld4750RRef
						,_Fld4752RRef
						,_Fld4753
						,_Fld4754RRef
						,_Fld4755
						,_Fld4756RRef
						,_Fld4757
						,_Fld4758
						,_Fld4759
						,_Fld4760RRef)
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
						Update _Document271
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4734RRef	= @ВидОперации
						,_Fld4735	= @ДатаРасхода
						,_Fld4738RRef	= @ФормаОплаты
						,_Fld4740RRef	= @ВалютаДокумента
						,_Fld4741	= @КурсДокумента
						,_Fld4742	= @КратностьДокумента
						,_Fld4743RRef	= @ВалютаВзаиморасчетовПодотчетника
						,_Fld4745	= @ДатаПогашенияАванса
						,_Fld4746	= @СуммаДокумента
						,_Fld4747RRef	= @Сценарий
						,_Fld4748RRef	= @СтатьяОборотов
						,_Fld4749RRef	= @ЦФО
						,_Fld4750RRef	= @Контрагент
						,_Fld4752RRef	= @Состояние
						,_Fld4753	= @Описание
						,_Fld4754RRef	= @Ответственный
						,_Fld4755	= @Комментарий
						,_Fld4756RRef	= @Организация
						,_Fld4757	= @АвтоРезервированиеПоЗаявке
						,_Fld4758	= @АвтоРазмещениеПоЗаявке
						,_Fld4759	= @ВключатьВПлатежныйКалендарь
						,_Fld4760RRef	= @ВидВыдачиДенежныхСредств
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
					Команда.CommandText = @"Delete _Document271
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}