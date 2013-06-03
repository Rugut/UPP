
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
	public partial class ПланируемоеПоступлениеДенежныхСредств:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public object КассаККМ {get;set;}//Касса ККМ
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаПоступления {get;set;}//Дата поступления
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public object ДокументОснование {get;set;}//Документ основание
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств ФормаОплаты {get;set;}//Форма оплаты
		///<summary>
		///Р/с, касса 
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public object БанковскийСчетКасса {get;set;}//Банковский счет касса
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьяОборотов {get;set;}//Статья оборотов
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public bool ВключатьВПлатежныйКалендарь {get;set;}//Включать в платежный календарь
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки ВидПриемаРозничнойВыручки {get;set;}//Вид приема розничной выручки
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
						Insert Into _Document510(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12807RRef
						,_Fld12808RRef
						,_Fld12810
						,_Fld12812RRef
						,_Fld12814RRef
						,_Fld12815
						,_Fld12816
						,_Fld12817
						,_Fld12818RRef
						,_Fld12819
						,_Fld12820RRef
						,_Fld12821
						,_Fld12822RRef
						,_Fld12823RRef
						,_Fld12824RRef
						,_Fld12825
						,_Fld12826RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Контрагент
						,@ДатаПоступления
						,@ФормаОплаты
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@СуммаДокумента
						,@Состояние
						,@Описание
						,@Ответственный
						,@Комментарий
						,@Организация
						,@СтатьяОборотов
						,@ЦФО
						,@ВключатьВПлатежныйКалендарь
						,@ВидПриемаРозничнойВыручки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document510
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12807RRef	= @ВидОперации
						,_Fld12808RRef	= @Контрагент
						,_Fld12810	= @ДатаПоступления
						,_Fld12812RRef	= @ФормаОплаты
						,_Fld12814RRef	= @ВалютаДокумента
						,_Fld12815	= @КурсДокумента
						,_Fld12816	= @КратностьДокумента
						,_Fld12817	= @СуммаДокумента
						,_Fld12818RRef	= @Состояние
						,_Fld12819	= @Описание
						,_Fld12820RRef	= @Ответственный
						,_Fld12821	= @Комментарий
						,_Fld12822RRef	= @Организация
						,_Fld12823RRef	= @СтатьяОборотов
						,_Fld12824RRef	= @ЦФО
						,_Fld12825	= @ВключатьВПлатежныйКалендарь
						,_Fld12826RRef	= @ВидПриемаРозничнойВыручки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ДатаПоступления", ДатаПоступления);
					Команда.Parameters.AddWithValue("ФормаОплаты", ФормаОплаты.Ключ());
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВключатьВПлатежныйКалендарь", ВключатьВПлатежныйКалендарь);
					Команда.Parameters.AddWithValue("ВидПриемаРозничнойВыручки", ВидПриемаРозничнойВыручки.Ключ());
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
					Команда.CommandText = @"Delete _Document510
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}